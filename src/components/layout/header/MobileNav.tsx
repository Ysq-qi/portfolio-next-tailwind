"use client";

import React from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/overlay/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/overlay/accordion";
import { Menu } from "lucide-react";
import Link from "next/link";

const navGroups = [
  {
    title: "導覽",
    subItems: [{ title: "首頁", href: "/" }],
  },
  {
    title: "商品介紹",
    subItems: [
      { title: "食品", href: "/product/food" },
      { title: "女裝", href: "/product/women" },
      { title: "男裝", href: "/product/men" },
      { title: "寢具織品", href: "/product/bedding" },
      { title: "家具", href: "/product/furniture" },
    ],
  },
  {
    title: "作品介紹",
    subItems: [
      { title: "最新消息1", href: "/news/1" },
      { title: "最新消息2", href: "/news/2" },
    ],
  },
  {
    title: "關於我",
    subItems: [
      { title: "分店1", href: "/stores/1" },
      { title: "分店2", href: "/stores/2" },
    ],
  },
  {
    title: "會員功能",
    subItems: [
      { title: "訂單查詢", href: "/member/orders" },
      { title: "會員專區", href: "/member" },
      { title: "我的收藏", href: "/member/favorites" },
      { title: "我的優惠券", href: "/member/coupons" },
      { title: "會員登入/註冊", href: "/login" },
    ],
  },
];

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="打開導航菜單"
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none font-black sm:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-4 bg-white w-[330px] max-w-[90vw] font-medium"
      >
        <SheetTitle className="text-2xl font-bold h-16 flex items-center bg-gray-100 -mx-4 -mt-4 px-4 py-2">
          ChaoQian作品
        </SheetTitle>
        <SheetDescription />

        <nav className="flex flex-col gap-4">
          <Accordion
            type="multiple"
            defaultValue={navGroups.map((_, index) => `group-${index}`)}
          >
            {navGroups.map((group, groupIndex) => (
              <AccordionItem key={groupIndex} value={`group-${groupIndex}`}>
                <AccordionTrigger>{group.title}</AccordionTrigger>
                <AccordionContent>
                  {group.subItems.map((item, itemIndex) => (
                    <SheetClose asChild key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium hover:underline block"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
