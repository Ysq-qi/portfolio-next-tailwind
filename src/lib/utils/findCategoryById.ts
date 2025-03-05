// 查找主類別名稱
import { categories } from "@/data/mockData";

/*
  categoryId 查找對應的分類 (findCategoryById)

  接收一個 categoryId在categories陣列中查找對應的分類物件
  如果找不到對應的分類 則回傳null
*/

export function findCategoryById(categoryId: string) {
  return categories.find((cat) => cat.categoryId === categoryId) || null;
}

/*
  .find() 對陣列內的每一個元素進行測試 並回傳 "第一個符合條件的元素" 若找不到則回傳undefined
  .filter() 則是對陣列內的每一個元素進行測試 並回傳 "全部符合條件的元素" 是回傳一個陣列 若找不到則回傳空陣列 [] 
*/