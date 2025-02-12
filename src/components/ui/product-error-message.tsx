"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = "錯誤",
  message,
  className,
}) => {
  const router = useRouter();

  if (!message) return null;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 p-4 text-black rounded-md shadow-md w-full max-w-sm mx-auto",
        className
      )}
    >
      {/* 圖示與標題 */}
      <div className="flex items-center gap-2">
        <AlertCircle className="w-6 h-6" />
        <span className="font-bold text-lg">{title}</span>
      </div>

      {/* 內容 */}
      <p className="text-center text-sm">{message}</p>

      {/* 回首頁按鈕 */}
      <button
        onClick={() => router.push("/")}
        className="mt-2 px-4 py-2 text-sm bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
      >
        回首頁
      </button>
    </div>
  );
};

export default ErrorMessage;
