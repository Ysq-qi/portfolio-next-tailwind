"use client";

import React, { useState, useEffect } from "react";
import CategoryBanner from "@/components/product/list/CategoryBanner";
import ProductCard from "@/components/ui/data-display/product-card";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";
import SortDropdown from "@/components/product/list/SortDropdown";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
}

interface ProductListProps {
  products: Product[];
  categoryImage?: string;
  categoryTitle?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  categoryImage = "",  
  categoryTitle = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-[890px] ml-auto my-6 mx-2">
      <div className="mb-6">

        {categoryImage ? (
          <CategoryBanner image={categoryImage} title={categoryTitle} />
        ) : (
          null 
        )}
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="text-sm text-gray-700 font-medium ml-2">
          共 {products.length} 項商品
        </div>
        <SortDropdown />
      </div>
      {/* 商品列表 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) =>
          isLoading ? (
            <ProductCardSkeleton key={index} variant="productList" />
          ) : (
            <ProductCard
              key={index}
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
    </section>
  );
};

export default ProductList;
