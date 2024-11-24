import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NextPicture from '../nextPicture';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  srcSet?: {
    sm: string;
    md?: string;
    lg?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, imageSrc, srcSet }) => {
  return (
    <div className="relative h-screen w-full">
      <NextPicture  smImage={srcSet?.sm || imageSrc} mdImage={srcSet?.md || imageSrc} lgImage={srcSet?.lg || imageSrc} priority cover/>
 
      <div className="z-10 relative flex items-center justify-end h-full px-20">
        <div className="p-6 max-w-md bg-white bg-opacity-75">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-8">{description}</p>
          <Link id='shopNow' href="/products">{buttonText}</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;