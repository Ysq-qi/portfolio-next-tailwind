// /app/product/[categoryId]/page.tsx

"use client";

import React from "react";
import { useParams } from "next/navigation";
import { allProducts } from "@/app/product/data/product-data";
import ProductList from "@/app/product/Productlist";
import { categories } from "@/app/product/data/categories";

const CategoryPage: React.FC = () => {
  const params = useParams();
  const categoryId = params?.categoryId as string;

  // 找不到 or 不存在
  if (!categoryId || !allProducts[categoryId]) {
    return <div className="text-center text-gray-600">此分類不存在</div>;
  }

  // 取得該主分類中文名稱
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  const categoryNameZh = mainCat ? mainCat.titleZh : categoryId;

  // 合併所有 subCategory => flatten
  const subcategories = Object.values(allProducts[categoryId]); // array of Product[]
  const mergedProducts = subcategories.flat(); // merge them all

  return (
    <main>
      <ProductList products={mergedProducts} />
    </main>
  );
};

export default CategoryPage;
