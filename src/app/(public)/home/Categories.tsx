"use client";

import * as React from "react";
import Link from "next/link";
import { ContentSlider } from "@/components/ui/navigation/content-slider";
import { CategoryIconButton } from "@/components/ui/navigation/category-icon-button";
import {
  Shirt,
  ShoppingCart,
  Sofa,
  Box,
  Construction
} from "lucide-react";

// 類別物件
const categoriesData = [
  { label: "食品", icon: ShoppingCart, link: "/product/food" },
  { label: "女裝", icon: Shirt, link: "/product/women" },
  { label: "男裝", icon: Shirt, link: "/product/men" },
  { label: "寢具織品", icon: Box, link: "/product/bedding" },
  { label: "家具", icon: Sofa, link: "/product/furniture" },
  { label: "測試1", icon: Construction, link: "/test1" },
  { label: "測試2", icon: Construction, link: "/test2" },
  { label: "測試3", icon: Construction, link: "/test3" },
  { label: "測試4", icon: Construction, link: "/test4" },
  { label: "測試5", icon: Construction, link: "/test5" },
  { label: "測試6", icon: Construction, link: "/test6" },
  { label: "測試7", icon: Construction, link: "/test7" },
  { label: "測試8", icon: Construction, link: "/test8" },
  { label: "測試9", icon: Construction, link: "/test9" },
  { label: "測試10", icon: Construction, link: "/test10" },
];

const Categories: React.FC = () => {
  return (
    <>
      {/* 手機版 */}
      <section className="sm:hidden w-full h-[100px] flex items-center bg-white">
        <ContentSlider itemWidth={105} pageSizeDesktop={10} pageSizeMobile={3}>
          {categoriesData.map((cat, idx) => (
            <Link key={idx} href={cat.link} passHref>
              <CategoryIconButton label={cat.label} icon={cat.icon} />
            </Link>
          ))}
        </ContentSlider>
      </section>

      {/* 桌機版 */}
      <section className="hidden sm:flex w-[1200px] h-[130px] mx-auto mt-6 mb-6 items-center justify-center bg-white shadow rounded-md">
        <ContentSlider itemWidth={93} pageSizeDesktop={10} pageSizeMobile={3}>
          {categoriesData.map((cat, idx) => (
            <Link key={idx} href={cat.link} passHref>
              <CategoryIconButton label={cat.label} icon={cat.icon} />
            </Link>
          ))}
        </ContentSlider>
      </section>
    </>
  );
};

export default Categories;
