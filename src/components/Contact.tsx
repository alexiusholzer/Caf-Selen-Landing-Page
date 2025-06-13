import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In einer echten Implementierung würden die Daten an einen Server gesendet
    alert('Vielen Dank für Ihre Reservierungsanfrage! Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
  };

  return (
    <section 
      id="contact" 
      className="section bg-cream-100"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom" ref={ref}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-warm p-8 md:p-12">
          <div className="text-center mb-10">
            <motion.h2 
              className="section-title"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              Tisch reservieren
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reservieren Sie einen Tisch und genießen Sie das perfekte Café-Erlebnis
            </motion.p>
          </div>

          <motion.form 
            className="grid md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Vollständiger Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Ihr Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">E-Mail-Adresse</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="ihre@email.de"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Telefonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="0123 456789"
                required
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label htmlFor="guests" className="block text-gray-700 mb-2 font-medium">Gäste</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">Datum</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 mb-2 font-medium">Uhrzeit</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Besondere Wünsche</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-500" size={18} />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Haben Sie besondere Wünsche oder Anmerkungen?"
                ></textarea>
              </div>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="btn btn-primary px-8 py-3"
              >
                Reservierung anfragen
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Wir werden uns innerhalb von 24 Stunden bei Ihnen melden, um Ihre Reservierung zu bestätigen.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};