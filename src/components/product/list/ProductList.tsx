"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types";
import Loading from "@/components/ui/feedback/loading";
import CategoryBanner from "@/components/product/list/CategoryBanner";
import SortDropdown from "@/components/product/list/SortDropdown";
import NoFilteredProducts from "@/components/product/list/NoFilteredProducts";
import ProductCard from "@/components/product/common/ProductCard";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";

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

  const hasNoProducts = products.length === 0;

  return (
    <>
      <DesktopProductList
        products={products}
        categoryImage={categoryImage}
        categoryTitle={categoryTitle}
        isLoading={isLoading}
        isFiltering={isFiltering}
        hasNoProducts={hasNoProducts}
      />
      <MobileProductList
        products={products}
        categoryImage={categoryImage}
        categoryTitle={categoryTitle}
        isLoading={isLoading}
        isFiltering={isFiltering}
        hasNoProducts={hasNoProducts}
      />
    </>
  );
};

// 電腦版佈局
const DesktopProductList: React.FC<
  ProductListProps & {
    isLoading: boolean;
    isFiltering: boolean;
    hasNoProducts: boolean;
  }
> = ({ products, categoryImage = "", categoryTitle = "", isLoading, isFiltering, hasNoProducts }) => (
  <section className="w-[890px] ml-auto mx-2 my-6 hidden sm:block">
    <div className="mb-6">
      {categoryImage && <CategoryBanner image={categoryImage} title={categoryTitle} />}
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
              <ProductCardSkeleton key={index} variant="productList" />
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
                variant="productList"
              />
            )
          )}
        </div>
      </>
    )}
  </section>
);

// 手機版佈局
const MobileProductList: React.FC<
  ProductListProps & {
    isLoading: boolean;
    isFiltering: boolean;
    hasNoProducts: boolean;
  }
> = ({ products, categoryImage = "", categoryTitle = "", isLoading, isFiltering, hasNoProducts }) => (
  <section className="w-[95%] my-6 mx-auto sm:hidden">
    <div className="mb-6">
      {categoryImage && <CategoryBanner image={categoryImage} title={categoryTitle} />}
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

        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) =>
            isLoading ? (
              <ProductCardSkeleton key={index} variant="productListMobile" />
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
                variant="productListMobile"
              />
            )
          )}
        </div>
      </>
    )}
  </section>
);

export default ProductList;
