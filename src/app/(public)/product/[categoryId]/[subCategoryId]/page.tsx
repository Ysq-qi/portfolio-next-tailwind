"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductList from "@/app/(public)/product/Productlist";
import { allProducts, categories } from "@/data/mockData"; 

const SubCategoryPage: React.FC = () => {
  const params = useParams();
  const categoryId = params?.categoryId as string;
  const subCategoryId = params?.subCategoryId as string;

  if (!categoryId || !subCategoryId) {
    return <div className="text-center text-gray-600">找不到此分類</div>;
  }

  // 先找主分類
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  if (!mainCat) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }

  // 再找子分類
  const subCategory = mainCat.subCategories.find((sub) => sub.labelEn === subCategoryId);
  if (!subCategory) {
    return <div className="text-center text-gray-600">沒有此子分類</div>;
  }

  const subCategoryMap = allProducts[categoryId];
  if (!subCategoryMap) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }

  const products = subCategoryMap[subCategoryId];
  if (!products) {
    return <div className="text-center text-gray-600">沒有找到相關商品</div>;
  }

  const finalProducts = products.map((product) => ({
    id: product.id,
    image: Array.isArray(product.image) ? product.image[0] : product.image || "",
    title: product.title,
    price: product.price.toString(),
    isNew: product.isNew,
    isSoldOut: product.isSoldOut,
    isHotSale: product.isHotSale,
  }));

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
