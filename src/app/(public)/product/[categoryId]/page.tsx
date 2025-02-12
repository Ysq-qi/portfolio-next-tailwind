"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductList from "@/app/(public)/product/Productlist";
import { allProducts, categories } from "@/data/mockData";

const CategoryPage: React.FC = () => {
  const params = useParams();
  const categoryId = params?.categoryId as string;

  if (!categoryId || !allProducts[categoryId]) {
    return <div className="text-center text-gray-600">此分類不存在</div>;
  }

  // 找到該主分類
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  const categoryTitle = mainCat?.labelZh ?? "";
  const categoryImage = mainCat?.image ?? ""; // 這裡可能是 ""，需要處理

  // Flatten 所有 subCategory 的商品
  const subcategories = Object.values(allProducts[categoryId]);
  const mergedProducts = subcategories.flat();

  // 做一層 map，將 number => string
  const finalProducts = mergedProducts.map((product) => ({
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
        categoryImage={categoryImage}
        categoryTitle={categoryTitle}
      />
    </main>
  );
};

export default CategoryPage;
