import React from "react";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <div>
      <h1
        className="text-center text-3xl font-extrabold mb-12 xl:mb-20"
        style={{ color: "#3F3E3E" }}
      >
        Highlighted Services
      </h1>
      <div className="flex justify-center">
        <div
          className="w-40 h-20 flex flex-col justify-center items-center"
          style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/webicon.png"
            alt="web icon"
            width={50}
            height={50}
          ></Image>
          <p className="text-xs text-center pt-3 font-bold">Web Development</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center"
          style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/mobileIcon.png"
            alt="mobile icon"
            width={50}
            height={50}
          ></Image>
          <p className="text-xs text-center pt-3 font-bold">App Development</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center hidden sm:flex "
          style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/seoIcon.png"
            alt="seo icon"
            width={50}
            height={50}
          ></Image>
          <p className="text-s text-center pt-3 font-bold">SEO</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center hidden sm:flex "
          style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/productIcon.png"
            alt="product icon"
            width={50}
            height={50}
          ></Image>
          <p className="text-xs text-center pt-3 font-bold">Product Design</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center"
          style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/uxicon.png"
            alt="ux icon"
            width={50}
            height={50}
          ></Image>
          <p className="text-xs text-center pt-3 font-bold">UX/UI Design</p>
        </div>
      </div>
    </div>
  );
}
