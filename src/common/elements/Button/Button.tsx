import React from "react";

interface Props {
  width: string;
  height: string;
  bgColor: string;
  color: string;
  text: string;
}

export default function Button({ width, height, bgColor, color, text }: Props) {
  return (
    <button
      
      style={{ width: width, height: height, color: color, backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
}
