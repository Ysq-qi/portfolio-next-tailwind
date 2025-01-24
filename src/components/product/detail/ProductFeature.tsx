"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/overlay/accordion";

interface ProductFeatureProps {
  productDetails: {
    label: string;
    value: string;
  }[];
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ productDetails }) => {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      <AccordionItem value="features">
        <AccordionTrigger>商品特色</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-1 text-sm text-gray-700">
            {productDetails.map((detail, idx) => (
              <li key={idx}>
                <strong>{detail.label}：</strong> {detail.value}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductFeature;
