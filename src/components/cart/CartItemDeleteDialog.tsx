"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/overlay/alert-dialog";

interface CartItemDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CartItemDeleteDialog: React.FC<CartItemDeleteDialogProps> = ({ open, onClose, onConfirm }) => {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent onClose={onClose}>
        <AlertDialogHeader>
          <AlertDialogTitle>刪除購物車商品</AlertDialogTitle>
          <AlertDialogDescription>
              確認要刪除這個商品嗎？
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>取消</AlertDialogCancel>
          <AlertDialogAction
            className="bg-gray-900 hover:bg-gray-700 text-white"
            onClick={onConfirm}
          >
            刪除商品
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CartItemDeleteDialog;
