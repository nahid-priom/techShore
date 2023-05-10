import React from "react";
import Button from "@/common/elements/Button/Button";

const EstimateSection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="bg-custom w-full h-64 md:h-72 xl:h-96 rounded-xl my-12 ">
        <div
          className="flex flex-col justify-center pl-8 sm:pl-16 xl:pl-28"
          style={{ height: "100%" }}
        >
          <p
            className="text-xs md:text-base text-white"
            style={{ margin: "0 0 20px 0" }}
          >
            Get Started
          </p>
          <h3
            className="text-base md:text-xl xl:text-2xl text-white"
            style={{ maxWidth: "340px", margin: "0 0 30px 0" }}
          >
            Fill in the brief and get the project estimate
          </h3>

          <Button
            color="#fff"
            bgColor="#D84F23"
            width="150px"
            height="36px"
            text="GET STARTED"
          />
        </div>
      </div>
    </div>
  );
};

export default EstimateSection;
