import Image from 'next/image'
import Link from 'next/link';
import AddToCartButton from './cart/add';
import { Category, Product, Subcategory } from '@prisma/client';

interface ItemProps {
    //item: Product | Category | Subcategory;
    //itemType: 'products' | 'categories' | 'subcategories';

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
                <Image src={image} alt={title || 'Item Image'} fill />
            </div>
            <div className="p-4 text-center">
                {title && <div className='h-16'><h4 className="text-lg font-semibold mb-2">{title}</h4></div>}
                {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
                {price && <p className="text-lg font-bold">$ {price}.00</p>}
                {buttonText && <AddToCartButton  cartId='' product={null}/>}
            </div>
            </Link>
        </div>
    );
};

export default Item;