import Image from 'next/image'
import Link from 'next/link';
import AddToCartButton from './cart/add';
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
    return (
        <div className='flex flex-col items-center text-center gap-2 pb-4 bg-white shadow-md rounded-lg overflow-hidden'>
            <Link href={link} className="flex flex-col gap-2 w-full">
                <div className="h-64 relative">
                    {/* Using Next.js Image component for optimized image loading */}
                    <Image src={image} alt={title || 'Item Image'} fill />
                </div>
        
                {title && <div className=''><h4 className="text-lg font-semibold">{title}</h4></div>}
                {description && <p className="text-sm text-gray-600">{description}</p>}
                {price && <p className="text-lg font-bold">$ {price}.00</p>}

            </Link>
            {/* to get productSku split link at / and get last element */}
            {id && price && <AddToCartButton cartId={cartId} productId={id} productSku={link.split('/').pop()} productPrice={price}/>}
        </div>
    );
};

export default Item;