import Image from "next/image";

export default function AboutEvent() {
  return (
    <section
      id="about"
      className="relative z-20 py-16 px-6 md:px-12"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {/* Title */}
      <div className="mb-12 flex items-center justify-center">
        <Image
          src="/topics/AboutNLDS.png"
          alt="About NLDS"
          width={512}
          height={64}
          className="pb-5 hover:scale-105 hover:shadow-xl rounded-2xl transition-all duration-300 ease-in-out"
        />
      </div>

      {/* About NLDS Paragraph */}
      <div className="max-w-5xl mx-auto text font-mono text-center pb-10">
        <div className="border-0 rounded-2xl p-4 backdrop-blur-xl">
          <p className="text-xl leading-relaxed text-gray-300">
            The{" "}
            <span className="text-squid-pink font-semibold">
              National Leadership Development Seminar (NLDS){" "}
            </span>
            is one of the largest conferences organized by AIESEC in Sri Lanka,
            bringing together over 250 delegates from more than 10 prestigious
            universities across the country. It serves as a platform for AIESECers
            from all over Sri Lanka to connect, expand their networks, and foster
            the development of the next generation of leaders.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 font-mono pb-6">
        {/* Item 1 */}
        <div className="bg-gray-900 border-2 border-squid-teal hover:border-squid-pink hover:inset-shadow-sm hover:inset-shadow-squid-pink rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <Image
            src="/shapes/Circle.png"
            alt="Circle"
            width={64}
            height={64}
            className="pb-5 hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <h3 className="text-l font-semibold">10 Universities</h3>
        </div>
        {/* Item 2 */}
        <div className="bg-gray-900 border-2 border-squid-teal hover:border-squid-pink hover:inset-shadow-sm hover:inset-shadow-squid-pink rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <Image
            src="/shapes/Triangle.png"
            alt="Triangle"
            width={64}
            height={64}
            className="pb-5 hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <h3 className="text-l font-semibold">3 Days</h3>
        </div>
        {/* Item 3 */}
        <div className="bg-gray-900 border-2 border-squid-teal hover:border-squid-pink hover:inset-shadow-sm hover:inset-shadow-squid-pink rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <Image
            src="/shapes/Square.png"
            alt="Square shape"
            width={64}
            height={64}
            className="pb-5 hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <h3 className="text-l font-semibold">250+ Delegates</h3>
        </div>
      </div>

      {/* Buttons Section */}
<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 font-mono pb-5 px-4">
  <a
    href="/register"
    className="bg-gray-900 border-2 border-red-700 hover:bg-red-700 hover:text-gray-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl w-full sm:w-auto"
  >
    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border-2 border-red-700 rounded-full">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    </div>
    Register
  </a>
  <a
    href="/store"
    className="bg-gray-900 border-2 border-green-600 hover:bg-green-600 hover:text-gray-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl w-full sm:w-auto"
  >
    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border-2 border-green-600 rounded-full">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 13h10l1.1-3H5.9l1.1 3zm9.83-7.83C16.55 5.05 16.25 5 16 5H5.83l-.59-1.76L4.5 2H2v2h1.67l3.5 10.5h10.67l3.5-10.5H22v-2h-1.17l-.83 2.47z" />
      </svg>
    </div>
    Buy Merch
  </a>
</div>


      {/* Title */}
      <div className="text-center mb-6 font-mono">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
          Watch Trailer
        </h2>
      </div>

      {/* 🎥 Video Section */}
      <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
        <video
          controls
          className="w-full aspect-video rounded-2xl"
          poster="/trailer-thumbnail.png"
        >
          <source src="/trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 font-mono">
        {/* Item 1 - Location */}
        <a
          // href="https://www.carolinabeachhotel.lk/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="bg-gray-900 border-2 border-squid-teal hover:border-squid-pink hover:inset-shadow-sm hover:inset-shadow-squid-pink rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-teal rounded-full mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="text-l font-semibold text-center">Await the Reveal!</h3>
          </div>
        </a>
        {/* Item 2 - Date */}
        <div className="bg-gray-900 border-2 border-squid-teal hover:border-squid-pink hover:inset-shadow-sm hover:inset-shadow-squid-pink rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-squid-teal rounded-full mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
          </div>
          <h3 className="text-l font-semibold text-center">October 3rd - 5th</h3>
        </div>
      </div>
    </section>
  );
}