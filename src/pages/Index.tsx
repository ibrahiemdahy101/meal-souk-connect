
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/sections/FeatureSection';
import FeaturedMealsSection from '@/components/sections/FeaturedMealsSection';
import VendorsSection from '@/components/sections/VendorsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      <Navbar />
      <Hero />
      <FeatureSection />
      <FeaturedMealsSection />
      <VendorsSection />
      <CallToActionSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Index;
