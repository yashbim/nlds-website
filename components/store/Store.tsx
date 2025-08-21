'use client';

import Image from "next/image";

export default function Store() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
        {/* Title image */}
        <div className="mb-12">
          <Image
            src="/topics/Store.png"
            alt="Store"
            width={512}
            height={64}
            className="pb-5 hover:scale-105 hover:shadow-xl rounded-2xl transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Animated Text */}
        <div className="text-center font-mono">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide text-white animate-pulse">
            Coming Soon...
          </h2>
        </div>
      </div>
    </section>
  );
}