import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/feedback/toaster";

export const metadata = {
  title: "Next.js實作網站",
  description: "Next.js 專案",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <body className="app-wrapper">
        <Header />
        <main className="app-container flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}