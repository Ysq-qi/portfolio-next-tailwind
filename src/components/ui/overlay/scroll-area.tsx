"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils/cn";

/*
 relative overflow-hidden 讓滾動條限制在ScrollArea範圍內
 ScrollAreaPrimitive.Corner 讓滾動條能夠正確在ScrollArea裡面定位
 */
const ScrollAreaRoot = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    {children}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollAreaRoot.displayName = "ScrollAreaRoot";

/*
  overflow-y-auto 當內容超過視窗高度時 顯示滾動條
  hide-scrollbar 隱藏原生滾動條
 */
const ScrollAreaViewport = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cn("h-full w-full rounded-[inherit] overflow-y-auto hide-scrollbar", className)}
    {...props}
  >
    {children}
  </ScrollAreaPrimitive.Viewport>
));
ScrollAreaViewport.displayName = "ScrollAreaViewport";


/*
  自定義的滾動條
  ScrollAreaPrimitive.Scrollbar 可拖動全區
  ScrollAreaPrimitive.Thumb 拖動方塊
  absolute inset-y-0 right-0 w-[8px] 右側對齊
 */
const ScrollAreaScrollbar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    className={cn(
      "absolute inset-y-0 right-0 w-[8px] bg-white hover:bg-gray-100 transition-colors duration-200 ease-out",
      "rounded-xl touch-none select-none",
      className
    )}    
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="bg-gray-300 hover:bg-gray-500 rounded-xl w-full min-h-[20px] transition-all" />
  </ScrollAreaPrimitive.Scrollbar>
));
ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";

const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
});

export { ScrollArea };
