// 取得所有商品
import { allProducts } from "@/data/mockData";
import { ProductDetail, Product } from "@/types";
import { convertProductDetailsToProducts } from "./convertProductDetails";

/*
  取得全部商品 (getAllProducts)

  1遍歷 allProducts 內的所有分類，攤平成一個陣列
  轉換 ProductDetail[] → Product[]
*/

export function getAllProducts(): Product[] {
  const allDetails: ProductDetail[] = Object.values(allProducts)
    .flatMap((categoryMap) => Object.values(categoryMap))
    .flat();
  return convertProductDetailsToProducts(allDetails);
}
