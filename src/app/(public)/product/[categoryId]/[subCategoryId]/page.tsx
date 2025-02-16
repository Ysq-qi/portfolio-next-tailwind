"use client";

import React, { useEffect, useMemo } from "react";
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

const SubCategoryPage: React.FC = () => {
  const { categoryId, subCategoryId } = useParams() as { categoryId: string; subCategoryId: string };

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  if (!categoryId || !subCategoryId) {
    return <div className="text-center text-gray-600">找不到此分類</div>;
  }

  // 驗證主分類
  const mainCat = categories.find((c) => c.categoryId === categoryId);
  if (!mainCat) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }

  // 驗證子分類
  const subCategory = mainCat.subCategories.find((sub) => sub.labelEn === subCategoryId);
  if (!subCategory) {
    return <div className="text-center text-gray-600">沒有此子分類</div>;
  }

  // 取出該子分類商品
  const subCategoryMap = allProducts[categoryId];
  if (!subCategoryMap) {
    return <div className="text-center text-gray-600">沒有此主分類</div>;
  }
  const productsRaw = subCategoryMap[subCategoryId];
  if (!productsRaw) {
    return <div className="text-center text-gray-600">沒有找到相關商品</div>;
  }

  const mergedProducts: Product[] = productsRaw.map((pd) => ({
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

  // 商品(子)類別加載時，獲取商品價格最大值與最小值
  useEffect(() => {
    if (mergedProducts.length > 0) {
      const prices = mergedProducts.map((p) => parseInt(p.price, 10));
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setGlobalMinPrice(min);
      setGlobalMaxPrice(max);
    } else {
      setGlobalMinPrice(null);
      setGlobalMaxPrice(null);
    }
  }, [mergedProducts, setGlobalMinPrice, setGlobalMaxPrice]);

  // 用 useMemo 做篩選 + 價格區間 + 排序
  const finalProducts = useMemo(() => {
    // 先用 filterProducts 處理付款方式 / 運送方式篩選
    let filtered = filterProducts(mergedProducts, selectedPaymentMethods, selectedShippingMethods);

    // 價格區間篩選
    if (selectedMinPrice || selectedMaxPrice) {
      const min = selectedMinPrice ? parseInt(selectedMinPrice, 10) : 0;
      const max = selectedMaxPrice ? parseInt(selectedMaxPrice, 10) : Infinity;
      filtered = filtered.filter((p) => {
        const priceVal = parseInt(p.price, 10) || 0;
        return priceVal >= min && priceVal <= max;
      });
    }

    // 最後做排序
    switch (selectedSort) {
      case "price-asc":
        filtered = [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }

    return filtered;
  }, [
    mergedProducts,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    selectedMinPrice,
    selectedMaxPrice,
  ]);

  return (
    <main>
      <ProductList
        products={finalProducts}
        categoryImage={subCategory.image}
        categoryTitle={subCategory.labelZh}
      />
    </main>
  );
};

export default SubCategoryPage;