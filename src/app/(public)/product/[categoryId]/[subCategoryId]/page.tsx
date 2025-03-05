import { Metadata } from "next";
import SubCategoryClient from "@/app/(public)/product/[categoryId]/[subCategoryId]/SubCategoryClient";

import { findSubCategoryById } from "@/lib/utils/findSubCategoryById";

type Props = {
  params: {
    categoryId: string;
    subCategoryId: string;
  };
};

export const dynamic = "force-dynamic";

/*
  利用findSubCategoryById獲取商品子類別的名稱
  在部屬時直接將動態標題給處理完
*/
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 即便資料是同步的 也會強制要求使用await 但使用await 又會造成部屬錯誤  (Next.js 15.1 存在BUG)
  // 使用tsconfig.json exclude 去忽略該檔案的type檢測
  const { categoryId, subCategoryId } = await params;
  const subCategory = findSubCategoryById(categoryId, subCategoryId);

  if (!subCategory) {
    return {
      title: "商品列表 | 此子分類不存在",
      description: "查無此子分類",
    };
  }

  return {
    title: `Next.js網站 | ${subCategory.labelZh}`,
    description: `這裡是 ${subCategory.labelZh} 的商品列表`,
  };
}

export default function SubCategoryPage() {
  return <SubCategoryClient />;
}
