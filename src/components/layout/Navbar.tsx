"use client";

import React from "react";
import { Shield, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Live Threat Intelligence Strip */}
      <div className="bg-black/90 border-b border-[#00f5ff]/20 text-[#00f5ff] text-xs py-1.5 overflow-hidden flex font-mono">
        <div className="flex animate-marquee min-w-max">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="flex items-center mx-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 animate-pulse" />
              [ALERT] Brute force detected on node {[743, 219, 891, 412, 605][i]} | IP: 192.168.{[12, 194, 55, 233, 110][i]}.1 | Action: Blocked
              <span className="mx-4 text-gray-600">///</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
              [SYS] AI Defense Engine nominal | Latency: 4ms
              <span className="mx-4 text-gray-600">///</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b61ff] mr-2" />
              [INTEL] New C2 beacon neutralized
              <span className="mx-4 text-gray-600">///</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="text-[#00f5ff] w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            KAUTILYAM
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#products" className="hover:text-white transition-colors">Platform</Link>
          <Link href="#capabilities" className="hover:text-white transition-colors">Capabilities</Link>
          <Link href="#architecture" className="hover:text-white transition-colors">Architecture</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#demo" className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-[#7b61ff]/20 border border-[#7b61ff]/50 rounded-md hover:bg-[#7b61ff]/40 hover:border-[#7b61ff] overflow-hidden">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#7b61ff]"></span>
            <span className="relative flex items-center gap-2">
              Request Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
