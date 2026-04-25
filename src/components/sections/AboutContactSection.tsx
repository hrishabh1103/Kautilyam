"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export const AboutContactSection = () => {
  return (
    <>
      <section id="about" className="py-24 relative bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-[#00f5ff] mb-6 font-medium">
              Autonomous cyber defense systems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              At Zylar, our mission is to build AI-driven intelligent security infrastructure. We believe the future of cybersecurity is not humans staring at dashboards, but autonomous agents detecting, analyzing, and mitigating threats in real-time.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f5ff]/20 to-[#7b61ff]/20 rounded-2xl blur-2xl" />
            <div className="glass-panel p-8 rounded-2xl relative z-10 border-l-4 border-l-[#7b61ff]">
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "In the digital age, defense must move at the speed of the machine, guided by the intellect of the strategist."
              </blockquote>
              <div className="text-sm text-[#00f5ff] uppercase tracking-wider">— Kautilyam Core Principle</div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-24 relative bg-[#05070d] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(123,97,255,0.1)] border border-[#7b61ff]/30">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-2 bg-[#7b61ff]/10 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to upgrade your defense?</h3>
                <p className="text-gray-400 text-sm mb-8">
                  Schedule a private demonstration of Kautilyam V1 with our enterprise security team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckIcon /> Live simulation
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckIcon /> Architecture review
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckIcon /> Custom pricing
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-10 bg-[#05070d]">
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">First Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#7b61ff] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Last Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#7b61ff] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Work Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#7b61ff] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Company</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#7b61ff] transition-colors" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#7b61ff] text-white font-medium rounded hover:bg-[#7b61ff]/90 transition-colors flex items-center justify-center gap-2 mt-4">
                    Talk to Security Expert <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
