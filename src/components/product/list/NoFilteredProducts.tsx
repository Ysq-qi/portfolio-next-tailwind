import React from "react";
import { useFilterContext } from "@/context/FilterContext";
import { Button } from "@/components/ui/form/button"

const NoFilteredProducts: React.FC = () => {
  const { clearFilters } = useFilterContext();

  return (
    <div className="flex flex-col items-center justify-center w-[400px] h-[200px] text-center p-8 border border-gray-200 rounded-xl">
      <p className="text-gray-800 text-lg mb-4">沒有商品符合篩選條件</p>
      <Button
        onClick={clearFilters}
        size="lg"
        variant="dark"
      >
        清除所有篩選
      </Button>
    </div>
  );
};

export default NoFilteredProducts;
