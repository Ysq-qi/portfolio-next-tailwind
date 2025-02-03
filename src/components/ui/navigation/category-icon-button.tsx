"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";

interface CategoryButtonProps {
  label: string;
  icon: React.ElementType;
  className?: string;
}

export const CategoryIconButton: React.FC<CategoryButtonProps> = ({
  label,
  icon: Icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-[90px] h-[120px] flex flex-col items-center justify-center text-center",
        className
      )}
    >
      <Icon className="mb-2 h-8 w-8 text-gray-700" />
      <span className="text-sm text-gray-800">{label}</span>
    </div>
  );
};
