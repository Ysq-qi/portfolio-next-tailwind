import React from "react";
import MemberBreadcrumb from "./MemberBreadcrumb";
import MemberSidebar from "./MemberSidebar";

interface MemberLayoutProps {
  children: React.ReactNode;
}

const MemberLayout: React.FC<MemberLayoutProps> = ({ children }) => { 
  return (
    <div className="flex flex-col w-full">
      {/* 麵包屑 */}
      <MemberBreadcrumb />
      <div className="flex w-full mt-4">
        {/* 側邊欄 */}
        <aside className="hidden sm:block w-[200px] mr-4">
          <MemberSidebar />
        </aside>
        {/* 主內容區域 */}
        <div className="flex-1 flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
}

export default MemberLayout;