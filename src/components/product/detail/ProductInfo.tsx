"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/form/button";

interface ProductVariant {
  color: string;
  image: string[];
  sizes: { size: string; stock: number }[];
}

interface ProductInfoProps {
  title: string;
  price: number;
  isSoldOut?: boolean;
  isConfigurable: boolean;
  variants?: ProductVariant[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  isSoldOut = false,
  isConfigurable,
  variants,
}) => {
  const [quantity, setQuantity] = useState(1);

  // 選擇的 color, size （只有在 isConfigurable=true 時有意義）
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // 初始化：當組件載入時，選擇第一個顏色 & 尺寸
  useEffect(() => {
    if (isConfigurable && variants && variants.length > 0) {
      setSelectedColor(variants[0].color);
      setSelectedSize(variants[0].sizes[0]?.size ?? null);
    }
  }, [isConfigurable, variants]);

  // 當顏色變更時，尺寸應該自動切換到該顏色的第一個尺寸
  useEffect(() => {
    if (!isConfigurable || !variants || !selectedColor) return;

    const foundVariant = variants.find((v) => v.color === selectedColor);
    if (foundVariant) {
      setSelectedSize(foundVariant.sizes[0]?.size ?? null);
    } else {
      setSelectedSize(null);
    }
  }, [selectedColor, isConfigurable, variants]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <>
      <DesktopProductInfo
        title={title}
        price={price}
        isSoldOut={isSoldOut}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isConfigurable={isConfigurable}
        variants={variants}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <MobileProductInfo
        title={title}
        price={price}
        isSoldOut={isSoldOut}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isConfigurable={isConfigurable}
        variants={variants}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </>
  );
};

// 電腦版
const DesktopProductInfo: React.FC<{
  title: string;
  price: number;
  quantity: number;
  isSoldOut: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;

  isConfigurable: boolean;
  variants?: ProductVariant[];
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({
  title,
  price,
  quantity,
  isSoldOut,
  increaseQuantity,
  decreaseQuantity,
  isConfigurable,
  variants,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="hidden sm:flex flex-col space-y-4 w-[445px]">
      <h1 className="text-2xl font-semibold pt-4">{title}</h1>
      <p className="text-[#7f0019] text-2xl font-black pt-4">NT${price}</p>

      <div className="flex flex-col pt-16 mb-[-50px]">
        {isConfigurable && variants && (
            <>
              <ColorSelector
              variants={variants}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              />
              <SizeSelector
                variants={variants}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </>
          )}
      </div>

      <div className={`flex flex-col space-y-2 ${isConfigurable ? "" : "pt-20"} pb-4`}>
        <span className="text-gray-700 font-bold text-lg pb-2">數量</span>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-max">
          <Button
            className="w-12 h-12 text-3xl border-r border-gray-300 bg-white hover:opacity-80 hover:bg-gray-100"
            variant="default"
            size="icon"
            onClick={decreaseQuantity}
          >
            -
          </Button>
          <span className="w-16 h-12 flex items-center justify-center text-xl font-bold">
            {quantity}
          </span>
          <Button
            className="w-12 h-12 text-3xl text-red-500 border-l border-gray-300 bg-white hover:opacity-80 hover:bg-red-50"
            variant="default"
            size="icon"
            onClick={increaseQuantity}
          >
            +
          </Button>
        </div>
      </div>

      {isSoldOut ? (
        <SoldOutButton />
      ) : (
        <div className="flex space-x-4">
          <Button className="w-1/2 h-[40px] rounded-xl bg-gray-200 hover:bg-gray-300 text-black font-bold">
            加入購物車
          </Button>
          <Button className="w-1/2 h-[40px] rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold">
            立即結帳
          </Button>
        </div>
      )}
    </div>
  );
};

// 手機版
const MobileProductInfo: React.FC<{
  title: string;
  price: number;
  quantity: number;
  isSoldOut: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;

  isConfigurable: boolean;
  variants?: ProductVariant[];
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({
  title,
  price,
  quantity,
  isSoldOut,
  increaseQuantity,
  decreaseQuantity,
  isConfigurable,
  variants,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="flex flex-col mx-auto space-y-4 w-full sm:hidden">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-[#7f0019] text-xl font-black">NT${price}</p>

      <div className="flex flex-col pt-4">
        {isConfigurable && variants && (
            <>
              <ColorSelector
              variants={variants}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              />
              <SizeSelector
                variants={variants}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </>
          )}
      </div>

      <div className={`flex flex-col space-y-2 ${isConfigurable ? "pt-4" : "pt-20"} pb-4`}>
        <span className="text-gray-700 font-bold text-lg">數量</span>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-max">
          <Button
            className="w-8 h-8 text-2xl border-r border-gray-300 bg-white hover:opacity-80 hover:bg-gray-100"
            variant="default"
            size="icon"
            onClick={decreaseQuantity}
          >
            -
          </Button>
          <span className="w-12 h-8 flex items-center justify-center text-lg font-bold">
            {quantity}
          </span>
          <Button
            className="w-8 h-8 text-2xl text-red-500 border-l border-gray-300 bg-white hover:opacity-80 hover:bg-red-50"
            variant="default"
            size="icon"
            onClick={increaseQuantity}
          >
            +
          </Button>
        </div>
      </div>
      {isSoldOut ? (
        <SoldOutButton />
      ) : (
        <div className="flex space-x-2">
          <Button className="w-1/2 h-[32px] rounded-lg bg-gray-200 hover:bg-gray-300 text-black font-bold">
            加入購物車
          </Button>
          <Button className="w-1/2 h-[32px] rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-bold">
            立即結帳
          </Button>
        </div>
      )}
    </div>
  );
};

// 已售完按鈕
const SoldOutButton: React.FC = () => (
  <Button className="w-full h-[40px] rounded-xl bg-gray-200 text-black font-black cursor-not-allowed" disabled>
    已售完
  </Button>
);

// 顏色選擇器
const ColorSelector: React.FC<{
  variants: ProductVariant[];
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ variants, selectedColor, setSelectedColor }) => {
  return (
    <div className="mb-4">
      <p className="font-semibold text-gray-800 pb-2">顏色:</p>
      <div className="flex gap-2 mt-2">
        {variants.map((variant) => (
          <Button
            key={variant.color}
            variant={selectedColor === variant.color ? "dark" : "outline"}
            size="sm"
            onClick={() => setSelectedColor(variant.color)}
            className="w-[70px] h-[30px] rounded-xl"
          >
            {variant.color}
          </Button>
        ))}
      </div>
    </div>
  );
};

// 尺寸選擇器
const SizeSelector: React.FC<{
  variants: ProductVariant[];
  selectedColor: string | null;
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ variants, selectedColor, selectedSize, setSelectedSize }) => {
  if (!selectedColor) return null;

  // 根據 selectedColor 找到對應的 variant
  const currentVariant = variants.find((v) => v.color === selectedColor);
  if (!currentVariant) return null;

  return (
    <div className="mb-4">
      <p className="font-semibold text-gray-800 pb-2">尺寸:</p>
      <div className="flex gap-2 mt-2">
        {currentVariant.sizes.map((s) => (
          <Button
            key={s.size}
            variant={selectedSize === s.size ? "dark" : "outline"}
            size="sm"
            onClick={() => setSelectedSize(s.size)}
            className="w-[70px] h-[30px] rounded-xl"
          >
            {s.size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
