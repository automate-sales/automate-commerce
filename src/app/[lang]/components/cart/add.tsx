"use client";

import { addToCart } from "@/app/actions";
import {  toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { getCart, getLead } from "@/utils/leads/client";
import { addToCartEvent } from "@/utils/analytics";

export default function AddToCartButton({
  cartId,
  productId,
  productPrice,
  productSku,
  displayQty,
  productTitle,
  productStock,
}: {
  cartId: string | undefined;
  productId: number;
  productPrice: number;
  productSku: string;
  displayQty?: boolean;
  productTitle?: string;
  productStock?: number;
}) {
  const router = useRouter();
  const path = usePathname();
  const [qty, setQty] = useState(1);
  return (
    <form className="flex gap-3" onSubmit={ async(ev) => {
      ev.preventDefault()
      let cart = cartId ? cartId : await getCart()
      if(!cart) return toast.error('Cart not found')
      const msg = await addToCart(cart, productId, productPrice, qty)
      const leadId = await getLead()
      addToCartEvent({
        id: productId, 
        price: productPrice, 
        sku: productSku, 
        title: productTitle || productSku,
        ...(productStock && { stock: productStock })
      }, qty, path, leadId)
      toast[msg.type](msg.text)
      router.refresh();
    } 
    }>
      <button
        type="submit"
        id={`${productSku}-add-to-cart`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
      { displayQty && <input
        id={`${productSku}-qty`}
        type="number"
        className="p-2 border rounded"
        value={qty}
        onChange={(e) => setQty(parseInt(e.target.value))}
      /> }
    </form>
  );
}
