"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/form/button";
import { cn } from "@/lib/utils/cn";

export interface SectionData {
  id: string;
  label: string;
}

export interface SmoothScrollNavProps {
  sections: SectionData[];
  onSelect: (id: string) => void;
  className?: string;
}

// 導覽列的實際高度
const NAV_HEIGHT_FOR_ACTIVE_CHECK = 68;
// 給偵測緩衝區 防止錯位
const BUFFER = 50;

export const SmoothScrollNav: React.FC<SmoothScrollNavProps> = ({
  sections,
  onSelect,
  className,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // 紀錄區塊位置
  const [sectionPositions, setSectionPositions] = useState<
    { id: string; top: number; bottom: number }[]
  >([]);

  // 當 sections 或視窗大小變動時，重新計算位置
  useEffect(() => {
    const updateSectionPositions = () => {
      const positions = sections.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return { id: sec.id, top: 0, bottom: 0 };

        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = top + rect.height;
        return { id: sec.id, top, bottom };
      });

      setSectionPositions(positions);
    };

    updateSectionPositions();
    window.addEventListener("resize", updateSectionPositions);
    return () => window.removeEventListener("resize", updateSectionPositions);
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionPositions.length === 0) return;

      const scrollY = window.scrollY;
      const adjustedScrollY = scrollY + NAV_HEIGHT_FOR_ACTIVE_CHECK + BUFFER;
      const firstTop = sectionPositions[0].top;
      const lastBottom = sectionPositions[sectionPositions.length - 1].bottom;

      // 擴大固定導覽列的判定範圍
      if (adjustedScrollY >= firstTop && adjustedScrollY <= lastBottom) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // 增加緩衝區
      let currentActive: string | null = null;
      for (let i = 0; i < sectionPositions.length; i++) {
        const { id, top, bottom } = sectionPositions[i];

        if (adjustedScrollY >= top - BUFFER && adjustedScrollY < bottom) {
          currentActive = id;
          break;
        }
      }
      setActiveSectionId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionPositions]);

  return (
    <div className={cn("relative", className)}>
      <div style={{ height: isFixed ? NAV_HEIGHT_FOR_ACTIVE_CHECK : 0 }} />

      <nav
        className={cn(
          "bg-white z-1 border-b transition-all duration-300 flex justify-between",
          isFixed ? "fixed top-0 left-0 w-full" : "relative w-full"
        )}
        style={{ height: NAV_HEIGHT_FOR_ACTIVE_CHECK }}
      >
        <div className="max-w-5xl mx-auto flex flex-row items-center gap-2  h-full">
          {sections.map((section) => {
            const isActive = activeSectionId === section.id;
            return (
              <Button
                key={section.id}
                variant={isActive ? "navscrollactive" : "navscroll"}
                size={"lg"}
                onClick={() => onSelect(section.id)}
                className="whitespace-nowrap"
              >
                {section.label}
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
