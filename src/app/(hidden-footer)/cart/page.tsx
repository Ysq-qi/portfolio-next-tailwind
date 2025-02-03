"use client";

import React from "react";
import { Separator } from "@/components/ui/utils/separator";

const CartPage: React.FC = () => {
  return (
    <div className="w-screen min-h-[calc(100vh-100px)] flex flex-col justify-between bg-[#f0f0f0] relative -ml-[50vw] left-1/2">
      {/* 主要內容區域 */}
      <div className="flex flex-col items-center flex-grow w-full">
        <div className="flex w-[1200px] gap-6">
          {/* 左側區域 */}
          <div className="w-[800px] flex flex-col gap-4">
            {/* 購物車商品區塊 */}
            <h2 className="text-2xl font-semibold ml-4 mt-6">購物車</h2>
            <div className="w-[780px] min-h-[400px] bg-white rounded-xl mx-2"></div>

            {/* 人氣商品推薦 */}
            <div className="w-[780px] h-[330px] bg-white rounded-xl mx-2">
              <h2 className="text-xl font-black mt-6 ml-6">\人氣商品推薦/</h2>
            </div>
          </div>

          {/* 右側區域 */}
          <div className="w-[400px] flex flex-col gap-6 mt-14">
            <div className="w-[380px] h-[75px] bg-white rounded-xl p-4 flex items-center justify-between">
              <span className="text-[18px] font-black ml-2">優惠券與優惠碼</span>
              <button className="text-blue-500 text-base font-bold mr-2">
                選擇或輸入 {'>'}
              </button>
            </div>

            {/* 金額明細 */}
            <div className="w-[380px] h-[220px] bg-white rounded-xl p-6 shadow">
              <h2 className="text-xl font-black">小計明細</h2>

              {/* 商品資訊 */}
              <p className="text-sm text-gray-700 mt-4 font-bold">XXXX購物帳號</p>
              <div className="flex justify-between text-gray-800 text-sm font-bold mt-2">
                <span>商品金額</span>
                <span>NT$78</span>
              </div>

              {/* 分隔線 */}
              <Separator className="my-3" />

              {/* 小計金額 */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">小計</span>
                <span className="text-lg font-bold text-[#7f0019]">NT$78</span>
              </div>

              {/* 貨幣資訊 */}
              <div className="flex items-center justify-end text-gray-500 text-sm font-bold mt-4">
                <span>皆以 TWD 付款</span>
                <span className="ml-2 text-gray-500 cursor-pointer">ℹ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部小計（固定在底部，高度75px） */}
      <div className="w-screen h-[75px] bg-white flex items-center justify-center shadow-2xl fixed bottom-0 left-0">
        <div className="w-[1200px] flex items-center justify-end">
          <div className="mt-2">
            <span className="text-sm text-black font-black">小計 </span>
            <span className="text-lg text-[#7f0019] font-black mr-8">NT$0</span>
          </div>
          <button className="bg-black text-white w-[200px] h-[50px] rounded-lg text-lg font-semibold">
            前往結帳
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
