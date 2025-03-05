import React from "react";
import Header from "@/components/layout/header";
import "@/app/globals.css";

export const metadata = {
  title: "Next.js 實作網站",
  description: "Next.js 實作網站",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function HiddenFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="app-container flex-1">{children}</main>
    </>
  );
}
