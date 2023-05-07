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
      <EstimateSection
        src="/images/estimate.jpg"
        alt="estimation"
        width={1188}
        height={335}
        objectFit="cover"
      />
    </>
  );
}

export default HomePage;
