import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UpdateCartButton from './update';
import { CartItemWithProduct, CartWithItems } from '@/types';
import { getIntl } from '@/utils/utils';

type CartProps = {
    cartWithItems: CartWithItems
    lang?: string
};

const bucketUrl = process.env.NEXT_PUBLIC_IMAGE_HOST;

const Cart: React.FC<CartProps> = ({ cartWithItems, lang='en' }) => {
  const cartId = cartWithItems.id;

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

      <div id="cart-items">

        {cartWithItems.cartItems.map((cartItem: CartItemWithProduct, index:number) => (
          <div key={cartItem.id} className="flex w-full justify-between items-center border-b border-gray-200 p-2">
            <div className="flex items-center w-2/3">
              <Image src={`${bucketUrl}/products/${cartItem.product.images[0]}`} alt={getIntl(cartItem.product.title, lang)} width={200} height={200} className="object-cover" />
              <div className='px-8'>
                <Link className="text-lg font-bold" href={`/products/${cartItem.product.sku}`}>
                  {getIntl(cartItem.product.title, lang)}
                </Link>
                <div className="cart-item-sku text-gray-500 text-xs block pb-3">{cartItem.product.sku}</div>
                <p className="text-gray-500 pb-2">{getIntl(cartItem.product.description, lang)}</p>
                {cartItem.product.color && <p>Color: {cartItem.product.color}</p>}
                {cartItem.product.size && <p>Size: {cartItem.product.size}</p>}
              </div>
            </div>
            <div className='w-1/3 flex justify-between'>
              <div id={`${cartItem.product.sku}-price`} className="text-xl w-1/3">${cartItem.product.price}</div>
              <div className='w-2/3'>
                <UpdateCartButton cartId={cartId} cartItem={cartItem}/>
              </div>
            </div>
              

          </div>
        ))}

      </div>

    </>
  );
};

export default Cart;
