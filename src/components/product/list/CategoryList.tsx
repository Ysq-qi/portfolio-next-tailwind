"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  CategoryAccordionTrigger,
} from "@/components/ui/overlay/accordion";
import { categories } from "@/data/mockData";

const CategoryList: React.FC = () => {
  return (
    <Accordion type="multiple" className="space-y-2">
      <div className="text-[16px] font-black text-gray-900 mb-4">商品分類</div>
      {categories.map((cat, index) => (
        <AccordionItem key={index} value={`category-${index}`}>
          <div className="flex items-center justify-between px-2 py-2">
            {/* 主分類 */}
            <Link href={`/product/${cat.categoryId}`} passHref>
              <span className="text-gray-900 font-bold hover:underline text-[14.5px] cursor-pointer">
                {cat.labelZh}
              </span>
            </Link>
            <CategoryAccordionTrigger />
          </div>
          {/* 子分類 */}
          <AccordionContent>
            <ul className="pl-2 space-y-2 ">
              {cat.subCategories.map((sub) => (
                <li key={sub.labelEn}>
                  <Link href={`/product/${cat.categoryId}/${sub.labelEn}`} passHref>
                    <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                      {sub.labelZh}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CategoryList;
