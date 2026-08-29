import React from 'react';
import { BookOpen, TrendingUp, Archive } from 'lucide-react';

/**
 * Services Component for DropTools
 * Built with React (JSX) and Tailwind CSS
 */
export default function Services() {
  const serviceCards = [
    {
      id: 'service-product-launch',
      icon: BookOpen,
      title: 'Product Launch',
      description: 'Our team ensures a smooth product launch, driving immediate engagement.',
    },
    {
      id: 'service-revenue-generation',
      icon: TrendingUp,
      title: 'Revenue Generation',
      description: 'Our strategies are designed to drive revenue generation and maximize business growth.',
    },
    {
      id: 'service-quick-solutions',
      icon: Archive,
      title: 'Quick Solutions',
      description: 'Our team delivers quick solutions to resolve your issues efficiently.',
    },
  ];

  return (
    <section 
      id="services" 
      className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 selection:bg-purple-200 selection:text-purple-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Small centered label */}
        <span 
          id="services-subheading-label"
          className="text-base sm:text-lg font-bold text-gray-950 tracking-normal mb-3"
        >
          Basic Pack
        </span>

        {/* 2. Large centered heading */}
        <h2 
          id="services-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight max-w-3xl mb-14 sm:mb-16"
        >
          <span>Services Included Has </span>
          <span className="text-[#9D7BFF]">Every Plan</span>
        </h2>

        {/* 3. 3-column grid of cards */}
        <div 
          id="services-grid" 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left"
        >
          {serviceCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="bg-[#F3EFFF] rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
              >
                <div>
                  {/* Purple square icon badge (~64x64px) */}
                  <div className="w-16 h-16 rounded-xl bg-[#9D7BFF] text-white flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-8 h-8 stroke-[1.9]" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Paragraph text */}
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* "Learn More" link */}
                <div>
                  <a
                    href={`#${card.id}`}
                    className="font-bold text-gray-950 text-sm sm:text-base hover:text-[#7C3AED] transition-colors inline-block cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
