"use client"; 

import React from "react";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/home/ProductList";

const HomeClient: React.FC = () => {

  return (
    <div className="flex flex-col items-center">
      <Banner />
      <Categories />
      <ProductList />
    </div>
  );
};

export default HomeClient;
