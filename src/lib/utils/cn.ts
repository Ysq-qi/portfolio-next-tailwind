import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/* 
  clsx 用於條件式組合 自動忽略false null undefined等格式
  twMerge 移除Tailwind衝突 保留最後一個樣式
*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
