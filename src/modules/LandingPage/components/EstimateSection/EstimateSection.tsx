import React from "react";
import Image from "next/image";
import { relative } from "path";
import Button from "@/common/elements/Button/Button";

const EstimateSection = () => {
  return (
    <div className="px-32">
      <div className="bg-custom w-full h-96 rounded-xl my-12 ">
        <div
          className="flex flex-col justify-center pl-32"
          style={{ height: "100%" }}
        >
          <p className="text-base text-white" style={{ margin: "0 0 20px 0" }}>
            Get Started
          </p>
          <h3
            className="text-2xl text-white"
            style={{ maxWidth: "340px", margin: "0 0 30px 0" }}
          >
            Fill in the brief and get the project estimate
          </h3>
          <Button
            color="#fff"
            bgColor="#D84F23"
            width="182px"
            height="46px"
            text="GET STARTED"
          />
        </div>
      </div>
    </div>
  );
};

export default EstimateSection;
