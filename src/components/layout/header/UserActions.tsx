'use client';

import React from 'react';
import { User } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/overlay/hover-card';

const userActionItems = [
  { title: "訂單查詢", href: "/member/orders" },
  { title: "會員專區", href: "/member" },
  { title: "我的收藏", href: "/member/favorites" },
  { title: "我的優惠券", href: "/member/coupons" },
  { title: "會員登入/註冊", href: "/login" },
];

const UserActions: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger asChild>
        <button
          aria-label="個人資料"
          className={`
            relative flex items-center justify-center w-12 h-12 rounded-full
            sm:bg-white
            ${className}
          `}
        >
          <User className="h-5 w-5 text-gray-700" />
        </button>
      </HoverCardTrigger>

      <HoverCardContent className="p-4 absolute right-0 translate-x-[10px] w-[200px] h-[160px]">
        <ul className="space-y-2 text-sm text-gray-700">
          {userActionItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block hover:text-primary hover:text-gray-900 hover:underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserActions;
