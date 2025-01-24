import React from "react";
import ProductBreadcrumb from "@/components/ui/navigation/ProductBreadcrumb";
import CategorySidebar from "@/components/product/sidebar/CategorySidebar";

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full ">
      <div  className="ml-4 mt-2">
        <ProductBreadcrumb />
      </div>
      <div className="flex w-full mt-2">
        <aside className="hidden sm:block w-[200px] mr-4">
          <CategorySidebar />
        </aside>
        <div className="flex-1 flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default ProductLayout;
