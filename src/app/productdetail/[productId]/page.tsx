"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/components/ui/feedback/loading";
import ProductImage from "@/components/product/detail/ProductImage";
import ProductInfo from "@/components/product/detail/ProductInfo";
import ProductDescription from "@/components/product/detail/ProductDescription";
import ProductDetailAccordions from "@/components/product/detail/ProductDetailAccordions";
import RelatedProducts from "@/components/product/detail/RelatedProducts";

const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // 模擬 API 請求
    setTimeout(() => {
      try {
        const fetchedProduct = {
          id: "1",
          title: "54% 黑巧克力開心果",
          price: 99,
          image: "/images/product001-1.jfif",
          description: "54%黑巧克力包裹著開心果，甜而不膩，口感豐富。",
          stock: 132,
          productDetails: [
            { label: "產地", value: "台灣" },
            { label: "重量", value: "36G (4-5g X 8入)" },
            { label: "條碼", value: "4550584891151" },
          ],
          categories: [
            {
              parent: "食品",
              children: ["糖果", "餅乾", "菓子"],
            },
            {
              parent: "新商品",
              children: ["新商品", "食品"],
            },
          ],
          relatedProducts: [
            {
              image: "/images/product001-1.jfif",
              title: "54% 黑巧克力開心果",
              price: 99,
            },
            {
              image: "/images/product001-2.jfif",
              title: "洋芋片 鹽味",
              price: 29,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
            {
              image: "/images/product001-3.jfif",
              title: "即食迷你拉麵 雞汁風味",
              price: 39,
            },
          ],
        };
        setProduct(fetchedProduct);
      } catch (error) {
        setError("載入商品資料時發生錯誤");
      } finally {
        setLoading(false);
      }
    }, 300);
  }, []);

  if (loading) return <div className="text-center py-10"> <Loading /> </div>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <section className="w-[880px] ml-auto my-6 mx-2">
      <div className="flex justify-between gap-8">
        <ProductImage image={product.image} relatedProducts={product.relatedProducts} />
        
        <div className="flex flex-col space-y-8">
          <ProductInfo title={product.title} price={product.price} />
          {/* 將新的 categories 傳給 Accordions */}
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
        <RelatedProducts relatedProducts={product.relatedProducts} />
      </div>
    </section>
  );
};

export default ProductDetailPage;
