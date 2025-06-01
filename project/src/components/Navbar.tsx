import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Startseite', href: '#hero' },
    { title: 'Über uns', href: '#about' },
    { title: 'Speisekarte', href: '#menu' },
    { title: 'Galerie', href: '#gallery' },
    { title: 'Standort', href: '#location' },
    { title: 'Kontakt', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-warm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Coffee 
            size={28} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-primary-500'
            }`} 
          />
          <span className={`font-display text-2xl font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-primary-800' : 'text-white'
          }`}>
            Café Selen
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className={`transition-colors duration-300 hover:text-accent-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`btn ${isScrolled ? 'btn-primary' : 'btn-outline border-white text-white hover:bg-white hover:text-primary-700'}`}
          >
            Tisch reservieren
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Menü umschalten"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-primary-800' : 'text-white'} />
          ) : (
            <MenuIcon size={24} className={isScrolled ? 'text-primary-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-accent-600 py-2"
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary w-full text-center"
              onClick={toggleMenu}
            >
              Tisch reservieren
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};