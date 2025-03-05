"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/overlay/alert-dialog";

export default function TestPage7() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {/* 觸發 AlertDialog 的按鈕 */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <div className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            點擊刪除商品
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent onClose={() => setOpen(false)}>
          <AlertDialogHeader>
            <AlertDialogTitle>刪除購物車商品</AlertDialogTitle>
            <AlertDialogDescription>
              是否確定要刪除此商品？這個動作無法復原！
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              不要刪除
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-gray-900 hover:bg-gray-700 text-white"
              onClick={() => {
                setOpen(false);
              }}
            >
              刪除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
