import React, { useState } from 'react';
import { ClipboardList, Crown, CalendarClock, Check } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Pricing Component for DropTools
 * Built with React (JSX) and Tailwind CSS
 */
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'plan-starter',
      badgeColor: 'bg-[#A78BFA] text-white',
      badgeIcon: ClipboardList,
      title: 'Starter Plan',
      description: 'Kickstart Your Journey With Our Easy And Affordable Starter Plan.',
      price: 'FREE',
      period: '',
      isFeatured: false,
      features: [
        'Basic Analytics Dashboard',
        'Task & Project Management',
        'Cloud Storage (Up To 5GB)',
        'Email And Chat Support',
        'Team Collaboration Features',
      ],
      buttonStyle: 'bg-[#A78BFA] hover:bg-[#936bf7] text-white shadow-xs',
    },
    {
      id: 'plan-pro',
      badgeColor: 'bg-[#FBBF24] text-white',
      badgeIcon: Crown,
      title: 'Pro Plan',
      description: 'Unlock Premium Features And Priority Support With Our Pro Plan.',
      price: isAnnual ? '$15' : '$19',
      period: '/month',
      isFeatured: true,
      features: [
        'Advanced Data Analytics',
        'Priority Customer Support',
        'Customization Reporting Tools',
        'Extended Cloud Storage',
        'Dedicated Account Manager',
      ],
      buttonStyle: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-md',
    },
    {
      id: 'plan-enterprise',
      badgeColor: 'bg-[#A78BFA] text-white',
      badgeIcon: CalendarClock,
      title: 'Enterprise Plan',
      description: 'Access Custom Solutions And Dedicated Support With Our Enterprise Plan.',
      price: isAnnual ? '$39' : '$49',
      period: '/month',
      isFeatured: false,
      features: [
        'Basic Analytics Dashboard',
        'Task & Project Management',
        'Cloud Storage (Up To 5GB)',
        'Email And Chat Support',
        'Team Collaboration Features',
      ],
      buttonStyle: 'bg-[#A78BFA] hover:bg-[#936bf7] text-white shadow-xs',
    },
  ];

  return (
    <section 
      id="pricing" 
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
            id="pricing-subheading-label"
            className="text-base sm:text-lg font-bold text-gray-950 tracking-normal mb-3"
          >
            Pricing
          </span>

          {/* 2. Large centered heading */}
          <h2 
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight max-w-3xl mb-4"
          >
            <span>Affordable Plan To Scale Your </span>
            <span className="text-[#A78BFA]">Business</span>
          </h2>

          {/* 3. Centered subtext paragraph */}
          <p 
            id="pricing-subtext"
            className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            Explore our flexible pricing plans designed to suit businesses of all sizes. Whether you're just starting our or scaling up, we have the perfect plan for you.
          </p>

          {/* 4. Monthly / Annually Toggle */}
          <div 
            id="pricing-toggle-container"
            className="flex items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16 select-none"
          >
            <span 
              onClick={() => setIsAnnual(false)}
              className={`text-sm sm:text-base font-bold cursor-pointer transition-colors ${
                !isAnnual ? 'text-gray-950' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Monthly
            </span>

            {/* Toggle Switch */}
            <button
              id="pricing-billing-toggle"
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-[#A78BFA] rounded-full p-1 transition-colors duration-200 ease-in-out relative focus:outline-none focus:ring-2 focus:ring-purple-400/50 cursor-pointer"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <span 
              onClick={() => setIsAnnual(true)}
              className={`text-sm sm:text-base font-bold cursor-pointer transition-colors ${
                isAnnual ? 'text-gray-950' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Annually
            </span>

            {/* 20% off Badge */}
            <span 
              id="badge-annual-discount"
              className="text-[11px] sm:text-xs font-semibold bg-[#EDE9FE] text-[#7C3AED] px-2.5 py-1 rounded-full shadow-2xs"
            >
              20% off
            </span>
          </div>
        </motion.div>

        {/* 5. 3-Column Grid of Pricing Cards with Motion */}
        <div 
          id="pricing-grid" 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left"
        >
          {plans.map((plan, index) => {
            const BadgeIconComponent = plan.badgeIcon;
            return (
              <motion.div
                key={plan.id}
                id={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                whileHover={plan.isFeatured ? { scale: 1.025 } : undefined}
                className={`bg-[#F3EFFF] rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 ${
                  plan.isFeatured ? 'shadow-md ring-1 ring-[#7C3AED]/20' : 'hover:shadow-md'
                }`}
              >
                <div>
                  {/* Rounded-xl Icon Badge */}
                  <div className={`w-14 h-14 rounded-xl ${plan.badgeColor} flex items-center justify-center mb-6 shadow-xs`}>
                    <BadgeIconComponent className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  {/* Plan Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-2.5 tracking-tight">
                    {plan.title}
                  </h3>

                  {/* Plan Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm sm:text-base font-normal text-gray-500">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Thin Divider Line */}
                  <div className="w-full h-px bg-gray-300/60 mb-6" />

                  {/* Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-900 font-medium">
                        <Check className="w-4 h-4 text-[#A78BFA] shrink-0 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <div className="pt-2">
                  <button
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm sm:text-base transition-all duration-150 active:scale-[0.98] cursor-pointer ${plan.buttonStyle}`}
                  >
                    Upgrade Now
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
