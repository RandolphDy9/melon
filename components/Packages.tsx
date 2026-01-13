
import React, { useState, useEffect } from 'react';
import { PACKAGES } from '../constants';
import { ServicePackage } from '../types';
import PackageModal from './PackageModal';

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden group/slider">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="Package"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<ServicePackage | null>(null);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">2026 Party Packages 🎁</h2>
          <div className="w-24 h-1 bg-[#ff9c9c] mx-auto mb-4"></div>
          <p className="text-gray-500">Pick the perfect bundle for your special day!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-[#fff9f2] rounded-[2.5rem] p-6 border border-[#f3e5d8] shadow-lg hover:shadow-2xl transition-all flex flex-col relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPkg(pkg)}
            >
              <ImageSlider images={pkg.images} />

              <div className="absolute right-4 top-4 text-6xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform pointer-events-none">
                {pkg.icon}
              </div>

              {pkg.savings && (
                <div className="inline-block self-start mb-4 bg-[#96d18c] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {pkg.savings}
                </div>
              )}
              
              <div className="mb-4 relative z-10">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl">{pkg.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-black text-[#ff9c9c]">{pkg.price}</div>
                    {pkg.duration && (
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{pkg.duration}</div>
                    )}
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {pkg.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-4 h-4 text-[#96d18c] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="w-full bg-white border-2 border-[#ff9c9c] text-[#ff9c9c] py-3 rounded-2xl font-bold group-hover:bg-[#ff9c9c] group-hover:text-white transition-all shadow-sm"
              >
                Full Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </section>
  );
};

export default Packages;
