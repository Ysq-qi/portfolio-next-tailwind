"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils/cn";

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

const TooltipBox = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, side = "top", ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      side={side}
      className={cn(
        "relative z-50 rounded-md bg-gray-900 text-white text-sm p-1.5 shadow-md",
        "animate-in fade-in-0 zoom-in-95",
        "data-[side=top]:slide-in-from-bottom-2",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "before:absolute before:w-2 before:h-2 before:bg-gray-900 before:rotate-45",
        "before:data-[side=top]:-bottom-1 before:data-[side=top]:left-1/2 before:data-[side=top]:-translate-x-1/2",
        "before:data-[side=bottom]:-top-1 before:data-[side=bottom]:left-1/2 before:data-[side=bottom]:-translate-x-1/2",
        "before:data-[side=left]:-right-1 before:data-[side=left]:top-1/2 before:data-[side=left]:-translate-y-1/2",
        "before:data-[side=right]:-left-1 before:data-[side=right]:top-1/2 before:data-[side=right]:-translate-y-1/2",
        className
      )}
      {...props}
    />
  );
});
TooltipBox.displayName = "TooltipBox";

export { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent , TooltipBox }
