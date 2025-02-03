"use client";

import React from "react";
import Image from "next/image"; 

interface ProductDescriptionProps {
  description?: string;
  image?: string; 
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description, image }) => {
  const hasContent = Boolean(description || image);

  return (
    <div className="mt-8 min-h-[200px] flex flex-col space-y-4">
      <h2 className="text-lg font-semibold">產品敘述</h2>

      {image ? (
        <div className="w-full flex justify-center">
          <Image
            src={image}
            alt="產品圖片"
            width={500} 
            height={300}
            className="rounded-lg shadow-md object-cover"
            priority
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </div>
      ) : null}

      {description ? (
        <p className="text-gray-700 leading-relaxed">{description}</p>
      ) : null}

      {!hasContent && (
        <p className="text-gray-400 italic text-center">目前沒有產品敘述。</p>
      )}
    </div>
  );
};

export default ProductDescription;
