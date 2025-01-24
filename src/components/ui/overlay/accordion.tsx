"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";


export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b last:border-none", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "group flex justify-between items-center w-full py-2 pr-2 font-bold text-gray-800 hover:underline",
      "transition-all",
      className
    )}
    {...props}
  >
    <span>{children}</span>
    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
  </AccordionPrimitive.Trigger>
));
AccordionTrigger.displayName = "AccordionTrigger";

/**
 * -----------------------------------------------------
 * 1. 視覺維持箭頭的 (h-4 w-4) 
 * 2. 點擊範圍卻要加大
 * 3. Accordion 展開時，箭頭會旋轉
 * -----------------------------------------------------
 */
export const CategoryAccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({
  className,
  children,
  ...props
}, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "group relative inline-flex items-center justify-center",
      "focus:outline-none", 
      className
    )}
    {...props}
  >
    {/*
      1. 這個 <span> 不會有任何可見的背景或邊框，但擴大了點擊範圍。
      2. inset-0 表示覆蓋整個父容器，再用 -m-2 等負邊距讓點擊區域往外多延伸 2px。
         (可自行調整 -m-2 -> -m-3 或 -m-4, 來加大點擊區域)
      3. 不影響畫面上的大小，也不會改變 layout。
    */}
    <span className="absolute inset-0 -m-2" />

    {/*
      1. 這裡才是真正顯示的箭頭大小：h-4 w-4
      2. 用 group-data-[state=open]:rotate-180 來旋轉
      3. transition-transform 讓旋轉有平滑動畫
    */}
    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
  </AccordionPrimitive.Trigger>
));
CategoryAccordionTrigger.displayName = "CategoryAccordionTrigger";


export const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm font-bold ml-2 mb-2 transition-all",
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      className
    )}
    {...props}
  >
    <div className="pt-2">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
