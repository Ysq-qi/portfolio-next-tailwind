"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/navigation/arrow-button";

interface ProductImageProps {
  images: string[];
}

/**
 * ProductImage
 * --------------------------------------------------------------------------
 * 1) 只顯示 `images` 陣列的圖片，不包含 `relatedProducts`。
 * 2) 允許左右箭頭切換圖片 (selectedIndex)。
 * 3) 縮圖以 grid 顯示，可 hover 顯示暫時圖、點擊則真正選中(加黑框)。
 * 4) 最多顯示 20 張 (主圖 + 19 張)。
 */
const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  // 預設選中的圖片索引
  const [selectedIndex, setSelectedIndex] = useState(0);
  // 滑鼠 hover 的縮圖 index，null 表示目前沒 hover
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  /** 最終主圖顯示哪一張 => 如果 hoverIndex != null，就用 hoverIndex；否則用 selectedIndex */
  const displayIndex = hoverIndex ?? selectedIndex;

  /** 按左箭頭 => selectedIndex - 1 mod length */
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setHoverIndex(null); // 取消 hover
  };

  /** 按右箭頭 => selectedIndex + 1 mod length */
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setHoverIndex(null);
  };

  /** hover => 暫時顯示該圖 */
  const handleMouseEnter = (idx: number) => {
    setHoverIndex(idx);
  };
  /** 離開 => 恢復 selectedIndex */
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  /** 點擊 => 真正選中該圖(黑框) */
  const handleThumbClick = (idx: number) => {
    setSelectedIndex(idx);
    setHoverIndex(null);
  };

  return (
    <div className="flex flex-col items-center w-[440px]">
      {/* 主圖區塊 */}
      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        {/* 大圖 */}
        <Image
          src={images[displayIndex]}
          alt={`商品圖片 ${displayIndex + 1}`}
          width={400}
          height={400}
          className="border"
        />

        {/* 左箭頭 */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <ArrowButton direction="left" onClick={handlePrev} />
        </div>

        {/* 右箭頭 */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>

      {/* 縮圖網格 */}
      <div className="grid grid-cols-5 gap-2 mt-6">
        {images.map((img, idx) => {
          // 若 idx === selectedIndex => 被選中 => 加黑框
          const isSelected = idx === selectedIndex;
          return (
            <div
              key={idx}
              className="cursor-pointer"
              onClick={() => handleThumbClick(idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={img}
                alt={`商品縮圖 ${idx + 1}`}
                width={67}
                height={67}
                // 選中 => border-2 border-black；否則 border rounded
                className={
                  isSelected
                    ? "border-2 border-black rounded"
                    : "border rounded"
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
