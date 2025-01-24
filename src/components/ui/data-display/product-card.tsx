import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/data-display/card";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
  variant?: "home" | "productList";
}

const cardWidth = cva("", {
  variants: {
    variant: {
      home: "w-[190px]",
      productList: "w-[215px]",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

const cardHeight = cva("", {
  variants: {
    variant: {
      home: "h-[190px]",
      productList: "h-[215px]",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

const priceColor = cva("", {
  variants: {
    variant: {
      home: "text-[#7f0019]",
      productList: "text-[#7f0019]",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

const titleHeight = cva("", {
  variants: {
    variant: {
      home: "h-[45px]",
      productList: "h-[50px]",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

const iconSize = cva("", {
  variants: {
    variant: {
      home: "w-[23px] h-[23px]",
      productList: "w-[23px] h-[23px]",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  isNew,
  variant = "home",
}) => {
  const cardWidthClass = cardWidth({ variant });
  const cardHeightClass = cardHeight({ variant });
  const priceColorClass = priceColor({ variant });
  const titleHeightClass = titleHeight({ variant });
  const iconSizeClass = iconSize({ variant });

  return (
    <Card
      className={`${cardWidthClass} shadow hover:shadow-lg transition-shadow rounded-lg overflow-hidden`}
    >
      {/* 圖片區域 */}
      <div className={`relative ${cardWidthClass} ${cardHeightClass}`}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-md"
        />
        {isNew && (
          <span
            className="absolute top-2 left-2 bg-white text-[#7f0019] text-[10px] font-black shadow-md rounded border border-gray-200 flex items-center justify-center"
            style={{ width: "35px", height: "20px" }}
          >
            NEW
          </span>
        )}
      </div>

      {/* 商品內容 */}
      <CardContent className="p-2">
        <h3 className={`text-base font-bold text-gray-800 pt-1 ${titleHeightClass}`}>
          {title}
        </h3>
        <p className={`pt-2 text-base font-bold ${priceColorClass}`}>{price}</p>
      </CardContent>

      {/* 底部按鈕 */}
      <CardFooter className="flex justify-between items-center pb-2 pl-2 pr-2">
        <button
          className={`flex items-center justify-center rounded-full bg-white ${iconSizeClass}`}
          aria-label="Add to Favorites"
        >
          <Heart className={`text-gray-600 ${iconSizeClass}`} />
        </button>
        <button
          className={`flex items-center justify-center rounded-full bg-white ${iconSizeClass}`}
          aria-label="Add to Cart"
        >
          <ShoppingCart className={`text-gray-600 ${iconSizeClass}`} />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;