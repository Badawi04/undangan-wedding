import React from 'react';
import { Heart, Instagram } from 'lucide-react';

const Couple = () => {
  return (
    <section id="couple" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-gray-800 text-sm tracking-widest uppercase mb-2">Meet The Bride & Groom</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Mempelai</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Groom - Left */}
          <div className="text-center reveal">
            <div className="relative inline-block mb-6 group">
              <div className="absolute inset-0 bg-gray-200 rounded-full transform rotate-6 transition-transform group-hover:rotate-12"></div>
              <img 
                src="/images/Rizal.png" 
                alt="Rizal" 
                className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">Rizal</h3>
            <p className="text-gray-900 text-sm mb-2">Putra dari</p>
            <p className="text-gray-600 text-sm mb-4">
              Bapak M. Saiful Bachri (Alm)<br />& Ibu Lucky Mulyani 
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com/INSTAGRAM_RIZAL" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Bride - Right */}
          <div className="text-center reveal">
            <div className="relative inline-block mb-6 group">
              <div className="absolute inset-0 bg-gray-200 rounded-full transform -rotate-6 transition-transform group-hover:-rotate-12"></div>
              <img 
                src="/images/Lutfiah.jpeg" 
                alt="Lutfiah" 
                className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">Lutfiah</h3>
            <p className="text-gray-900 text-sm mb-2">Putri dari</p>
            <p className="text-gray-600 text-sm mb-4">
              Bapak Sutaji<br />& Ibu Kokom Komariah
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/lutfiahnila24/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
