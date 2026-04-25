import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PlatformModulesSection } from "@/components/sections/PlatformModulesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { BrochureGenerator } from "@/components/sections/BrochureGenerator";
import { AboutContactSection } from "@/components/sections/AboutContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PlatformModulesSection />
        <CapabilitiesSection />
        <ArchitectureSection />
        <ClientsSection />
        <BrochureGenerator />
        <AboutContactSection />
      </main>
      <Footer />
    </div>
  );
}
