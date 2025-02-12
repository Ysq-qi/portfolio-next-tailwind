import { categories as mockCategories } from "@/data/mockData";

export function findCategoryIdByZh(labelZh: string): string | null {
  const found = mockCategories.find((c) => c.labelZh === labelZh);
  return found ? found.categoryId : null;
}

export function findSubCategoryEnByZh(categoryId: string, subZh: string): string | null {
  const foundCat = mockCategories.find((c) => c.categoryId === categoryId);
  if (!foundCat) return null;

  const foundSub = foundCat.subCategories.find((s) => s.labelZh === subZh);
  return foundSub ? foundSub.labelEn : null;
}
