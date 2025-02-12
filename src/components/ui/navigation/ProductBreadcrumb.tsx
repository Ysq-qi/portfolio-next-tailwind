"use client";

import React, { memo } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/navigation/breadcrumb";
import { categories, allProducts } from "@/data/mockData"; // 確保 mockData 內有 categories 和 allProducts

// **找到主分類的中文名稱**
function findCategoryZh(categoryId: string) {
  const cat = categories.find((c) => c.categoryId === categoryId);
  return cat?.labelZh || categoryId; // 使用 `labelZh`，回退使用 `categoryId`
}

// **找到子分類的中文名稱**
function findSubCategoryZh(categoryId: string, subCategoryEn: string) {
  const cat = categories.find((c) => c.categoryId === categoryId);
  const sub = cat?.subCategories.find((s) => s.labelEn === subCategoryEn);
  return sub?.labelZh || subCategoryEn; // 使用 `labelZh`，回退使用 `subCategoryEn`
}

// **從 `allProducts` 中根據 `productId` 找到對應的分類資訊**
function findProductById(productId: string) {
  for (const categoryId in allProducts) {
    for (const subCategoryEn in allProducts[categoryId]) {
      const product = allProducts[categoryId][subCategoryEn].find(
        (p) => p.id === productId
      );
      if (product) {
        return {
          product,
          categoryId,
          subCategoryEn,
        };
      }
    }
  }
  return null;
}

// **生成麵包屑**
function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  let result = [];

  // **商品詳情頁面 `/productdetail/:productId`**
  if (segments.length === 2 && segments[0] === "productdetail") {
    const productId = segments[1];
    const productData = findProductById(productId);

    if (productData) {
      const { product, categoryId, subCategoryEn } = productData;
      const categoryZh = findCategoryZh(categoryId);
      const subZh = findSubCategoryZh(categoryId, subCategoryEn);

      // **主分類**
      result.push({
        name: categoryZh,
        href: `/product/${categoryId}`,
      });

      // **子分類**
      result.push({
        name: subZh,
        href: `/product/${categoryId}/${subCategoryEn}`,
      });

      // **最後一層：顯示商品名稱**
      result.push({
        name: product.title,
        href: `/productdetail/${productId}`,
      });

      return result;
    }
  }

  // **瀏覽分類頁 `/product/:categoryId` 或 `/product/:categoryId/:subCategoryEn`**
  if (segments.length >= 2 && segments[0] === "product") {
    const categoryId = segments[1];
    const categoryZh = findCategoryZh(categoryId);
    result.push({
      name: categoryZh,
      href: `/product/${categoryId}`,
    });

    if (segments[2]) {
      const subCategoryEn = segments[2];
      const subZh = findSubCategoryZh(categoryId, subCategoryEn);
      result.push({
        name: subZh,
        href: `/product/${categoryId}/${subCategoryEn}`,
      });
    }
  }

  return result;
}

const ProductBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* 固定首頁 */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/">首頁</BreadcrumbLink>
        </BreadcrumbItem>

        {/* 動態麵包屑 */}
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default memo(ProductBreadcrumb);
