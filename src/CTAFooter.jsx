import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

/**
 * CTAFooter Component for DropTools
 * Built with React (JSX) and Tailwind CSS
 */
export default function CTAFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div id="cta-footer-wrapper" className="w-full bg-white selection:bg-purple-200 selection:text-purple-900">
      
      {/* 1. Large Subscription Banner Card */}
      <section id="cta-banner-section" className="w-full bg-white pt-10 pb-20 sm:pb-28 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <div 
            id="cta-banner-card"
            className="w-full bg-[#A78BFA] rounded-2xl sm:rounded-3xl py-14 sm:py-20 px-6 sm:px-12 text-center text-white flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
          >
            {/* Heading with quotes */}
            <h2 
              id="cta-banner-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.18] max-w-3xl mb-5"
            >
              “Unlock More With A Simple<br className="hidden sm:inline" /> Subscription”
            </h2>

            {/* Subtext paragraph */}
            <p 
              id="cta-banner-subtext"
              className="text-purple-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal"
            >
              Unlock endless possibilities with a simple subscription. Enjoy exclusive benefits, premium content, and more, all at your fingertips
            </p>

            {/* Subscription Form */}
            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-xs border border-white/40 text-white font-bold py-3.5 px-8 rounded-xl text-base shadow-xs animate-fade-in">
                ✓ Thank you for subscribing to DropTools!
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                id="cta-subscribe-form"
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-xl"
              >
                {/* Input with envelope icon */}
                <div className="relative w-full sm:flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/80">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    id="subscribe-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Gmail Address"
                    className="w-full pl-11 pr-4 py-3.5 bg-white/15 border-2 border-white/40 rounded-xl text-white placeholder-white/80 text-sm sm:text-base focus:outline-none focus:bg-white/25 focus:border-white transition-all shadow-inner"
                  />
                </div>

                {/* Dark Purple Button */}
                <button
                  id="btn-subscribe-now"
                  type="submit"
                  className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-7 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 2. Full-Width Light Lavender Footer */}
      <footer id="footer" className="w-full bg-[#F3EFFF] pt-16 sm:pt-20 pb-10 px-6 sm:px-12 border-t border-[#7C3AED]/10">
        <div className="max-w-6xl mx-auto flex flex-col">
          
          {/* 4-Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 text-left">
            
            {/* Column 1: Brand Info & Socials */}
            <div className="space-y-5">
              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-[#A78BFA]">Drop</span>
                <span className="text-[#7C3AED]">Tools</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs">
                Elevate your business with our DropTools solution
              </p>
              
              {/* 4 Circular Purple Social Buttons */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#A78BFA] hover:bg-[#8B5CF6] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs cursor-pointer font-bold text-sm"
                >
                  <Facebook className="w-4 h-4 fill-current stroke-none" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#A78BFA] hover:bg-[#8B5CF6] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs cursor-pointer font-bold text-sm"
                >
                  <Linkedin className="w-4 h-4 fill-current stroke-none" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#A78BFA] hover:bg-[#8B5CF6] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs cursor-pointer font-bold text-sm"
                >
                  <Instagram className="w-4 h-4 stroke-[2.2]" />
                </a>
                <a
                  href="#twitter"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-full bg-[#A78BFA] hover:bg-[#8B5CF6] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs cursor-pointer font-bold text-sm select-none"
                >
                  <span className="text-xs font-black">𝕏</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                <li>
                  <a href="#hero-section" className="hover:text-[#7C3AED] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#7C3AED] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-[#7C3AED] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-[#7C3AED] transition-colors">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                <li>
                  <a href="#about" className="hover:text-[#7C3AED] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-[#7C3AED] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#7C3AED] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#7C3AED] transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us Info */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#A78BFA] shrink-0 stroke-[2.2]" />
                  <span>+1 854 789 6542</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A78BFA] shrink-0 stroke-[2.2]" />
                  <span>contact@droptools.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0 stroke-[2.2]" />
                  <span>819 Los Angeles, CA</span>
                </li>
              </ul>
            </div>

          </div>

          {/* 3. Divider line & Copyright */}
          <div className="w-full pt-8 border-t border-gray-300/60 text-center">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              &copy;2026 DropTools All Right Reserved
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
