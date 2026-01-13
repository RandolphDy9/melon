import React from "react";
import { ServicePackage } from "../types";
import { CONTACT_INFO } from "../constants";

interface PackageModalProps {
  pkg: ServicePackage;
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-20 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="h-64 relative">
          <img
            src={pkg.images[0]}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="p-8 md:p-12 -mt-16 relative">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl p-4 bg-white rounded-3xl shadow-lg">
              {pkg.icon}
            </span>
            <div>
              <h2 className="text-4xl font-black text-gray-800 leading-tight">
                {pkg.name}
              </h2>
              <p className="text-[#ff9c9c] text-2xl font-bold">{pkg.price}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                Detailed Description
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {pkg.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-[#96d18c]">✨</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#fff9f2] p-6 rounded-3xl flex flex-col justify-center items-center text-center">
                <span className="text-xs font-bold text-gray-500 uppercase mb-1">
                  Duration
                </span>
                <span className="text-2xl font-black text-[#ff9c9c]">
                  {pkg.duration || "Full Event"}
                </span>
                {pkg.savings && (
                  <div className="mt-4 bg-[#96d18c] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter">
                    {pkg.savings}
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => window.open(CONTACT_INFO.facebook, "_blank")}
            className="w-full mt-10 bg-[#ff9c9c] text-white text-xl py-5 rounded-2xl font-bold hover:bg-[#f88181] transition-all transform hover:scale-[1.02] shadow-xl"
          >
            Book This Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
