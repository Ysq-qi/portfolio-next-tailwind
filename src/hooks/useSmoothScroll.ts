"use client";

import { useCallback } from "react";

// 用於點擊按鈕後滾動對齊的導覽列高度
const NAV_HEIGHT_WITH_OFFSET = 100;
const BUFFER = 0;

export function useSmoothScroll() {
  const scrollToSection = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    // 取得目標區塊頂端相對於整個頁面頂部的位置
    const rect = targetElement.getBoundingClientRect();
    const elementTop = window.scrollY + rect.top;

    // 在計算時把固定導覽列(68px) + buffer 扣掉
    const offsetTop = elementTop - NAV_HEIGHT_WITH_OFFSET - BUFFER;

    window.scrollTo({
      top: offsetTop < 0 ? 0 : offsetTop, // 避免負值
      behavior: "smooth",
    });
  }, []);

  return { scrollToSection };
}
