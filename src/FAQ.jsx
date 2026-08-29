import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQ Component for DropTools
 * Built with React (JSX) and Tailwind CSS
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      id: 'faq-1',
      question: 'What Is Your Service About',
      answer: "This is a placeholder answer. We'll fill in the real copy for this question later.",
    },
    {
      id: 'faq-2',
      question: 'Is Customer Support Available',
      answer: "This is a placeholder answer. We'll fill in the real copy for this question later.",
    },
    {
      id: 'faq-3',
      question: 'Is Customer Support Available',
      answer: "This is a placeholder answer. We'll fill in the real copy for this question later.",
    },
    {
      id: 'faq-4',
      question: 'Can I Upgrade Or Downgrade My Plan?',
      answer: "This is a placeholder answer. We'll fill in the real copy for this question later.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 selection:bg-purple-200 selection:text-purple-900"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Heading with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center text-center"
        >
          {/* 1. Small centered label */}
          <span
            id="faq-subheading-label"
            className="text-base sm:text-lg font-bold text-gray-950 tracking-normal mb-3"
          >
            Frequently Answer Questions
          </span>

          {/* 2. Large centered heading */}
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight max-w-3xl mb-12 sm:mb-16"
          >
            <span>Common Queries </span>
            <span className="text-[#A78BFA]">Solved,</span>
            <span className="block mt-1 sm:mt-2">Quick Answers For You</span>
          </h2>
        </motion.div>

        {/* 3. Stack of accordion items with staggered scroll animations */}
        <div id="faq-accordion-list" className="w-full space-y-4 sm:space-y-5 text-left">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                className="w-full bg-[#A78BFA] hover:bg-[#9E80F5] transition-colors rounded-2xl p-5 sm:p-6 shadow-xs select-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* Header Row: Question and Chevron Icon */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-normal">
                    {item.question}
                  </h3>

                  {/* Circular darker-purple badge with chevron icon */}
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center shrink-0 transition-transform duration-200 shadow-2xs"
                  >
                    <ChevronDown
                      className={`w-5 h-5 text-white stroke-[2.5] transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                </div>

                {/* Animated Expandable Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${item.id}-answer`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4 pr-6 font-normal border-t border-white/15 mt-3 sm:mt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
