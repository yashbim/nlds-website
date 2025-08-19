'use client';

import Image from "next/image";

export default function RegisterSection() {
  return (
    <section className="bg-squid-gray py-16"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent black background
      backdropFilter: 'blur(10px)', // Blur effect
      WebkitBackdropFilter: 'blur(10px)', // For Safari compatibility
    }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
                <div className="mb-12 flex items-center justify-center">
                  <Image 
                      src="/topics/RegisterNow.png" 
                      alt="Register Now!" 
                      width={512}   // same size as w-16 h-16
                      height={64}  
                      className="pb-5 hover:scale-105 hover:shadow-xl rounded-2xl transition-all duration-300 ease-in-out"
                    />
                </div>

          {/* Inline Tally Form */}
          <div className="bg-squid-grey rounded-2xl p-8 shadow-lg">
            <iframe
              src="https://tally.so/r/wgPje1"
              width="100%"
              height="600"
              // frameBorder="0"
              // marginHeight={0}
              // marginWidth={0}
              title="NLDS 2025 Contact Form"
              className="rounded-lg"
            >
              Loading form...
            </iframe>
          </div>

          {/* Alternative: Widget-based embed (uncomment to use instead of iframe) */}
          {/* 
          <div 
            data-tally-src="https://tally.so/r/3EOpMX" 
            data-tally-layout="inline"
            data-tally-width="100%" 
            data-tally-height="600"
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          ></div>
          */}
        </div>
      </section>
  );
}
