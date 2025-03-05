"use client";

import Image from "next/image";
import { SmoothScrollNav, SectionData, SectionBlock } from "@/components/ui/navigation/scroll-section";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Page() {
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
    <div>
      { /* 全螢幕配置圖片 不受layout的app-container限制 */}
      <div className="relative left-1/2 right-1/2 w-screen ml-[-50vw] h-screen overflow-hidden">
        <Image
          src="/images/test1.jpg"
          alt="測試圖片"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* 滑動測試標題 */}
      <div className="text-center text-xl font-bold mt-10">這是測試平滑滾動跳轉</div>

      {/* 平滑滾動導航 */}
      <div className="p-4">
        <SmoothScrollNav sections={sections} onSelect={scrollToSection} className="mb-6" />
        <div className="space-y-10">
          <SectionBlock id="section1" title="第一區塊">
            <div>這裡放第一塊區域</div>
          </SectionBlock>
          <SectionBlock id="section2" title="第二區塊">
            <div>這裡放第二塊區域</div>
          </SectionBlock>
          <SectionBlock id="section3" title="第三區塊">
            <div>這裡放第三塊區域</div>
          </SectionBlock>
          <SectionBlock id="section4" title="第四區塊">
            <div>這裡放第四塊區域</div>
          </SectionBlock>
          <SectionBlock id="section5" title="第五區塊">
            <div>這裡放第五塊區域</div>
          </SectionBlock>
          <SectionBlock id="section6" title="第六區塊">
            <div>這裡放第六塊區域</div>
          </SectionBlock>
        </div>
      </div>
    </div>
  );
}
