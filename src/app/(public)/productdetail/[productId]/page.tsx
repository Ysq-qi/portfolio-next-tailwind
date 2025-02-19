import { Metadata } from "next";
import { findProductById } from "@/lib/utils/findProductById";
import ProductDetailClient from "./ProductDetailClient";

type Params = {
  productId: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  if (!productId) {
    return {
      title: "商品不存在 | My Shop",
      description: "找不到該商品，可能已下架。",
    };
  }

  const product = findProductById(productId);
  if (!product) {
    return {
      title: "商品不存在 | My Shop",
      description: "找不到該商品，可能已下架。",
    };
  }

  const images = Array.isArray(product.image)
    ? product.image
    : product.image
    ? [product.image]
    : [];

  return {
    metadataBase: new URL("http://localhost:3000"), // 改成正式環境網址
    title: `Next.js網站 | ${product.title}`,
    description: product.description ?? "這裡是商品描述。",
    openGraph: {
      title: product.title,
      description: product.description ?? "",
      images: images,
      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const { productId } = await params;

  if (!productId) {
    return <div className="text-center py-10">商品 ID 無效</div>;
  }

  return <ProductDetailClient productId={productId} />;
}
