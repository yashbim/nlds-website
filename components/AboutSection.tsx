export default function AboutEvent() {
  return (
    <section className="relative z-40 bg-black text-white py-16 px-6 md:px-12">
      {/* Title */}
      <div className="text-center mb-12 font-mono">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white ">
          About NLDS
        </h2>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 font-mono">
        {/* Item 1 */}
        <div className="bg-gray-900 border-2 border-squid-pink hover:border-squid-teal  rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out ">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-pink rounded-full mb-4">
            <span className="text-2xl font-bold">◯</span>
          </div>
          <h3 className="text-l font-semibold">10 Universities</h3>
        </div>

        {/* Item 2 */}
        <div className="bg-gray-900 border-2 border-squid-pink hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-pink rounded-full mb-4">
            <span className="text-2xl font-bold">△</span>
          </div>
          <h3 className="text-l font-semibold">3 Days</h3>
        </div>

        {/* Item 3 */}
        <div className="bg-gray-900 border-2 border-squid-pink hover:border-squid-teal rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-pink rounded-full mb-4">
            <span className="text-2xl font-bold">◻</span>
          </div>
          <h3 className="text-l font-semibold">250+ Delegates</h3>
        </div>
      </div>

      {/* About NLDS Paragraph */}
      <div className="max-w-3xl mx-auto tex font-lato text-center">
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
    </section>
  );
}
