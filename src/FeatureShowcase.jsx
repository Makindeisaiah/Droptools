import React from 'react';

/**
 * FeatureShowcase Component for DropTools
 * Built with React (JSX) and Tailwind CSS
 */
export default function FeatureShowcase() {
  return (
    <section 
      id="features" 
      className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 selection:bg-purple-200 selection:text-purple-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Text Left, Image Right */}
        {/* ========================================================================= */}
        <div 
          id="feature-row-1" 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-xl">
            {/* Purple Pill Badge */}
            <span 
              id="badge-product-launch"
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#A78BFA] text-white shadow-xs mb-6"
            >
              Product Launch Tool
            </span>

            {/* Heading */}
            <h2 
              id="heading-product-launch"
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-950 tracking-tight leading-[1.18] mb-5"
            >
              <span>Streamline Your Product Launch With Our </span>
              <span className="text-[#A78BFA]">Powerful</span>
              <span> All-In-One Tool</span>
            </h2>

            {/* Paragraph Text */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
              Launch your product with ease using our all-in-one tool designed for success, Streamline every step, from planning to execution, and engage your audience effortlessly.
            </p>
          </div>

          {/* Right Column: Server Room / Data Center Image with Partner Logos */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md group">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
                alt="Product launch team working with cloud servers"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Dark subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Partner Logos Ribbon */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-xs rounded-xl py-2 px-3 sm:px-4 flex items-center justify-between gap-2 overflow-x-auto text-[11px] font-semibold text-gray-700 select-none shadow-xs border border-white/40">
                <span className="tracking-tighter font-extrabold text-gray-800">EMERSON</span>
                <span className="tracking-tight text-gray-700">EMULEX</span>
                <span className="font-bold lowercase italic text-gray-900">hp</span>
                <span className="font-mono font-bold text-gray-800">intel</span>
                <span className="tracking-tight font-medium text-gray-800">Schneider</span>
                <span className="font-black text-gray-800 tracking-wider">EMC</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Image Left, Text Right (Reversed) */}
        {/* ========================================================================= */}
        <div 
          id="feature-row-2" 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Library / Bookshelf Research Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-md order-2 lg:order-1 group">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full bg-slate-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80" 
                alt="Research and proven strategies library exploration"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Subtle aesthetic tint */}
              <div className="absolute inset-0 bg-purple-900/5 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left max-w-xl order-1 lg:order-2">
            {/* Purple Pill Badge */}
            <span 
              id="badge-revenue-generation"
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#A78BFA] text-white shadow-xs mb-6"
            >
              Revenue Generation
            </span>

            {/* Heading */}
            <h2 
              id="heading-revenue-generation"
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-950 tracking-tight leading-[1.18] mb-5"
            >
              <span>Accelerate Revenue Generation With Proven </span>
              <span className="text-[#A78BFA]">Strategies</span>
              <span> And Tools</span>
            </h2>

            {/* Paragraph Text */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
              Launch your product with ease using our all-in-one tool designed for success, Streamline every step, from planning to execution, and engage your audience effortlessly.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Centered Action Button */}
        {/* ========================================================================= */}
        <div id="features-cta" className="flex justify-center items-center pt-4 sm:pt-6">
          <button 
            id="btn-features-get-started"
            className="bg-[#A78BFA] hover:bg-[#936bf7] text-white font-bold px-9 py-3.5 sm:py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            <span>Get Started</span>
            <span className="text-xl leading-none select-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
