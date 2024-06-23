'use client'

import { checkoutEvent } from "@/utils/analytics";
import { getCartWithItems } from "@/utils/leads/server";
import { useEffect } from "react";

export default function CheckoutEvent() {
    useEffect(() => {
        const getCart = async () => {
            const cart = await getCartWithItems()
            if (cart) checkoutEvent(cart.cartItems, cart.leadId || undefined)
        }
        getCart()
    }, [])
    return <></>
}