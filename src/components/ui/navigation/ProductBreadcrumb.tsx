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
import { categories } from "@/app/(public)/product/data/categories";

function findCategoryZh(categoryId: string) {
  const cat = categories.find((c) => c.categoryId === categoryId);
  return cat?.titleZh || categoryId;
}
function findSubCategoryZh(categoryId: string, subCategoryEn: string) {
  const cat = categories.find((c) => c.categoryId === categoryId);
  const sub = cat?.subCategories.find(s => s.labelEn === subCategoryEn);
  return sub?.labelZh || subCategoryEn;
}

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  let result = [];
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
        <BreadcrumbItem>
          <BreadcrumbLink href="/">首頁</BreadcrumbLink>
        </BreadcrumbItem>

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
