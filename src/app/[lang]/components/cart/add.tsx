"use client";

import { addToCart } from "@/app/actions";
import {  toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { getCart, getLead } from "@/utils/leads/client";
import { addToCartEvent } from "@/utils/analytics";
import { getCartWithItemsByLead } from "@/utils/leads/server";
import { CartWithItems } from "@/types";

export default function AddToCartButton({
  cartId,
  productId,
  productPrice,
  productSku,
  displayQty,
  productTitle,
  productStock,
}: {
  cartId?: string;
  productId: number;
  productPrice: number;
  productSku: string;
  displayQty?: boolean;
  productTitle?: string;
  productStock?: number;
}) {
  const router = useRouter();
  const path = usePathname();
  const [qty, setQty] = useState('1');
  return (
    <form className="flex gap-3" onSubmit={ async(ev) => {
      ev.preventDefault()
      let cart = cartId ? cartId : await getCart()
      if(!cart) return toast.error('Cart not found')
      const msg = await addToCart(cart, productId, productPrice, parseInt(qty))
      const leadId = await getLead()
      addToCartEvent({
        id: productId, 
        price: productPrice, 
        sku: productSku, 
        title: productTitle || productSku,
        ...(productStock && { stock: productStock })
      }, parseInt(qty), path, leadId)
      toast[msg.type](msg.text)
      router.refresh();
    } 
    }>
      <button
        type="submit"
        id={`${productSku}-add-to-cart`}
        className="hover:bg-blue-200 text-blue-400 font-bold py-2 px-4 rounded-sm border-2 border-blue-400"
      >
        Add to Cart
      </button>
      { displayQty && <input
        id={`${productSku}-qty`}
        type="number"
        className="p-2 border rounded-sm"
        value={String(qty)}
        onChange={(e) => {
          setQty(typeof parseInt(e.target.value) === 'number' ?
          e.target.value : String())
        }}
      /> }
    </form>
  );
}
