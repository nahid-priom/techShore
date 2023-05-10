import React from "react";

interface Props {
  title: string;
  subTitle: string;
}

export default function HeroSection({ title, subTitle }: Props) {
  return (
    <section className="bg-white dark:bg-gray-900 hero-bg-img">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
        <div className="mr-auto place-self-center lg:col-span-7 z-10">
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
