import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addToCart } from "@/lib/features/cartSlice";

// 建立 Redux Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { addToCart };

// 型別定義
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
