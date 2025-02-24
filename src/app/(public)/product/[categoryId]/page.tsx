import { Metadata } from "next";
import CategoryClient from "./CategoryClient";

/* 
// 適用於非同步資料時，可使用動態 metadata (Next.js 15.1 存在BUG)
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { categoryId } = params; // 即便資料是同步的 也會強制要求使用await 但使用await 又會造成部屬錯誤

//   // 從同步數據中查找分類
//   const category = categories.find((c) => c.categoryId === categoryId);

//   if (!category) {
//     return {
//       title: "商品列表 | 分類不存在",
//       description: "查無此分類",
//     };
//   }

//   return {
//     title: `Next.js網站 | ${category.labelZh}`,
//     description: `${category.labelZh} - 商品列表`,
//   };
// }
*/

// 權宜之計：使用靜態 metadata，避免動態 `params` 錯誤
export const metadata: Metadata = {
  title: "Next.js網站 | 商品列表",
  description: "這裡是商品列表頁面",
};

export default function CategoryPage() {
  return <CategoryClient />;
}