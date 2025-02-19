import { Metadata } from "next";
import { categories } from "@/data/mockData";
import SubCategoryClient from "@/app/(public)/product/[categoryId]/CategoryClient";

type Props = {
  params: { subCategoryId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { subCategoryId } = resolvedParams;

  const mainCategory = categories.find((c) =>
    c.subCategories.some((sub) => sub.labelEn === subCategoryId)
  );
  const subCategory = mainCategory?.subCategories.find(
    (sub) => sub.labelEn === subCategoryId
  );

  if (!subCategory) {
    return {
      title: "商品列表 | 此分類不存在",
      description: "查無此子分類",
    };
  }

  return {
    title: `Next.js網站 | ${subCategory.labelZh}`,
    description: `這裡是 ${subCategory.labelZh} 商品列表`,
  };
}

export default function SubCategoryPage() {
  return <SubCategoryClient />;
}
