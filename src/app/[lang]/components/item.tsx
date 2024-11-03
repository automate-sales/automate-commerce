import Image from 'next/image'
import Link from 'next/link';
import AddToCartButton from './cart/add';
import { getServerCart } from '@/utils/leads/server';
import { Product } from '@prisma/client';

interface ItemProps {
    image: string;
    link: string;
    title?: string;
    description?: string;
    variants?: number;
    product?: Product;
    id?: number;
    price?: number;
    priority?: boolean;
}

export default async function Item({ 
    image, 
    link, 
    title, 
    description,
    variants,
    id, 
    price,
    priority=false
}: ItemProps) {
    const cartId = await getServerCart()
    return (
        <div className='flex flex-col items-center text-center gap-2 pb-4 bg-white shadow-md rounded-lg overflow-hidden'>
            <Link href={link} className="flex flex-col gap-2 w-full">
                <div className="h-64 relative">
                    <Image 
                        src={image} alt={title || 'Item Image'}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 910px) 50vw, 400px"
                        priority={priority}
                    />
                </div>
                {variants && <div className="h-2 leading-2 text-xs pb-5">{variants > 1 ? `+${variants-1} colors/sizes` : '' }</div>} 
                {title && <div className=''><h4 className="text-lg font-semibold">{title}</h4></div>}
                {description && <p className="text-sm text-gray-600">{description}</p>}
                {price && <p className="text-lg font-bold">$ {price}.00</p>}
            </Link>
            {id && price && <AddToCartButton 
                cartId={cartId} 
                productId={id}
                productSku={link.split('/').pop() as string} 
                productPrice={price}
                productTitle={title}
                // add product stock
            />}
        </div>
    );
};