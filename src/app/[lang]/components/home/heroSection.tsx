import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={imageSrc}
        fill
        alt="Background"
        className="absolute z-0 object-cover"
        // You can include multiple sources within the Image component or use <picture> directly for more control
      />
      <div className="z-10 relative flex items-center justify-end h-full px-20">
        <div className="p-6 max-w-md bg-white bg-opacity-75">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-8">{description}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;