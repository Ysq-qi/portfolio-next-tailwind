"use client";

import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";

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

const SubCategoryPage: React.FC = () => {
  const { categoryId, subCategoryId } = useParams() as { categoryId: string; subCategoryId: string };

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  const mainCat = categories.find((c) => c.categoryId === categoryId);
  const subCategory = mainCat?.subCategories.find((sub) => sub.labelEn === subCategoryId);
  const subCategoryMap = allProducts[categoryId];
  const productsRaw = subCategoryMap?.[subCategoryId] || [];

  const mergedProducts: Product[] = productsRaw.map((pd) => ({
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
    mergedProducts,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    selectedMinPrice,
    selectedMaxPrice,
  ]);

  if (!categoryId || !subCategoryId) {
    return <div className="text-center text-gray-600">找不到此分類</div>;
  }
  if (!mainCat) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }
  if (!subCategory) {
    return <div className="text-center text-gray-600">沒有此子分類</div>;
  }
  if (!subCategoryMap) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }
  if (!productsRaw.length) {
    return <div className="text-center text-gray-600">沒有找到相關商品</div>;
  }

  return (
    <main>
      <ProductList
        products={finalProducts}
        categoryImage={subCategory.image}
        categoryTitle={subCategory.labelZh}
      />
    </main>
  );
};

export default SubCategoryPage;
