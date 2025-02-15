"use client";

import React from "react";
import { useRouter } from "next/navigation";

const UnderConstruction: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-3xl font-bold text-gray-800">🚧 頁面施工中 🚧</h1>
      <p className="text-gray-600 mt-2">此頁面仍在開發中，敬請期待！</p>
      <button
        onClick={() => router.push("/")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        返回首頁
      </button>
    </div>
  );
};

export default UnderConstruction;
