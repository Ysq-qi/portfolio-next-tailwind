"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/data-display/card";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { ProductDialog } from "@/components/ui/overlay/product-dialog";
import ToastList from "@/components/ui/feedback/toast-list";

interface ProductCardProps {
  id: string;
  image: string | string[];
  title: string;
  price: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  variant?: "home" | "productList" | "recommend";
}

// 卡片變體樣式
const cardVariants = {
  width: cva("", {
    variants: {
      variant: {
        home: "w-[190px]",
        productList: "w-[215px]",
        recommend: "w-[125px]",
      },
    },
    defaultVariants: { variant: "productList" },
  }),

  height: cva("", {
    variants: {
      variant: {
        home: "h-[190px]",
        productList: "h-[215px]",
        recommend: "h-[125px]",
      },
    },
    defaultVariants: { variant: "productList" },
  }),

  priceColor: cva("text-[#7f0019]", {
    variants: {
      variant: {
        home: "text-[#7f0019]",
        productList: "text-[#7f0019]",
        recommend: "text-[#7f0019]",
      },
    },
    defaultVariants: { variant: "productList" },
  }),

  titleHeight: cva("", {
    variants: {
      variant: {
        home: "h-[45px]",
        productList: "h-[50px]",
        recommend: "h-[70px]",
      },
    },
    defaultVariants: { variant: "productList" },
  }),

  iconSize: cva("", {
    variants: {
      variant: {
        home: "w-[23px] h-[23px]",
        productList: "w-[23px] h-[23px]",
        recommend: "hidden",
      },
    },
    defaultVariants: { variant: "productList" },
  }),
};

// 新商品標籤
const NewBadge: React.FC<{ isNew?: boolean }> = ({ isNew }) => {
  if (!isNew) return null;
  return (
    <span
      className={cn(
        "absolute top-2 left-2 z-[1] bg-white text-[#7f0019] text-[11px] font-black",
        "shadow-md rounded border border-gray-200 flex items-center justify-center",
        "pointer-events-none"
      )}
      style={{ width: "35px", height: "20px" }}
    >
      NEW
    </span>
  );
};

// 貨到通知標籤
const SoldOutBadge: React.FC<{ isSoldOut?: boolean }> = ({ isSoldOut }) => {
  if (!isSoldOut) return null;
  return (
    <div
      className={cn(
        "absolute z-[2] inset-0 bg-white/80 flex items-center justify-center",
        "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "bg-gray-950/80 text-white text-[15px] font-bold rounded-3xl w-[90px] h-[33px] flex items-center justify-center",
          "pointer-events-none"
        )}
      >
        貨到通知
      </div>
    </div>
  );
};

// 熱銷標籤
const HotSaleBadge: React.FC<{ isHotSale?: boolean }> = ({ isHotSale }) => {
  if (!isHotSale) return null;
  return (
    <>
      <span
        className={cn(
          "absolute top-2 left-2 z-[1] bg-[#7f0019] text-white text-[11px] font-black",
          "shadow-md rounded border border-gray-200 flex items-center justify-center",
          "pointer-events-none"
        )}
        style={{ width: "35px", height: "20px" }}
      >
        Sale
      </span>

      <div
        className={cn(
          "absolute bottom-0 left-0 w-full h-[25px] z-[1]",
          "bg-[#e0ceaa] text-[#7f0019] text-[12px] font-black flex items-center justify-center",
          "pointer-events-none"
        )}
      >
        限量優惠 售完為止
      </div>
    </>
  );
};

// 商品卡片組件
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  isNew = false,
  isSoldOut = false,
  isHotSale = false,
  variant = "home",
}) => {
  const displayImage = Array.isArray(image) ? image[0] : image;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddToCart = async () => {
    // 顯示 Loading，並接收 toast 實例
    const loadingToast = ToastList.showAddLoading();
  
    // 模擬 API 請求
    setTimeout(() => {
      loadingToast?.dismiss();
      setDialogOpen(true);
    }, 500);
  };
  

  return (
    <>
      <Link href={`/productdetail/${id}`} passHref>
        <Card className={cn(cardVariants.width({ variant }), "shadow hover:shadow-lg transition-shadow rounded-lg overflow-hidden")}>
          {/* 點擊圖片可跳轉至詳情頁 */}
          <div className={cn("relative", cardVariants.width({ variant }), cardVariants.height({ variant }))}>
            <Image src={displayImage} alt={title} fill style={{ objectFit: "cover" }} className="rounded-t-md" />
            <NewBadge isNew={isNew} />
            <SoldOutBadge isSoldOut={isSoldOut} />
            <HotSaleBadge isHotSale={isHotSale} />
          </div>

          {/* 商品內容 */}
          <CardContent className="p-2">
            <h3 className={cn("text-base font-bold text-gray-800 pt-1", cardVariants.titleHeight({ variant }))}>
              {title}
            </h3>
            <p className={cn("pt-2 text-base font-bold", cardVariants.priceColor({ variant }))}>NT${price}</p>
          </CardContent>

          {/* 底部按鈕 */}
          <CardFooter className="flex justify-between items-center pb-2 pl-2 pr-2">
            {variant !== "recommend" && (
              <>
                <button 
                  className={cn("flex items-center justify-center rounded-full bg-white", cardVariants.iconSize({ variant }))} aria-label="Add to Favorites"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <Heart className={cn("text-gray-600", cardVariants.iconSize({ variant }))} />
                </button>

                {/* 點擊購物車 */}
                <button
                  className={cn("flex items-center justify-center rounded-full bg-white", cardVariants.iconSize({ variant }))} 
                  aria-label="Add to Cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleAddToCart();
                  }}                >
                  <ShoppingCart className={cn("text-gray-600", cardVariants.iconSize({ variant }))} />
                </button>
              </>
            )}
          </CardFooter>
        </Card>
      </Link>

      {/* ProductDialog */}
      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        image={displayImage}
        title={title}
        price={`NT$${price}`}
      />
    </>
  );
};

export default ProductCard;
