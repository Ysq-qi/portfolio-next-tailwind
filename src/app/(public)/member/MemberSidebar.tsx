"use client";

import React from "react";
import Link from "next/link";

const memberSections = [
  { label: "訂單查詢", href: "/member/orders" },
  { label: "我的收藏", href: "/member/favorites" },
  { label: "基本資料", href: "/member/profile" },
];

const MemberSidebar: React.FC = () => {
  return (
    <div className="w-full sm:w-[200px] md:w-[270px] border-r bg-white shadow p-4 mt-4 space-y-4">
      <ul className="space-y-2">
        {memberSections.map((section, index) => (
          <li key={index}>
            <Link
              href={section.href}
              className="text-gray-700 hover:text-black hover:underline"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberSidebar;