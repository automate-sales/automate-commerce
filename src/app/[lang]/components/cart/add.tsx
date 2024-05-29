"use client";

import { addToCart } from "@/app/actions";
import {  toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddToCartButton({
  cartId,
  productId,
  productPrice,
  productSku,
  displayQty
}: {
  cartId: string;
  productId: number;
  productPrice: number;
  productSku?: string;
  displayQty?: boolean;
}) {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  return (
    <form className="flex gap-3" onSubmit={ (ev) => {
      ev.preventDefault()
      addToCart(cartId, productId, productPrice, qty).then( (msg: {type: 'error' | 'warn' | 'success', text: string}) => {
        toast[msg.type](msg.text)
        router.refresh();
      })
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
