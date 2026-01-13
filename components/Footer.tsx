
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              MELON <span className="text-[#ff9c9c]">FUN</span>
            </h2>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              Professional entertainment and event services for families in the GTA. Experience the fun with us!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4 text-[#96d18c]">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#packages" className="text-gray-400 hover:text-white transition-colors">2026 Packages</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Add-On Services</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold mb-4 text-[#ff9c9c]">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#ff9c9c] transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Serving Toronto, North York, Scarborough, Markham, Richmond Hill & beyond.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Melon Fun Events & Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
