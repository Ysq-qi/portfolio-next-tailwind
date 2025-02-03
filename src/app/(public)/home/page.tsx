"use client";

import React from "react";
import Banner from "@/app/(public)/home/Banner";
import Categories from "@/app/(public)/home/Categories";
import ProductList from "@/app/(public)/home/Productlist";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <Categories />
      <ProductList />
    </div>
  );
};

export default HomePage;