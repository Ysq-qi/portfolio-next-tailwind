import { Metadata } from "next";
import CategoryClient from "@/app/(public)/product/[categoryId]/CategoryClient";

import { findCategoryById } from "@/lib/utils/findCategoryById";

type Props = {
  params: {
    categoryId: string;
  };
};

export const dynamic = "force-dynamic";

/*
  利用findCategoryById獲取商品主類別的名稱
  在部屬時直接將動態標題給處理完
*/
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 即便資料是同步的 也會強制要求使用await 但使用await 又會造成部屬錯誤  (Next.js 15.1 存在BUG)
  // 使用tsconfig.json exclude 去忽略該檔案的type檢測
  const { categoryId } = await params;
  const category = findCategoryById(categoryId);

  if (!category) {
    return {
      title: "商品列表 | 分類不存在",
      description: "查無此分類",
    };
  }

  return {
    title: `Next.js網站 | ${category.labelZh}`,
    description: `${category.labelZh} - 商品列表`,
  };
}

export default function CategoryPage() {
  return <CategoryClient />;
}