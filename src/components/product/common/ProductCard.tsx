"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Card, CardContent, CardFooter } from "@/components/ui/data-display/card";
import { Heart, ShoppingCart } from "lucide-react";
import { ProductDialog } from "@/components/product/common/ProductDialog";
import ToastList from "@/components/ui/feedback/toast-list";

interface ProductCardProps {
  id: string;
  image: string | string[];
  title: string;
  price: number;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  isConfigurable?: boolean;
  variants?: {
    color: string;
    image: string[];
    sizes: { size: string; stock: number }[];
  }[];
  variant?: "home" | "productListMobile" | "productList" | "recommend";
}

// 卡片變體樣式
const variantStyles = {
  home: {
    cardWidth: "w-[190px]",
    cardHeight: "h-[190px]",
    titleHeight: "h-[45px]",
    iconSize: "w-[23px] h-[23px]",
    priceColor: "text-[#7f0019]",
  },
  productListMobile: {
    cardWidth: "w-[190px]",
    cardHeight: "h-[190px]",
    titleHeight: "h-[45px]",
    iconSize: "w-[23px] h-[23px]",
    priceColor: "text-[#7f0019]",
  },
  productList: {
    cardWidth: "w-[215px]",
    cardHeight: "h-[215px]",
    titleHeight: "h-[50px]",
    iconSize: "w-[23px] h-[23px]",
    priceColor: "text-[#7f0019]",
  },
  recommend: {
    cardWidth: "w-[125px]",
    cardHeight: "h-[125px]",
    titleHeight: "h-[70px]",
    iconSize: "hidden",
    priceColor: "text-[#7f0019]",
  },
}

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
  isConfigurable,
  variants,
  variant = "productList",
}) => {
  const displayImage = Array.isArray(image) ? image[0] : image;
  const [dialogOpen, setDialogOpen] = useState(false);

  // 取得當前變體的樣式
  const { cardWidth, cardHeight, titleHeight, iconSize, priceColor } =
    variantStyles[variant] || variantStyles.productList;

  const handleAddToCart = async () => {
    const loadingToast = ToastList.showAddLoading();
    setTimeout(() => {
      loadingToast?.dismiss();
      setDialogOpen(true);
    }, 500);
  };

  return (
    <>
      <Link href={`/productdetail/${id}`} passHref>
        <Card className={cn(cardWidth, "shadow hover:shadow-lg transition-shadow rounded-lg overflow-hidden")}>
          {/* 點擊圖片可跳轉至詳情頁 */}
          <div className={cn("relative", cardWidth, cardHeight)}>
            <Image
              src={displayImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
              priority
              style={{ objectFit: "cover" }}
              className="rounded-t-md"
            />
            <NewBadge isNew={isNew} />
            <SoldOutBadge isSoldOut={isSoldOut} />
            <HotSaleBadge isHotSale={isHotSale} />
          </div>

          {/* 商品內容 */}
          <CardContent className="p-2">
            <h3 className={cn("text-base font-bold text-gray-800 pt-1", titleHeight)}>
              {title}
            </h3>
            <p className={cn("pt-2 text-base font-bold", priceColor)}>NT${price}</p>
          </CardContent>

          {/* 底部按鈕 */}
          <CardFooter className="flex justify-between items-center pb-2 pl-2 pr-2">
            {variant !== "recommend" && (
              <>
                <button 
                  className={cn("flex items-center justify-center rounded-full bg-white", iconSize)} aria-label="Add to Favorites"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <Heart className={cn("text-gray-600", iconSize)} />
                </button>

                {/* 點擊購物車 */}
                <button
                  className={cn("flex items-center justify-center rounded-full bg-white", iconSize)} 
                  aria-label="Add to Cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleAddToCart();
                  }}
                >
                  <ShoppingCart className={cn("text-gray-600", iconSize)} />
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
        id={id}
        image={displayImage}
        title={title}
        price={price}
        isConfigurable={isConfigurable ?? false}
        variants={variants}
      />
    </>
  );
};

export default ProductCard;
