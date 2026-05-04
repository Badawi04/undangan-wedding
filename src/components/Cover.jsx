import React from 'react';
import { Heart, Mail } from 'lucide-react';

const Cover = ({ guestName, onOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200" 
          alt="Cover Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      
      <style>{`
        @keyframes elegantFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-elegant-fade {
          animation: elegantFade 0.8s ease-out forwards;
        }
        .animate-gentle-float {
          animation: gentleFloat 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 text-center px-4 max-w-md mx-auto">
        <div className="mb-8 animate-elegant-fade">
          <Heart className="w-16 h-16 text-gray-100 mx-auto mb-4 fill-gray-100 animate-gentle-float" />
          <p className="text-white/90 text-lg tracking-widest uppercase mb-2">The Wedding of</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-2">Rizal & Lutfiah</h1>
          <p className="text-gray-200 text-sm">07 Juni 2026</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
          <p className="text-white/80 text-sm mb-2">Kepada Yth.</p>
          <p className="text-white text-2xl font-serif font-medium mb-1">{guestName}</p>
          <p className="text-white/60 text-xs">di Tempat</p>
        </div>

        <button 
          onClick={onOpen} 
          className="group relative px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-400/30"
        >
          <span className="flex items-center gap-2">
            <Mail size={20} />
            Buka Undangan
          </span>
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
        </button>
      </div>
    </div>
  );
};

export default Cover;
