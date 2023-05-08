import Card from "@/common/elements/Card/Card";
import React from "react";

export default function WorkSection() {
  return (
    <div
      className="bg-gray-100 w-full mt-20 relative overflow-hidden"
      style={{ height: "3300px" }}
    >
      <div
        className="w-2/4 h-44 bg-white absolute -top-20 -left-10 "
        style={{ rotate: "-10deg" }}
      ></div>
      <div
        className="w-2/4 h-44 bg-white absolute -top-20 -right-10 "
        style={{ rotate: "10deg" }}
      ></div>
      <div
        className="w-full h-36 bg-white absolute -top-28 -right-10 "
        
      ></div>
      <h1
        className="text-center text-3xl font-extrabold pt-32"
        style={{ color: "#3F3E3E" }}
      >
        OUR WORKS
      </h1>
      <Card
        title="Web Development"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        src="/images/web-development.jpg"
        flexDirection="row"
      />
      <Card
        title="App Development"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        src="/images/app-development.jpg"
        flexDirection="row-reverse"
      />
      <Card
        title="Web App & Logo design"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        src="/images/web-design.jpg"
        flexDirection="row"
      />
      <Card
        title="Digital Marketing"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        src="/images/digital-marketing.jpg"
        flexDirection="row-reverse"
      />
      <Card
        title=" Web Scraping & Bot Generation"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        src="/images/bot.jpg"
        flexDirection="row"
      />
    </div>
  );
}
