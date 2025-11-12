import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About us', 'Services', 'Portfolio'];

  return (
    <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group">
            <img 
              src="/xperia-sec.png" 
              alt="xperia secondary logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveLink(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeLink === item
                    ? 'text-[#ff0000]'
                    : 'text-[#000000] hover:text-[#ff0000]'
                }`}
              >
                {item}
                {activeLink === item && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#ff0000] to-[#000000] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2.5 font-medium text-white overflow-hidden rounded-full group bg-gradient-to-br from-[#f4bd0a] via-[#ff0000] to-transparent hover:shadow-lg hover:shadow-black/50 transition-all duration-300 border-2 border-black">
              <span className="relative z-10">Contact us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0000] to-[#f4bd0a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveLink(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeLink === item
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 px-6 py-3 font-medium text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg transition-all duration-300">
              Contact us
            </button>
          </nav>
        </div>
      </div>

      {/* Bottom Border */}
      <div className={`h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}

export default Header;