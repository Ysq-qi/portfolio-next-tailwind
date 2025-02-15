import React from "react";
import ProductBreadcrumb from "@/components/ui/navigation/ProductBreadcrumb";
import DetailSidebar from "@/components/product/detail/DetailSidebar";

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductDetailLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full ">
      <div  className="ml-4 mt-2">
        <ProductBreadcrumb />
      </div>
      <div className="flex w-full mt-2">
        <aside className="hidden sm:block w-[200px] mr-4">
          <DetailSidebar />
        </aside>
        <div className="flex-1 flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default ProductDetailLayout;
