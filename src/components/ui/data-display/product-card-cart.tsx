"use client";

import * as React from "react";
import { Trash } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/data-display/card";
import { Button } from "@/components/ui/form/button";
import Image from "next/image";

interface ProductCartCardProps {
  image: string;
  title: string;
  price: string;
  onRemove?: () => void;
}

const ProductCardCart: React.FC<ProductCartCardProps> = ({
  image,
  title,
  price,
  onRemove,
}) => {
  return (
    <Card className="flex items-start px-2 pt-2  border-none shadow-none">
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>

      <CardContent className="flex-1 flex flex-col">
        <h3 className="text-sm font-bold text-gray-800 leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm font-bold text-[#7f0019]">
          {price}
        </p>
      </CardContent>
      {onRemove && (
        <CardFooter className="p-0 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 hover:text-red-600 transition-colors w-8 h-8"
            onClick={onRemove}
            aria-label="移除商品"
          >
            <Trash className="w-5 h-5" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCardCart;
