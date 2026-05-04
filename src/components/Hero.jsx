import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ countdown }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-stone-50/50 via-transparent to-stone-50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <p className="text-gray-500 tracking-[0.3em] uppercase text-sm mb-6 reveal">Save The Date</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-800 mb-4 reveal">
          Rizal <span className="text-gray-900">&</span> Lutfiah
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto reveal italic">
          "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu."
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-700 reveal">
          <span className="font-medium">07 Juni 2026</span>
          <span className="hidden md:inline text-rose-400">•</span>
          <span className="font-medium">Sidoarjo, Indonesia</span>
        </div>
        
        <div className="mt-12 flex justify-center reveal">
          <div className="grid grid-cols-4 gap-4 text-center">
            {Object.entries(countdown).map(([key, value]) => (
              <div key={key} className="bg-white/80 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-300 min-w-20">
                <span className="block font-serif text-2xl font-bold text-gray-800">{value}</span>
                <span className="text-xs text-gray-500 uppercase">{key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
