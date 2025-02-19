"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundClient() {
  const router = useRouter();
  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    // 設定倒數計時
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // 倒數結束時清除計時器
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 設定自動跳轉
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 3000);

    // 清理計時器
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-600 mt-1">將在 {countdown} 秒後跳轉至首頁...</p>

      <button
        onClick={() => router.push("/")}
         className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        立即返回首頁
      </button>
    </div>
  );
}
