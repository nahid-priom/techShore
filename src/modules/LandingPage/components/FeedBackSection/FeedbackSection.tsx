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
        className="text-center text-3xl font-extrabold pt-20"
        style={{ color: "#3F3E3E" }}
      >
        What our client says
      </h1>
      <div>
        <Slider {...settings}>
          {FeedbackData.map((data, index) => {
            return (
              <div key={index}>
                <div className="flex">
                  <p>{data.review}</p>
                  <div>
                    <Image
                      src={data.src}
                      alt={data.alt}
                      width={100}
                      height={100}
                    ></Image>
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
