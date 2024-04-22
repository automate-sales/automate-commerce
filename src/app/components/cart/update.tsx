'use client'

import { updateCartItem } from "@/app/actions";
import { CartItem, Product } from "@prisma/client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
type CartItemWithProduct = CartItem & { product: Product };


export default function UpdateCartButton({cartId, cartItem}:{cartId: string, cartItem: CartItemWithProduct}){
    const router = useRouter();
    const removeItemFromCart = async (cartItem: CartItemWithProduct) => {
        console.log(`Removing product with SKU: ${cartItem.product.sku}`);
        await updateCartItem(cartId, cartItem.product.id, cartItem.product.price, 0);
        console.log(`Item ${cartItem.product.title} has been deleted from cart`)
        toast.success(`Item ${cartItem.product.title} has been deleted from cart`)
        setQty(0);
        router.refresh()
      };
    
    const updateItemQty = async (cartItem: CartItemWithProduct, newQty: number) => {
        if (!isNaN(newQty) && newQty >= 0) {
            console.log(`Updating product with SKU: ${cartItem.product.sku} from cart with ID: ${cartId} to quantity: ${newQty}`);
            await updateCartItem(cartId, cartItem.product.id, cartItem.product.price, newQty);
        } setQty(newQty);
    };
    const [qty, setQty] = useState(cartItem.qty);
    return(
        <div className="flex justify-between w-full">
             <ToastContainer />
            <div>
                <div>
                    <input type="number" min={1} value={qty} onChange={(e) => updateItemQty(cartItem, parseInt(e.target.value))} className="border border-gray-300 rounded-md p-2 w-20" />
                </div>
                <button onClick={() => removeItemFromCart(cartItem)} className="text-red-500 hover:underline">Remove</button>
            </div>
            <div className="text-xl">${cartItem.product.price*qty}</div>
        </div>
    )
}