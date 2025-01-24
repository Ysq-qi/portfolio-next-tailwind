"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ui/data-display/product-card";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";

const ProductList: React.FC = () => {
  // 模擬商品數據
  const products = [
    {
      image: "/images/product1.jfif",
      title: "男撥水加工羽絨大衣深摩卡棕",
      price: "NT$4,390",
      isNew: true,
    },
    {
      image: "/images/product2.jfif",
      title: "女裝休閒連帽外套",
      price: "NT$2,990",
    },
    {
      image: "/images/product3.jfif",
      title: "兒童保暖羽絨背心",
      price: "NT$1,990",
      isNew: true,
    },
    {
      image: "/images/product4.jfif",
      title: "高機能運動跑鞋",
      price: "NT$3,490",
    },
    {
      image: "/images/product4.jfif",
      title: "高機能運動跑鞋",
      price: "NT$3,490",
    },
    {
      image: "/images/product4.jfif",
      title: "高機能運動跑鞋",
      price: "NT$3,490",
    },
    {
      image: "/images/product4.jfif",
      title: "高機能運動跑鞋",
      price: "NT$3,490",
    },
    {
      image: "/images/product4.jfif",
      title: "高機能運動跑鞋",
      price: "NT$3,490",
    },
    {
      image: "/images/product4.jfif",
      title: "高機能運動跑鞋",
      price: "NT$3,490",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-2 mt-4 mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {isLoading
          ? products.map((_, index) => (
              <ProductCardSkeleton key={index} variant="home" />
            ))
          : products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                isNew={product.isNew}
                variant="home"
              />
            ))}
      </div>
    </section>
  );
};

export default ProductList;
