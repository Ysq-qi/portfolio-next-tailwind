"use client";

import React from "react";
import Image from "next/image";

interface RelatedProductsProps {
  relatedProducts: { image: string; title: string; price: number }[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ relatedProducts }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">相關商品</h2>
      <div className="grid grid-cols-3 gap-4">
        {relatedProducts.map((product, index) => (
          <div key={index} className="border rounded p-2">
            <Image src={product.image} alt={product.title} width={120} height={120} />
            <p className="text-sm">{product.title}</p>
            <p className="text-red-500">NT${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
