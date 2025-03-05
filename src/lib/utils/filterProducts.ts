import { Product } from "@/types";

export function filterProducts(
  products: Product[],
  selectedPaymentMethods: string[],
  selectedShippingMethods: string[]
): Product[] {
  // 若未選擇任何付款方式，則預設所有商品都符合條件
  const noPaymentSelected = selectedPaymentMethods.length === 0;
  const noShippingSelected = selectedShippingMethods.length === 0;

  return products.filter((product) => {
     // 判斷商品的付款方式是否匹配
    const matchPayment =
      noPaymentSelected ||
      (product.paymentMethods &&
        product.paymentMethods.some((method) =>
          selectedPaymentMethods.includes(method)
        ));

    // 判斷商品的運送方式是否匹配
    const matchShipping =
      noShippingSelected ||
      (product.shippingMethods &&
        product.shippingMethods.some((method) =>
          selectedShippingMethods.includes(method)
        ));

    // 當付款/運送方式皆匹配時才會保留
    return matchPayment && matchShipping;
  });
}
