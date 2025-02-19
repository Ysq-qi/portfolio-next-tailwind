import React from "react";
import { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTopButton from "@/components/ui/navigation/scroll-to-top-button";

export const metadata: Metadata = {
  title: "Next.js 實作網站",
  description: "Next.js 實作網站",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="app-container flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}