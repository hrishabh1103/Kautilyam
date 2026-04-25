"use client";

import React from "react";

export const ClientsSection = () => {
  const logos = [
    "SavingsKaro.in",
    "HGS Technologies",
    "Cybercorp Ltd",
    "JSW Motors",
    "SavingsKaro.in",
    "HGS Technologies",
    "Cybercorp Ltd",
    "JSW Motors",
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-[#05070d]/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by emerging and enterprise innovators
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {logos.map((logo, idx) => (
            <span key={idx} className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
