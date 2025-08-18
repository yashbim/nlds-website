"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RegisterSection from "../components/Register";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      
      {/* Scrollable Content Container */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Content sections that will scroll over the hero */}
        <AboutSection />
        <RegisterSection />
      </div>
    </div>
  );
}