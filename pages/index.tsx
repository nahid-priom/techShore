import React from "react";
import NavBar from "@/common/elements/Navbar";
import HeroSection from "@/modules/LandingPage/components/HeroSection";
import ServiceSection from "@/modules/LandingPage/components/ServiceSection";
import WorkSection from "@/modules/LandingPage/components/WorkSection/WorkSection";
import FeedbackSection from "@/modules/LandingPage/components/FeedBackSection/FeedbackSection";
import EstimateSection from "@/modules/LandingPage/components/EstimateSection/EstimateSection";
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
      <WorkSection />
      <FeedbackSection />
      <EstimateSection />

      <Footer />

    </>
  );
}

export default HomePage;
