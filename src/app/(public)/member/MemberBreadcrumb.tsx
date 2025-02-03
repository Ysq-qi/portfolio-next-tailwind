import React from "react";

const MemberBreadcrumb: React.FC = () => {
  return (
    <nav className="text-sm text-gray-500">
      <ul className="flex items-center space-x-2">
        <li>首頁</li>
        <li>&gt;</li>
        <li>會員專區</li>
      </ul>
    </nav>
  );
};

export default MemberBreadcrumb;
