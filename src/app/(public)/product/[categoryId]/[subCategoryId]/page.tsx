"use client";

import React from "react";
import { useParams } from "next/navigation";
import { allProducts } from "@/app/(public)/product/data/product-data";
import ProductList from "@/app/(public)/product/Productlist";

const SubCategoryPage: React.FC = () => {
  const params = useParams();
  const categoryId = params?.categoryId as string;
  const subCategoryId = params?.subCategoryId as string;

  if (!categoryId || !subCategoryId) {
    return <div className="text-center text-gray-600">找不到此分類</div>;
  }
  const subCategoryMap = allProducts[categoryId];
  if (!subCategoryMap) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }

  const products = subCategoryMap[subCategoryId];
  if (!products) {
    return <div className="text-center text-gray-600">沒有找到相關商品</div>;
  }

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default SubCategoryPage;
