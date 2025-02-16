"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/overlay/dialog";
import { Button } from "@/components/ui/form/button";
import { Separator } from "@/components/ui/utils/separator";
import Image from "next/image";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
  title: string;
  price: string;
}

export function ProductDialog({ open, onOpenChange, image, title, price }: ProductDialogProps) {
  const [selectedSize, setSelectedSize] = React.useState<string | null>("80");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-lg p-6">
        {/* 標題 */}
        <DialogTitle className="text-lg font-bold text-gray-900">{title}</DialogTitle>

        {/* 商品圖片 & 商品資訊 */}
        <div className="flex justify-between items-start">
          {/* 商品圖片 */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <Image src={image} alt={title} fill className="object-cover rounded-md" />
          </div>

          {/* 商品資訊 */}
          <div className="flex flex-col items-end mr-2">
            <span className="text-[#7f0019]  font-bold text-lg mb-8">{price}</span>
            <Button variant="link" className="text-gray-600  mt-8">查看更多尺寸</Button>
          </div>
        </div>

        {/* 尺寸選擇 */}
        <Separator className="m-[-2]" />
        <div>
          <p className="font-semibold text-gray-800 pb-2">尺寸</p>
          <div className="flex gap-2 mt-2">
            {["80", "90", "100"].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "dark" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className=" w-[70px] h-[30px] rounded-xl"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* 數量與加入購物車 */}
        <Separator />
        <div className="flex items-center justify-between">
          {/* 數量選擇 */}
          <div className="flex items-center  space-x-2 ">
            <Button className="text-2xl" variant="ghost" size="icon">-</Button>
            <span className="text-2xl font-bold p-2">1</span>
            <Button className="text-2xl" variant="ghost" size="icon">+</Button>
          </div>

          {/* 加入購物車按鈕 */}
          <Button className="w-40 h-10 rounded-xl text-white bg-gray-800 hover:bg-gray-700">
            加入購物車
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
