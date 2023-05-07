import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectFit:string;
}

const EstimateSection = ({ src, alt, width, height }: Props) => (
  <div>
    <Image src={src} alt={alt} width={width} height={height} style={{objectFit: "cover"}}/>
  </div>
);

export default EstimateSection;