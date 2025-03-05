// 取得某個主分類的全部商品
import { allProducts } from "@/data/mockData";
import { ProductDetail, Product } from "@/types";
import { convertProductDetailsToProducts } from "./convertProductDetails";

/*
  取得某主分類的所有商品 (getProductsByCategoryId)

  透過 categoryId 找到該主分類的所有子分類
  攤平成 ProductDetail[]
  轉換 ProductDetail[] → Product[]
*/

export function getProductsByCategory(categoryId: string): Product[] {
  const categoryMap = allProducts[categoryId];
  if (!categoryMap) return [];

  const details: ProductDetail[] = Object.values(categoryMap).flat();
  return convertProductDetailsToProducts(details);
}
