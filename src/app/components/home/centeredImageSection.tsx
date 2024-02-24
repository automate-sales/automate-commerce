import Image from 'next/image';

interface CenteredImageSectionProps {
  imageSrc: string;
  padding: string;
  content: string;
}

const CenteredImageSection: React.FC<CenteredImageSectionProps> = ({ imageSrc, padding, content }) => {
  return (
    <div className={`p-${padding}`}>
    <section className={`relative bg-slate-300 w-full flex items-center justify-center h-56`}>
      <Image src={imageSrc} alt="Centered Image" layout="fill" objectFit="cover" className="z-0" />
      <div className="absolute z-10 flex items-center justify-center h-full w-full">
        <h3 className="text-center">{content}</h3>
      </div>
    </section>
    </div>
  );
};

export default CenteredImageSection;