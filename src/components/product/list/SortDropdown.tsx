"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/select";

const sortOptions = [
  { value: "price-asc", label: "價格：由低到高" },
  { value: "price-desc", label: "價格：由高到低" },
  { value: "name-asc", label: "名稱：A-Z" },
  { value: "name-desc", label: "名稱：Z-A" },
];

const SortDropdown: React.FC = () => {
  const [selected, setSelected] = useState<string>(sortOptions[0].value);

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="flex items-center justify-end space-x-4">
      {/* 使用 Select */}
      <Select value={selected} onValueChange={handleChange}>
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
