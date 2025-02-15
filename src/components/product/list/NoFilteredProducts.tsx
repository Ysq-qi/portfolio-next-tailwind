import React from "react";
import { useFilterContext } from "@/context/FilterContext";

const NoFilteredProducts: React.FC = () => {
  const { clearFilters } = useFilterContext();

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-gray-200 rounded-lg">
      <p className="text-gray-800 text-lg mb-4">沒有商品符合篩選條件</p>
      <button
        onClick={clearFilters}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        清除所有篩選
      </button>
    </div>
  );
};

export default NoFilteredProducts;
