import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero Component for DropTools
 * Styled with Professional Polish theme
 */
export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white flex flex-col w-full selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden font-sans">
      {/* Fixed Navbar Wrapper: Accent bar + Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* 1. Thin solid purple accent bar at the very top of the page (~4px) */}
        <div id="top-accent-bar" className="w-full h-1 bg-[#7C3AED]" />

        {/* 2. Navbar with light purple/lavender background */}
        <header id="navbar" className="w-full bg-[#F3EFFF] border-b border-[#7C3AED]/10 px-6 sm:px-12 py-3.5 sm:py-4 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Left: DropTools Wordmark */}
            <div className="flex items-center">
              <a 
                href="#" 
                id="brand-logo"
                className="text-2xl sm:text-3xl font-black tracking-tight flex items-center transition-opacity hover:opacity-90"
              >
                <span className="text-[#A78BFA]">Drop</span>
                <span className="text-[#7C3AED]">Tools</span>
              </a>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <nav id="desktop-nav" className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium">
              <a 
                href="#blogs" 
                id="nav-link-blogs"
                className="text-gray-900 font-bold border-b-2 border-[#7C3AED] pb-0.5 transition-colors"
              >
                Blogs
              </a>
              <a 
                href="#pricing" 
                id="nav-link-pricing"
                className="text-gray-500 hover:text-[#7C3AED] transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#testimonial" 
                id="nav-link-testimonial"
                className="text-gray-500 hover:text-[#7C3AED] transition-colors"
              >
                Testimonial
              </a>
              <a 
                href="#services" 
                id="nav-link-services"
                className="text-gray-500 hover:text-[#7C3AED] transition-colors"
              >
                Services
              </a>
              <a 
                href="#contact" 
                id="nav-link-contact"
                className="text-gray-500 hover:text-[#7C3AED] transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* Right: Actions (Desktop) */}
            <div id="nav-actions" className="hidden md:flex items-center space-x-6">
              <a 
                href="#signin" 
                id="btn-sign-in"
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Sign In
              </a>
              <button 
                id="btn-sign-up"
                className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-[#6D28D9] transition-all duration-150 active:scale-[0.98] cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#7C3AED] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Nav */}
          {mobileMenuOpen && (
            <div id="mobile-nav-menu" className="md:hidden pt-3 pb-5 bg-[#F3EFFF] border-t border-[#7C3AED]/10 space-y-3">
              <nav className="flex flex-col space-y-2.5 pt-2">
                <a 
                  href="#blogs" 
                  className="font-bold text-gray-900 py-1 border-l-2 border-[#7C3AED] pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </a>
                <a 
                  href="#pricing" 
                  className="font-medium text-gray-500 hover:text-[#7C3AED] py-1 pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#testimonial" 
                  className="font-medium text-gray-500 hover:text-[#7C3AED] py-1 pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonial
                </a>
                <a 
                  href="#services" 
                  className="font-medium text-gray-500 hover:text-[#7C3AED] py-1 pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="font-medium text-gray-500 hover:text-[#7C3AED] py-1 pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </nav>
              <div className="pt-3 border-t border-[#7C3AED]/10 flex flex-col space-y-3">
                <a 
                  href="#signin" 
                  className="font-semibold text-gray-500 hover:text-gray-900 py-1 pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <button 
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-5 py-2.5 rounded-lg text-sm text-center shadow-md transition-all cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* 3. Hero Section (with top padding to account for fixed navbar) */}
      <main id="hero-section" className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-28 sm:pt-36 pb-16 sm:pb-24 max-w-5xl mx-auto w-full relative z-10">
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Large Centered Bold Heading */}
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1] max-w-4xl mx-auto"
          >
            <span>Boost Your </span>
            <span className="text-[#7C3AED]">Productivity</span>
            <span className="block mt-1 sm:mt-2">With Our Smart Drop Tools</span>
          </motion.h1>

          {/* Centered Subtext Paragraph */}
          <motion.p 
            id="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Ready to experience the future of work? Sign up for a free trial and see how our Drop solution can transform your business. No commitment, just results.
          </motion.p>

          {/* Centered Row of Action Buttons */}
          <motion.div 
            id="hero-cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-4 w-full sm:w-auto"
          >
            {/* Solid purple button */}
            <motion.button 
              id="btn-get-started"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-150 cursor-pointer"
            >
              <span>Get Started</span>
              <span className="text-xl leading-none select-none">→</span>
            </motion.button>

            {/* Outlined purple button */}
            <motion.button 
              id="btn-get-demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white text-[#7C3AED] border-2 border-[#7C3AED] hover:bg-[#F3EFFF] font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-150 cursor-pointer"
            >
              <span>Get Demo</span>
              <div className="w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-xs">
                <span className="text-white text-[10px] ml-0.5 select-none">▶</span>
              </div>
            </motion.button>
          </motion.div>
        </div>

      </main>

      {/* Subtle bottom gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#F3EFFF]/50 to-transparent pointer-events-none z-0" />
    </div>
  );
}

