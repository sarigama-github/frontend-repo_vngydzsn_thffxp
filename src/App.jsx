import React from 'react';
import HeroSection from './components/HeroSection';
import MetricsGrid from './components/MetricsGrid';
import RightPanels from './components/RightPanels';
import ProductivityAndHighlights from './components/ProductivityAndHighlights';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <HeroSection />
      <MetricsGrid />
      <RightPanels />
      <ProductivityAndHighlights />
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Current Outreach
      </footer>
    </div>
  );
}
