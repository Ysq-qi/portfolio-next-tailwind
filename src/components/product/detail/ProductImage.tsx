"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/navigation/arrow-button";

interface ProductImageProps {
  images: string[];
}

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const displayIndex = hoverIndex ?? selectedIndex;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setHoverIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setHoverIndex(null);
  };

  const handleMouseEnter = (idx: number) => {
    setHoverIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleThumbClick = (idx: number) => {
    setSelectedIndex(idx);
    setHoverIndex(null);
  };

  return (
    <>
      <DesktopProductImage 
        images={images} 
        displayIndex={displayIndex} 
        handlePrev={handlePrev} 
        handleNext={handleNext} 
        handleThumbClick={handleThumbClick} 
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave} 
        selectedIndex={selectedIndex} 
      />
      <MobileProductImage 
        images={images} 
        displayIndex={displayIndex} 
        handlePrev={handlePrev} 
        handleNext={handleNext} 
        handleThumbClick={handleThumbClick} 
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave} 
        selectedIndex={selectedIndex} 
      />
    </>
  );
};

const DesktopProductImage: React.FC<{
  images: string[];
  displayIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  handleThumbClick: (idx: number) => void;
  handleMouseEnter: (idx: number) => void;
  handleMouseLeave: () => void;
  selectedIndex: number;
}> = ({
  images,
  displayIndex,
  handlePrev,
  handleNext,
  handleThumbClick,
  handleMouseEnter,
  handleMouseLeave,
  selectedIndex,
}) => (
  <div className="flex-col items-center w-[440px] hidden sm:flex">
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <Image
        src={images[displayIndex]}
        alt={`商品圖片 ${displayIndex + 1}`}
        width={400}
        height={400}
        className="border"
      />

      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <ArrowButton direction="left" onClick={handlePrev} />
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <ArrowButton direction="right" onClick={handleNext} />
      </div>
    </div>

    <div className="grid grid-cols-5 gap-2 mt-6">
      {images.map((img, idx) => {
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
              className={isSelected ? "border-2 border-black rounded" : "border rounded"}
            />
          </div>
        );
      })}
    </div>
  </div>
);

const MobileProductImage: React.FC<{
  images: string[];
  displayIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  handleThumbClick: (idx: number) => void;
  handleMouseEnter: (idx: number) => void;
  handleMouseLeave: () => void;
  selectedIndex: number;
}> = ({
  images,
  displayIndex,
  handlePrev,
  handleNext,
  handleThumbClick,
  handleMouseEnter,
  handleMouseLeave,
  selectedIndex,
}) => (
  <div className="flex flex-col w-full items-center mx-auto sm:hidden ">
    <div className="relative w-full h-[380px] flex items-center justify-center">
      <Image
        src={images[displayIndex]}
        alt={`商品圖片 ${displayIndex + 1}`}
        width={380}
        height={380}
        className="border"
      />

      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <ArrowButton direction="left" onClick={handlePrev} />
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <ArrowButton direction="right" onClick={handleNext} />
      </div>
    </div>

    <div className="grid grid-cols-5 gap-2 mt-6">
      {images.map((img, idx) => {
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
              className={isSelected ? "border-2 border-black rounded" : "border rounded"}
            />
          </div>
        );
      })}
    </div>
  </div>
);

export default ProductImage;
