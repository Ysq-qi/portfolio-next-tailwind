'use client';

import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/overlay/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { title: '商品介紹', href: '/products' },
  { title: '最新消息', href: '/news' },
  { title: '店鋪資訊', href: '/stores' },
  { title: '會員專區', href: '/members' },
  { title: '聯絡我們', href: '/contact' },
];

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      {/* 菜單按鈕：僅在手機尺寸顯示 */}
      <SheetTrigger asChild>
        <button
          aria-label="打開導航菜單"
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none font-black sm:hidden"
        >
          <Menu className="h-8 w-8" />
        </button>
      </SheetTrigger>

      {/* 側邊欄內容 */}
      <SheetContent
        side="left"
        className="p-4 bg-white w-[330px] max-w-[90vw] font-medium"
      >
        <SheetTitle>導航菜單</SheetTitle>

        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-medium hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
