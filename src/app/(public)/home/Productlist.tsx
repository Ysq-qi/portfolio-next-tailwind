"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/product/common/ProductCard";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";

interface Product {
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
}

interface ProductListProps {
  products?: Product[];
}

const products = [
  {
    image: "/images/product1.jfif",
    title: "男撥水加工羽絨大衣深摩卡棕",
    price: "4,390",
    isNew: true,
    isSoldOut: true, 
    isHotSale: true  
  },
  {
    image: "/images/product2.jfif",
    title: "女裝休閒連帽外套",
    price: "2,990",
    isSoldOut: true,
  },
  {
    image: "/images/product3.jfif",
    title: "兒童保暖羽絨背心",
    price: "1,990",
    isNew: true,
  },
  {
    image: "/images/product4.jfif",
    title: "高機能運動跑鞋",
    price: "3,490",
    isHotSale: true,
  },
  {
    image: "/images/product4.jfif",
    title: "高機能運動跑鞋",
    price: "3,490",
  },
  {
    image: "/images/product4.jfif",
    title: "高機能運動跑鞋",
    price: "3,490",
  },
  {
    image: "/images/product4.jfif",
    title: "高機能運動跑鞋",
    price: "3,490",
  },
  {
    image: "/images/product4.jfif",
    title: "高機能運動跑鞋",
    price: "3,490",
  },
  {
    image: "/images/product4.jfif",
    title: "高機能運動跑鞋",
    price: "3,490",
  },
];

const ProductList: React.FC<ProductListProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-2 mt-4 mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
            isLoading ? (
              <ProductCardSkeleton key={index} variant="home" />
            ) : (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                isNew={product.isNew}
                isSoldOut={product.isSoldOut}
                isHotSale={product.isHotSale}
                variant="home"
              />
            )
          ))}
      </div>
    </section>
  );
};

export default ProductList;
