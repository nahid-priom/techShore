import React from "react";
import NavBar from "@/common/elements/NavBar";
import HeroSection from "@/modules/LandingPage/components/HeroSection";
import ServiceSection from "@/modules/LandingPage/components/ServiceSection";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServiceSection />
    </>
  );
}

export default HomePage;
