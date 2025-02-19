"use client";

import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductList from "@/components/product/list/ProductList";
import { allProducts, categories } from "@/data/mockData";
import { filterProducts } from "@/lib/utils/filterProducts";
import { useFilterContext } from "@/context/FilterContext";
import { Product } from "@/types";

const SubCategoryClient: React.FC = () => {
  const { categoryId, subCategoryId } = useParams() as {
    categoryId: string;
    subCategoryId: string;
  };

  const {
    selectedMinPrice,
    selectedMaxPrice,
    selectedPaymentMethods,
    selectedShippingMethods,
    selectedSort,
    setGlobalMinPrice,
    setGlobalMaxPrice,
  } = useFilterContext();

  const mainCategory = categories.find((c) => c.categoryId === categoryId);
  const subCategory = mainCategory?.subCategories.find(
    (sub) => sub.labelEn === subCategoryId
  );

  const mergedProducts: Product[] = useMemo(() => {
    const productsRaw = allProducts?.[categoryId]?.[subCategoryId] || [];

    return productsRaw.map((pd) => ({
      id: pd.id,
      image: Array.isArray(pd.image) ? pd.image[0] : pd.image || "",
      title: pd.title,
      price: pd.price,
      isNew: pd.isNew,
      isSoldOut: pd.isSoldOut,
      isHotSale: pd.isHotSale,
      shippingMethods: pd.shippingMethods ?? [],
      paymentMethods: pd.paymentMethods ?? [],
    }));
  }, [categoryId, subCategoryId]);

  useEffect(() => {
    if (mergedProducts.length > 0) {
      const prices = mergedProducts.map((p) => Number(p.price));
      setGlobalMinPrice(Math.min(...prices));
      setGlobalMaxPrice(Math.max(...prices));
    } else {
      setGlobalMinPrice(null);
      setGlobalMaxPrice(null);
    }
  }, [mergedProducts, setGlobalMinPrice, setGlobalMaxPrice]);

  const finalProducts = useMemo(() => {
    let filtered = filterProducts(
      mergedProducts,
      selectedPaymentMethods,
      selectedShippingMethods
    );

    if (selectedMinPrice !== null || selectedMaxPrice !== null) {
      const min = selectedMinPrice ? Number(selectedMinPrice) : 0;
      const max = selectedMaxPrice ? Number(selectedMaxPrice) : Infinity;
      
      filtered = filtered.filter((p) => {
        const numericPrice = Number(p.price);
        return numericPrice >= min && numericPrice <= max;
      });
    }

    if (selectedSort === "price-asc") {
      filtered = filtered.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else if (selectedSort === "price-desc") {
      filtered = filtered.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
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
        categoryImage={subCategory?.image}
        categoryTitle={subCategory?.labelZh}
      />
    </main>
  );
};

export default SubCategoryClient;