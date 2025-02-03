"use client";

import React from "react";
import TestPage1 from "@/app/(public)/test/TestPage1";
import TestPage2 from "@/app/(public)/test/TestPage2";
import TestPage3 from "@/app/(public)/test/TestPage3";
import Loading from "@/components/ui/feedback/loading"
import { CheckIcon } from "@/components/ui/icons/icons";

const TestPage: React.FC = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="p-4">
      <TestPage3 />
    </div>
  );
};

export default TestPage;
