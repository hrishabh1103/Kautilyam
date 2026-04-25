"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, BrainCircuit, Shield } from "lucide-react";

export const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 relative bg-[#05070d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            System <span className="text-[#7b61ff]">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A visual breakdown of how Kautilyam AI processes, analyzes, and mitigates threats in real-time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00f5ff]/30 to-transparent -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: <Database className="w-8 h-8 text-[#00f5ff]" />, title: "Input Logs", desc: "Telemetry from endpoints, networks, and cloud." },
              { icon: <Cpu className="w-8 h-8 text-[#7b61ff]" />, title: "AI Agents", desc: "Specialized agents parse and correlate data streams." },
              { icon: <BrainCircuit className="w-8 h-8 text-[#00f5ff]" />, title: "Decision Engine", desc: "Evaluates risk and determines the optimal response." },
              { icon: <Shield className="w-8 h-8 text-[#7b61ff]" />, title: "Action Layer", desc: "Autonomously blocks IP, isolates host, or alerts SOC." }
            ].map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#05070d] border border-[#00f5ff]/20 flex items-center justify-center mb-6 relative group shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                  <div className="absolute inset-0 rounded-full bg-[#00f5ff]/10 group-hover:scale-110 transition-transform duration-300" />
                  {node.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{node.title}</h3>
                <p className="text-gray-400 text-sm">{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3 text-center mb-8">
             <h3 className="text-2xl font-bold text-white">Why Kautilyam AI</h3>
          </div>
          
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-[#00f5ff] mb-2">Autonomous Decision-Making</h4>
            <p className="text-gray-400 text-sm">Moves beyond rule-based alerts to autonomous, intelligent action.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-[#7b61ff] mb-2">Multi-Agent Intelligence</h4>
            <p className="text-gray-400 text-sm">Simulates an entire security team collaborating in milliseconds.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-[#00f5ff] mb-2">Predictive Modeling</h4>
            <p className="text-gray-400 text-sm">Anticipates attacker movements based on historical TTPs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
