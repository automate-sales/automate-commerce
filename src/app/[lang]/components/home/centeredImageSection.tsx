import Image from 'next/image';

interface CenteredImageSectionProps {
  imageSrc: string;
  content: string;
  paddingX?: string;
  paddingY?: string;
  padding?: string;
}

const CenteredImageSection: React.FC<CenteredImageSectionProps> = ({ imageSrc, content, padding, paddingX, paddingY }) => {
  const paddingClass = padding ? `p-${padding}` : `py-${paddingY || 0} px-${paddingX || 0}`;
  return (
    <div className={`${paddingClass}`}>
    <section className={`relative bg-slate-300 w-full flex items-center justify-center h-128`}>
      <Image src={imageSrc} fill alt="Centered Image" className="z-0" />
      <div className="absolute z-10 flex items-center justify-center h-full w-full">
        <h3 className={`text-center text-white text-4xl font-bold`}>{content}</h3>
      </div>
    </section>
    </div>
  );
};

export default CenteredImageSection;