"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loading from "@/components/ui/feedback/loading"; 
import ErrorMessage from "@/components/ui/product-error-message"; 
import ProductImage from "@/components/product/detail/ProductImage";
import ProductInfo from "@/components/product/detail/ProductInfo";
import ProductDescription from "@/components/product/detail/ProductDescription";
import ProductDetailAccordions from "@/components/product/detail/ProductDetailAccordions";
import RelatedProducts from "@/components/product/detail/RelatedProducts";
import { findProductById } from "@/lib/utils/findProductById";
import { ProductDetail } from "@/types";

const DesktopProductDetail: React.FC<{ product: ProductDetail }> = ({ product }) => {
  return (
    <section className="w-[880px] ml-auto my-6 mx-2 hidden sm:block">
      <div className="flex justify-between gap-8">
        <ProductImage images={product.image} />
        <div className="flex flex-col space-y-8">
          <ProductInfo title={product.title} price={product.price} isSoldOut={product.isSoldOut} />
          <ProductDetailAccordions
            paymentMethods={product.paymentMethods}
            shippingMethods={product.shippingMethods}
            productDetails={product.productDetails}
            categories={product.categories}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-20 mt-6">
        <ProductDescription description={product.description} />
        <RelatedProducts relatedProducts={product.relatedProducts ?? []} />
      </div>
    </section>
  );
};

const MobileProductDetail: React.FC<{ product: ProductDetail }> = ({ product }) => {
  return (
    <section className="w-full mx-auto my-6 sm:hidden">
      <div className="flex flex-col space-y-6">
        <ProductImage images={product.image} />
        <ProductInfo title={product.title} price={product.price} isSoldOut={product.isSoldOut}/>
        <ProductDetailAccordions
          paymentMethods={product.paymentMethods}
          shippingMethods={product.shippingMethods}
          productDetails={product.productDetails}
          categories={product.categories}
        />
        <ProductDescription description={product.description} />
<RelatedProducts relatedProducts={product.relatedProducts ?? []} />
      </div>
    </section>
  );
};

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const productId = params?.productId as string;

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      try {
        const found = findProductById(productId);
        if (!found) {
          setError("找不到對應商品");
        } else {
          const images = Array.isArray(found.image) ? found.image : found.image ? [found.image] : [];
  
          const finalProduct: ProductDetail = {
            ...found,
            image: images,
          };
  
          setProduct(finalProduct);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("載入商品資料時發生未知錯誤");
        }
      } finally {
        setLoading(false);
      }
    }, 500);
  }, [productId]);

  if (loading) return <div className="text-center py-10"><Loading /></div>;
  if (error) return <div className="text-center py-10"><ErrorMessage title="未找到商品" message={error} /></div>;
  if (!product) return <ErrorMessage title="未找到商品" message="該商品可能已下架或不存在，請返回首頁。" />;

  return (
    <>
      <DesktopProductDetail product={product} />
      <MobileProductDetail product={product} />
    </>
  );
};

export default ProductDetailPage;