import { Product } from "@/types";

export function filterProducts(
  products: Product[],
  selectedPaymentMethods: string[],
  selectedShippingMethods: string[]
): Product[] {
  const noPaymentSelected = selectedPaymentMethods.length === 0;
  const noShippingSelected = selectedShippingMethods.length === 0;

  return products.filter((product) => {
    const matchPayment =
      noPaymentSelected ||
      (product.paymentMethods &&
        product.paymentMethods.some((method) =>
          selectedPaymentMethods.includes(method)
        ));

    const matchShipping =
      noShippingSelected ||
      (product.shippingMethods &&
        product.shippingMethods.some((method) =>
          selectedShippingMethods.includes(method)
        ));

    return matchPayment && matchShipping;
  });
}
