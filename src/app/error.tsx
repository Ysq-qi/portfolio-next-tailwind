'use client';

import { useEffect, useState } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    console.error("發生錯誤:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">發生錯誤</h1>
      <p className="text-gray-600 mt-2">我們遇到了一些問題，請稍後再試。</p>

      {/* 只有開發環境才顯示錯誤細節 */}
      {process.env.NODE_ENV === "development" && (
        <button
          className="mt-2 text-sm text-gray-500 underline"
          onClick={() => setShowDetails(!showDetails)}
        >
          顯示錯誤細節
        </button>
      )}

      {showDetails && (
        <pre className="mt-4 bg-gray-100 p-4 rounded-md max-w-lg text-sm overflow-auto">
          {error.message}
        </pre>
      )}

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        重新載入
      </button>
    </div>
  );
}
