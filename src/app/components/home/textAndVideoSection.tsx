// components/TextAndVideoSection.tsx
import React from 'react';
import Image from 'next/image';

interface TextAndVideoSectionProps {
  text: string;
  imageSrc: string;
  textDirection: 'left' | 'right';
  padding: string;
}

const TextAndVideoSection: React.FC<TextAndVideoSectionProps> = ({ text, imageSrc, textDirection, padding }) => {
  const isTextRight = textDirection === 'right';
  return (
    <div className={`p-8 flex`}>
      
      <div className={`w-2/3 flex items-center justify-center`}>
        <p className="text-center text-5xl font-bold">{text}</p>
      </div>

      <div className="w-1/3 flex justify-end">

              <video
                autoPlay
                loop
                muted
                playsInline
                className='h-full'
                width="400px"
                height="490px"
                poster="/videos/standing-desk-desktop/placeholder.jpg"
              >
                <source src="/videos/standing-desk-desktop/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

      </div>

    </div>
  );
};

export default TextAndVideoSection;
