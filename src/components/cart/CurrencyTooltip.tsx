"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipBox } from "@/components/ui/overlay/tooltip";

const CurrencyTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipBox side="bottom" className="w-[300px] text-xs leading-relaxed">
          價格商品與運費皆以 TWD 計價，實際請款或退款需視當日匯率換算；交易手續費依發卡銀行規定。
          如有任何疑慮，請聯繫您的發卡銀行。<br />
          <span className="font-bold text-red-500">(僅供作品測試使用)</span>
        </TooltipBox>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CurrencyTooltip;
