import React from "react";
import { Shield, Globe, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-[#00f5ff] w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-white">
              KAUTILYAM
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Elite AI-powered cyber defense systems for modern enterprises. Built to anticipate and neutralize threats autonomously.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-[#00f5ff] transition-colors">
              <Globe className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00f5ff] transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Platform</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="#products" className="hover:text-[#00f5ff] transition-colors">Zylar Lite</Link></li>
            <li><Link href="#products" className="hover:text-[#00f5ff] transition-colors">Kautilyam V1</Link></li>
            <li><Link href="#architecture" className="hover:text-[#00f5ff] transition-colors">Architecture</Link></li>
            <li><Link href="#" className="hover:text-[#00f5ff] transition-colors">Documentation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="#about" className="hover:text-[#00f5ff] transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-[#00f5ff] transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-[#00f5ff] transition-colors">Blog</Link></li>
            <li><Link href="#contact" className="hover:text-[#00f5ff] transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Kautilyam Security Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
