'use client'

import { updateCartItem } from "@/app/actions"
import { Product } from "@prisma/client"

export default function AddToCartButton({product, cartId}: {product: Product, cartId: string}){
    return (
        <button onClick={()=>updateCartItem(cartId, product.id, 1, product.price)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
        </button>
    )
}