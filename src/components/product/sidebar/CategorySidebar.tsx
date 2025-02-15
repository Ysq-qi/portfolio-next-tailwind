"use client";

import React from "react";
import CategoryList from "../list/CategoryList";
import PriceFilter from "./PriceFilter";
import PaymentOptions from "./PaymentOptions";
import ShippingOptions from "./ShippingOptions";
import { Separator } from "@/components/ui/utils/separator";

import { useFilterContext } from "@/context/FilterContext";

const CategorySidebar: React.FC = () => {
  const {
    selectedPaymentMethods,
    selectedShippingMethods,
    setSelectedPaymentMethods,
    setSelectedShippingMethods,
  } = useFilterContext();

  const handlePaymentChange = (newSelected: string[]) => {
    setSelectedPaymentMethods(newSelected);
  };
  const handleShippingChange = (newSelected: string[]) => {
    setSelectedShippingMethods(newSelected);
  };

  return (
    <div className="w-full sm:w-[200px] md:w-[270px] border-r bg-white shadow p-4 my-4 space-y-6">
      <CategoryList />
      <Separator />
      <PriceFilter />
      <Separator />
      <PaymentOptions
        selected={selectedPaymentMethods}
        onChange={handlePaymentChange}
      />
      <Separator />
      <ShippingOptions
        selected={selectedShippingMethods}
        onChange={handleShippingChange}
      />
    </div>
  );
};

export default CategorySidebar;