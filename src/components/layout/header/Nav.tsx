"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation/navigation-menu";
import { usePathname } from "next/navigation";

const navItems = [
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
      { title: "最新消息1", href: "/news/" },
      { title: "最新消息2", href: "/news/" },
    ],
  },
  {
    title: "關於我",
    subItems: [
      { title: "分店1", href: "/stores/" },
      { title: "分店2", href: "/stores/" },
    ],
  },
];

const NavItem: React.FC<{ item: typeof navItems[number]; className?: string }> = ({ item, className }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (navRef.current) {
      const trigger = navRef.current.querySelector("[data-state='open']") as HTMLElement;
      if (trigger) {
        trigger.click();
      }
    }
  }, [pathname]);

  if (item.subItems) {
    return (
      <div ref={navRef}>
        <NavigationMenu className={className}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black text-[14.5px]">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2">
                  {item.subItems.map((subItem, index) => (
                    <li key={index}>
                      <Link
                        href={subItem.href}
                        className="block px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-600 font-bold"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  }
  return null;
};

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Nav;
