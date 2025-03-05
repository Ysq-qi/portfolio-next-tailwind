import CartClient from "@/app/(hidden-footer)/cart/CartClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js網站 | 其他",
  robots: "noindex, nofollow", 
};

export default function CartPage() {
  return <CartClient />;
}
