"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/common/ProductCard";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";
import ActionButton from "@/components/ui/navigation/actionbutton";
import { Product} from "@/types";

interface ProductListProps {
  products: Product[];
  categoryId: string;
  categoryTitle: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, categoryId, categoryTitle }) => {
  const [isLoading, setIsLoading] = useState(true);

  // 模擬500毫秒骨架loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);

    // 組件卸載時清理計時器 防止記憶體洩漏
    return () => clearTimeout(timer);
  }, []);

  // 只顯示前6筆 若商品超過6筆，顯示「查看更多」按鈕
  const displayedProducts = products.slice(0, 6);
  const hasMore = products.length > 6;

  return (
    <section className="w-full max-w-[1200px] mx-auto my-4">
      <div className="text-xl font-semibold pb-6">{categoryTitle}</div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {displayedProducts.map((product, index) =>
          isLoading ? (
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

      {/* 若商品數量 >6 則顯示「查看更多」按鈕 */}
      {hasMore && (
        <div className="flex justify-center py-16">
          <Link href={`/product/${categoryId}`}>
            <ActionButton type="default" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductList;
