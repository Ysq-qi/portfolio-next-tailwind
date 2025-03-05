"use client";

import { useState } from "react";
import { CartCard } from "@/components/cart/ProductCardCart";

interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
}

const mockCartItems: CartItem[] = [
  { id: "1", image: "/images/product1.jpg", title: "薄片 海鹽焦糖巧克力", price: 89 },
  { id: "2", image: "/images/product1.jpg", title: "無選別白可可葡萄乾", price: 55 },
  { id: "3", image: "/images/product1.jpg", title: "無選別白可可葡萄乾", price: 55 },
  { id: "4", image: "/images/product1.jpg", title: "無選別白可可葡萄乾", price: 55 },
  { id: "5", image: "/images/product1.jpg", title: "無選別白可可葡萄乾", price: 55 },
  { id: "6", image: "/images/product1.jpg", title: "無選別白可可葡萄乾", price: 55 },
];

export default function TestPage5() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const increaseQuantity = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQuantity = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[id];
      return updatedQuantities;
    });
  };

  return (
    <div className="max-w-[800px] mx-auto py-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">購物車測試頁面</h1>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={quantities[item.id]}
              increaseQuantity={() => increaseQuantity(item.id)}
              decreaseQuantity={() => decreaseQuantity(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">購物車是空的</p>
        )}
      </div>
    </div>
  );
}
