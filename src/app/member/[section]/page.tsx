"use client";

import React from "react";
import { useParams } from "next/navigation";
import Orders from "./orders/page";
import Favorites from "./favorites/page";
import Profile from "./profile/page";

const MemberSectionPage: React.FC = () => {
  const params = useParams();
  const section = params.section as string;

  if (section === "orders") return <Orders />;
  if (section === "favorites") return <Favorites />;
  if (section === "profile") return <Profile />;

  return (
    <div className="flex flex-col items-center">
      <h2>未知功能</h2>
      <p>您訪問的功能不存在</p>
    </div>
  );
};

export default MemberSectionPage;