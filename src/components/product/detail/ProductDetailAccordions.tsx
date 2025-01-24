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
    <div className="w-[445px] flex flex-col space-y-6 px-6">
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
