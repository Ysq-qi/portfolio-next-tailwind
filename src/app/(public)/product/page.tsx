"use client";

import React from "react";
import ProductList from "@/app/(public)/product/Productlist";

const ProductPage: React.FC = () => {
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
  ];

  return (
    <main className="flex flex-col items-center">
      <ProductList products={products} />
    </main>
  );
};

export default ProductPage;
