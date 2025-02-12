import React from "react";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

export const metadata = {
  title: "Next.js 實作網站 購物車",
  description: "Next.js 實作網站 購物車",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="app-container flex-1">{children}</main>
    </>
  );
}
