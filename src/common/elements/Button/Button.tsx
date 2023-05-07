import React from "react";

interface Props {
  width: string;
  height: string;
  bgColor: string;
  color: string;
}

export default function Button({ width, height, bgColor, color }: Props) {
  return (
    <button
      className={bgColor}
      style={{ width: width, height: height, color: color }}
    >
      View Projects
    </button>
  );
}
