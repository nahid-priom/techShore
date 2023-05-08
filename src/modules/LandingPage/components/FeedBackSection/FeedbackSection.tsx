import React from "react";
import Slider from "react-slick";
import { FeedbackData } from "./FeedbackData";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};
export default function FeedbackSection() {
  return (
    <div>
      <h1
        className="text-center text-3xl font-extrabold pt-20 pb-10"
        style={{ color: "#3F3E3E" }}
      >
        WHAT OUR CLIENT SAYS ABOUT US?
      </h1>
      <div className="w-full px-28">
        <Slider {...settings}>
          {FeedbackData.map((data, index) => {
            return (
              <div key={index}>
                <div>
                  <div className="rounded-xl mx-4 my-12 bg-gray-100 w-88 h-80 flex flex-col justify-center px-4 relative">
                    <Image
                      src="/images/quote.png"
                      alt="web icon"
                      width={50}
                      height={50}
                      style={{position: "absolute", top: "-25px", left: "25px"}}
                      
                    ></Image>
                    <p className="text-sm py-8 text-gray-600">{data.review}</p>
                    <div className="flex items-center mx-8">
                      <Image
                        src={data.src}
                        alt={data.alt}
                        width={100}
                        height={100}
                        style={{ objectFit: "cover", borderRadius: "100px" }}
                      ></Image>
                      <div className="pl-4">
                        <p className="text-base font-semibold py-2">
                          {data.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Marketing Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
