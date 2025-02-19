import React from "react";
import { Card, CardContent } from "@/components/ui/data-display/card";
import { Skeleton } from "@/components/ui/feedback/skeleton";

interface ProductCardSkeletonProps {
  variant?: "home" | "productListMobile" | "productList";
}

const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
  variant = "home",
}) => {
  const variantStyles = {
    home: {
      cardWidth: "w-[190px]",
      cardHeight: "h-[190px]",
      titleHeight: "h-[45px]",
    },
    productListMobile: {
      cardWidth: "w-[190px]",
      cardHeight: "h-[190px]",
      titleHeight: "h-[45px]",
    },
    productList: {
      cardWidth: "w-[215px]",
      cardHeight: "h-[215px]",
      titleHeight: "h-[50px]",
    },
  };

  const { cardWidth, cardHeight, titleHeight } =
    variantStyles[variant] || variantStyles.productList;

  return (
    <Card
      className={`${cardWidth} shadow hover:shadow-lg transition-shadow rounded-lg overflow-hidden`}
    >
      {/* 圖片佔位符 */}
      <div className={`relative ${cardWidth} ${cardHeight}`}>
        <Skeleton className="w-full h-full" />
      </div>

      {/* 商品內容佔位符 */}
      <CardContent className="p-2">
        <Skeleton className={`w-full mb-2 ${titleHeight}`} />
        <Skeleton className="h-4 w-4/4 my-2" />
        <Skeleton className="h-4 w-2/4 my-2" />
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
