import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=400&h=320",
      srcSet: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=400&h=320 400w, https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600&h=480 600w",
      alt: "Barista beim Zubereiten von Latte Art",
    },
    {
      url: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400&h=320",
      srcSet: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400&h=320 400w, https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600&h=480 600w",
      alt: "Auslage frischer Backwaren",
    },
    {
      url: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=400&h=320",
      srcSet: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=400&h=320 400w, https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=600&h=480 600w",
      alt: "Kaffeebohnen Nahaufnahme",
    },
    {
      url: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=400&h=320",
      srcSet: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=400&h=320 400w, https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600&h=480 600w",
      alt: "Café-Terrasse mit Gästen",
    },
    {
      url: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=400&h=320",
      srcSet: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=400&h=320 400w, https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=600&h=480 600w",
      alt: "Handwerkliche Kaffeezubereitung",
    },
    {
      url: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400&h=320",
      srcSet: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400&h=320 400w, https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600&h=480 600w",
      alt: "Gemütliches Café-Interieur mit Büchern",
    },
  ];

  return (
    <section id="gallery" className="section bg-cream-50">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Galerie
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ein Einblick in unsere Welt des handwerklichen Kaffees und köstlicher Leckereien
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={image.url} 
                srcSet={image.srcSet}
                sizes="(max-width: 768px) 50vw, 33vw"
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm md:text-base font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
          >
            <Instagram size={20} />
            Folgen Sie uns auf Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};