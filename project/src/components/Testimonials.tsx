import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5,
      quote: "Die Atmosphäre im Café Selen verbindet perfekt traditionellen Charme mit moderner Ästhetik. Ihre Signature-Kaffeemischung ist einzigartig im Geschmack!",
    },
    {
      name: "Michael Chen",
      photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5,
      quote: "Als Kaffeekenner kann ich mit Überzeugung sagen, dass Café Selen einen der besten Espressos der Stadt serviert. Die Backwaren sind ebenso hervorragend.",
    },
    {
      name: "Emma Rodriguez",
      photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5,
      quote: "Dies ist mein Lieblingsort geworden, sowohl zum Arbeiten als auch zum Entspannen. Das Personal ist unglaublich freundlich, und die Kardamomschnecken sind absolut süchtig machend!",
    },
  ];

  return (
    <section 
      id="testimonials" 
      className="section bg-primary-700 text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(111, 69, 24, 0.9), rgba(111, 69, 24, 0.9)), url('https://images.pexels.com/photos/6205523/pexels-photo-6205523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2  
            className="text-3xl md:text-4xl font-display mb-4 text-cream-100"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Was unsere Gäste sagen
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-cream-200 mb-10 max-w-3xl mx-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Erfahren Sie, was Menschen über Café Selen berichten
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-cream-100">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};