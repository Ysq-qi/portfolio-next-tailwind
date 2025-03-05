// 轉換 ProductDetail[] 為 Product[]
import { ProductDetail, Product } from "@/types";

/*
  統一轉換 ProductDetail[] → Product[]
  過濾掉不必要的欄位
  若 image 是陣列，只取第一張圖片
*/

export function convertProductDetailsToProducts(details: ProductDetail[]): Product[] {
  return details.map((pd) => ({
    id: pd.id,
    image: Array.isArray(pd.image) ? pd.image[0] : pd.image ?? "",
    title: pd.title,
    price: pd.price,
    isNew: pd.isNew,
    isSoldOut: pd.isSoldOut,
    isHotSale: pd.isHotSale,
    isConfigurable: pd.isConfigurable ?? false,
    variants: pd.variants ?? [],
    shippingMethods: pd.shippingMethods ?? [],
    paymentMethods: pd.paymentMethods ?? [],
  }));
}
