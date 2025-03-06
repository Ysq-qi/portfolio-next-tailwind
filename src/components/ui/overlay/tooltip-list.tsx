"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipBox } from "@/components/ui/overlay/tooltip";

export const CurrencyTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export const InfoTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipBox side="right" className="w-[180px] text-xs leading-relaxed"> {/* leading-relaxed	行高1.625 */}
        這是一個資訊提示框，可以用來顯示額外的說明或指南。
      </TooltipBox>
    </Tooltip>
  </TooltipProvider>
);

export const HomeAllProductTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipBox side="left" align="start" alignOffset={-12} sideOffset={15} className="w-[180px] text-xs leading-relaxed">
        這個區域用來展示分批加載商品 <br/> 按鈕可以點擊加載更多商品
      </TooltipBox>
    </Tooltip>
  </TooltipProvider>
);

export const HomeCategoryProductTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipBox side="left" align="start" alignOffset={-12} sideOffset={15} className="w-[200px] text-xs leading-relaxed">
        這個區域用來展示主分類商品顯示 <br/> 按鈕可以點擊跳轉至商品列表
      </TooltipBox>
    </Tooltip>
  </TooltipProvider>
);