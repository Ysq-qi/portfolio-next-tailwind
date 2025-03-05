// 將中文分類名稱轉成英文名稱 (中轉英的意思)
import { categories as mockCategories } from "@/data/mockData";

/*
  依據中文分類名稱 (labelZh) 查找對應的分類 ID (findCategoryIdByZh)

  接收一個 labelZh，從 mockCategories 陣列中查找對應的分類物件
  使用 .find() 方法匹配 labelZh，並回傳 categoryId
  如果找不到對應的分類，則回傳 null
*/

export function findCategoryIdByZh(labelZh: string): string | null {
  const found = mockCategories.find((c) => c.labelZh === labelZh);
  return found ? found.categoryId : null;
}

/*
  依據主分類 ID (categoryId) 與子分類中文名稱 (subZh) 查找對應的子分類英文名稱 (findSubCategoryEnByZh)

  接收 categoryId 和 subZh，先透過 .find() 方法從 mockCategories 查找對應的主分類物件
  若找不到主分類，則回傳 null
  若找到主分類，則使用 .find() 方法在 subCategories 陣列內匹配 labelZh
  如果找到對應的子分類，則回傳其 labelEn，否則回傳 null
*/

export function findSubCategoryEnByZh(categoryId: string, subZh: string): string | null {
  const foundCat = mockCategories.find((c) => c.categoryId === categoryId);
  if (!foundCat) return null;

  const foundSub = foundCat.subCategories.find((s) => s.labelZh === subZh);
  return foundSub ? foundSub.labelEn : null;
}
