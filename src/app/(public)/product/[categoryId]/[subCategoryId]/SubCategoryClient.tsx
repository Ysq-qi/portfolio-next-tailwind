"use client";

import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { useFilterContext } from "@/context/FilterContext";
import { categories } from "@/data/mockData";
import { getProductsBySubCategory } from "@/lib/utils/getProductsBySubCategory";
import { filterProducts } from "@/lib/utils/filterProducts";
import { Product } from "@/types";

const SubCategoryClient: React.FC = () => {
  const { categoryId, subCategoryId } = useParams() as { categoryId: string; subCategoryId: string; };

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  // 撈出對應的子分類ID
  const mainCategory = categories.find((c) => c.categoryId === categoryId);
  const subCategory = mainCategory?.subCategories.find(
    (sub) => sub.labelEn === subCategoryId
  );

  // 使用getProductsBySubCategory去獲取子分類的全部商品
  const mergedProducts: Product[] = useMemo(() => {
    return getProductsBySubCategory(categoryId, subCategoryId);
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

  // 若找不到子分類 給錯誤處理
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
