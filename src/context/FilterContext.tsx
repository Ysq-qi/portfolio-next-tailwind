"use client";

import React, { createContext, useContext, useState } from "react";

type SortOption = "default" | "price-asc" | "price-desc";

interface FilterContextValue {
  globalMinPrice: number | null;
  globalMaxPrice: number | null;
  selectedMinPrice: string;
  selectedMaxPrice: string;
  selectedPaymentMethods: string[];
  selectedShippingMethods: string[];
  selectedSort: SortOption;

  // 原始資料 最小/最大值
  setGlobalMinPrice: React.Dispatch<React.SetStateAction<number | null>>;
  setGlobalMaxPrice: React.Dispatch<React.SetStateAction<number | null>>;

  // 價格排序
  setSelectedMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setSelectedMaxPrice: React.Dispatch<React.SetStateAction<string>>;

  // 付款排序
  setSelectedPaymentMethods: React.Dispatch<React.SetStateAction<string[]>>;

  // 運送方式排序
  setSelectedShippingMethods: React.Dispatch<React.SetStateAction<string[]>>;

  // 既有排序
  setSelectedSort: React.Dispatch<React.SetStateAction<SortOption>>;

  // 清除篩選
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {

  const [globalMinPrice, setGlobalMinPrice] = useState<number | null>(null);
  const [globalMaxPrice, setGlobalMaxPrice] = useState<number | null>(null);

  const [selectedMinPrice, setSelectedMinPrice] = useState<string>("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<string>("");

  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<string[]>([]);
  const [selectedShippingMethods, setSelectedShippingMethods] = useState<string[]>([]);

  const [selectedSort, setSelectedSort] = useState<SortOption>("default");

  const clearFilters = () => {
    setSelectedMinPrice("");
    setSelectedMaxPrice(""); 
    setSelectedPaymentMethods([]);
    setSelectedShippingMethods([]);
    setSelectedSort("default");
  };

  return (
    <FilterContext.Provider
      value={{
        globalMinPrice,
        globalMaxPrice,
        selectedMinPrice,
        selectedMaxPrice,
        selectedPaymentMethods,
        selectedShippingMethods,
        selectedSort,

        setGlobalMinPrice,
        setGlobalMaxPrice,
        setSelectedMinPrice,
        setSelectedMaxPrice,
        setSelectedPaymentMethods,
        setSelectedShippingMethods,
        setSelectedSort,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext 必須在 FilterProvider 內使用");
  }
  return context;
}
