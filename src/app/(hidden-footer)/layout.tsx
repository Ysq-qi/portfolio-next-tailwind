import React from "react";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/feedback/toaster";
import "@/styles/globals.css";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="app-wrapper">
        <Header />
        <main className="app-container flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
