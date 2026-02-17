import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsPlastic from "@/components/WhatIsPlastic";
import PlanetImpact from "@/components/PlanetImpact";
import OceanPlastic from "@/components/OceanPlastic";
import Microplastics from "@/components/Microplastics";
import VillainsAreUs from "@/components/VillainsAreUs";
import DecompositionTime from "@/components/DecompositionTime";
import Solutions from "@/components/Solutions";
import SchoolActions from "@/components/SchoolActions";
import ConclusionSection from "@/components/ConclusionSection";
import Quiz from "@/components/Quiz";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIsPlastic />
      <PlanetImpact />
      <OceanPlastic />
      <Microplastics />
      <VillainsAreUs />
      <DecompositionTime />
      <Solutions />
      <SchoolActions />
      <ConclusionSection />
      <Quiz />
      <AboutUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
