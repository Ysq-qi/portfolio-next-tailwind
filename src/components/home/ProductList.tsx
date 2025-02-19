"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/product/common/ProductCard";
import ProductCardSkeleton from "@/components/ui/feedback/product-card-skeleton";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
}

interface ProductListProps {
  products?: Product[];
}

const products = [
  {
    id: "1",
    image: "/images/product1.jpg",
    title: "男撥水加工羽絨大衣深摩卡棕",
    price: 4390,
    isNew: true,
    isSoldOut: true, 
    isHotSale: true  
  },
  {
    id: "2",
    image: "/images/product2.jpg",
    title: "女裝休閒連帽外套",
    price: 2990,
    isSoldOut: true,
  },
  {
    id: "3",
    image: "/images/product3.jpg",
    title: "兒童保暖羽絨背心",
    price: 1990,
    isNew: true,
  },
  {
    id: "4",
    image: "/images/product4.jpg",
    title: "高機能運動跑鞋",
    price: 3490,
    isHotSale: true,
  },
  {
    id: "5",
    image: "/images/product4.jpg",
    title: "高機能運動跑鞋",
    price: 3490,
  },
  {
    id: "6",
    image: "/images/product4.jpg",
    title: "高機能運動跑鞋",
    price: 3490,
  },
  {
    id: "7",
    image: "/images/product4.jpg",
    title: "高機能運動跑鞋",
    price: 3490,
  },
  {
    id: "8",
    image: "/images/product4.jpg",
    title: "高機能運動跑鞋",
    price: 3490,
  },
  {
    id: "9",
    image: "/images/product4.jpg",
    title: "高機能運動跑鞋",
    price: 3490,
  },
];


const ProductList: React.FC<ProductListProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
                key={product.id}
                id={product.id}
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
