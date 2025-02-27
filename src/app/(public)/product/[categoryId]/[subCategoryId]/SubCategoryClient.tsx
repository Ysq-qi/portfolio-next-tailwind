"use client";

import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";
import { Product } from "@/types";

const SubCategoryClient: React.FC = () => {
  // 只能在客戶端使用 useParams()
  const { categoryId, subCategoryId } = useParams() as {
    categoryId: string;
    subCategoryId: string;
  };

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  // 撈出對應的子分類
  const mainCategory = categories.find((c) => c.categoryId === categoryId);
  const subCategory = mainCategory?.subCategories.find(
    (sub) => sub.labelEn === subCategoryId
  );

  // 模擬撈取商品資料
  const mergedProducts: Product[] = useMemo(() => {
    if (!allProducts[categoryId] || !allProducts[categoryId][subCategoryId]) {
      return [];
    }
    const productsRaw = allProducts[categoryId][subCategoryId] || [];

    return productsRaw.map((pd) => ({
      // 基礎屬性
      id: pd.id,
      image: Array.isArray(pd.image) ? pd.image[0] : pd.image || "",
      title: pd.title,
      price: pd.price,

      // 商品卡片
      isNew: pd.isNew,
      isSoldOut: pd.isSoldOut,
      isHotSale: pd.isHotSale,

      // 商品顏色/尺寸選擇按紐
      isConfigurable: pd.isConfigurable ?? false,
      variants: pd.variants ?? [],

      // 商品篩選
      shippingMethods: pd.shippingMethods ?? [],
      paymentMethods: pd.paymentMethods ?? [],
    }));
  }, [categoryId, subCategoryId]);

  // 根據商品價格動態設定 FilterContext 內的全域最小/最大價
  useEffect(() => {
    if (mergedProducts.length > 0) {
      const prices = mergedProducts.map((p) => Number(p.price));
      setGlobalMinPrice(Math.min(...prices));
      setGlobalMaxPrice(Math.max(...prices));
    } else {
      setGlobalMinPrice(null);
      setGlobalMaxPrice(null);
    }
  }, [mergedProducts, setGlobalMinPrice, setGlobalMaxPrice]);

  // 最終篩選後的商品
  const finalProducts = useMemo(() => {
    let filtered = filterProducts(
      mergedProducts,
      selectedPaymentMethods,
      selectedShippingMethods
    );

    // 價格篩選
    if (selectedMinPrice !== null || selectedMaxPrice !== null) {
      const min = selectedMinPrice ? Number(selectedMinPrice) : 0;
      const max = selectedMaxPrice ? Number(selectedMaxPrice) : Infinity;
      
      filtered = filtered.filter((p) => {
        const numericPrice = Number(p.price);
        return numericPrice >= min && numericPrice <= max;
      });
    }

    // 排序
    if (selectedSort === "price-asc") {
      filtered = filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (selectedSort === "price-desc") {
      filtered = filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;
  }, [
    mergedProducts,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    selectedMinPrice,
    selectedMaxPrice,
  ]);

  // 如果壓根沒有此子分類 → 給個提示
  if (!subCategory) {
    return <div className="text-center text-gray-600">此子分類不存在</div>;
  }

  // 正常渲染
  return (
    <main>
      <ProductList
        products={finalProducts}
        categoryImage={subCategory?.image}
        categoryTitle={subCategory?.labelZh}
      />
    </main>
  );
};

export default SubCategoryClient;
