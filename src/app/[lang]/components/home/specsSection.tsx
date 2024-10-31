import React from 'react';
import Image from 'next/image';

interface SpecItemProps {
  icon: string | JSX.Element;
  title: string;
  paragraph: string;
}

const SpecItem: React.FC<SpecItemProps> = ({ icon, title, paragraph }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        {typeof icon == 'string' ? <Image src={icon} alt={title} width={24} height={24} /> : icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

  
  interface SpecsSectionProps {
    specs: SpecItemProps[];
  }
  
  const SpecsSection: React.FC<SpecsSectionProps> = ({ specs }) => {
    return (
      <div className='p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
        {specs.map((spec, index) => (
          <SpecItem key={index} icon={spec.icon} title={spec.title} paragraph={spec.paragraph} />
        ))}
      </div>
    );
  };
  
  export default SpecsSection;