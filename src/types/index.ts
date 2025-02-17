export interface ProductDetail {
  id: string;
  title: string;
  price: number;
  image: string[];
  stock: number;
  productDetails: { label: string; value: string }[];
  categories: { parent: string; children: string[] }[];

  // 可選屬性
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

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  shippingMethods?: string[];
  paymentMethods?: string[];
}