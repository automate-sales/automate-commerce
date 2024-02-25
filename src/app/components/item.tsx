import Image from 'next/image'
import Link from 'next/link';

interface ItemProps {
    image: string;
    link: string;
    title?: string;
    description?: string;
    price?: number;
    buttonText?: string;
}

const Item: React.FC<ItemProps> = ({ image, link, title, description, price, buttonText }) => {
    return (
        <div >
            <Link href={link} className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-64 relative">
                {/* Using Next.js Image component for optimized image loading */}
                <Image src={image} alt={title || 'Item Image'} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4 text-center">
                {title && <div className='h-16'><h4 className="text-lg font-semibold mb-2">{title}</h4></div>}
                {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
                {price && <p className="text-lg font-bold">$ {price}.00</p>}
                {buttonText && <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{buttonText}</button>}
            </div>
            </Link>
        </div>
    );
};

export default Item;