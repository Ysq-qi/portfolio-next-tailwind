"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/overlay/accordion";

interface CategoryItem {
  parent: string;
  children: string[];
}

interface ProductCategoryProps {
  categories: CategoryItem[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ categories }) => {
  const label = `商品相關分類 (${categories.length})`;

  return (
    <Accordion type="single" collapsible className="space-y-2">
      <AccordionItem value="categories">
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 text-sm text-gray-700">
            {categories.map((item, idx) => (
              <li key={idx}>
                {item.parent} <span className="mx-1">/</span>
                {item.children.join("｜")}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCategory;
