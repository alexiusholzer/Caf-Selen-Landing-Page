import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={28} className="text-cream-100" />
              <span className="font-display text-2xl font-semibold text-cream-100">
                Café Selen
              </span>
            </div>
            <p className="text-cream-200 mb-6">
              Eine gemütliche Oase, wo traditioneller Café-Charme auf moderne Ästhetik trifft.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-100 hover:text-accent-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-accent-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-accent-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-cream-200 hover:text-accent-300 transition-colors">Startseite</a></li>
              <li><a href="#about" className="text-cream-200 hover:text-accent-300 transition-colors">Über uns</a></li>
              <li><a href="#menu" className="text-cream-200 hover:text-accent-300 transition-colors">Speisekarte</a></li>
              <li><a href="#gallery" className="text-cream-200 hover:text-accent-300 transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-cream-200 hover:text-accent-300 transition-colors">Reservierungen</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Öffnungszeiten</h4>
            <ul className="space-y-2 text-cream-200">
              <li className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>7:00 - 20:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span>8:00 - 21:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span>9:00 - 18:00 Uhr</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-cream-200 mr-3 mt-1 flex-shrink-0" />
                <span className="text-cream-200">Kaffeestraße 123<br />10115 Berlin</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-cream-200 mr-3 flex-shrink-0" />
                <span className="text-cream-200">030 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-cream-200 mr-3 flex-shrink-0" />
                <span className="text-cream-200">hallo@cafeselen.de</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-12 pt-8 text-center text-cream-300 text-sm">
          <p>&copy; {currentYear} Café Selen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};