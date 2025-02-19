import { Metadata } from "next";
import HomeClient from "@/app/(public)/home";

export const metadata: Metadata = {
  title: "Next.js網站 | 首頁",
  description: "實作網站的首頁部分",
};

export default function Page() {
  return <HomeClient />;
}
