import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Header from "./components/Header";
import HeroSection from "../src/components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestmonialsSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatssap";
import "./index.css";
import SpecialOffer from "./SpecialOffer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <GlobalStyles />

      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <SpecialOffer />
      <Footer />
      <FloatingWhatsApp />
    </ThemeProvider>
  );
};

export default App;
