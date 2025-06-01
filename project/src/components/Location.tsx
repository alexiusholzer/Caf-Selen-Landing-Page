import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Location = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const hours = [
    { day: 'Montag - Freitag', hours: '7:00 - 20:00 Uhr' },
    { day: 'Samstag', hours: '8:00 - 21:00 Uhr' },
    { day: 'Sonntag', hours: '9:00 - 18:00 Uhr' },
  ];

  return (
    <section id="location" className="section bg-white">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Besuchen Sie uns
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Finden Sie uns im Herzen der Stadt, bereit Ihnen die perfekte Tasse zu servieren
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-lg overflow-hidden shadow-warm h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839371157743!2d-73.9855169!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1653513582570!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Café Selen Standort"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-cream-50 p-8 rounded-lg shadow-warm h-full">
              <h3 className="text-2xl font-display text-primary-800 mb-6">Unser Standort & Öffnungszeiten</h3>
              
              <div className="flex items-start mb-6">
                <MapPin className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-gray-700">
                    Kaffeestraße 123<br />
                    10115 Berlin
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Clock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                  <ul className="text-gray-700">
                    {hours.map((item, index) => (
                      <li key={index} className="flex justify-between mb-1">
                        <span>{item.day}:</span>
                        <span className="font-medium">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p className="text-gray-700">030 1234567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <p className="text-gray-700">hallo@cafeselen.de</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};