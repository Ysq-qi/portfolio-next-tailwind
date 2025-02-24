import { categories } from "@/data/mockData";

export function findSubCategoryById(categoryId: string, subCategoryId: string) {
  const mainCategory = categories.find((cat) => cat.categoryId === categoryId);
  if (!mainCategory) return null;

  return (
    mainCategory.subCategories.find((sub) => sub.labelEn === subCategoryId) ||
    null
  );
}
