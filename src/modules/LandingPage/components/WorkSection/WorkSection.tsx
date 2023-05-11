import Card from "@/common/elements/Card/Card";
import React from "react";

export default function WorkSection() {
  return (
    <div
      className="bg-gray-100 w-full h-full mt-4 xl:mt-20 relative overflow-hidden pb-20"
      
    >
      <div
        className="w-3/4 h-44 bg-white absolute -top-20 xl:-top-24 -left-10 "
        style={{ rotate: "-10deg" }}
      ></div>
      <div
        className="w-2/4 h-44 bg-white absolute -top-20  -right-10 "
        style={{ rotate: "10deg" }}
      ></div>
     
      <h1
        className="text-center text-3xl font-extrabold pt-32 mt-4"
        style={{ color: "#3F3E3E" }}
      >
        OUR WORKS
      </h1>
      <Card
        title="Web Development"
        subtitle="Looking for a reliable and professional web development service? Look no further! Our team of experienced developers can help you create a website that is tailored to your business needs. We specialize in creating responsive and user-friendly websites that are optimized for search engines. Whether you need a simple website or a complex web application, we have the expertise to deliver high-quality results. Contact us today to learn more about our web development services and how we can help you grow your business online!"
        src="/images/web-development.jpg"
        flexDirection="row"
      />
      <Card
        title="App Development"
        subtitle="Our team of experienced developers can help you create an app that is tailored to your business needs. We specialize in creating responsive and user-friendly apps that are optimized for both iOS and Android platforms. Whether you need a simple app or a complex mobile application, we have the expertise to deliver high-quality results. Our application development services include technology consultation, development, testing, support and maintenance. Contact us today to learn more about our app development services and how we can help you grow your business online!"
        src="/images/app-development.jpg"
        flexDirection="row-reverse"
      />
      <Card
        title="Web App & Logo design"
        subtitle="Web design is a practice that combines the improvement of the User Interface (UI) and User Experience (UX) of a web app or website, in order to deliver the best product possible. It focuses on things like functionality, usability, and appearance1. Web app design is the process of creating a website application that delivers a seamless user experience (UX) and meets users’ core needs with a clear, compelling user interface (UI)."
        src="/images/web-design.jpg"
        flexDirection="row"
      />
      <Card
        title="Digital Marketing"
        subtitle="Digital marketing involves marketing to consumers through digital channels, including websites, mobile devices, and social media platforms. This form of marketing is different from internet marketing, which is exclusively done on websites. Digital marketing relates to attracting customers via email, content marketing, search platforms, social media, and more"
        src="/images/digital-marketing.jpg"
        flexDirection="row-reverse"
      />
      <Card
        title=" Web Scraping & Bot Generation"
        subtitle="Web scraping is the process of extracting data from websites. This data is usually unstructured and in an HTML format which is then converted into structured data in a spreadsheet or a database so that it can be used in various applications1. Web scraping can be done manually, however, automated tools are usually preferred due to speed, convenience, and lower costs"
        src="/images/bot.jpg"
        flexDirection="row"
      />
    </div>
  );
}
