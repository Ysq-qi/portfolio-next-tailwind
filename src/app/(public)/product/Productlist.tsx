"use client";

import React, { useState, useEffect } from "react";
import CategoryBanner from "@/components/product/list/CategoryBanner";
import ProductCard from "@/components/ui/data-display/product-card";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";
import SortDropdown from "@/components/product/list/SortDropdown";

interface Product {
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  // 模擬加載效果
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-[890px] ml-auto my-6 mx-2">
      <div className="mb-6">
        <CategoryBanner image="/images/163020.jfif" title="美容保養" />
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="text-sm text-gray-700 font-medium ml-2">
          共 {products.length} 項商品
        </div>
        <SortDropdown />
      </div>
      {/* 商品列表 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading
          ? products.map((_, index) => (
              <ProductCardSkeleton key={index} variant="productList" />
            ))
          : products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                isNew={product.isNew}
                variant="productList"
              />
            ))}
      </div>
    </section>
  );
};

export default ProductList;
