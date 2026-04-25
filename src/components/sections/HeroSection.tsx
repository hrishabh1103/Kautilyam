"use client";

import React from "react";
import { motion } from "framer-motion";
import { TerminalBlock } from "../ui/TerminalBlock";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/50 via-[#05070d]/80 to-[#05070d] pointer-events-none" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5ff]/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7b61ff]/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff] text-sm font-medium mb-6">
            <ShieldAlert className="w-4 h-4" />
            <span>Next-Gen Autonomous Security</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Agentic AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#7b61ff]">
              Cyber Defense
            </span>
            <br /> Platform
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
            Autonomous, multi-agent AI system designed for predictive cybersecurity. Outsmart threats before they happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#05070d] bg-[#00f5ff] rounded-md hover:bg-[#00f5ff]/90 transition-colors shadow-[0_0_20px_rgba(0,245,255,0.4)]">
              Request Kautilyam Demo
            </Link>
            <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm">
              Try Zylar Lite <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f5ff] to-[#7b61ff] rounded-xl blur opacity-20 animate-pulse" />
          <TerminalBlock className="h-[400px]" />
        </motion.div>
      </div>
    </section>
  );
};
