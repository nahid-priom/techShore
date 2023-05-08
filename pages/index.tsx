import React from "react";
import NavBar from "@/common/elements/Navbar";
import HeroSection from "@/modules/LandingPage/components/HeroSection";
import ServiceSection from "@/modules/LandingPage/components/ServiceSection";
import WorkSection from "@/modules/LandingPage/components/WorkSection/WorkSection";
import FeedbackSection from "@/modules/LandingPage/components/FeedBackSection/FeedbackSection";
import EstimateSection from "@/modules/LandingPage/components/EstimateSection/EstimateSection";

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
      <WorkSection />
      <FeedbackSection />
      <EstimateSection />
    </>
  );
}

export default HomePage;
