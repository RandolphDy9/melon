import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#f3e5d8]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#ff9c9c] rounded-full flex items-center justify-center text-white font-bold italic shadow-sm">
            M
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800">
            MELON
          </span>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <a
            href="#packages"
            className="hover:text-[#ff9c9c] transition-colors"
          >
            Packages
          </a>
          <a
            href="#services"
            className="hover:text-[#ff9c9c] transition-colors"
          >
            Individual Services
          </a>
          <a href="#contact" className="hover:text-[#ff9c9c] transition-colors">
            Inquire Now
          </a>
        </nav>

        <a
          href="https://www.facebook.com/melon.facepainting"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#96d18c] text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-[#7db974] transition-all transform hover:-translate-y-0.5"
        >
          Facebook Page
        </a>
      </div>
    </header>
  );
};

export default Header;
