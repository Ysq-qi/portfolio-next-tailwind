"use client";

import * as React from "react";
import { ContentSlider } from "@/components/ui/navigation/content-slider";
import ProductCard from "@/components/ui/data-display/product-card";

interface RelatedProductsProps {
  relatedProducts: { image: string; title: string; price: number }[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ relatedProducts }) => {
  return (
    <div className="min-h-[200px] flex flex-col space-y-8">
      <h2 className="text-lg font-semibold">商品推薦</h2>

      {/* 手機版 */}
      <section className="sm:hidden w-full h-[220px] flex items-center bg-white">
        <ContentSlider itemWidth={160} pageSizeDesktop={4} pageSizeMobile={2}>
          {relatedProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={`NT$${product.price}`}
              variant="recommend"
            />
          ))}
        </ContentSlider>
      </section>

      {/* 電腦版 */}
      <section className="hidden sm:flex w-[880px] h-[250px] mx-auto mt-6 mb-6 items-center justify-center">
        <ContentSlider itemWidth={130} pageSizeDesktop={6} pageSizeMobile={2}>
          {relatedProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={`NT$${product.price}`}
              variant="recommend"
            />
          ))}
        </ContentSlider>
      </section>
    </div>
  );
};

export default RelatedProducts;
