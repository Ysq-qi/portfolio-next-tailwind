import React from "react";
import { Card, CardContent } from "@/components/ui/data-display/card";
import { Skeleton } from "@/components/ui/feedback/skeleton";

interface ProductCardSkeletonProps {
  variant?: "home" | "productList";
}

const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
  variant = "home",
}) => {
  // 根據 variant 設置不同樣式
  const cardWidth = variant === "home" ? "w-[190px]" : "w-[215px]";
  const cardHeight = variant === "home" ? "h-[190px]" : "h-[215px]";
  const titleHeight = variant === "home" ? "h-[45px]" : "h-[50px]";

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
