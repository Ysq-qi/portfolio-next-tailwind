"use client";

import React from "react";
import Banner from "@/app/home/Banner";
import Categories from "@/app/home/Categories";
import ProductList from "@/app/home/Productlist";

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