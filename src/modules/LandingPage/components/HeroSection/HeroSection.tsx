import React from "react";

// This is a demo exmaple of how to use props with typescript
interface Props {
  title: string;
  subTitle: string;
  image: string;
}

export default function HeroSection({ title, subTitle, image }: Props) {
  return <div>HeroSection</div>;
}
