import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

interface Props {
  title: string;
  subtitle: string;
  src: string;
  flexDirection: string;
}

export default function Card({ title, subtitle, src, flexDirection }: Props) {
  return (
    <div
      className="flex items-center justify-center mt-20"
      style={{ flexDirection: flexDirection }}
    >
      <Image
        src={src}
        alt="web development"
        width={400}
        height={550}
        style={{ borderRadius: "10px" }}
      ></Image>
      <div className="p-9">
        <h1 className="text-4xl pb-2">{title}</h1>
        <p className="w-96 text-sm text-gray-600 pb-8">{subtitle}</p>
        <Button color="#fff" bgColor="bg-black" width="182px" height="46px" />
      </div>
    </div>
  );
}
