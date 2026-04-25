"use client";

import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

interface TerminalBlockProps {
  logs?: string[];
  className?: string;
}

const defaultLogs = [
  "Initializing Kautilyam AI Agent...",
  "Loading threat intelligence models...",
  "Establishing secure connection to core...",
  "Connection established. Latency: 3ms",
  "Monitoring network traffic on all ports...",
  "Anomaly detected in inbound packet stream...",
  "Classifying payload signature: High Confidence [C2 Beacon]",
  "Executing mitigation protocol Alpha-7...",
  "Threat neutralized. Continuing surveillance..."
];

export const TerminalBlock = ({ logs = defaultLogs, className = "" }: TerminalBlockProps) => {
  const [displayedLogs, setDisplayedLogs] = useState<{time: string, text: string}[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        const time = new Date().toISOString().split('T')[1].split('.')[0];
        setDisplayedLogs(prev => [...prev, { time, text: logs[currentIndex] }]);
        currentIndex++;
      } else {
        // Reset or loop
        setTimeout(() => {
          setDisplayedLogs([]);
          currentIndex = 0;
        }, 3000);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, [logs]);

  return (
    <div className={`rounded-lg border border-[#00f5ff]/20 bg-[#05070d]/90 shadow-2xl overflow-hidden backdrop-blur-md font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#00f5ff]/20 bg-[#00f5ff]/5">
        <Terminal className="w-4 h-4 text-[#00f5ff]" />
        <span className="text-gray-400 text-xs">zylar_system_agent.sh</span>
      </div>
      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-1">
        {displayedLogs.map((log, i) => (
          <div key={i} className="flex gap-2 text-gray-300">
            <span className="text-[#7b61ff]">[{log.time}]</span>
            <span className={log.text?.includes("Threat") || log.text?.includes("Anomaly") ? "text-[#00f5ff]" : ""}>
              {log.text}
            </span>
          </div>
        ))}
        <div className="flex gap-2 text-gray-300 animate-pulse">
          <span className="text-[#7b61ff]">[{mounted ? new Date().toISOString().split('T')[1].split('.')[0] : "00:00:00"}]</span>
          <span>_</span>
        </div>
      </div>
    </div>
  );
};
