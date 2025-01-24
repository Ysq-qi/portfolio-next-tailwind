"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ScrollArea } from "@/components/ui/overlay/scroll-area";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/overlay/hover-card";

import { Separator } from "@/components/ui/utils/separator";
import { Button } from "@/components/ui/form/button";
import ProductCardCart from "@/components/ui/data-display/product-card-cart";

interface CartItem {
  id: string;
  image: string;
  title: string;
  price: string;
}

const mockCartItems: CartItem[] = [
  { id: "1", image: "/images/product1.jfif", title: "薄片 海鹽焦糖巧克力", price: "NT$89" },
  { id: "2", image: "/images/product1.jfif", title: "無選別白可可葡萄乾", price: "NT$55" },
  { id: "3", image: "/images/product1.jfif", title: "無選別白可可葡萄乾", price: "NT$55" },
  { id: "4", image: "/images/product1.jfif", title: "無選別白可可葡萄乾", price: "NT$55" },
  { id: "5", image: "/images/product1.jfif", title: "無選別白可可葡萄乾", price: "NT$55" },
  { id: "6", image: "/images/product1.jfif", title: "無選別白可可葡萄乾", price: "NT$55" },
];

const Cart: React.FC<{ className?: string }> = ({ className }) => {
  const [items, setItems] = React.useState<CartItem[]>(mockCartItems);

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Link
          href="/cart"
          aria-label="購物車"
          className={`relative flex items-center justify-center w-12 h-12 rounded-full sm:bg-white ${className}`}
        >
          <ShoppingCart className="h-5 w-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-[#7f0019] text-white text-[8px] h-3 w-3 sm:text-xs sm:h-5 sm:w-5">
            {items.length}
          </span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="p-4 absolute right-0 translate-x-[10px] min-w-[320px] max-w-[360px]">
        {items.length === 0 ? (
          <div className="flex justify-center items-center min-h-[160px]">
            <p className="text-sm text-gray-500 text-center">購物車內目前沒有商品</p>
          </div>
        ) : (
          <CartContent items={items} onRemoveItem={removeItem} />
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

const CartContent: React.FC<{
  items: CartItem[];
  onRemoveItem?: (id: string) => void;
}> = ({ items, onRemoveItem }) => {
  return (
    <>
      <h2 className="text-sm font-bold text-gray-800 mb-2">最新加入項目</h2>
      <Separator />
      <ScrollArea className="relative -m-4 max-h-[300px]">
        <ScrollArea.Viewport className="w-full h-[300px]">
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={item.id}>
                <ProductCardCart
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  onRemove={() => onRemoveItem?.(item.id)}
                />
                {index < items.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" forceMount />
      </ScrollArea>

      <div className="mt-4">
        <Separator />
        <Link href="/checkout" className="block mt-4">
          <Button variant="dark" className="w-full">
            結帳
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
