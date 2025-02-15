"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";

// 日後放到types資料夾內
interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  isHotSale?: boolean;
  shippingMethods?: string[];
  paymentMethods?: string[];
}

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams() as { categoryId: string };

  // 從 context 取付款/運送狀態
  const {
    selectedPaymentMethods,
    selectedShippingMethods
  } = useFilterContext();

  if (!categoryId || !allProducts[categoryId]) {
    return <div className="text-center text-gray-600">此分類不存在</div>;
  }

  // 找到主分類
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  const categoryTitle = mainCat?.labelZh ?? "";
  const categoryImage = mainCat?.image ?? "";

  // 拿到該主分類下所有商品
  const subcategories = Object.values(allProducts[categoryId]);
  const mergedRaw = subcategories.flat();

  const mergedProducts: Product[] = mergedRaw.map((pd) => ({
    id: pd.id,
    image: Array.isArray(pd.image) ? pd.image[0] : pd.image || "",
    title: pd.title,
    price: pd.price.toString(),
    isNew: pd.isNew,
    isSoldOut: pd.isSoldOut,
    isHotSale: pd.isHotSale,
    shippingMethods: pd.shippingMethods ?? [],
    paymentMethods: pd.paymentMethods ?? [],
  }));

  const finalProducts = useMemo(() => {
    return filterProducts(mergedProducts, selectedPaymentMethods, selectedShippingMethods);
  }, [mergedProducts, selectedPaymentMethods, selectedShippingMethods]);

  return (
    <main>
      <ProductList
        products={finalProducts}
        categoryImage={categoryImage}
        categoryTitle={categoryTitle}
      />
    </main>
  );
};

export default CategoryPage;
