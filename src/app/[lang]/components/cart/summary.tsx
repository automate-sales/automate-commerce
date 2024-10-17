'use client'

import Link from 'next/link';
import Image from 'next/image';
import UpdateCartButton from './update';
import { CartWithItems } from '@/types';
import { getIntl } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { getLead } from '@/utils/leads/client';
import { getCartWithItemsByLead } from '@/utils/leads/server';
import { getSubTotal } from '@/utils/calc';

type CartProps = {
    cartWithItems?: CartWithItems | undefined | null
    lang?: string
    fullWidth?: boolean
    fullCost?: boolean
};

const bucketUrl = process.env.NEXT_PUBLIC_IMAGE_HOST;

const Cart: React.FC<CartProps> = ({ 
  cartWithItems, 
  lang='en',
  fullWidth=false,
  fullCost=false
}) => {
  const [cart, setCart] = useState(cartWithItems)
  const cartId = cart?.id
  const [cartChange, setCartChange] = useState(Date.now())
  useEffect(() => {
    if(cartWithItems) setCart(cartWithItems)
    else{
      getLead().then((leadId) => {
        getCartWithItemsByLead(leadId).then((data) => {
          setCart(data)
        })
      })
    }
  }, [cartWithItems, cartChange])

  return (
    <>
      <div className={fullWidth ? 'hidden md:flex justify-between items-center border-b border-gray-200 p-2' : 'hidden'}>
        <div className='w-2/3'>Item</div>
        <div className='w-1/3 flex justify-between'>
          <div>Price</div>
          <div>Cantidad</div>
          <div>Subtotal</div>
        </div>
      </div>

      <div id="cart-items">

        {cart?.cartItems.map((cartItem) => (
          <div key={cartItem.id} className="flex w-full justify-between items-center border-b border-gray-200 p-2">
            <div className={`flex items-center w-full ${fullWidth && 'lg:w-2/3'}`}>
              <Image src={`${bucketUrl}/products/${cartItem.product.images[0]}`} alt={getIntl(cartItem.product.title, lang)} width={fullWidth ? 200 : 100} height={fullWidth ? 200 : 100} className="object-cover" />
              <div className='px-8'>
                <Link className={`text-sm font-bold ${fullWidth ? ' md:text-lg' : ''}`} href={`/products/${cartItem.product.sku}`}>
                  {getIntl(cartItem.product.title, lang)}
                </Link>
                <div className="cart-item-sku text-gray-500 text-xs block pb-3">{cartItem.product.sku}</div>
                <p className={fullWidth ? `hidden md:block text-gray-500 pb-2` : 'hidden'}>{getIntl(cartItem.product.description, lang)}</p>
                {cartItem.product.color && <p className='text-sm'><span className='font-bold'>Color: </span>{cartItem.product.color}</p>}
                {cartItem.product.size && <p className='text-sm'><span className='font-bold'>Size: </span>{cartItem.product.size}</p>}
              </div>
            </div>
            <div className={`w-1/3 flex justify-between ${fullWidth ? '': 'flex-col justify-end'}`}>
              <div id={`${cartItem.product.sku}-price`} className="text-xl w-1/3">${cartItem.product.price}</div>
              <div className='w-2/3'>
                <UpdateCartButton cartId={cartId} cartItem={cartItem} fullWidth={fullWidth} setCartChange={setCartChange}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id='cart-total' className={fullWidth ?`flex justify-end pt-5 pb-2` : 'hidden'}>
        {cart && '$'+getSubTotal(cart.cartItems)}
      </div>

    </>
  );
};

export default Cart;
