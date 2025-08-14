import React from 'react';
import HeroSection from '../components/HeroSection';
import IngredientStorySection from '../components/IngredientStorySection';
import FeaturedRitualsSection from '../components/FeaturedRitualsSection';
import FounderStorySection from '../components/FounderStorySection';
import BestSellersSection from '../components/BestSellersSection';
//import ColorTest from '../components/ColorTest';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IngredientStorySection />
      <FeaturedRitualsSection />
      <FounderStorySection />
      <BestSellersSection />
    </main>
  );
}