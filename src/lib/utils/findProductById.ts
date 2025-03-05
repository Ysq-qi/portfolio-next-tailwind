//  查找單一商品ID
import { allProducts } from "@/data/mockData";
import { ProductDetail } from "@/types";

/*
  productId 查找對應的商品 (findProductById)

  使用 .flatMap() 攤平所有的商品資料 變成productList陣列 (allProducts為槽狀結構)
  使用 .find()方法 匹配商品ID並回傳該商品物件
  如果找不到對應的商品 則回傳null
*/

const productList: ProductDetail[] = Object.values(allProducts)
  .flatMap((subMap) => Object.values(subMap))
  .flat();

export function findProductById(productId: string): ProductDetail | null {
  return productList.find((p) => p.id === productId) || null;
}

/* 
  .flatMap() 是 Array.prototype.flat() 和 Array.prototype.map() 組合 
  .map() 映射 對每個元素進行轉換或處理 回傳處理過後的新陣列
  .flatMap() 先執行 .map() 映射 再將處理過的陣列攤平成單層陣列
*/