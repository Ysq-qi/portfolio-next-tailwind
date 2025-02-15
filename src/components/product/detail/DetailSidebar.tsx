"use client";

import React from "react";
import CategoryList from "../list/CategoryList";

const DetailSidebar: React.FC = () => {
  return (
    <div className="w-full sm:w-[200px] md:w-[270px] border-r bg-white shadow p-4 my-4 space-y-6">
      <CategoryList />
    </div>
  );
};

export default DetailSidebar;