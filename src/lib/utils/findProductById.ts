import { allProducts } from "@/data/mockData";
import { ProductDetail } from "@/data/mockData";

const productList: ProductDetail[] = Object.values(allProducts)
  .flatMap((subMap) => Object.values(subMap))
  .flat();

export function findProductById(productId: string): ProductDetail | null {
  return productList.find((p) => p.id === productId) || null;
}
