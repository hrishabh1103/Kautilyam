"use client";

import React from "react";
import { AnimatedCard } from "../ui/AnimatedCard";
import { ShieldCheck, Cpu, Target, Layers, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export const PlatformModulesSection = () => {
  return (
    <section id="products" className="py-24 relative bg-[#05070d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise Cyber Defense <span className="text-[#00f5ff]">Ecosystem</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the right level of autonomy for your security infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Zylar Lite */}
          <AnimatedCard delay={0.1} className="border border-white/10 hover:border-[#00f5ff]/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-[#00f5ff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              Zylar Lite
              <span className="text-xs font-semibold px-2 py-1 rounded bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/20">FREE</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md relative z-10">
              AI-powered threat simulation & detection designed for fast-moving teams. Test your defenses against modern attacks.
            </p>
            <ul className="space-y-4 mb-8 text-gray-300 relative z-10">
              <li className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#00f5ff]" />
                Threat Simulation Engine
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#00f5ff]" />
                Real-time Detection Logs
              </li>
            </ul>
            <Link href="#" className="inline-flex items-center text-[#00f5ff] hover:text-[#00f5ff]/80 font-medium relative z-10">
              Try Zylar Lite <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </AnimatedCard>

          {/* Kautilyam V1 */}
          <AnimatedCard delay={0.2} className="border border-[#7b61ff]/30 shadow-[0_0_30px_rgba(123,97,255,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-32 h-32 text-[#7b61ff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              Kautilyam V1
              <span className="text-xs font-semibold px-2 py-1 rounded bg-[#7b61ff]/10 text-[#7b61ff] border border-[#7b61ff]/20">ENTERPRISE</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md relative z-10">
              Inspired by ancient strategic intelligence, built for modern cyber warfare. Our flagship autonomous AI system.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-gray-300 relative z-10">
              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-[#7b61ff] mt-0.5" />
                <span className="text-sm">Multi-Agent Architecture</span>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#7b61ff] mt-0.5" />
                <span className="text-sm">Autonomous Decision Engine</span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#7b61ff] mt-0.5" />
                <span className="text-sm">Predictive Threat Intelligence</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#7b61ff] mt-0.5" />
                <span className="text-sm">Real-Time Response System</span>
              </div>
            </div>
            <Link href="#contact" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-[#7b61ff] rounded-md hover:bg-[#7b61ff]/90 transition-colors relative z-10">
              Request Kautilyam Demo
            </Link>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
