import React from "react";
import { Button } from "@/components/ui/form/button";

interface ActionButtonProps {
  type?: "default" | "special" | "store";
  onClick?: () => void;
  className?: string;
}

const buttonTextMap: Record<NonNullable<ActionButtonProps["type"]>, string> = {
  default: "查看更多",
  special: "查看更多特集",
  store: "查看更多門市服務",
};

const ActionButton: React.FC<ActionButtonProps> = ({ type = "default", onClick }) => {
  return (
    <Button variant="action" size={undefined} className="rounded-[4px]" onClick={onClick}>
      {buttonTextMap[type]}
    </Button>
  );
};

export default ActionButton;
