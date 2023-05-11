import React from "react";

interface Props {
  title: string;
  subTitle: string;
}

export default function HeroSection({ title, subTitle }: Props) {
  return (
    <section className="bg-white dark:bg-gray-900 hero-bg-img mb-24 relative overflow-hidden">
      <div
        className="w-3/4 h-40 bg-white absolute -bottom-28 -left-10 "
        style={{ rotate: "10deg" }}
      ></div>
      <div
        className="w-3/4 h-44 bg-white absolute -bottom-28 -right-10 "
        style={{ rotate: "-10deg" }}
      ></div>
      <div className="grid max-w-screen-xl px-4 py-8 my-20 lg:my-0 lg:mx-12  mx-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
        <div className="mr-auto place-self-center  lg:col-span-7 z-10">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            {title}
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
            {subTitle}
          </p>
          <button className="bg-black text-white h-14 w-56">
            Explore PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
