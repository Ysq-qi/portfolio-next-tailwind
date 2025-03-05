"use client";

import React from "react";
import { InfoTooltip } from "@/components/ui/overlay/tooltip-list";

export default function TestPage6() {
  return (
    <InfoTooltip>
      <div className=" w-[180px] p-4 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600">
        滑鼠移上來試試看
      </div>
    </InfoTooltip>
  );
}
