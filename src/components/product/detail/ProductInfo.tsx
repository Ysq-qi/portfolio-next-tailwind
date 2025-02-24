"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/form/button";

interface ProductInfoProps {
  title: string;
  price: number;
  isSoldOut?: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, price, isSoldOut = false }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <>
      <DesktopProductInfo 
        title={title} 
        price={price} 
        quantity={quantity} 
        isSoldOut={isSoldOut} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
      />

      <MobileProductInfo 
        title={title} 
        price={price} 
        quantity={quantity} 
        isSoldOut={isSoldOut} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
      />
    </>
  );
};

const DesktopProductInfo: React.FC<{
  title: string;
  price: number;
  quantity: number;
  isSoldOut: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}> = ({ title, price, quantity, isSoldOut, increaseQuantity, decreaseQuantity }) => (
  <div className="hidden sm:flex flex-col space-y-4 w-[445px]">
    <h1 className="text-2xl font-semibold pt-4">{title}</h1>
    <p className="text-[#7f0019] text-2xl font-black pt-4">NT${price}</p>
    <div className="flex flex-col space-y-2 pt-20 pb-4">
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
        <span className="w-16 h-12 flex items-center justify-center text-xl font-bold">{quantity}</span>
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

const MobileProductInfo: React.FC<{
  title: string;
  price: number;
  quantity: number;
  isSoldOut: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}> = ({ title, price, quantity, isSoldOut, increaseQuantity, decreaseQuantity }) => (
  <div className="flex flex-col mx-auto space-y-4 w-full sm:hidden">
    <h1 className="text-xl font-semibold">{title}</h1>
    <p className="text-[#7f0019] text-xl font-black">NT${price}</p>
    <div className="flex flex-col space-y-2 pt-8 pb-4">
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
        <span className="w-12 h-8 flex items-center justify-center text-lg font-bold">{quantity}</span>
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

const SoldOutButton: React.FC = () => (
  <Button className="w-full h-[40px] rounded-xl bg-gray-200 text-black font-black cursor-not-allowed" disabled>
    已售完
  </Button>
);

export default ProductInfo;
