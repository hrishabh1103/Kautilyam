"use client";

import React, { useState } from "react";
import { Download, CheckCircle, Loader2 } from "lucide-react";

export const BrochureGenerator = () => {
  const [step, setStep] = useState(0);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(1); // "Analyzing..."
    setTimeout(() => {
      setStep(2); // "Generating blueprint..."
      setTimeout(() => {
        setStep(3); // Done
      }, 2000);
    }, 2000);
  };

  return (
    <section className="py-24 relative bg-[#05070d]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00f5ff]/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your <span className="text-[#00f5ff]">Custom AI Security Blueprint</span>
          </h2>
          <p className="text-gray-400">Generate a tailored defense architecture based on your organization's profile.</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          {step === 0 && (
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                  <select className="w-full bg-[#05070d] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00f5ff] transition-colors">
                    <option>1-50 Employees</option>
                    <option>51-200 Employees</option>
                    <option>201-1000 Employees</option>
                    <option>1000+ Employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                  <select className="w-full bg-[#05070d] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00f5ff] transition-colors">
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Technology</option>
                    <option>Manufacturing</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary Security Challenge</label>
                <select className="w-full bg-[#05070d] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00f5ff] transition-colors">
                  <option>Ransomware Protection</option>
                  <option>Insider Threats</option>
                  <option>Cloud Security</option>
                  <option>Compliance (SOC2/HIPAA)</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#00f5ff] to-[#00b8ff] text-[#05070d] font-bold rounded-md hover:opacity-90 transition-opacity">
                Generate Architecture
              </button>
            </form>
          )}

          {(step === 1 || step === 2) && (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 font-mono">
              <Loader2 className="w-12 h-12 text-[#00f5ff] animate-spin" />
              <div className="text-[#00f5ff] text-lg">
                {step === 1 ? "Analyzing risk profile..." : "Generating security blueprint..."}
              </div>
              <div className="w-full max-w-md h-2 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full bg-[#00f5ff] transition-all duration-1000 ${step === 1 ? 'w-1/3' : 'w-2/3'}`} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8 space-y-6">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Blueprint Generated</h3>
              <p className="text-gray-400 max-w-md mx-auto">Your autonomous defense architecture is ready for download.</p>
              <button onClick={() => setStep(0)} className="inline-flex items-center justify-center px-6 py-3 border border-[#00f5ff] text-[#00f5ff] rounded-md hover:bg-[#00f5ff]/10 transition-colors">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
