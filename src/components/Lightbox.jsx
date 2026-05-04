import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onChangeImage }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onChangeImage(-1);
      if (e.key === 'ArrowRight') onChangeImage(1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onChangeImage]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-rose-400"
      >
        <X size={32} />
      </button>
      <button 
        onClick={() => onChangeImage(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-400"
      >
        <ChevronLeft size={40} />
      </button>
      <img 
        src={images[currentIndex]} 
        alt="Fullscreen" 
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
      />
      <button 
        onClick={() => onChangeImage(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-400"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

export default Lightbox;
