"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowButton } from "@/components/ui/navigation/arrow-button";
import { CategoryButton } from "@/components/ui/navigation/category-button";

interface ScrollableMenuProps {
  items: { label: string; icon: React.ElementType }[];
}

export const ScrollableMenu: React.FC<ScrollableMenuProps> = ({ items }) => {
  // (1) 一頁顯示數量: desktop=10, mobile=6
  const [pageSize, setPageSize] = useState(10);

  // (2) 目前所在「第幾頁」(0-based)
  const [currentPage, setCurrentPage] = useState(0);

  // pointer 拖曳狀態
  const [offsetX, setOffsetX] = useState(0);
  const pointerDown = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPageSize(3);
      } else {
        setPageSize(10);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 總頁數
  const totalPages = Math.ceil(items.length / pageSize);

  // 當前頁面的item
  const pageItems = items.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  // 按箭頭 => 翻頁
  const handleArrowClick = (dir: "left" | "right") => {
    if (dir === "left") {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    }
    setOffsetX(0);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDown.current = true;
    startX.current = e.clientX;
    startOffset.current = offsetX;
  };

  // pointermove => 拖曳暫時偏移
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDown.current) return;
    const delta = e.clientX - startX.current;
    setOffsetX(startOffset.current + delta);
  };

  // pointerup => 根據拖曳距離判斷是否翻頁
  const onPointerUpOrLeave = () => {
    pointerDown.current = false;
    const dragDistance = offsetX - startOffset.current;
    const THRESHOLD = 80; // 你可自行調整

    if (dragDistance < -THRESHOLD && currentPage < totalPages - 1) {
      // 往左拖 => 下一頁
      setCurrentPage((prev) => prev + 1);
    } else if (dragDistance > THRESHOLD && currentPage > 0) {
      // 往右拖 => 上一頁
      setCurrentPage((prev) => prev - 1);
    }
    // 翻完後 or 未超過閾值 -> 回彈
    setOffsetX(0);
  };

  return (
    <div className="relative w-full h-[250px] flex items-center">
      <ArrowButton
        direction="left"
        onClick={() => handleArrowClick("left")}
        className={currentPage === 0 ? "opacity-50 pointer-events-none" : ""}
      />

      <div
        className="flex-1 overflow-hidden mx-2 flex justify-start items-center relative"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUpOrLeave}
        onPointerLeave={onPointerUpOrLeave}
      >
        <div
          className="flex gap-4 px-4"
          style={{
            transform: `translateX(${offsetX}px)`,
            transition: pointerDown.current ? 'none' : 'transform 0.3s',
          }}
        >
          {pageItems.map((cat, idx) => (
            <CategoryButton key={idx} label={cat.label} icon={cat.icon} />
          ))}
        </div>
      </div>

      <ArrowButton
        direction="right"
        onClick={() => handleArrowClick("right")}
        className={
          currentPage === totalPages - 1 ? "opacity-50 pointer-events-none" : ""
        }
      />
    </div>
  );
};
