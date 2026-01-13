
import React from 'react';
import { INDIVIDUAL_SERVICES } from '../constants';

const IndividualServices: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#fff9f2]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Custom Add-Ons 🍭</h2>
            <p className="text-gray-500">Mix and match to create your perfect event.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INDIVIDUAL_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-all border-l-8 border-l-[#96d18c]">
                <div className="flex items-center gap-4">
                  <span className="text-3xl group-hover:scale-125 transition-transform">{service.icon || "🎈"}</span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{service.name}</h4>
                    {service.note && <p className="text-xs text-gray-500 italic">{service.note}</p>}
                  </div>
                </div>
                <div className="text-xl font-black text-[#96d18c]">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border-2 border-dashed border-[#f3e5d8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Catering & Food Services 🌭</h3>
              <p className="text-sm text-gray-600">Full party catering available! Hot dogs, popcorn, and more.</p>
            </div>
            <a 
              href="tel:+14168780052" 
              className="bg-[#ff9c9c] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Call Rachelle for Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualServices;
