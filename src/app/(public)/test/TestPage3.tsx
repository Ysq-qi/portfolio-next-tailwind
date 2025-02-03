"use client";

import React from "react";
import { SmoothScrollNav, SectionData } from "@/components/ui/SmoothScrollNav";
import { SectionBlock } from "@/components/ui/SectionBlock";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const TestPage3: React.FC = () => {
  const sections: SectionData[] = [
    { id: "section1", label: "第一區塊" },
    { id: "section2", label: "第二區塊" },
    { id: "section3", label: "第三區塊" },
    { id: "section4", label: "第四區塊" },
    { id: "section5", label: "第五區塊" },
    { id: "section6", label: "第六區塊" },

  ];

  const { scrollToSection } = useSmoothScroll();

  return (
    <div className="p-4">
      <SmoothScrollNav sections={sections} onSelect={scrollToSection} className="mb-6" />

      <div className="space-y-10">
        <SectionBlock id="section1" title="第一區塊">
          <p>1</p>
        </SectionBlock>
        <SectionBlock id="section2" title="第二區塊">
          <p>2</p>
        </SectionBlock>
        <SectionBlock id="section3" title="第三區塊">
          <p>3</p>
        </SectionBlock>
        <SectionBlock id="section4" title="第四區塊">
          <p>4</p>
        </SectionBlock>
        <SectionBlock id="section5" title="第五區塊">
          <p>5</p>
        </SectionBlock>
        <SectionBlock id="section6" title="第六區塊">
          <p>6</p>
        </SectionBlock>

      </div>
    </div>
  );
};

export default TestPage3;
