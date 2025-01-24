import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: string;
  color?: string;
  duration?: string; 
  type?: "circle" | "rectangle"; 
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  rounded = "rounded-xl",
  color = "bg-gray-200", 
  duration = "animate-pulse", 
  type = "rectangle", 
  ...props
}) => {
  const typeClasses = type === "circle" ? "rounded-full" : rounded;

  return (
    <div
      className={`${duration} ${typeClasses} ${color} ${className}`}
      {...props}
    />
  );
};

export { Skeleton };
