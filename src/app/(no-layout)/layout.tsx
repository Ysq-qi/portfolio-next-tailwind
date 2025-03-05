import React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "Next.js 實作網站",
  description: "UI測試 小作品 想不到的丟這",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function NoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="app-container flex-1">{children}</main>
    </>
  );
}
