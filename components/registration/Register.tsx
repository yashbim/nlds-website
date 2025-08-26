'use client';

import Image from "next/image";

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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Title */}
        <div className="mt-10 mb-8 flex items-center justify-center">
          <Image
            src="/topics/RegisterNow.png"
            alt="Register Now!"
            width={512}
            height={64}
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto h-auto hover:scale-105 hover:shadow-xl rounded-2xl transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Inline Tally Form */}
        <div className="bg-squid-grey/80 rounded-2xl p-2 sm:p-4 md:p-8 shadow-lg backdrop-blur-md">
          <iframe
            src="https://tally.so/r/wgPje1"
            width="100%"
            height="600"
            title="NLDS 2025 Contact Form"
            className="rounded-lg w-full"
            style={{ minHeight: '600px', border: 'none' }}
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </section>
  );
}