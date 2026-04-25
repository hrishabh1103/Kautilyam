"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedCard = ({ children, delay = 0, className = "" }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f5ff]/0 via-[#00f5ff]/0 to-[#7b61ff]/0 group-hover:to-[#7b61ff]/10 rounded-xl transition-all duration-500 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
