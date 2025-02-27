"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";
import { Product } from "@/types";

const CategoryClient: React.FC = () => {
  const { categoryId } = useParams() as { categoryId: string };

  // 確保 useParams() 已經取得 categoryId
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (categoryId) {
      setReady(true);
    }
  }, [categoryId]);

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  const mainCategory = categories.find((c) => c.categoryId === categoryId);
  const categoryTitle = mainCategory?.labelZh ?? "";
  const categoryImage = mainCategory?.image ?? "";

  const mergedProducts: Product[] = useMemo(() => {
    if (!categoryId || !(categoryId in allProducts)) return [];

    return Object.values(allProducts[categoryId] || {})
      .flat()
      .map((pd) => ({
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
  }, [categoryId]);

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

  const finalProducts = useMemo(() => {
    let filtered = filterProducts(
      mergedProducts,
      selectedPaymentMethods,
      selectedShippingMethods
    );

    if (selectedMinPrice !== null || selectedMaxPrice !== null) {
      const min = selectedMinPrice ? Number(selectedMinPrice) : 0;
      const max = selectedMaxPrice ? Number(selectedMaxPrice) : Infinity;

      filtered = filtered.filter((p) => {
        const numericPrice = Number(p.price);
        return numericPrice >= min && numericPrice <= max;
      });
    }

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

  if (!ready) {
    return <p className="text-center text-gray-600">載入中...</p>;
  }

  if (!mainCategory) {
    return <div className="text-center text-gray-600">此分類不存在</div>;
  }

  return (
    <main>
      <ProductList
        products={finalProducts}
        categoryImage={categoryImage}
        categoryTitle={categoryTitle}
      />
    </main>
  );
};

export default CategoryClient;
