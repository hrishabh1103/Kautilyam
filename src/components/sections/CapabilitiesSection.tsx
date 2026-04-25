"use client";

import React from "react";
import { AnimatedCard } from "../ui/AnimatedCard";
import { Search, ShieldAlert, Activity, Eye, Network } from "lucide-react";

const capabilities = [
  {
    icon: <Search className="w-6 h-6 text-[#00f5ff]" />,
    title: "AI Threat Hunting",
    description: "Proactively search for hidden threats and vulnerabilities before they can be exploited."
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-[#7b61ff]" />,
    title: "Autonomous Response",
    description: "Instantaneous, AI-driven mitigation protocols that neutralize attacks without human intervention."
  },
  {
    icon: <Activity className="w-6 h-6 text-[#00f5ff]" />,
    title: "Behavioral Analysis",
    description: "Continuous profiling of entity behavior to detect anomalies and insider threats."
  },
  {
    icon: <Eye className="w-6 h-6 text-[#7b61ff]" />,
    title: "Real-Time Monitoring",
    description: "24/7 surveillance of your entire infrastructure with microsecond telemetry ingestion."
  },
  {
    icon: <Network className="w-6 h-6 text-[#00f5ff]" />,
    title: "Multi-Agent Coordination",
    description: "A swarm of specialized AI agents working together to correlate complex attack vectors."
  }
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 relative bg-[#05070d] border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Unmatched <span className="text-[#00f5ff]">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Our platform goes beyond traditional SIEMs, offering true autonomy and predictive intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <AnimatedCard key={idx} delay={idx * 0.1} className="bg-[#0a0f1c]/80 border-white/5 hover:border-[#00f5ff]/30">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                {cap.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
