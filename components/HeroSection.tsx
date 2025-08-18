"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-03T08:30:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        {/* Video element - replace src with actual video file */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain sm:object-cover"
        >
          <source src="/squid-game-bg.mp4" type="video/mp4" />
          {/* Fallback background if video doesn't load */}
        </video>

        {/* Overlay gradients */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-squid-pink/5 z-20"></div> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        {/* Main content can go here */}
      </div>

      {/* Countdown Timer - Pinned to Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex justify-center gap-4 text-2xl font-mono">
          <div className="bg-squid-dark w-20 h-20 rounded-lg flex flex-col items-center justify-center">
            <div className="text-squid-pink font-bold">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-white/70">Days</div>
          </div>
          <div className="bg-squid-dark w-20 h-20 rounded-lg flex flex-col items-center justify-center">
            <div className="text-squid-pink font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-white/70">Hours</div>
          </div>
          <div className="bg-squid-dark w-20 h-20 rounded-lg flex flex-col items-center justify-center">
            <div className="text-squid-pink font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-white/70">Minutes</div>
          </div>
          <div className="bg-squid-dark w-20 h-20 rounded-lg flex flex-col items-center justify-center">
            <div className="text-squid-pink font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-white/70">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
