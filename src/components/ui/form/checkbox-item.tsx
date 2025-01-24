"use client";

import * as React from "react";
import { Checkbox, CheckboxProps } from "@/components/ui/form/checkbox";
import { cn } from "@/lib/utils/cn";

interface CheckboxItemProps extends CheckboxProps {
  label: string;
  id: string;
  className?: string;
}

const CheckboxItem = React.forwardRef<HTMLLabelElement, CheckboxItemProps>(
  ({ label, id, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={id}
        className={cn("flex items-center space-x-2", className)}
      >
        {/* 基礎的 checkbox 組件 */}
        <Checkbox id={id} {...props} />
        <span className="text-sm">{label}</span>
      </label>
    );
  }
);

CheckboxItem.displayName = "CheckboxItem";

export { CheckboxItem };
