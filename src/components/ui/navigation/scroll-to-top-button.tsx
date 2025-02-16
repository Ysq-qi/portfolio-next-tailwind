"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽滾動事件
  useEffect(() => {
    const handleScroll = () => {
      // 滾動超過 px 時顯示按鈕，否則隱藏
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 點擊按鈕後滾動回頂端
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed bottom-10 right-10 p-3 bg-white text-gray-900 rounded-full shadow-xl border-2",
        "hover:bg-gray-50 transition-all duration-200"
      )}
      onClick={scrollToTop}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;
