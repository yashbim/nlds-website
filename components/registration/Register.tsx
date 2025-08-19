'use client';

import Image from "next/image";
import Lottie from "lottie-react";
import animatedLogo from "@/public/animations/animated-bg-logo.json"; 

export default function RegisterSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/squid-game-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12 flex items-center justify-center pt-10">
          <Image
            src="/topics/RegisterNow.png"
            alt="Register Now!"
            width={512}
            height={64}
            className="pb-5 hover:scale-105 hover:shadow-xl rounded-2xl transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Inline Tally Form */}
        <div className="bg-squid-grey/80 rounded-2xl p-8 shadow-lg backdrop-blur-md">
          <iframe
            src="https://tally.so/r/wgPje1"
            width="100%"
            height="600"
            title="NLDS 2025 Contact Form"
            className="rounded-lg"
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </section>
  );
}
