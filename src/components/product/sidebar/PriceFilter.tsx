"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/form/input";
import { Button } from "@/components/ui/form/button";
import { useFilterContext } from "@/context/FilterContext";

const PriceFilter: React.FC = () => {
  const {
    globalMinPrice,
    globalMaxPrice,
    selectedMinPrice,
    selectedMaxPrice,
    setSelectedMinPrice,
    setSelectedMaxPrice,
  } = useFilterContext();

  const [tempMinPrice, setTempMinPrice] = useState(selectedMinPrice);
  const [tempMaxPrice, setTempMaxPrice] = useState(selectedMaxPrice);

  const handleTempMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMinPrice(e.target.value);
  };

  const handleTempMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMaxPrice(e.target.value);
  };

  // 當context的selectedPrice發生變化時(變為"") 則同時去變更組件內的tempPrice值
  useEffect(() => {
    setTempMinPrice(selectedMinPrice);
    setTempMaxPrice(selectedMaxPrice);
  }, [selectedMinPrice, selectedMaxPrice]);

  // 篩選按鈕
  const handleFilter = () => {
    setSelectedMinPrice(tempMinPrice);
    setSelectedMaxPrice(tempMaxPrice);
  };

  return (
    <div className="space-y-4">
      {/* 標題 */}
      <div className="text-[16px] font-black text-gray-900 mb-4">價格區間</div>

      {/* 區間說明文字 */}
      <p className="text-sm text-gray-600">
        (原始區間：NT${globalMinPrice} - NT${globalMaxPrice})
      </p>

      {/* 輸入區塊 */}
      <div className="flex gap-2">
        <Input
          variant="pricefilter"
          placeholder="最低"
          value={tempMinPrice}
          onChange={handleTempMinPriceChange}
        />
        <span className="mt-2">—</span>
        <Input
          variant="pricefilter"
          placeholder="最高"
          value={tempMaxPrice}
          onChange={handleTempMaxPriceChange}
        />
      </div>

      {/* 篩選按鈕 */}
      <div className="space-y-4 m-2 flex items-end justify-end h-full">
        <Button onClick={handleFilter} variant="dark" size="default">
          篩選
        </Button>
      </div>
    </div>
  );
};

export default PriceFilter;