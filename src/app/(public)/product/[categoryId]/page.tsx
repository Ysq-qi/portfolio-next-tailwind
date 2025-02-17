"use client";

import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";

// 日後放到 types 資料夾內
interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  shippingMethods?: string[];
  paymentMethods?: string[];
}

const CategoryPage: React.FC = () => {
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

  const categoryExists = categoryId && allProducts[categoryId];
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  const categoryTitle = mainCat?.labelZh ?? "";
  const categoryImage = mainCat?.image ?? "";

  const mergedProducts: Product[] = useMemo(() => {
    if (!categoryExists) return [];
    
    return Object.values(allProducts[categoryId] || {}).flat().map((pd) => ({
      id: pd.id,
      image: Array.isArray(pd.image) ? pd.image[0] : pd.image || "",
      title: pd.title,
      price: pd.price.toString(),
      isNew: pd.isNew,
      isSoldOut: pd.isSoldOut,
      isHotSale: pd.isHotSale,
      shippingMethods: pd.shippingMethods ?? [],
      paymentMethods: pd.paymentMethods ?? [],
    }));
  }, [categoryExists, categoryId]);

  useEffect(() => {
    if (mergedProducts.length > 0) {
      const prices = mergedProducts.map((p) => parseInt(p.price, 10));
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setGlobalMinPrice(min);
      setGlobalMaxPrice(max);
    } else {
      setGlobalMinPrice(null);
      setGlobalMaxPrice(null);
    }
  }, [mergedProducts, setGlobalMinPrice, setGlobalMaxPrice]);

  const finalProducts = useMemo(() => {
    if (!categoryExists) return [];

    let filtered = filterProducts(mergedProducts, selectedPaymentMethods, selectedShippingMethods);

    if (selectedMinPrice || selectedMaxPrice) {
      const min = selectedMinPrice ? parseInt(selectedMinPrice, 10) : 0;
      const max = selectedMaxPrice ? parseInt(selectedMaxPrice, 10) : Infinity;
      filtered = filtered.filter((p) => {
        const priceVal = parseInt(p.price, 10) || 0;
        return priceVal >= min && priceVal <= max;
      });
    }

    switch (selectedSort) {
      case "price-asc":
        filtered = [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }

    return filtered;
  }, [
    categoryExists,
    mergedProducts,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    selectedMinPrice,
    selectedMaxPrice,
  ]);

  if (!categoryExists) {
    return <div className="text-center text-gray-600">此分類不存在</div>;
  }

  return (
    <main>
      <ProductList products={finalProducts} categoryImage={categoryImage} categoryTitle={categoryTitle} />
    </main>
  );
};

export default CategoryPage;
