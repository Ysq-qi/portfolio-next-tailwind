export interface ProductDetail {
  id: string;
  title: string;
  price: number;
  image: string[];
  stock?: number;
  productDetails: { label: string; value: string }[];
  categories: { parent: string; children: string[] }[];
  isConfigurable: boolean;
  variants: ProductVariant[];

  description?: string;
  descriptionImage?: { image: string }[];
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  paymentMethods?: string[];
  shippingMethods?: string[];
  relatedProducts?: {
    id: string;
    image: string;
    title: string;
    price: number;
  }[];
  reviews?: {
    reviewId: string;
    userId: string;
    rating: number;
    comment: string;
    timestamp: string;
  }[];
  averageRating?: number;
  totalReviews?: number;
  analytics?: {
    pageViews: number;
    wishListCount: number;
    salesData: { date: string; unitsSold: number }[];
  };
}

export interface ProductVariant {
  color: string;
  image: string[];
  sizes: { size: string; stock: number }[];
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string | string[];
  isConfigurable: boolean;
  variants: ProductVariant[];
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  shippingMethods?: string[];
  paymentMethods?: string[];
}

// 定義購物車商品類型
export interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
}
