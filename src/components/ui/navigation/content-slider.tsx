"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/form/button";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ContentSliderProps {
  children: ReactNode;
  itemWidth: number;
  pageSizeDesktop?: number;
  pageSizeMobile?: number;
  direction?: "horizontal" | "vertical";
  className?: string;
}

export const ContentSlider: React.FC<ContentSliderProps> = ({
  children,
  itemWidth,
  pageSizeDesktop = 10,
  pageSizeMobile = 3,
  direction = "horizontal",
  className,
}) => {
  const [pageSize, setPageSize] = useState(pageSizeDesktop);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth < 640 ? pageSizeMobile : pageSizeDesktop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pageSizeDesktop, pageSizeMobile]);

  const pageDimension = pageSize * itemWidth;
  const totalItems = React.Children.count(children);
  const totalDimension = totalItems * itemWidth;
  const maxOffset = totalDimension > pageDimension ? -(totalDimension - pageDimension) : 0;

  /** 點擊箭頭控制滾動 */
  const handleArrowClick = (dir: "left" | "right" | "up" | "down") => {
    if (isAnimating) return;
    setIsAnimating(true);
    const shift = pageDimension;

    setOffset((prev) => {
      if ((dir === "left" || dir === "up") && prev < 0) {
        return Math.min(prev + shift, 0);
      } else if ((dir === "right" || dir === "down") && prev > maxOffset) {
        return Math.max(prev - shift, maxOffset);
      }
      return prev;
    });

    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div
      className={cn(
        "relative flex items-center",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
    >
      {/* 左箭頭 */}
      <ArrowButton
        direction={direction === "horizontal" ? "left" : "up"}
        onClick={() => handleArrowClick(direction === "horizontal" ? "left" : "up")}
        className={offset === 0 ? "opacity-50 pointer-events-none" : ""}
      />

      {/* 可視區域 */}
      <div
        className="overflow-hidden mx-2 flex justify-start items-center relative"
        style={{
          width: direction === "horizontal" ? `${pageDimension}px` : "auto",
          height: direction === "vertical" ? `${pageDimension}px` : "auto",
        }}
      >
        <div
          className={cn("flex gap-4 px-4", direction === "horizontal" ? "flex-row" : "flex-col")}
          style={{
            transform: direction === "horizontal" ? `translateX(${offset}px)` : `translateY(${offset}px)`,
            transition: isAnimating ? "transform 0.8s ease" : "none",
            width: direction === "horizontal" ? `${totalDimension}px` : "auto",
            height: direction === "vertical" ? `${totalDimension}px` : "auto",
          }}
        >
          {children}
        </div>
      </div>

      {/* 右箭頭 */}
      <ArrowButton
        direction={direction === "horizontal" ? "right" : "down"}
        onClick={() => handleArrowClick(direction === "horizontal" ? "right" : "down")}
        className={offset <= maxOffset ? "opacity-50 pointer-events-none" : ""}
      />
    </div>
  );
};

// ArrowButton 組件 
const ArrowButton: React.FC<{
  direction: "left" | "right" | "up" | "down";
  onClick?: () => void;
  className?: string;
}> = ({ direction, onClick, className }) => {
  const Icon = direction === "left" ? ChevronLeft :
               direction === "right" ? ChevronRight :
               direction === "up" ? ChevronUp :
               ChevronDown;

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn("h-10 w-10 rounded-full flex items-center justify-center", className)}
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
};
