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

export const CategoryAccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({
  className,
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
    <span className="absolute inset-0 -m-2" />
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
