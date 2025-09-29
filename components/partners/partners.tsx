"use client";

import Image from "next/image";
import { mainPartners, refreshmentsPartners, otherPartners } from "../../constants/Partners";

export default function PartnersSection() {
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Title */}
        <div className="flex justify-center mb-16">
          <Image
            src="/topics/our-partners.png"
            alt="Our Partners"
            width={512}
            height={64}
            className="w-auto h-12 sm:h-16 md:h-20 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Partners Sections */}
        <div className="max-w-7xl mx-auto space-y-20">
          <PartnersGrid title=" " partners={mainPartners} />
          <PartnersGrid title="Refreshments Partners" partners={refreshmentsPartners} />
          <PartnersGrid title="Other Partners" partners={otherPartners} />
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Partners Grid Component
 */
function PartnersGrid({ title, partners }: { title: string; partners: Array<{ name: string; logo: string; link?: string }> }) {
  return (
    <div className="w-full">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-squid-pink text-center mb-10 sm:mb-12">
        {title}
      </h2>

      {/* Partners Container */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {partners.map((partner, index) => {
          const content = (
            <>
              {/* Logo Container */}
              <div className="w-40 h-28 sm:w-48 sm:h-32 md:w-52 md:h-36 lg:w-56 lg:h-40 flex items-center justify-center bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-squid-pink/50 group-hover:shadow-lg group-hover:shadow-squid-pink/20">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Partner Name */}
              <p className="text-white/90 text-xs sm:text-sm md:text-base text-center mt-3 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] px-2 font-medium h-10 sm:h-12 flex items-center justify-center leading-tight">
                {partner.name}
              </p>
            </>
          );

          return partner.link ? (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              {content}
            </a>
          ) : (
            <div
              key={index}
              className="flex flex-col items-center justify-center group"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}