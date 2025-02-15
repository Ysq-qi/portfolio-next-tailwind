"use client";

import React, { useState, useEffect, ReactNode, useRef } from "react";
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
  // 監聽桌面/手機，決定一次顯示多少個 item
  const [pageSize, setPageSize] = useState(pageSizeDesktop);

  // offset 用來控制位移 (水平用 translateX, 垂直用 translateY)
  const [offset, setOffset] = useState(0);

  // 是否正在動畫中，避免使用者連續狂點箭頭
  const [isAnimating, setIsAnimating] = useState(false);

  // 我們會用 containerRef 來量測「父層容器」實際寬度
  const containerRef = useRef<HTMLDivElement>(null);

  // 每個 item 間的 gap 大小 (對應 `gap-4` -> 16px)
  const gapSize = 16;

  // 箭頭按鈕的寬度 (因為是 h-10 w-10)，實際上寬高約 40px
  // 若日後想調整，可以改這邊 (或改成 props 也行)
  const arrowButtonSize = 40;

  // 計算「children 的總數量」
  const totalItems = React.Children.count(children);

  // 監聽視窗寬度，動態切換 desktop/mobile 的 pageSize
  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth < 640 ? pageSizeMobile : pageSizeDesktop);
    };
    handleResize(); // 首次進入就判斷一次
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pageSizeDesktop, pageSizeMobile]);

  // 等到渲染完成後，計算「父層容器」的實際寬度 (若是垂直方向，則計算高度)
  const [containerSize, setContainerSize] = useState<number>(0);
  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // 如果是水平滑動，就取容器的 width
    // 如果是垂直滑動，就取容器的 height
    const size = direction === "horizontal" ? rect.width : rect.height;

    setContainerSize(size);
  }, [direction, children]); 
  // ↑ children 改變 (例如初次載入) 之後再量一次，避免 items 變化時寬度不正確

  // pageDimension 表示「內容可視區域的大小」，
  // 我們要將父層容器的大小 - (左右或上下箭頭大小)，才是「真正能放 item」的範圍
  // 先預設 0，等 useEffect 裡量完 containerSize 再計算
  const pageDimension = React.useMemo(() => {
    if (!containerSize) return 0;

    // 根據方向，扣掉兩個箭頭的空間
    // 水平：扣掉 2 * arrowButtonSize
    // 垂直：同理
    const arrowTotal = 2 * arrowButtonSize;

    // 最後得到「剩餘空間」
    const contentArea = containerSize - arrowTotal;
    return contentArea > 0 ? contentArea : 0;
  }, [containerSize, arrowButtonSize]);

  // adjustedTotalDimension = 內容總寬度/高度 (包括 gap)
  // totalDimension = totalItems * itemWidth，但還要加上 (totalItems - 1) * gapSize
  // 這樣最後一個 item 才不會「被切掉」
  const adjustedTotalDimension = React.useMemo(() => {
    return totalItems * itemWidth + (totalItems - 1) * gapSize;
  }, [totalItems, itemWidth, gapSize]);

  // 計算可以一次顯示多少 item，
  // 一般來說我們會用 pageSize * itemWidth，但因為有 gap，所以要加上 (pageSize - 1) * gapSize
  // 這是理想的顯示寬度，但實際也不能超過 pageDimension
  const idealPageWidth = React.useMemo(() => {
    // 理想寬度
    const width = pageSize * itemWidth + (pageSize - 1) * gapSize;
    // 如果實際可視空間 pageDimension 比理想寬度還小，就以 pageDimension 為主
    return pageDimension > 0 ? Math.min(pageDimension, width) : width;
  }, [pageSize, itemWidth, gapSize, pageDimension]);

  // 用來決定「每次按箭頭移動多少距離 (shift)」，
  // 通常會一次移動「一整頁(idealPageWidth)」，或某種單位
  const shiftDistance = idealPageWidth;

  // 計算 maxOffset (最左/最上可移動到的值為 0，最右/最下可移到多少？)
  // maxOffset = -(adjustedTotalDimension - idealPageWidth)
  // 表示「全部長度 - 一頁長度」之後再取負，才能確保最後一個 item 也能完整顯示
  const maxOffset = React.useMemo(() => {
    if (adjustedTotalDimension <= idealPageWidth) {
      // 如果「所有 item 的總寬度」比「一頁」還小，那就根本不用移動
      return 0;
    }
    return -(adjustedTotalDimension - idealPageWidth);
  }, [adjustedTotalDimension, idealPageWidth]);

  // 監聽箭頭點擊 -> 控制 offset
  const handleArrowClick = (dir: "left" | "right" | "up" | "down") => {
    if (isAnimating) return; // 避免連按
    setIsAnimating(true);

    setOffset((prevOffset) => {
      if (dir === "left" || dir === "up") {
        // 向左/向上移動，offset 要增加 (往 0 靠近)
        const newOffset = prevOffset + shiftDistance;
        // 不可超過 0
        return Math.min(newOffset, 0);
      } else {
        // 向右/向下移動，offset 要減少
        const newOffset = prevOffset - shiftDistance;
        // 不可超過 maxOffset
        return Math.max(newOffset, maxOffset);
      }
    });

    // 0.8s 後動畫結束，允許再次點擊
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        // 父層容器，用來量測實際寬度/高度
        // 如果你的父層想自行設置寬度，可用 tailwind: `w-[1200px]` 之類
        // 這邊就不寫死寬度，交給外層 section
        "relative overflow-hidden flex items-center",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
    >
      {/* 左/上箭頭 */}
      <ArrowButton
        direction={direction === "horizontal" ? "left" : "up"}
        onClick={() => handleArrowClick(direction === "horizontal" ? "left" : "up")}
        className={
          // 如果 offset=0，代表已經在最左 (或最上)，按鈕應該失效
          offset === 0 ? "opacity-50 pointer-events-none" : ""
        }
      />

      {/* 滑動區域 (可視範圍) */}
      <div
        className={cn(
          "mx-2 flex justify-start items-center relative",
          // 只有在水平方向時，我們才需要限制「width」
          // 垂直時限制「height」
          direction === "horizontal" ? "overflow-hidden" : "overflow-hidden"
        )}
        style={{
          width: direction === "horizontal" ? `${idealPageWidth}px` : "auto",
          height: direction === "vertical" ? `${idealPageWidth}px` : "auto",
        }}
      >
        <div
          className={cn(
            "flex px-4",
            direction === "horizontal" ? "flex-row gap-4" : "flex-col gap-4"
          )}
          style={{
            // 水平用 translateX, 垂直用 translateY
            transform:
              direction === "horizontal"
                ? `translateX(${offset}px)`
                : `translateY(${offset}px)`,
            // 動畫
            transition: isAnimating ? "transform 0.8s ease" : "none",

            // 設置內容總寬度/高度
            width: direction === "horizontal" ? `${adjustedTotalDimension}px` : "auto",
            height: direction === "vertical" ? `${adjustedTotalDimension}px` : "auto",
          }}
        >
          {children}
        </div>
      </div>

      {/* 右/下箭頭 */}
      <ArrowButton
        direction={direction === "horizontal" ? "right" : "down"}
        onClick={() => handleArrowClick(direction === "horizontal" ? "right" : "down")}
        className={
          // 如果 offset <= maxOffset，代表已經在最右(或最下)，按鈕失效
          offset <= maxOffset ? "opacity-50 pointer-events-none" : ""
        }
      />
    </div>
  );
};

/**
 * ArrowButton
 *
 * 接收 direction 決定使用哪個 Icon (left, right, up, down)。
 * 此按鈕本身大小是 h-10 w-10 (約 40px)。
 * 你可以在上層用 arrowButtonSize 來計算要扣除多少空間。
 */
const ArrowButton: React.FC<{
  direction: "left" | "right" | "up" | "down";
  onClick?: () => void;
  className?: string;
}> = ({ direction, onClick, className }) => {
  // 根據方向使用不同的圖示
  const Icon =
    direction === "left"
      ? ChevronLeft
      : direction === "right"
      ? ChevronRight
      : direction === "up"
      ? ChevronUp
      : ChevronDown;

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center",
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
};
