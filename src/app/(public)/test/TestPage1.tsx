"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/overlay/scroll-area";

interface TestPage1Props {
  items: string[];
}

const TestPage1: React.FC<TestPage1Props> = ({ items }) => {
  const viewportRef = React.useRef<HTMLDivElement>(null!);

  return (
    <ScrollArea className="custom-scroll-area max-w-[300px] w-full">
      <ScrollArea.Viewport ref={viewportRef} className="h-[200px] w-[300px] custom-scroll-viewport">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="p-2 bg-gray-100 border border-gray-300">
              {item}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" forceMount />
    </ScrollArea>
  );
};

export default TestPage1;
