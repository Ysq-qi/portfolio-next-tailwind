//  查找子類別名稱
import { categories } from "@/data/mockData";

/*
  在主分類 (categoryId) 中查找對應的子分類 (findSubCategoryById)

  根據 categoryId 查找對應的主分類 (mainCategory)
  再從該主分類的 subCategories 陣列中 查找符合 subCategoryId 的子分類
  如果找不到對應的分類 則回傳 null

  在動態路由 (/category/:categoryId/:subCategoryId) 根據URL參數獲取子分類資訊
*/

export function findSubCategoryById(categoryId: string, subCategoryId: string) {
  // 先查找主分類
  const mainCategory = categories.find((cat) => cat.categoryId === categoryId);
  if (!mainCategory) return null;

  // 在主分類的 subCategories 陣列中查找符合的子分類
  return (
    mainCategory.subCategories.find((sub) => sub.labelEn === subCategoryId) ||
    null
  );
}
