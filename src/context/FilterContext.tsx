"use client";

import React, { createContext, useContext, useState } from "react";

interface FilterContextValue {
  selectedPaymentMethods: string[];
  selectedShippingMethods: string[];
  setSelectedPaymentMethods: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedShippingMethods: React.Dispatch<React.SetStateAction<string[]>>;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<string[]>([]);
  const [selectedShippingMethods, setSelectedShippingMethods] = useState<string[]>([]);

  const clearFilters = () => {
    setSelectedPaymentMethods([]);
    setSelectedShippingMethods([]);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedPaymentMethods,
        selectedShippingMethods,
        setSelectedPaymentMethods,
        setSelectedShippingMethods,
        clearFilters, // 提供 `clearFilters` 方法
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
