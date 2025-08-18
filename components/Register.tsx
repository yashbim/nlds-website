'use client';

export default function RegisterSection() {
  return (
    <section className="bg-squid-gray py-16"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent black background
      backdropFilter: 'blur(10px)', // Blur effect
      WebkitBackdropFilter: 'blur(10px)', // For Safari compatibility
    }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-squid-pink mb-4">
              Register Now!
            </h2>
            {/* <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you soon.
            </p> */}
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
