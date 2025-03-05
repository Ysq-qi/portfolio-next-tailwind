// 取得某個子分類的全部商品
import { allProducts } from "@/data/mockData";
import { ProductDetail, Product } from "@/types";
import { convertProductDetailsToProducts } from "./convertProductDetails";

/*
  取得某子分類的所有商品 (getProductsBySubCategory)

  透過 categoryId 找到該主分類
  透過 subCategoryId 找到對應子分類
  轉換 ProductDetail[] → Product[]
*/

export function getProductsBySubCategory(categoryId: string, subCategoryId: string): Product[] {
  const categoryMap = allProducts[categoryId];
  if (!categoryMap) return [];

  const subDetails: ProductDetail[] = categoryMap[subCategoryId] ?? [];
  return convertProductDetailsToProducts(subDetails);
}
