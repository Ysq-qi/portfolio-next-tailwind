"use client";

import React from "react";
import { Button } from "@/components/ui/form/button";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

interface ArrowButtonProps {
  direction: "left" | "right" | "up" | "down";
  onClick?: () => void;
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const Icon = direction === "left" ? ChevronLeft :
               direction === "right" ? ChevronRight :
               direction === "up" ? ChevronUp :
               ChevronDown;

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="h-10 w-10 rounded-full flex items-center justify-center"
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
};
