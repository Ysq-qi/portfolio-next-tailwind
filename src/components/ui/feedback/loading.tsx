"use client";

import React from "react";
import { Spinner } from "@/components/ui/icons/icons";

interface LoadingProps {
  size?: number;
  color?: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 24,
  color = "text-gray-700",
  icon,
  className,
}) => {
  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      {icon && React.isValidElement(icon) ? (
        React.cloneElement(icon, {
          className: `animate-spin ${color}`,
          width: size,
          height: size,
        })
      ) : (
        <Spinner
          className={`animate-spin ${color}`}
          width={size}
          height={size}
        />
      )}
    </div>
  );
};

export default Loading;
