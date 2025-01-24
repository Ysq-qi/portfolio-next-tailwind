"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/form/button";

interface ProductInfoProps {
  title: string;
  price: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="space-y-4 w-[445px]">
      <h1 className="text-2xl font-semibold pt-4">{title}</h1>
      <p className="text-[#7f0019] text-2xl font-black pt-4">NT${price}</p>

      <div className="flex flex-col space-y-2 pt-20 pb-4">

        {/* 數量標籤 */}
        <span className="text-gray-700 font-bold text-lg pb-2">數量</span>

        {/* 數量調整 */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-max">
          {/* 減少數量按鈕 */}
          <Button
            className="w-12 h-12 text-3xl border-r border-gray-300 bg-white hover:opacity-80 hover:bg-gray-100"
            variant="default"
            size="icon"
            onClick={decreaseQuantity}
          >
            -
          </Button>

          {/* 顯示數量 */}
          <span className="w-16 h-12 flex items-center justify-center text-xl font-bold">
            {quantity}
          </span>

          {/* 增加數量按鈕 */}
          <Button
            className="w-12 h-12 text-3xl border-l border-gray-300 bg-white hover:opacity-80 hover:bg-gray-100"
            variant="default"
            size="icon"
            onClick={increaseQuantity}
          >
            +
          </Button>
        </div>
      </div>

      {/* 操作按鈕區塊 */}
      <div className="flex space-x-4">
        <Button className="w-1/2 h-[40px] rounded-xl bg-gray-200 hover:bg-gray-300 text-black font-bold">
          加入購物車
        </Button>
        <Button className="w-1/2 h-[40px] rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold">
          立即結帳
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
