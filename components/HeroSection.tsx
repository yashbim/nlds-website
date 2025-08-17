"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video element - replace src with actual video file */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3) contrast(1.2)" }}
        >
          <source src="/squid-game-bg.mp4" type="video/mp4" />
          {/* Fallback background if video doesn't load */}
        </video>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-squid-pink/5 z-20"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30 z-15">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-squid-pink rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        {/* Countdown Timer */}
        <div className="mt-12">
          {/* <p className="text-squid-yellow text-lg mb-4">Event starts in:</p> */}
          <div className="flex justify-center gap-4 text-2xl font-mono">
            <div className="bg-squid-dark p-4 rounded-lg">
              <div className="text-squid-pink font-bold">15</div>
              <div className="text-sm text-white/70">Days</div>
            </div>
            <div className="bg-squid-dark p-4 rounded-lg">
              <div className="text-squid-pink font-bold">08</div>
              <div className="text-sm text-white/70">Hours</div>
            </div>
            <div className="bg-squid-dark p-4 rounded-lg">
              <div className="text-squid-pink font-bold">42</div>
              <div className="text-sm text-white/70">Minutes</div>
            </div>
            <div className="bg-squid-dark p-4 rounded-lg">
              <div className="text-squid-pink font-bold">17</div>
              <div className="text-sm text-white/70">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
