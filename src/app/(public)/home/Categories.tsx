"use client";

import * as React from "react";
import { ContentSlider } from "@/components/ui/navigation/content-slider";
import { CategoryIconButton } from "@/components/ui/navigation/category-icon-button";
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
  { label: "燈具6", icon: Lamp },
  { label: "燈具7", icon: Lamp },
  { label: "燈具8", icon: Lamp },
  { label: "燈具9", icon: Lamp },
  { label: "燈具10", icon: Lamp },
  { label: "燈具11", icon: Lamp },
  { label: "燈具12", icon: Lamp },
  { label: "燈具13", icon: Lamp },
  { label: "燈具14", icon: Lamp },
  { label: "燈具15", icon: Lamp },
  { label: "燈具16", icon: Lamp },
  { label: "燈具17", icon: Lamp },
  { label: "燈具18", icon: Lamp },
  { label: "燈具19", icon: Lamp },
  { label: "燈具20", icon: Lamp },
  { label: "燈具21", icon: Lamp },
  { label: "燈具22", icon: Lamp },
  { label: "燈具23", icon: Lamp },
  { label: "燈具24", icon: Lamp },
  { label: "燈具25", icon: Lamp },
  { label: "燈具26", icon: Lamp },
  { label: "燈具27", icon: Lamp },
  { label: "燈具28", icon: Lamp },
  { label: "燈具29", icon: Lamp },
  { label: "燈具30", icon: Lamp },
];

const Categories: React.FC = () => {
  return (
    <>
      {/* 手機版 */}
      <section className="sm:hidden w-full h-[100px] flex items-center bg-white">
        <ContentSlider itemWidth={105} pageSizeDesktop={10} pageSizeMobile={3}>
          {categoriesData.map((cat, idx) => (
            <CategoryIconButton key={idx} label={cat.label} icon={cat.icon} />
          ))}
        </ContentSlider>
      </section>

      {/* 桌機版 */}
      <section className="hidden sm:flex w-[1200px] h-[130px] mx-auto mt-6 mb-6 items-center justify-center bg-white shadow rounded-md">
        <ContentSlider itemWidth={105} pageSizeDesktop={10} pageSizeMobile={3}>
          {categoriesData.map((cat, idx) => (
            <CategoryIconButton key={idx} label={cat.label} icon={cat.icon} />
          ))}
        </ContentSlider>
      </section>
    </>
  );
};

export default Categories;
