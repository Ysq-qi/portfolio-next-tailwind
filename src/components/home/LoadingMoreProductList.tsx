"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/components/ui/feedback/loading";
import { HomeAllProductTooltip } from "@/components/ui/overlay/tooltip-list";
import ProductCard from "@/components/product/common/ProductCard";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";
import ActionButton from "@/components/ui/navigation/actionbutton";
import { Product } from "@/types";

interface LoadingMoreProductListProps {
  products: Product[];
}

const LoadingMoreProductList: React.FC<LoadingMoreProductListProps> = ({ products }) => {
  // 初始顯示數量 12
  const [displayCount, setDisplayCount] = useState(12);

  // 初始骨架載入：500ms
  const [isInitLoading, setIsInitLoading] = useState(true);

  // 是否正在「按下加載更多」(顯示 loading)
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  // 初始骨架載入
  useEffect(() => {
    const timer = setTimeout(() => setIsInitLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // 目前要顯示的商品 取前 displayCount 筆
  const displayedProducts = products.slice(0, displayCount);

  // 是否還有更多商品
  const hasMore = products.length > displayCount;

  // 點擊「加載更多」按鈕 加載下一批 12 筆
  const handleLoadMore = () => {
    setIsMoreLoading(true);

    // 模擬 1000ms loading
    setTimeout(() => {
      setDisplayCount((prev) => prev + 12);
      setIsMoreLoading(false);
    }, 1000);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-4 mb-20">
      <HomeAllProductTooltip>
        <div className="text-xl font-semibold pb-6">全部商品</div>
      </HomeAllProductTooltip>

      {/* 產品列表 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {displayedProducts.map((product, index) =>
          isInitLoading ? (
            <ProductCardSkeleton key={index} variant="home" />
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
              isConfigurable={product.isConfigurable}
              variants={product.variants}
              variant="home"
            />
          )
        )}
      </div>

      {/* 加載中時顯示骨架屏 */}
      <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4 ${isMoreLoading ? "mt-4" : ""}`}>
        {isMoreLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <ProductCardSkeleton key={`loading-${index}`} variant="home" />
          ))}
      </div>

      {/* 若還有更多商品，則顯示「加載更多」按鈕 */}
      {hasMore && (
        <div className="flex flex-col items-center py-16 space-y-4">
          {isMoreLoading && (
            <div className="flex items-center">
              <Loading className="w-6 h-6" />
              <span className="ml-2 text-sm text-gray-500">加載中...</span>
            </div>
          )}

          {!isMoreLoading && (
            <ActionButton type="loadmore" onClick={handleLoadMore} />
          )}
        </div>
      )}
    </section>
  );
};

export default LoadingMoreProductList;
