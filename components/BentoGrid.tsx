import React from "react";

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us? 🏆
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine professional excellence with pure childhood joy to create
            unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-[#ff9c9c] rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-xl transform hover:scale-[1.02] transition-transform cursor-default overflow-hidden relative">
            <div className="relative z-10">
              <span className="text-6xl mb-4 block">🎪</span>
              <h3 className="text-3xl font-black mb-4">
                Years of Entertainment
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Founded in the heart of Toronto, we've brought smiles to over
                5,000 events. From intimate living room birthdays to massive
                corporate festivals, we know exactly what makes a party pop!
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[12rem] opacity-30 pointer-events-none">
              🍭
            </div>
          </div>

          <div className="md:col-span-2 bg-[#96d18c] rounded-[2rem] p-8 flex flex-col justify-center text-white shadow-xl transform hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex items-center gap-4">
              <span className="text-5xl">📍</span>
              <div>
                <h3 className="text-2xl font-bold">GTA & Beyond</h3>
                <p className="opacity-90">
                  Serving Toronto, Markham, Vaughan, Mississauga, and the entire
                  Greater Toronto Area.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fff9f2] border-2 border-[#f3e5d8] rounded-[2rem] p-8 flex flex-col justify-center text-gray-800 shadow-lg transform hover:scale-[1.02] transition-transform cursor-default">
            <span className="text-4xl mb-2">🛡️</span>
            <h3 className="text-xl font-bold">Safe & Insured</h3>
            <p className="text-sm text-gray-600">
              Full liability insurance for your peace of mind.
            </p>
          </div>

          <div className="bg-[#f3e5d8] rounded-[2rem] p-8 flex flex-col justify-center text-gray-800 shadow-lg transform hover:scale-[1.02] transition-transform cursor-default">
            <span className="text-4xl mb-2">⭐</span>
            <h3 className="text-xl font-bold">Top Rated</h3>
            <p className="text-sm text-gray-600">
              Awarded "Best Kids Entertainment" in 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
