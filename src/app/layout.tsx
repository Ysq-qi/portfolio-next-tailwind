import React from "react";
import { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "Next.js網站",
  description: "Next.js 實作專案",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="font-sans app-wrapper">
        <Providers>  {/* 提供UI使用 */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
