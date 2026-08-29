import React from 'react';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import FeatureShowcase from './FeatureShowcase.jsx';
import Pricing from './Pricing.jsx';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <Services />
      <FeatureShowcase />
      <Pricing />
    </div>
  );
}

