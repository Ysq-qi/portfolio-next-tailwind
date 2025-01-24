"use client";

import React from "react";
import Image from "next/image";

interface CategoryBannerProps {
  image: string;
  title: string;
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ image, title }) => {
  return (
    <div className="relative w-[890px] h-[410px] flex items-center justify-center bg-gray-100 overflow-hidden rounded-lg">
      {/* 圖片區域 */}
      <Image
        src={image}
        alt={title}
        width={890}
        height={410}
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default CategoryBanner;
