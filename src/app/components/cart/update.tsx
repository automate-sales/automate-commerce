'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { updateCartItem } from '@/app/actions';
import { CartItem, Product } from "@prisma/client";

type CartItemWithProduct = CartItem & { product: Product };

export default function UpdateCartButton({cartId, cartItem}:{cartId: string, cartItem: CartItemWithProduct}) {
    const router = useRouter();
    const [inputValue, setInputValue] = useState(String(cartItem.qty));
    const debounceRef = useRef(null as NodeJS.Timeout | null);
    const [userHasInteracted, setUserHasInteracted] = useState(false); // State to track user interaction
  
    const removeItemFromCart = async () => {
      console.log(`Removing product with SKU: ${cartItem.product.sku}`);
      await updateCartItem(cartId, cartItem.product.id, cartItem.product.price, 0);
      toast.success(`Item ${cartItem.product.title} has been deleted from cart`);
      router.refresh();
    };
  
    const updateItemQty = async (newQty: number) => {
      console.log(`Updating product with SKU: ${cartItem.product.sku} from cart with ID: ${cartId} to quantity: ${newQty}`);
      await updateCartItem(cartId, cartItem.product.id, cartItem.product.price, newQty);
      router.refresh();
      toast.success(`Quantity updated.`);
    };
  
    useEffect(() => {
      if (!userHasInteracted) return; // Only run the effect if the user has interacted
  
      if (inputValue === '') return; // Do nothing if input is empty
      if (debounceRef.current) clearTimeout(debounceRef.current);
  
      debounceRef.current = setTimeout(() => {
        const quantity = parseInt(inputValue);
        if (!isNaN(quantity)) {
          if (quantity === 0) {
            removeItemFromCart();
          } else {
            updateItemQty(quantity);
          }
        }
      }, 500); // Debounce time
  
      return () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue, userHasInteracted]);
  
    return (
      <div className="flex justify-between w-full">
        <div>
          <input
            type="number"
            min="1"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setUserHasInteracted(true); // Set interaction flag on change
            }}
            className="border border-gray-300 rounded-md p-2 w-20"
            placeholder="Qty"
          />
          <button onClick={removeItemFromCart} className="text-red-500 hover:underline">
            Remove
          </button>
        </div>
        <div className="text-xl">${cartItem.product.price * parseInt(inputValue || '0')}</div>
      </div>
    );
  }
