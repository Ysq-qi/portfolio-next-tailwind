"use client";

import React from "react";
import { Button } from "@/components/ui/form/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
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
