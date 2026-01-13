
import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 italic serif">Contact Us</h2>
          <p className="text-gray-600 text-xl">{CONTACT_INFO.area}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Card 1 */}
          <div className="bg-[#fff9f2] p-8 rounded-3xl border border-[#f3e5d8] text-center transform hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-[#ff9c9c] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Margie</h3>
            <a href={`tel:${CONTACT_INFO.margie}`} className="text-[#ff9c9c] font-black text-lg block hover:underline">
              {CONTACT_INFO.margie}
            </a>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-[#fff9f2] p-8 rounded-3xl border border-[#f3e5d8] text-center transform hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-[#96d18c] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Sally / Doc</h3>
            <div className="space-y-1">
              {CONTACT_INFO.sallyDoc.split('/').map((num, i) => (
                <a key={i} href={`tel:${num.trim()}`} className="text-[#96d18c] font-black text-lg block hover:underline">
                  {num.trim()}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-[#fff9f2] p-8 rounded-3xl border border-[#f3e5d8] text-center transform hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-[#ff9c9c] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Rachelle</h3>
            <a href={`tel:${CONTACT_INFO.rachelle}`} className="text-[#ff9c9c] font-black text-lg block hover:underline">
              {CONTACT_INFO.rachelle}
            </a>
            <p className="text-xs text-gray-500 mt-2">Catering Specialist</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href={CONTACT_INFO.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-[#1565c0] transition-all transform hover:scale-105"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Message us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
