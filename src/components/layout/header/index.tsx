"use client";

import React from "react";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import { Search as SearchIcon } from "lucide-react";
import UserActions from "./UserActions";
import Cart from "./Cart";

const Header: React.FC = () => {
  return (
    <>
      {/* 手機版 Header */}
      <header className="sm:hidden w-full bg-gray-100 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-2 py-2 flex items-center justify-between">
          <MobileNav />
          <div className="w-[170px] h-[100px] flex items-center justify-start">
            <Logo className="text-2xl" />
          </div>
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-1 h-6 w-6 text-gray-500" />
          </div>
          <div className="flex items-center gap-2">
            <UserActions className="relative flex items-center justify-center w-[28px] h-[28px] rounded-full bg-gray-100" />
            <Cart className="relative flex items-center justify-center w-[28px] h-[28px] rounded-full bg-gray-100" />
          </div>
        </div>
      </header>

      {/* 桌機版 Header */}
      <header className="hidden sm:flex w-[1200px] h-[100px] mx-auto items-center justify-between bg-white">
        <div className="w-[250px] h-[100px] flex items-center justify-center">
          <Logo className="text-3xl" />
        </div>
        <Nav className="flex items-center gap-6" />
        <div className="flex items-center gap-4">
          <Search className="w-[230px] h-[40px]" />
          <UserActions className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gray-100" />
          <Cart className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gray-100" />
        </div>
      </header>
    </>
  );
};

export default Header;
