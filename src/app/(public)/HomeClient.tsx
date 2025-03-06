"use client";

import React from "react";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import LoadingMoreProductList from "@/components/home/LoadingMoreProductList";
import ProductList from "@/components/home/HomeProductList";

import { getAllProducts } from "@/lib/utils/getAllProducts";
import { getProductsByCategory } from "@/lib/utils/getProductsByCategory";
import { findCategoryById } from "@/lib/utils/findCategoryById";

import { Product } from "@/types";

const HomeClient: React.FC = () => {

  // 取得全部商品
  const allProducts: Product[] = getAllProducts();

  // 利用getProductsByCategory去獲取主類別的全部商品
  const foodProducts = getProductsByCategory("food");

  // 標題部分則利用findCategoryById去獲取標題的中文名稱
  const foodCategory = findCategoryById("food");
  const foodTitle = foodCategory?.labelZh ?? "未知分類";

  //邏輯同上
  const womenProducts = getProductsByCategory("women");
  const womenCategory = findCategoryById("women");
  const womenTitle = womenCategory?.labelZh ?? "未知分類";

  const menProducts = getProductsByCategory("men");
  const menCategory = findCategoryById("men");
  const menTitle = menCategory?.labelZh ?? "未知分類";

  const beddingProducts = getProductsByCategory("bedding");
  const beddingCategory = findCategoryById("bedding");
  const beddingTitle = beddingCategory?.labelZh ?? "未知分類";

  const furnitureProducts = getProductsByCategory("furniture");
  const furnitureCategory = findCategoryById("furniture");
  const furnitureTitle = furnitureCategory?.labelZh ?? "未知分類";

  return (
    <div className="flex flex-col items-center">
      <Banner />
      <Categories />

      <LoadingMoreProductList products={allProducts} />

      <ProductList
        categoryId="food"
        categoryTitle={foodTitle}
        products={foodProducts}
      />

      <ProductList
        categoryId="women"
        categoryTitle={womenTitle}
        products={womenProducts}
      />

      <ProductList
        categoryId="men"
        categoryTitle={menTitle}
        products={menProducts}
      />

      <ProductList
        categoryId="bedding"
        categoryTitle={beddingTitle}
        products={beddingProducts}
      />

      <ProductList
        categoryId="furniture"
        categoryTitle={furnitureTitle}
        products={furnitureProducts}
      />
    </div>
  );
};

export default HomeClient;

/* 
  const HOME_CATEGORIES = ["food", "women", "men", "bedding", "furniture"];
  
    用 .map() 方式，一次渲染五個 ProductList
    {HOME_CATEGORIES.map((categoryId) => {

      // 1) 透過工具函式拿到主分類商品
      const products = getProductsByCategory(categoryId);

      // 2) 找到該分類資料，拿 labelZh 做標題
      const mainCategory = findCategoryById(categoryId);
      const titleZh = mainCategory?.labelZh ?? "未知分類";

      return (
        <ProductList
          key={categoryId}
          categoryId={categoryId}
          categoryTitle={titleZh}
          products={products}
        />
      );
    })}
*/