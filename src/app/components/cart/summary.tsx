import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '../../utils/context';
import { Cart, CartItem, Product } from '@prisma/client';
import { updateCartItem } from '@/app/actions';

type CartItemWithProduct = CartItem & { product: Product };
type CartProps = {
    cartWithItems: Cart & { cartItems: CartItemWithProduct[]}
};

const bucketUrl = `https://d1tnzngtf1n4as.cloudfront.net/public`;

const Cart: React.FC<CartProps> = ({ cartWithItems }) => {

    const cartId = cartWithItems.id;
  // Function to remove an item from the cart
  const removeItemFromCart = async (cartItem: CartItemWithProduct) => {
    console.log(`Removing product with SKU: ${cartItem.product.sku}`);
    await updateCartItem(cartId, cartItem.product.id, 0, cartItem.product.price);
  };

  // Function to update item quantity in the cart
  const updateItemQty = async (cartItem: CartItemWithProduct, newQty: number) => {
    console.log(`Updating product with SKU: ${cartItem.product.sku}`);
    await updateCartItem(cartId, cartItem.product.id, newQty, cartItem.product.price);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {cartWithItems.cartItems.map((cartItem: CartItemWithProduct, index:number) => (
          <div key={index} className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 p-2">
            <div className="flex flex-1 items-center space-x-4">
              <Image src={`${bucketUrl}/products/${cartItem.product.images[0]}`} alt={cartItem.product.title} width={200} height={200} className="object-cover" />
              <div>
                <Link href={`/products/${cartItem.product.sku}`}>
                  <a className="text-lg font-bold">{cartItem.product.title}</a>
                </Link>
                <p className="text-gray-500">{cartItem.product.description}</p>
                {cartItem.product.color && <p>Color: {cartItem.product.color}</p>}
                {cartItem.product.size && <p>Size: {cartItem.product.size}</p>}
              </div>
            </div>
            <div className="flex flex-1 justify-end items-center space-x-4">
              <span className="text-xl">${cartItem.product.price}</span>
              <input type="number" min={1} value={cartItem.qty} onChange={(e) => updateItemQty(cartItem, parseInt(e.target.value))} className="border border-gray-300 rounded-md p-2" />
              <button onClick={() => removeItemFromCart(cartItem)} className="text-red-500 hover:underline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
