import React from "react";

const FloatingEmoji: React.FC<{
  emoji: string;
  className: string;
  delay: string;
}> = ({ emoji, className, delay }) => (
  <div
    className={`absolute text-4xl md:text-6xl select-none pointer-events-none animate-bounce ${className}`}
    style={{ animationDuration: "3s", animationDelay: delay }}
  >
    {emoji}
  </div>
);

const Bubble: React.FC<{
  size: string;
  color: string;
  left: string;
  delay: string;
  duration: string;
}> = ({ size, color, left, delay, duration }) => (
  <div
    className={`absolute rounded-full opacity-20 pointer-events-none animate-float-up ${color}`}
    style={{
      width: size,
      height: size,
      left: left,
      bottom: "-10%",
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#fff9f2] py-20 px-4 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-[#ff9c9c] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] bg-[#96d18c] rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Bubbles */}
      <Bubble
        size="100px"
        color="bg-white"
        left="5%"
        delay="0s"
        duration="15s"
      />
      <Bubble
        size="60px"
        color="bg-[#ff9c9c]"
        left="15%"
        delay="2s"
        duration="12s"
      />
      <Bubble
        size="120px"
        color="bg-white"
        left="45%"
        delay="5s"
        duration="18s"
      />
      <Bubble
        size="80px"
        color="bg-[#96d18c]"
        left="75%"
        delay="1s"
        duration="14s"
      />
      <Bubble
        size="50px"
        color="bg-white"
        left="90%"
        delay="4s"
        duration="10s"
      />

      {/* Floating Emojis */}
      <FloatingEmoji
        emoji="🪄"
        className="top-20 left-10 md:left-24 rotate-[-15deg]"
        delay="0s"
      />
      <FloatingEmoji
        emoji="🎈"
        className="top-40 right-10 md:right-32 rotate-[10deg]"
        delay="1s"
      />
      <FloatingEmoji
        emoji="🎨"
        className="bottom-20 left-16 md:left-40 rotate-[-10deg]"
        delay="0.5s"
      />
      <FloatingEmoji
        emoji="🐰"
        className="bottom-32 right-12 md:right-48 rotate-[15deg]"
        delay="1.5s"
      />

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#ff9c9c]/20 shadow-sm animate-fade-in">
          <span className="text-[#ff9c9c] font-bold tracking-widest uppercase text-sm">
            ✨ Best in Toronto & GTA ✨
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-6 leading-none tracking-tighter">
          <span className="inline-block text-7xl md:text-[10rem] lg:text-[12rem] font-black bg-gradient-to-r from-[#ff9c9c] via-[#96d18c] to-[#ff9c9c] bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-default drop-shadow-2xl animate-pulse hover:animate-none">
            MELON
          </span>
          <br />
          <span className="text-4xl md:text-6xl font-bold text-gray-700">
            {" "}
            Fun Events & Services
          </span>
        </h1>

        <p className="text-2xl md:text-4xl italic text-gray-500 mb-12 serif max-w-2xl mx-auto leading-relaxed">
          "Where every celebration becomes a{" "}
          <span className="text-[#96d18c] font-bold">magical</span>{" "}
          masterpiece!"
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#packages"
            className="group relative bg-[#ff9c9c] text-white text-2xl px-12 py-5 rounded-[2rem] font-black shadow-2xl hover:bg-[#f88181] transition-all transform hover:scale-105 overflow-hidden w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore 2026 Packages 🚀
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a
            href="#contact"
            className="bg-white text-gray-800 border-4 border-[#96d18c] text-2xl px-12 py-5 rounded-[2rem] font-black shadow-xl hover:bg-[#96d18c] hover:text-white transition-all transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Get a Quote 📩
          </a>
        </div>

        {/* Feature Highlights with lively Hover effects */}
        <div className="mt-20 hidden md:flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            { label: "Magic Shows", icon: "🎩" },
            { label: "Face Painting", icon: "🎨" },
            { label: "Balloon Art", icon: "🎈" },
            { label: "Photo Booth", icon: "📸" },
            { label: "Bubble Fun", icon: "🫧" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white hover:border-[#ff9c9c] transition-all hover:-translate-y-2 flex items-center gap-3 cursor-default group"
            >
              <span className="text-2xl group-hover:animate-bounce">
                {item.icon}
              </span>
              <span className="font-bold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        .animate-float-up {
          animation-name: float-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
