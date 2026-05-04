import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="font-serif text-3xl mb-4">Terima Kasih</h2>
          <p className="text-gray-400 mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami<br />
            apabila Bapak/Ibu/Saudara/i berkenan hadir<br />
            untuk memberikan doa restu.
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            Made with <Heart size={16} className="inline text-white-900 fill-white-900" /> by Rizal & Lutfiah
          </p>
          <p className="text-gray-600 text-xs mt-2">© 2026 Wedding Invitation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
