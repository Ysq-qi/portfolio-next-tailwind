import { Metadata } from "next";
import { categories } from "@/data/mockData";
import CategoryClient from "@/app/(public)/product/[categoryId]/CategoryClient";

type Props = {
  params: { categoryId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { categoryId } = resolvedParams; 

  const category = categories.find((c) => c.categoryId === categoryId);

  if (!category) {
    return {
      title: "商品列表 |分類不存在",
      description: "查無此分類",
    };
  }

  return {
    title: `Next.js網站 | ${category.labelZh}`,
    description: `${category.labelZh} - 商品列表`,
  };
}

export default function CategoryPage() {
  // SSR fetch
  // const data = await fetch(`...`);
  return <CategoryClient />;
}
