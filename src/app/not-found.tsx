'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3); // 倒數 3 秒

  useEffect(() => {
    // 每秒更新一次倒數計時
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // 在 3 秒後自動跳轉到首頁
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl font-semibold mt-2">頁面不存在</p>
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
