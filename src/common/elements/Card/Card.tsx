import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

type FlexDirection = "row" | "row-reverse";
interface Props {
  title: string;
  subtitle: string;
  src: string;
  flexDirection: FlexDirection;
}

export default function Card({ title, subtitle, src, flexDirection }: Props) {
  return (
    <div
      className="flex items-center justify-arround mt-20 pr-32 pl-32 "
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
        <Button color="#fff" bgColor="#000" width="182px" height="46px" text="View Projects" />
      </div>
    </div>
  );
}
