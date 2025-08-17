"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Centered Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/nlds-logo.png"
              alt="NLDS Logo"
              width={120} // controls size
              height={0}  // let width decide, prevents stretching
              className="h-auto w-[120px]" // preserve aspect ratio
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
