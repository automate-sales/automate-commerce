// components/TextAndImageSection.tsx
import React from 'react';
import Image from 'next/image';

interface TextAndImageSectionProps {
  text: string;
  imageSrc: string;
  textDirection: 'left' | 'right';
  padding: string;
}

const TextAndImageSection: React.FC<TextAndImageSectionProps> = ({ text, imageSrc, textDirection, padding }) => {
  const isTextRight = textDirection === 'right';
  return (
    <div className={`h-56 ${padding} ${isTextRight ? 'flex-row-reverse' : 'flex-row'} flex items-center`}>
      <div className="w-1/3">
        <Image src={imageSrc} alt="Section Image" fill objectFit="cover" />
      </div>
      <div className={`w-2/3 flex items-center justify-center ${isTextRight ? 'pr-4' : 'pl-4'}`}>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default TextAndImageSection;
