import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Testimonial Component for DropTools
 * Built with React (JSX) and Tailwind CSS
 */
export default function Testimonial() {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote:
        "This platform has been a game-changer for our workflow. The intuitive interface and seamless integrations have made collaboration effortless. We've seen a significant boost in team productivity and efficiency!",
      name: 'Emily Johnson',
      role: 'Project Manager',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 'testimonial-2',
      quote:
        "This platform has been a game-changer for our workflow. The intuitive interface and seamless integrations have made collaboration effortless. We've seen a significant boost in team productivity and efficiency!",
      name: 'Emily Johnson',
      role: 'Project Manager',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    },
  ];

  return (
    <section
      id="testimonial"
      className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 selection:bg-purple-200 selection:text-purple-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Heading & Subtext with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center text-center"
        >
          {/* 1. Small centered label */}
          <span
            id="testimonial-subheading-label"
            className="text-base sm:text-lg font-bold text-gray-950 tracking-normal mb-3"
          >
            Testimonial
          </span>

          {/* 2. Large centered heading */}
          <h2
            id="testimonial-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight max-w-3xl mb-4"
          >
            <span>Customer </span>
            <span className="text-[#A78BFA]">Experiences</span>
            <span> With</span>
            <span className="block mt-1 sm:mt-2">Our Platform</span>
          </h2>

          {/* 3. Centered subtext paragraph */}
          <p
            id="testimonial-subtext"
            className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-14 sm:mb-16 font-normal"
          >
            See how our platform has helped businesses improve efficiency and achieve success. Real testimonials from satisfied customers who trust our solution.
          </p>
        </motion.div>

        {/* 4. 2-column grid of testimonial cards with staggered motion */}
        <div
          id="testimonial-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full text-left"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              className="bg-[#F3EFFF] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
            >
              <div>
                {/* Large purple decorative opening-quote mark */}
                <div className="mb-4">
                  <span className="text-[#A78BFA] text-5xl sm:text-6xl font-serif font-black leading-none select-none inline-block">
                    “
                  </span>
                </div>

                {/* Quote paragraph */}
                <p className="text-gray-950 font-medium text-sm sm:text-base md:text-[17px] leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author Info Row */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-purple-200">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-950 text-sm sm:text-base">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-normal">
                    {item.role}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
