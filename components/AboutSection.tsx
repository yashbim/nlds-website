export default function AboutEvent() {
  return (
    <section
      className="relative z-20 py-16 px-6 md:px-12"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent black background
        backdropFilter: "blur(10px)", // Blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
      }}
    >
      {/* Title */}
      <div className="text-center mb-12 font-mono">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
          About NLDS
        </h2>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 font-mono">
        {/* Item 1 */}
        <div className="bg-gray-900 border-2 border-squid-pink hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-pink rounded-full mb-4">
            <span className="text-2xl font-bold">●</span>
          </div>
          <h3 className="text-l font-semibold">10 Universities</h3>
        </div>

        {/* Item 2 */}
        <div className="bg-gray-900 border-2 border-squid-pink hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-pink rounded-full mb-4">
            <span className="text-2xl font-bold">▲</span>
          </div>
          <h3 className="text-l font-semibold">3 Days</h3>
        </div>

        {/* Item 3 */}
        <div className="bg-gray-900 border-2 border-squid-pink hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-pink rounded-full mb-4">
            <span className="text-2xl font-bold">◐</span>
          </div>
          <h3 className="text-l font-semibold">250+ Delegates</h3>
        </div>
      </div>

      {/* About NLDS Paragraph */}
      <div className="max-w-3xl mx-auto text font-lato text-center pb-10">
        <p className="text-lg leading-relaxed text-gray-300">
          The{" "}
          <span className="text-squid-pink font-semibold">
            National Leadership Development Seminar (NLDS){" "}
          </span>
          is one of the largest conferences organized by AIESEC in Sri Lanka,
          bringing together over 250 delegates from more than 15 prestigious
          universities across the country. It serves as a platform for AIESECers
          from all over Sri Lanka to connect, expand their networks, and foster
          the development of the next generation of leaders.
        </p>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 font-mono">
        {/* Item 1 - Location */}
        <div className="bg-gray-900 border-2 border-red-700 hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-red-700 rounded-full mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <h3 className="text-l font-semibold text-center">
            Carolina Beach Resort & Spa
          </h3>
        </div>

        {/* Item 2 - Date */}
        <div className="bg-gray-900 border-2 border-green-600 hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-green-600 rounded-full mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
          </div>
          <h3 className="text-l font-semibold text-center">
            October 3rd - 5th
          </h3>
        </div>
      </div>
    </section>
  );
}
