"use client";

import * as React from "react";
import { ScrollableMenu } from "@/components/ui/navigation/scrollable-menu";
import {
  Shirt,
  ShoppingCart,
  Sofa,
  Box,
  Brush,
  Sparkles,
  Pencil,
  Baby,
  Wand2,
  Lamp,
} from "lucide-react";

// 資料
const categoriesData = [
  { label: "女裝", icon: Shirt },
  { label: "男裝", icon: Shirt },
  { label: "家具", icon: Sofa },
  { label: "收納", icon: Box },
  { label: "美容", icon: Sparkles },
  { label: "清潔洗滌", icon: Brush },
  { label: "食品", icon: ShoppingCart },
  { label: "文具", icon: Pencil },
  { label: "童裝", icon: Baby },
  { label: "其他", icon: Wand2 },
  { label: "燈具1", icon: Lamp },
  { label: "燈具2", icon: Lamp },
  { label: "燈具3", icon: Lamp },
  { label: "燈具4", icon: Lamp },
  { label: "燈具5", icon: Lamp },
];

const Categories: React.FC = () => {
  return (
    <>
      {/* 手機版 */}
      <section className="sm:hidden w-full h-[100px] flex items-center bg-white">
        <ScrollableMenu items={categoriesData} />
      </section>

      {/* 桌機版 */}
      <section className="hidden sm:flex w-[1200px] h-[130px] mx-auto mt-6 mb-6 items-center justify-center bg-white shadow rounded-md">
        <ScrollableMenu items={categoriesData} />
      </section>
    </>
  );
};

export default Categories;
