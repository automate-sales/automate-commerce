"use client";
import { updateCartItem } from "@/app/actions";
import {  toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AddToCartButton({
  cartId,
  productId,
  productPrice,
}: {
  cartId: string;
  productId: number;
  productPrice: number;
}) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() =>
          updateCartItem(cartId, productId, productPrice).then(() => {
            toast.success("Item added to cart.");
            router.refresh();
          })
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </>
  );
}
