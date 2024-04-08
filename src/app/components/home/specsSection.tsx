import React from 'react';
import Image from 'next/image';

interface SpecItemProps {
  icon: string;
  title: string;
  paragraph: string;
}

const SpecItem: React.FC<SpecItemProps> = ({ icon, title, paragraph }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gray-200">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

  
  interface SpecsSectionProps {
    specs: SpecItemProps[];
    padding: string;
  }
  
  const SpecsSection: React.FC<SpecsSectionProps> = ({ specs, padding }) => {
    return (
      <div className={`flex flex-wrap justify-center items-stretch p-${padding}`}>
        {specs.map((spec, index) => (
          <SpecItem key={index} icon={spec.icon} title={spec.title} paragraph={spec.paragraph} />
        ))}
      </div>
    );
  };
  
  export default SpecsSection;