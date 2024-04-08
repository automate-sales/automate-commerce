import Image from 'next/image'
import Link from 'next/link';
import AddToCartButton from './cart/add';
import { Category, Product, Subcategory } from '@prisma/client';
import { cookies } from 'next/headers'

interface ItemProps {
    //item: Product | Category | Subcategory;
    //itemType: 'products' | 'categories' | 'subcategories';

    image: string;
    link: string;
    title?: string;
    description?: string;
    id?: number;
    price?: number;
}

const Item: React.FC<ItemProps> = ({ image, link, title, description, id, price }) => {
    const cookieStore = cookies()
    const visitorId = cookieStore.get('ergo_lead_id')?.value
    const cartId = cookieStore.get('ergo_cart_id')?.value || ''
    console.log('visitorId *** ', visitorId)
    console.log('cartId *** ', cartId)
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
            </div>
            </Link>
            {id && price && <AddToCartButton  cartId={cartId} productId={id} productPrice={price}/>}
        </div>
    );
};

export default Item;