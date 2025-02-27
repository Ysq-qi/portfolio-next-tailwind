"use client";

import React from "react";
import ToastList from "@/components/ui/feedback/toast-list";

const TestPage2: React.FC = () => {

  return (
    <div className="p-4 space-y-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={ToastList.showAddSuccess}>
        加入收藏
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={ToastList.showDeleteSuccess}>
        刪除收藏
      </button>
      <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={ToastList.showAddSuccess}>
        加入商品卡片
      </button>
      <button className="px-4 py-2 bg-yellow-500 text-black rounded" onClick={ToastList.showDeleteSuccess}>
        刪除商品卡片
      </button>
      <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={ToastList.showAddLoading}>
        刷新頁面
      </button>
      <button className="px-4 py-2 bg-orange-500 text-white rounded" onClick={ToastList.showSubmitFail}>
        未提交成功
      </button>
      <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={ToastList.showDeleteSuccess}>
        刪除商品購物車
      </button>
      <button className="px-4 py-2 bg-yellow-400 text-black rounded" onClick={ToastList.showSelectWarning}>
        請先選取選項
      </button>


    </div>
  );
};

export default TestPage2;
