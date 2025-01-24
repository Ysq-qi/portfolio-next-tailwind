"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/form/input";
import { Button } from "@/components/ui/form/button";

const PriceFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    console.log(`篩選價格區間：${minPrice} - ${maxPrice}`);
  };

  return (
    <div className="space-y-4">
      {/* 標題 */}
      <div className="text-[16px] font-black text-gray-900 mb-4">價格區間</div>
      {/* 區間說明文字 */}
      <p className="text-sm text-gray-600">(原始區間：NT$49 - NT$199)</p>

      {/* 輸入區塊 */}
      <div className="flex gap-2">
        <Input
          variant="pricefilter"
          placeholder="最低"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span className="mt-2">—</span>
        <Input
          variant="pricefilter"
          placeholder="最高"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
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
