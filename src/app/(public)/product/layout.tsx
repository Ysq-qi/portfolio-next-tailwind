import React from "react";
import type { Metadata } from "next";
import ProductBreadcrumb from "@/components/ui/navigation/ProductBreadcrumb";
import CategorySidebar from "@/components/product/sidebar/CategorySidebar";
import { FilterProvider } from "@/context/FilterContext";

export const metadata: Metadata = {
  title: "Next.js網站 | 商品列表",
  description: "這裡是商品列表",
};
interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <FilterProvider>
      <div className="flex flex-col w-full">
        <div className="ml-4 mt-2">
          <ProductBreadcrumb />
        </div>

        <div className="flex w-full mt-2">
          <aside className="hidden sm:block w-[200px] mr-4">
            <CategorySidebar />
          </aside>

          <div className="flex-1 flex flex-col gap-4">
            {children}
          </div>
        </div>
      </div>
    </FilterProvider>
  );
};

export default ProductLayout;
