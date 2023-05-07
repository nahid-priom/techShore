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
        title="This is title"
        subTitle="THis is a subtitile"
        image="/src/image1.png"
      />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default HomePage;
