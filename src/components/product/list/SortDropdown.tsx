"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/select";
import { useFilterContext } from "@/context/FilterContext";

const sortOptions = [
  { value: "default", label: "預設排序" },
  { value: "price-asc", label: "價格：由低到高" },
  { value: "price-desc", label: "價格：由高到低" },
];

const SortDropdown: React.FC = () => {
  const { selectedSort, setSelectedSort } = useFilterContext();

  const handleChange = (value: string) => {
    if (value === "price-asc" || value === "price-desc" || value === "default") {
      setSelectedSort(value);
    }
  };

  return (
    <div className="flex items-center justify-end space-x-4">
      <Select value={selectedSort} onValueChange={handleChange}>
        <SelectTrigger id="sortSelect" className="w-[160px]">
          <SelectValue placeholder="選擇排序" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortDropdown;