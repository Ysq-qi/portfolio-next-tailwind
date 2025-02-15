"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/overlay/accordion";
import {
  findCategoryIdByZh,
  findSubCategoryEnByZh,
} from "@/lib/utils/mapZhToId";

interface CategoryItem {
  parent: string;
  children: string[];
}

interface ProductCategoryProps {
  categories: CategoryItem[];
}

// 子分類渲染
const renderSubCategories = (categoryId: string | null, children: string[]) => {
  return children.map((subZh, subIdx) => {
    const subCategoryEn = categoryId ? findSubCategoryEnByZh(categoryId, subZh) : null;
    const needSplit = subIdx > 0 ? <span className="mx-1">｜</span> : null;

    return (
      <React.Fragment key={subIdx}>
        {needSplit}
        {subCategoryEn ? (
          <Link href={`/product/${categoryId}/${subCategoryEn}`} className="text-black font-black hover:underline">
            {subZh}
          </Link>
        ) : (
          <span>{subZh}</span>
        )}
      </React.Fragment>
    );
  });
};

// 主分類渲染
const renderCategoryItem = (item: CategoryItem, idx: number) => {
  const categoryId = findCategoryIdByZh(item.parent);

  return (
    <li key={idx}>
      {/* 父分類 */}
      {categoryId ? (
        <Link href={`/product/${categoryId}`} className="text-black font-black hover:underline">
          {item.parent}
        </Link>
      ) : (
        <span>{item.parent}</span>
      )}

      <span className="mx-1">/</span>

      {/* 子分類 */}
      {renderSubCategories(categoryId, item.children)}
    </li>
  );
};

// 全部類別
const ProductCategory: React.FC<ProductCategoryProps> = ({ categories }) => {
  const label = `商品相關分類 (${categories.length})`;

  return (
    <Accordion type="single" collapsible className="space-y-2">
      <AccordionItem value="categories">
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 text-sm text-gray-700">
            {categories.map(renderCategoryItem)}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCategory;
