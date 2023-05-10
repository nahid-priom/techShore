import React from "react";
import NavBar from "@/common/elements/NavBar";
import HeroSection from "@/modules/LandingPage/components/HeroSection";
import ServiceSection from "@/modules/LandingPage/components/ServiceSection";
import Footer from "@/common/elements/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection
        title="WE CREATE 
        MODERN &
        MINIMAL WEBSITE"
        subTitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
      />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default HomePage;
