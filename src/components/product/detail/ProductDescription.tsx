"use client";

import React from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">產品敘述</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProductDescription;
