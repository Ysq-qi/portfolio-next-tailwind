"use client";

import React, { useState } from "react";
import { Trash, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/data-display/card";
import CartItemDeleteDialog from "@/components/cart/CartItemDeleteDialog";
import { Button } from "@/components/ui/form/button";
import Image from "next/image";

interface CartActionsCardProps {
  image: string;
  title: string;
  price: number;
  onRemove?: () => void;
}

interface CartCardProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  onRemove?: () => void;
}

// 購物車 (Hover懸浮)
const CartActionsCard: React.FC<CartActionsCardProps> = ({
  image,
  title,
  price,
  onRemove,
}) => {
  return (
    <Card className="flex w-[400px] h-[100px] p-4 mx-auto border-none shadow-none bg-transparent">
      {/* 左側圖片區域 */}
      <div className="w-[80px] h-[80px] flex-shrink-0 relative">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>

      {/* 右側內容區域 */}
      <CardContent className="w-[280px] h-[100px] flex flex-col relative">
        {/* 商品標題 - 左上 */}
        <h3 className="absolute top-0 left-4 text-sm font-bold text-gray-800 leading-tight">
          {title}
        </h3>

        {/* 商品價格 - 左下 */}
        <p className="absolute bottom-6 left-4 text-sm font-bold text-[#7f0019]">
          NT${price}
        </p>

        {/* 移除按鈕 - 右上 */}
        {onRemove && (
          <CardFooter className="absolute top-[-5px] right-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:text-red-600 transition-colors w-7 h-7"
              onClick={onRemove}
              aria-label="移除商品"
            >
              <Trash className="w-5 h-5" />
            </Button>
          </CardFooter>
        )}
      </CardContent>
    </Card>
  );
};

// 購物車（購物車頁面）
const CartCard: React.FC<CartCardProps> = ({
  image,
  title,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  onRemove,
}) => {
  const [open, setOpen] = useState(false); // 控制刪除對話框

  return (
    <Card className="flex w-[700px] h-[150px] border-none shadow-none bg-transparent">
      {/* 左側固定圖片區域 */}
      <div className="w-[150px] h-[150px] relative flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>

      {/* 右側內容區域 */}
      <CardContent className="w-[550px] h-[150px] flex flex-col p-5 relative">
        {/* 商品標題 */}
        <h3 className="absolute top-2 left-5 text-lg font-bold text-gray-800 leading-tight">
          {title}
        </h3>

        {/* 商品價格 */}
        <p className="absolute bottom-0 left-5 text-lg font-bold text-[#7f0019]">
          NT${price}
        </p>

        {/* 移除按鈕（改為開啟 `CartItemDeleteDialog`） */}
        {onRemove && (
          <CardFooter className="absolute top-0 right-4 p-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:text-gray-500 transition-colors w-8 h-8"
              onClick={() => setOpen(true)}
              aria-label="移除商品"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardFooter>
        )}

        {/* 數量調整 */}
        <div className="absolute bottom-0 right-2 flex items-center border border-gray-300 rounded-lg overflow-hidden w-max scale-90">
          <Button
            className="w-10 h-10 text-2xl border-r border-gray-300 bg-white hover:opacity-80 hover:bg-gray-100"
            variant="default"
            size="icon"
            onClick={decreaseQuantity}
          >
            -
          </Button>
          <span className="w-12 h-10 flex items-center justify-center text-lg font-bold">
            {quantity}
          </span>
          <Button
            className="w-10 h-10 text-2xl text-red-500 border-l border-gray-300 bg-white hover:opacity-80 hover:bg-red-50"
            variant="default"
            size="icon"
            onClick={increaseQuantity}
          >
            +
          </Button>
        </div>
      </CardContent>

      {/* 刪除確認對話框 */}
      <CartItemDeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          onRemove?.();
          setOpen(false);
        }}
      />
    </Card>
  );
};


export { CartActionsCard, CartCard };
