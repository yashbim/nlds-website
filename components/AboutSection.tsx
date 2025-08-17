'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-squid-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-glow text-squid-pink">
            About NLDS
          </h2>
          <div className="w-24 h-1 bg-squid-teal mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-squid-teal mb-4">
              Welcome to the Game
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              NLDS (Next Level Digital Summit) is not just another tech conference. 
              It's a survival game where participants compete in various challenges 
              inspired by the iconic Squid Game series.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              From coding challenges to strategic thinking games, every participant 
              will face unique obstacles that test their skills, creativity, and 
              determination. Only the strongest will survive and claim the ultimate prize.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-squid-gray rounded-lg">
                <div className="text-3xl font-bold text-squid-pink mb-2">500+</div>
                <div className="text-white/70">Participants</div>
              </div>
              <div className="text-center p-6 bg-squid-gray rounded-lg">
                <div className="text-3xl font-bold text-squid-teal mb-2">24</div>
                <div className="text-white/70">Hours</div>
              </div>
              <div className="text-center p-6 bg-squid-gray rounded-lg">
                <div className="text-3xl font-bold text-squid-yellow mb-2">6</div>
                <div className="text-white/70">Games</div>
              </div>
              <div className="text-center p-6 bg-squid-gray rounded-lg">
                <div className="text-3xl font-bold text-squid-pink mb-2">$50K</div>
                <div className="text-white/70">Prize Pool</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Game symbols visualization */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-squid-gray rounded-lg flex items-center justify-center border-2 border-squid-pink">
                <div className="text-4xl">🔴</div>
              </div>
              <div className="aspect-square bg-squid-gray rounded-lg flex items-center justify-center border-2 border-squid-teal">
                <div className="text-4xl">🔵</div>
              </div>
              <div className="aspect-square bg-squid-gray rounded-lg flex items-center justify-center border-2 border-squid-yellow">
                <div className="text-4xl">🟡</div>
              </div>
              <div className="aspect-square bg-squid-gray rounded-lg flex items-center justify-center border-2 border-squid-pink">
                <div className="text-4xl">🟢</div>
              </div>
              <div className="aspect-square bg-squid-gray rounded-lg flex items-center justify-center border-2 border-squid-teal">
                <div className="text-4xl">🟣</div>
              </div>
              <div className="aspect-square bg-squid-gray rounded-lg flex items-center justify-center border-2 border-squid-yellow">
                <div className="text-4xl">⚫</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-squid-pink rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-squid-teal rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-squid-yellow rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
