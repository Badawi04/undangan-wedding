import React from 'react';

const Gallery = ({ images, onOpenLightbox }) => {
  return (
    <section id="gallery" className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-gray-800 text-sm tracking-widest uppercase mb-2">Our Moments</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Galeri Foto</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`gallery-item overflow-hidden rounded-lg cursor-pointer reveal ${
                index === 3 || index === 9 ? 'md:col-span-2' : ''
              }`}
              onClick={() => onOpenLightbox(index)}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
