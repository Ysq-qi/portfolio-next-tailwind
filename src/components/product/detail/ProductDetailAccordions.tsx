"use client";

import React from "react";
import PaymentAndShipping from "./PaymentAndShipping";
import ProductFeature from "./ProductFeature";
import ProductCategory from "./ProductCategory";
import { Separator } from "@/components/ui/utils/separator";

interface ProductDetailAccordionsProps {
  paymentMethods?: string[];
  shippingMethods?: string[];
  productDetails?: { label: string; value: string }[];
  categories: {
    parent: string;
    children: string[];
  }[];
}

const ProductDetailAccordions: React.FC<ProductDetailAccordionsProps> = ({
  paymentMethods = [],
  shippingMethods = [],
  productDetails = [],
  categories = [],
}) => {
  return (
    <div className="w-full pr-2 lg:w-[445px] flex flex-col lg:space-y-6 lg:px-6">
      <PaymentAndShipping
        paymentMethods={paymentMethods}
        shippingMethods={shippingMethods}
      />
      <Separator />
      <ProductFeature productDetails={productDetails} />
      <Separator />
      <ProductCategory categories={categories} />
    </div>
  );
};

export default ProductDetailAccordions;
