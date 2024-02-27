import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '../../utils/context';
import { Cart, CartItem, Product } from '@prisma/client';
import { updateCartItem } from '@/app/actions';
import UpdateCartButton from './update';

type CartItemWithProduct = CartItem & { product: Product };
type CartProps = {
    cartWithItems: Cart & { cartItems: CartItemWithProduct[]}
};

const bucketUrl = process.env.NEXT_PUBLIC_IMAGE_HOST;

const Cart: React.FC<CartProps> = ({ cartWithItems }) => {

    const cartId = cartWithItems.id;
  // Function to remove an item from the cart
  

  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-200 p-2">
        <div className='w-2/3'>Item</div>
        <div className='w-1/3 flex justify-between'>
          <div>Price</div>
          <div>Cantidad</div>
          <div>Subtotal</div>
        </div>
      </div>

        {cartWithItems.cartItems.map((cartItem: CartItemWithProduct, index:number) => (
          <div key={index} className="flex w-full justify-between items-center border-b border-gray-200 p-2">
            <div className="flex items-center w-2/3">
              <Image src={`${bucketUrl}/products/${cartItem.product.images[0]}`} alt={cartItem.product.title} width={200} height={200} className="object-cover" />
              <div className='px-8'>
                <Link className="text-lg font-bold" href={`/products/${cartItem.product.sku}`}>
                  {cartItem.product.title}
                </Link>
                <p className="text-gray-500">{cartItem.product.description}</p>
                {cartItem.product.color && <p>Color: {cartItem.product.color}</p>}
                {cartItem.product.size && <p>Size: {cartItem.product.size}</p>}
              </div>
            </div>
            <div className='w-1/3 flex justify-between'>
              <div className="text-xl w-1/3">${cartItem.product.price}</div>
              <div className='w-2/3'>
                <UpdateCartButton cartId={cartId} cartItem={cartItem}/>
              </div>
            </div>
              

          </div>
        ))}

    </>
  );
};

export default Cart;
