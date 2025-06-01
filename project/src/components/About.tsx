import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Coffee, Award, Users } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-cream-50">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Unsere Geschichte
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Entdecken Sie die Leidenschaft und Hingabe hinter jeder Tasse, die wir servieren
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-warm">
              <img 
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Café Selen Innenraum" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-display text-primary-800 mb-6">Eine Verbindung von Tradition & Innovation</h3>
            <p className="text-gray-700 mb-6">
              Gegründet im Jahr 2015 begann Café Selen mit einer einfachen Vision: einen Ort zu schaffen, an dem traditionelle Kaffeekunst auf zeitgenössischen Geschmack trifft. Unsere Gründerin Elena benannte das Café nach ihrer Großmutter Selena, deren geheime Rezepte und Gastfreundschaft weiterhin unseren Ansatz inspirieren.
            </p>
            <p className="text-gray-700 mb-8">
              Heute sind wir stolz darauf, feinste Single-Origin-Bohnen zu beziehen, mit lokalen Handwerksbäckern zusammenzuarbeiten und eine Atmosphäre zu schaffen, in der sich jeder Gast wie zu Hause fühlt. Unser Engagement für Qualität, Nachhaltigkeit und Gemeinschaft hat uns zu einem beliebten Treffpunkt in der Nachbarschaft gemacht.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-soft">
                <Coffee className="mx-auto mb-2 text-primary-600" size={28} />
                <h4 className="font-semibold">Premium Bohnen</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-soft">
                <Award className="mx-auto mb-2 text-primary-600" size={28} />
                <h4 className="font-semibold">Ausgezeichnet</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-soft">
                <Users className="mx-auto mb-2 text-primary-600" size={28} />
                <h4 className="font-semibold">Gemeinschaft</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};