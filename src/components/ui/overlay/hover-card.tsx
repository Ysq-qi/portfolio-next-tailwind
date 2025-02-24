"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils/cn";

// 定義 HoverCard 根容器
const HoverCard = HoverCardPrimitive.Root;

// 定義 HoverCard 的觸發按鈕
const HoverCardTrigger = HoverCardPrimitive.Trigger;

// 定義 HoverCard 的內容部分
const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    collisionBoundary={undefined}
    sideOffset={sideOffset}
    className={cn(
      "absolute top-full right-[-18] z-50 min-w-[160px] min-h-[160px] rounded-md border bg-white shadow-md outline-none",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
