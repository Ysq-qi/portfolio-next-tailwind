import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation/navigation-menu";

const navItems = [
  {
    title: "商品介紹",
    subItems: [
      { title: "男裝", href: "/product/men" },
      { title: "女裝", href: "/product/women" },
      { title: "童裝", href: "/product/kids" },
      { title: "美容保養", href: "/product/beauty"},
      { title: "食品", href: "/product/food" },
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
];

const NavItem: React.FC<{
  item: typeof navItems[number];
  className?: string;
}> = ({ item, className }) => {
  if (item.subItems) {
    return (
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
                      className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-900"
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
