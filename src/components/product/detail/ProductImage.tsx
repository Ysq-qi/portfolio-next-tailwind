"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/navigation/arrow-button";

interface RelatedProduct {
  image: string;
  title: string;
  price?: number;
}

interface ProductImageProps {
  /** 主商品圖片路徑 */
  image: string;
  /** 相關商品 (含圖片與 title) */
  relatedProducts: RelatedProduct[];
}

/**
 * ProductImage
 * -----------------------------------------------------------------------------
 * 1) 不重覆圖片：若 related 中有和主圖相同的路徑，過濾掉。
 * 2) 主圖可用左/右箭頭切換 (selectedIndex)。
 * 3) 縮圖以 grid 顯示，可 hover 顯示暫時圖、點擊則真正選中(加黑框)。
 * 4) 最多顯示 20 張 (主圖 + 19張相關)。
 * 5) 維持 w-[440px]，箭頭絕對定位在大圖上方，不影響排版。
 */
const ProductImage: React.FC<ProductImageProps> = ({ image, relatedProducts }) => {
  // 1) 過濾重覆圖片 (若 related 內有和主圖相同的 image，就排除)
  const filteredRelated = relatedProducts.filter((p) => p.image !== image);

  // 2) 限制最多 19 張 + 1 張主圖 => 共 20 張
  const limitedRelated = filteredRelated.slice(0, 19);

  // 3) 結合主圖 + (過濾後)相關圖
  const allImages = [
    { image, title: "主商品" },
    ...limitedRelated,
  ];

  // state: 哪張圖被「真正選中」(點擊)
  const [selectedIndex, setSelectedIndex] = useState(0);

  // state: 滑鼠 hover 的縮圖 index，null 表示目前沒 hover
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  /** 最終主圖顯示哪一張 => 如果 hoverIndex != null，就用 hoverIndex；否則用 selectedIndex */
  const displayIndex = hoverIndex ?? selectedIndex;

  /** 按左箭頭 => selectedIndex - 1 mod length */
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setHoverIndex(null); // 取消 hover
  };

  /** 按右箭頭 => selectedIndex + 1 mod length */
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
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
          src={allImages[displayIndex].image}
          alt={allImages[displayIndex].title}
          width={400}
          height={400}
          className="border"
        />

        {/* 左箭頭 (絕對定位) */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <ArrowButton direction="left" onClick={handlePrev} />
        </div>

        {/* 右箭頭 (絕對定位) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>

      {/* 縮圖網格 => 5欄 x 最多4行 = 20張 */}
      <div className="grid grid-cols-5 gap-2 mt-6">
        {allImages.map((prod, idx) => {
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
                src={prod.image}
                alt={prod.title}
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
