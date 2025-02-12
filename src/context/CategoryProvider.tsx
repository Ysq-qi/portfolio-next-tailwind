/* "use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { categories as mockCategories } from "@/data/mockData";

const CategoryContext = createContext(mockCategories);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState(mockCategories);

  useEffect(() => {
    async function fetchCategories() {
      setCategories(mockCategories); 
    }
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoryContext);
}

*/