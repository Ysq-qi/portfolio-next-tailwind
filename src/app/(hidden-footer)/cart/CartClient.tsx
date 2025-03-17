"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/utils/separator";
import { CartCard } from "@/components/cart/ProductCardCart";
import { ContentSlider } from "@/components/ui/navigation/content-slider";
import ProductCard from "@/components/product/common/ProductCard";
import { CurrencyTooltip } from "@/components/ui/overlay/tooltip-list";
import { CartItem } from "@/types/index"

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, initializeCart } from "@/lib/features/cartSlice";
import { RootState } from "@/lib/store";

/* 模擬購物車商品數據
const mockCartItems: CartItem[] = [
  { id: "1", image: "/images/product1.jpg", title: "薄片 海鹽焦糖巧克力", price: 89 , quantity: 1},
  { id: "2", image: "/images/product2.jpg", title: "無選別白可可葡萄乾", price: 55, quantity: 1 },
  { id: "3", image: "/images/product3.jpg", title: "無選別白可可葡萄乾", price: 120, quantity: 1 },
  { id: "4", image: "/images/product4.jpg", title: "無選別白可可葡萄乾", price: 89, quantity: 1 },
  { id: "5", image: "/images/product3.jpg", title: "無選別白可可葡萄乾", price: 99, quantity: 1 },
  { id: "6", image: "/images/product2.jpg", title: "無選別白可可葡萄乾", price: 109, quantity: 1 },
  { id: "7", image: "/images/product1.jpg", title: "無選別白可可葡萄乾", price: 50, quantity: 1 },
  { id: "8", image: "/images/product3.jpg", title: "無選別白可可葡萄乾", price: 129, quantity: 1 },
  { id: "9", image: "/images/product4.jpg", title: "無選別白可可葡萄乾", price: 88, quantity: 1 },
];
*/

// 模擬商品推薦數據
const mockRecommendedItems: CartItem[] = [
  { id: "10", image: "/images/product2.jpg", title: "可可杏仁脆片", price: 120, quantity: 1 },
  { id: "11", image: "/images/product3.jpg", title: "夏威夷豆巧克力", price: 150, quantity: 1 },
  { id: "12", image: "/images/product4.jpg", title: "宇治抹茶餅乾", price: 80, quantity: 1 },
  { id: "13", image: "/images/product3.jpg", title: "草莓牛奶糖", price: 99, quantity: 1 },
  { id: "14", image: "/images/product2.jpg", title: "蜂蜜烤堅果", price: 110, quantity: 1 },
  { id: "15", image: "/images/product1.jpg", title: "焦糖瑪奇朵咖啡豆", price: 200, quantity: 1 },
  { id: "16", image: "/images/product2.jpg", title: "黑芝麻糊餅乾", price: 75, quantity: 1 },
  { id: "17", image: "/images/product3.jpg", title: "抹茶拿鐵粉", price: 95, quantity: 1 },
  { id: "18", image: "/images/product4.jpg", title: "濃厚可可粉", price: 130, quantity: 1 },
];

const CartClient: React.FC = () => {
  const dispatch = useDispatch();

  // 獲取來自cartSlice的cartItems (必須在上方)
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // 商品數量變化
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});


  // 監聽視窗滾動軸狀態（控制是否加上 mb-[100px]）
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const checkScrollbar = () => {
      const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
      setHasScrollbar(hasScroll);
    };
    checkScrollbar();
    window.addEventListener("resize", checkScrollbar);
    return () => window.removeEventListener("resize", checkScrollbar);
  }, [cartItems]);

  // 確保相同商品進行重複添加至購物車時 數量能夠正確增加
  useEffect(() => {
    const newQuantities = cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity ?? 1;
      return acc;
    }, {} as { [key: string]: number });

    setQuantities(newQuantities);
  }, [cartItems]);

  // 確保購物車數據從 localStorage 載入
  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  
  // 數量增加 (最多20)
  const increaseQuantity = (id: string) => {
    dispatch(updateQuantity({ id, change: 1 }));
  };

  // 數量減少 (最少1)
  const decreaseQuantity = (id: string) => {
    dispatch(updateQuantity({ id, change: -1 }));
  };

  // 刪除商品
  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };


  // 計算小計金額
  const totalPrice = cartItems.reduce((sum, item) => {
    // 若找不到 item.id 對應的數量 預設為 1
    const qty = quantities[item.id] ?? 1;
    return sum + item.price * qty;
  }, 0);

  return (
    <div className="w-screen min-h-[calc(100vh-100px)] flex flex-col justify-between bg-[#f0f0f0] relative -ml-[50vw] left-1/2">
      {/* 主要內容區域 */}
      <div className="flex flex-col items-center flex-grow w-full">
        <div className="flex w-[1200px] gap-6">
          {/* 左側區域 */}
          <div className="w-[800px] flex flex-col gap-4">
            {/* 購物車商品區塊 */}
            <h2 className="text-2xl font-semibold ml-4 mt-6">購物車</h2>
            <div className="w-[780px] min-h-[400px] bg-white rounded-xl mx-2 py-8 flex flex-col items-center justify-start gap-4">
              {cartItems.length > 0 ? (
                cartItems.map(({ id, image, title, price, quantity }) => (
                  <div key={id} className="w-full flex justify-center">
                    <CartCard
                      image={image}
                      title={title}
                      price={price * quantity}
                      quantity={quantity}
                      increaseQuantity={() => increaseQuantity(id)}
                      decreaseQuantity={() => decreaseQuantity(id)}
                      onRemove={() => removeItem(id)}
                    />
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full ">
                  <p className="text-[18px] text-center font-black text-gray-600">購物車是空的</p>
                  <Link
                    href="/"
                    className="text-blue-600 hover:text-blue-500 text-[14px] font-black transition-colors"
                  >
                    再去逛逛 {'>'}
                  </Link>
                </div>
              )}
            </div>

            {/* 人氣商品推薦 */}
            <div className={`w-[780px] h-[350px] bg-white rounded-xl mx-2 ${hasScrollbar ? "mb-[100px]" : ""}`}>
              <h2 className="text-xl font-black mt-6 ml-6">\ 人氣商品推薦 /</h2>
              {/* 商品推薦滑動區塊 */}
              <div className="mt-4">
                <ContentSlider itemWidth={130} pageSizeDesktop={10} pageSizeMobile={2}>
                  {mockRecommendedItems.map((product, index) => (
                    <ProductCard
                      key={index}
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      isConfigurable={false}
                      variants={[]}
                      variant="recommend"
                    />
                  ))}
                </ContentSlider>
              </div>
            </div>
          </div>

          {/* 右側區域 */}
          <div className="w-[400px] flex flex-col gap-6 mt-[72px]">
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
              <p className="text-sm text-gray-700 mt-4 font-bold">XXXX測試帳號</p>
              <div className="flex justify-between text-gray-800 text-sm font-bold mt-2">
                <span>商品金額</span>
                <span>NT${totalPrice}</span>
              </div>

              {/* 分隔線 */}
              <Separator className="my-3" />

              {/* 小計金額 */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">小計</span>
                <span className="text-lg font-bold text-[#7f0019]">NT${totalPrice}</span>
              </div>

              {/* 貨幣資訊 */}
              <div className="flex items-center justify-end text-gray-500 text-sm font-bold mt-4 cursor-pointer">
                <CurrencyTooltip>
                  <span className="ml-2">皆以 TWD 付款 ℹ </span>
                </CurrencyTooltip>
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
            <span className="text-lg text-[#7f0019] font-black mr-8">NT${totalPrice}</span>
          </div>
          <button className="bg-black text-white w-[200px] h-[50px] rounded-lg text-lg font-semibold">
            前往結帳
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
