"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface SectionBlockProps {
  id: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({ id, title, className, children }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn("min-h-[1000px] p-6", className)}
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </motion.div>
  );
};
