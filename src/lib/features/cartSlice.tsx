"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/types/index"

// type型別
interface CartState {
  items: CartItem[];
}

// 從 localStorage 讀取初始值
const loadCartFromLocalStorage = (): CartState => {
  if (typeof window === "undefined") return { items: [] };
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { items: [] };
  } catch (error) {
    console.error("載入購物車失敗:", error);
    return { items: [] };
  }
};

// 寫入 localStorage
const saveCartToLocalStorage = (cart: CartState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("儲存購物車失敗:", error);
  }
};

// 初始狀態
const initialState: CartState = { items: [] };

// 建立 cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && 
                  item.color === action.payload.color &&
                  item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      saveCartToLocalStorage(state); // 儲存到 localStorage
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state); // 儲存到 localStorage
    },

    updateQuantity: (state, action: PayloadAction<{ id: string; change: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + action.payload.change);
      }
      saveCartToLocalStorage(state); // 儲存到 localStorage
    },

    // 讓組件掛載時利用dispatch調用這個Redux reducer
    initializeCart: (state) => {
      const cartData = loadCartFromLocalStorage();
      state.items = cartData.items;
    },
  },
});

// 匯出 Actions & Reducer
export const { addToCart , removeFromCart, updateQuantity, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;

/* 
  PayloadAction
  Redux toolkit當中 用於檢測型別

  當執行reudcer時 使用PayloadAction<X>時
  代表這個reducer需要有 interface x 的物件 才可以執行
  否則會報錯!

  但不會影響實際js運行
  因為typescript是開發時的檢測工具
  並沒有存在執行時的 約束力
  最終ts會轉譯成js在瀏覽器上執行
*/