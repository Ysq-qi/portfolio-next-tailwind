"use client";

import React, { useState, useEffect } from "react";
import CategoryBanner from "@/components/product/list/CategoryBanner";
import ProductCard from "@/components/product/common/ProductCard";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";
import SortDropdown from "@/components/product/list/SortDropdown";
import NoFilteredProducts from "@/components/product/list/NoFilteredProducts";
import Loading from "@/components/ui/feedback/loading";
import { Product } from "@/types";

export interface ProductListProps {
  products: Product[];
  categoryImage?: string;
  categoryTitle?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  categoryImage = "",
  categoryTitle = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  // 直接利用屏幕大小去判定初始variant值
  const [variant, setVariant] = useState<"productListMobile" | "productList">(
  () => (typeof window !== "undefined" && window.innerWidth < 1024 ? "productListMobile" : "productList")
);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      setIsFiltering(true);
      const timer = setTimeout(() => setIsFiltering(false), 300);
      return () => clearTimeout(timer);
    }
  }, [products]);

  // 監聽視窗變化時才進行variant切換
  useEffect(() => {
  const handleResize = () => {
    setVariant(window.innerWidth < 1024 ? "productListMobile" : "productList");
  };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasNoProducts = products.length === 0;

  return (
    // 預設手機版 w-[95%] my-6 mx-auto 當尺寸大於1024px(lg)時 w-[890px] ml-auto mx-2
    <section className="w-[95%] my-6 mx-auto lg:w-[890px] lg:ml-auto lg:mx-2">

      <div className="mb-6">
        {categoryImage && (
          <CategoryBanner image={categoryImage} title={categoryTitle} />
        )}
      </div>

      {hasNoProducts ? (
        isFiltering ? (
          <Loading />
        ) : (
          <div className="flex items-start justify-center w-full h-[600px]">
            <NoFilteredProducts />
          </div>
        )
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-700 font-medium ml-2">
              共 {products.length} 項商品
            </div>
            <SortDropdown />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) =>
              isLoading ? (
                <ProductCardSkeleton key={index} variant={variant} />
              ) : (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  isNew={product.isNew}
                  isSoldOut={product.isSoldOut}
                  isHotSale={product.isHotSale}
                  variant={variant}
                />
              )
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductList;
