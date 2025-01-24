"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`cursor-pointer font-black ${className}`}
    >
      ChaoQian作品
    </Link>
  );
};

export default Logo;
