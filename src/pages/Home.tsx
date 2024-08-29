import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitsSection from "../components/BenefitsSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestmonialsSection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatssap";
import SpecialOffer from "../SpecialOffer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <SpecialOffer />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
