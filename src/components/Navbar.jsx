import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ navbarBg, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = ['home', 'couple', 'event', 'story', 'gallery', 'gift'];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${navbarBg ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-serif text-xl font-bold text-gray-800">
          R & L
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">  
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="hover:text-gray-900 transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
