"use client";

import React from "react";
import TestPage1 from "@/app/test/TestPage1";
import TestPage2 from "@/app/test/TestPage2";
import Loading from "@/ui/feedback/loading"
import { CheckIcon } from "@/components/ui/icons/icons";

const TestPage: React.FC = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="p-4">
            <CheckIcon />
      <h2 className="text-lg font-bold mb-4">測試滾動條</h2>
      <TestPage1 items={items} />
      <Loading />
      <TestPage2 />
    </div>
  );
};

export default TestPage;
