import React from 'react';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import FeatureShowcase from './FeatureShowcase.jsx';
import Pricing from './Pricing.jsx';
import FAQ from './FAQ.jsx';
import Testimonial from './Testimonial.jsx';
import CTAFooter from './CTAFooter.jsx';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col m-0 p-0">
      <Hero />
      <Services />
      <FeatureShowcase />
      <Pricing />
      <FAQ />
      <Testimonial />
      <CTAFooter />
    </div>
  );
}


