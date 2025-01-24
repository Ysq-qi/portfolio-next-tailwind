import React from "react";

const navItems = [
  ["商品資訊", "店舖資訊", "企業情報"],
  ["顧客服務", "購物說明", "線上購物指南"],
  ["隱私權聲明", "網站地圖", "人才招募"],
  ["特別專區", "活動資訊", "優惠方案"],
];

interface LinksProps {
  mode: "mobile" | "desktop";
  className?: string;
}

const Links: React.FC<LinksProps> = ({ mode, className }) => {
  return (
    <div className={className}>
      {navItems.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={
            mode === "mobile"
              ? "flex justify-center items-center space-x-4 py-2 "
              : "space-y-2 w-full"
          }
        >
          {group.map((item, itemIndex) => (
            <a
              key={itemIndex}
              href="#"
              className="text-sm text-gray-700 font-black hover:text-gray-900 hover:underline whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Links;
