"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";

// 日後放到types資料夾內
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
  const { selectedPaymentMethods, selectedShippingMethods } = useFilterContext();

  if (!categoryId || !subCategoryId) {
    return <div className="text-center text-gray-600">找不到此分類</div>;
  }

  // 驗證主分類
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  if (!mainCat) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }

  // 驗證子分類
  const subCategory = mainCat.subCategories.find((sub) => sub.labelEn === subCategoryId);
  if (!subCategory) {
    return <div className="text-center text-gray-600">沒有此子分類</div>;
  }

  // 取出該子分類商品
  const subCategoryMap = allProducts[categoryId];
  if (!subCategoryMap) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }
  const productsRaw = subCategoryMap[subCategoryId];
  if (!productsRaw) {
    return <div className="text-center text-gray-600">沒有找到相關商品</div>;
  }

  // map
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

  // 付款/運送篩選
  const finalProducts = useMemo(() => {
    return filterProducts(mergedProducts, selectedPaymentMethods, selectedShippingMethods);
  }, [mergedProducts, selectedPaymentMethods, selectedShippingMethods]);

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
