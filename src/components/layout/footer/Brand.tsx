import React from "react";
import Link from "next/link";

const Brand: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" className={`text-3xl font-black text-gray-800 ${className}`}>
     ChaoQian作品
    </Link>
  );
};

export default Brand;
