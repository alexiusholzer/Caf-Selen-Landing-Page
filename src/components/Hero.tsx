import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            Willkommen im <span className="text-cream-200">Café Selen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-cream-100">
            Eine gemütliche Oase, wo traditioneller Café-Charme auf moderne Ästhetik trifft
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="btn btn-primary">
              Speisekarte entdecken
            </a>
            <a href="#contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-700">
              Tisch reservieren
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a 
          href="#about"
          aria-label="Nach unten scrollen"
          className="text-white flex flex-col items-center"
        >
          <span className="mb-2 text-sm">Mehr entdecken</span>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5 
            }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};