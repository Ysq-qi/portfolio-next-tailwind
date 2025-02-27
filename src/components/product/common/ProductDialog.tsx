"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/overlay/dialog";
import { Button } from "@/components/ui/form/button";
import { Separator } from "@/components/ui/utils/separator";
import Image from "next/image";

interface ProductVariant {
  color: string;
  image: string[];
  sizes: { size: string; stock: number }[];
}

interface CategoryInfo {
  parent: string;
  children: string[];
}

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  image: string;   // 用於顯示預設圖片 (e.g. 先顯示第一張)
  title: string;
  price: string;

  isConfigurable: boolean;
  variants?: ProductVariant[];

  categories?: CategoryInfo[];
}

export function ProductDialog({
  open,
  onOpenChange,
  image,
  title,
  price,
  isConfigurable,
  variants,
  categories,
}: ProductDialogProps) {
  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // 初始化 Dialog 打開後 預設第一個顏色&尺寸
  useEffect(() => {
    if (open && isConfigurable && variants && variants.length > 0) {
      setSelectedColor(variants[0].color);
      setSelectedSize(variants[0].sizes[0]?.size ?? null);
    }
  }, [open, isConfigurable, variants]);

  // 切換顏色後 自動重置尺寸
  useEffect(() => {
    if (!isConfigurable || !variants || !selectedColor) return;

    const foundVariant = variants.find((v) => v.color === selectedColor);
    if (foundVariant) {
      // 重置為該顏色的第一個尺寸
      setSelectedSize(foundVariant.sizes[0]?.size ?? null);
    } else {
      setSelectedSize(null);
    }
  }, [selectedColor, isConfigurable, variants]);

  // 找到當前 variant
  let currentVariant: ProductVariant | null = null;
  if (isConfigurable && variants && selectedColor) {
    const found = variants.find((v) => v.color === selectedColor);
    currentVariant = found ?? null;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-lg p-6">
        {/* 標題 */}
        <DialogTitle className="text-lg font-bold text-gray-900">
          {title}
        </DialogTitle>

        {/* 商品圖片 & 商品資訊 */}
        <div className="flex justify-between items-start">
          {/* 商品圖片 */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* 商品資訊 */}
          <div className="flex flex-col items-end mr-2">
            <span className="text-[#7f0019] font-bold text-lg mb-8">
              {price}
            </span>
            <SizeChartButton categories={categories} />
          </div>
        </div>

        {/* 如果是可配置商品 → 顯示顏色選擇器、尺寸選擇器 */}
        {isConfigurable && variants && (
          <>
            <Separator className="my-2" />
            <ColorSelector
              variants={variants}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <Separator className="my-2" />
            <SizeSelector
              currentVariant={currentVariant}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </>
        )}

        {/* 數量與加入購物車 */}
        <Separator />
        <QuantitySelector
          quantity={quantity}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
      </DialogContent>
    </Dialog>
  );
}

// 顯示【查看更多尺寸表】按鈕：若 categories 裡 parent=女裝 or 男裝
const SizeChartButton: React.FC<{
  categories?: CategoryInfo[];
}> = ({ categories }) => {
  if (!categories) return null;

  // 判斷是否有 parent=女裝 or 男裝
  const isClothing = categories.some(
    (cat) => cat.parent === "女裝" || cat.parent === "男裝"
  );
  if (!isClothing) return null;

  return (
    <Button variant="link" className="text-gray-600 mt-8">
      查看更多尺寸
    </Button>
  );
};

// 顏色選擇器
const ColorSelector: React.FC<{
  variants: ProductVariant[];
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ variants, selectedColor, setSelectedColor }) => {
  return (
    <>
      <div>
        <p className="font-semibold text-gray-800 pb-2">顏色</p>
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
    </>
  );
};

// 尺寸選擇器
const SizeSelector: React.FC<{
  currentVariant: ProductVariant | null;
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ currentVariant, selectedSize, setSelectedSize }) => {
  if (!currentVariant) return null;

  return (
    <>
      <div>
        <p className="font-semibold text-gray-800 pb-2">尺寸</p>
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
    </>
  );
};

// 數量選擇
const QuantitySelector: React.FC<{
  quantity: number;
  increase: () => void;
  decrease: () => void;
}> = ({ quantity, increase, decrease }) => (
  <div className="flex items-center justify-between mt-4">
    {/* 數量調整 */}
    <div className="flex items-center space-x-2">
      <Button className="text-2xl" variant="ghost" size="icon" onClick={decrease}>
        -
      </Button>
      <span className="text-2xl font-bold p-2">{quantity}</span>
      <Button className="text-2xl" variant="ghost" size="icon" onClick={increase}>
        +
      </Button>
    </div>

    {/* 加入購物車按鈕 */}
    <Button className="w-40 h-10 rounded-xl text-white bg-gray-800 hover:bg-gray-700">
      加入購物車
    </Button>
  </div>
);
