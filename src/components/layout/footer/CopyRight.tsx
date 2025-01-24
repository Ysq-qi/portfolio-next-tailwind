import React from "react";

const CopyRight: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      Copyright © 游邵謙 個人創作，僅用於個人用途。
    </div>
  );
};

export default CopyRight;
