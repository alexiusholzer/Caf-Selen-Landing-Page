import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Coffee, CupSoda, Cake, Salad } from 'lucide-react';

export const Menu = () => {
  const [activeTab, setActiveTab] = useState('coffee');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tabs = [
    { id: 'coffee', label: 'Kaffee', icon: <Coffee size={20} /> },
    { id: 'drinks', label: 'Getränke', icon: <CupSoda size={20} /> },
    { id: 'pastries', label: 'Gebäck', icon: <Cake size={20} /> },
    { id: 'food', label: 'Kleine Gerichte', icon: <Salad size={20} /> },
  ];

  const menuItems = {
    coffee: [
      { name: 'Espresso', description: 'Kräftiger, konzentrierter Kaffee in kleiner Tasse serviert', price: '3,50 €', popular: true },
      { name: 'Cappuccino', description: 'Ausgewogene Mischung aus Espresso, heißer Milch und Milchschaum', price: '4,50 €', popular: false },
      { name: 'Café Latte', description: 'Espresso mit heißer Milch und einer leichten Schaumschicht', price: '4,75 €', popular: false },
      { name: 'Pour Over', description: 'Handgebrühter Kaffee, der das einzigartige Aroma der Bohnen zur Geltung bringt', price: '5,25 €', popular: true },
      { name: 'Selen Spezial', description: 'Unser Signature-Kaffee mit geheimer Gewürzmischung und Orangenzeste', price: '5,75 €', popular: true },
      { name: 'Cold Brew', description: '24 Stunden kalt extrahierter Kaffee, serviert auf Eis', price: '4,95 €', popular: false },
    ],
    drinks: [
      { name: 'Chai Latte', description: 'Gewürzter Teekonzentrat mit heißer Milch', price: '4,75 €', popular: true },
      { name: 'Matcha Latte', description: 'Traditioneller japanischer grüner Tee mit heißer Milch', price: '5,25 €', popular: false },
      { name: 'Heiße Schokolade', description: 'Belgische Schokolade mit heißer Milch und Sahne', price: '4,50 €', popular: false },
      { name: 'Hausgemachte Limonade', description: 'Mit frischen Zitronen und einem Hauch Minze', price: '3,95 €', popular: true },
      { name: 'Eistee', description: 'Frisch gebrüht und leicht gesüßt', price: '3,50 €', popular: false },
    ],
    pastries: [
      { name: 'Mandel-Croissant', description: 'Buttercroissant gefüllt mit Mandelcreme', price: '4,25 €', popular: true },
      { name: 'Pain au Chocolat', description: 'Französisches Gebäck mit Schokoladenfüllung', price: '4,00 €', popular: false },
      { name: 'Zimtschnecke', description: 'Hausgemacht mit Ceylon-Zimt und Frischkäse-Glasur', price: '4,75 €', popular: true },
      { name: 'Blaubeer-Scone', description: 'Mit frischen Blaubeeren und Zitronenglasur', price: '3,95 €', popular: false },
      { name: 'Kardamom-Schnecke', description: 'Schwedisch inspiriert mit aromatischer Kardamomfüllung', price: '4,50 €', popular: true },
    ],
    food: [
      { name: 'Avocado-Toast', description: 'Sauerteigbrot mit zerdrückter Avocado, Chiliflocken und Microgreens', price: '8,95 €', popular: true },
      { name: 'Caprese Sandwich', description: 'Frischer Mozzarella, Tomate, Basilikum und Balsamico auf Ciabatta', price: '9,50 €', popular: false },
      { name: 'Quiche des Tages', description: 'Serviert mit Beilagensalat', price: '10,25 €', popular: false },
      { name: 'Mediterranean Bowl', description: 'Quinoa, Hummus, geröstetes Gemüse und Feta', price: '11,95 €', popular: true },
      { name: 'Tagessuppe', description: 'Serviert mit hausgemachtem Brot', price: '7,50 €', popular: false },
    ],
  };

  return (
    <section 
      id="menu" 
      className="section bg-white"
    >
      <div className="container-custom" ref={ref}>
        <div className="bg-white/90 rounded-2xl shadow-warm p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center mb-12">
            <motion.h2 
              className="section-title"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              Unsere Speisekarte
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entdecken Sie unsere sorgfältig ausgewählten Getränke und Speisen
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
              <div 
                key={index} 
                className={`bg-white p-4 rounded-lg border-l-4 ${
                  item.popular ? 'border-accent-600' : 'border-primary-300'
                } shadow-soft hover:shadow-md transition-shadow`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl text-primary-800 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <span className="font-semibold text-primary-700">{item.price}</span>
                </div>
                {item.popular && (
                  <span className="inline-block mt-2 text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-1 rounded">
                    Beliebte Wahl
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-10"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-600 italic mb-4">
              Alle unsere Zutaten sind nach Möglichkeit regional und biologisch.
            </p>
            <a href="#contact" className="btn btn-primary">
              Reservierung vornehmen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};