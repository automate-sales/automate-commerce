'use client'

import { viewCartEvent } from "@/utils/analytics";
import { getCartWithItems } from "@/utils/leads/server";
import { useEffect } from "react";

export default function CartEvent() {
    useEffect(() => {
        const getCart = async () => {
            const cart = await getCartWithItems()
            if (cart) viewCartEvent(cart.cartItems, cart.leadId || undefined)
        }
        getCart()
    }, [])
    return <></>
}