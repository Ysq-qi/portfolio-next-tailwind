'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog'; // Radix 提供的 Dialog 基礎功能
import { cva, type VariantProps } from 'class-variance-authority'; // 用於管理樣式變體
import { X } from 'lucide-react'; // 使用 lucide-react 的圖標庫
import { cn } from '@/lib/utils/cn'; // 用於處理 className 合併

// 根組件，管理 Sheet 的開啟和關閉
const Sheet = SheetPrimitive.Root;

// 用於觸發 Sheet 的按鈕
const SheetTrigger = SheetPrimitive.Trigger;

// 關閉按鈕（例如右上角的叉號）
const SheetClose = SheetPrimitive.Close;

// Portal：將側邊欄插入到頁面的頂層 DOM 中
const SheetPortal = SheetPrimitive.Portal;

// 背景遮罩層，模糊焦點以外的區域
const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// 定義樣式變體（方向、動畫）
const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b',
        bottom: 'inset-x-0 bottom-0 border-t',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right', // 默認從右側滑出
    },
  }
);

// 定義 SheetContentProps
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

// 內容區域
const SheetContent = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay /> {/* 背景遮罩 */}
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-5 top-5">
        <X className="h-6 w-6 " />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

// 標題
const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn('text-lg ', className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

// 描述
const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn(className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
};
