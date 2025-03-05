"use client";

import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { useFilterContext } from "@/context/FilterContext";
import { categories } from "@/data/mockData";
import { getProductsByCategory } from "@/lib/utils/getProductsByCategory";
import { filterProducts } from "@/lib/utils/filterProducts";
import { Product } from "@/types";

const CategoryClient: React.FC = () => {
  const { categoryId } = useParams() as { categoryId: string };

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  // 撈出對應的主分類ID
  const mainCategory = categories.find((c) => c.categoryId === categoryId);
  const categoryTitle = mainCategory?.labelZh ?? "";
  const categoryImage = mainCategory?.image ?? "";

  // 使用getProductsByCategory去獲取主分類的全部商品
  const mergedProducts: Product[] = useMemo(() => {
    if (!categoryId) return [];
    return getProductsByCategory(categoryId); 
  }, [categoryId]);

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
