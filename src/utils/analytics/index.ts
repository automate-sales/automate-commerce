import { 
    pageview as gaPageview,
    search as gaSearch,
    signUp as gaSignUp,
    login as gaLogin,
    addToCart as gaAddToCart,
    viewCart as gaViewCart,
    checkout as gaCheckout,
    paymentInfo as gaPaymentInfo,
    purchase as gaPurchase
} from "./google"
import { 
    pageview as fbPageview,
    search as fbSearch,
    signUp as fbSignUp,
    addToCart as fbAddToCart,
    checkout as fbCheckout,
    paymentInfo as fbPaymentInfo,
    purchase as fbPurchase 
} from "./facebook/client"
import { 
    pageview as phPageview,
    search as phSearch,
    signUp as phSignUp,
    login as phLogin,
    addToCart as phAddToCart,
    viewCart as phViewCart,
    checkout as phCheckout,
    paymentInfo as phPaymentInfo,
    purchase as phPurchase 
} from "./posthog"

/* import {
    pageview as twPageview,
    search as twSearch,
    signUp as twSignUp,
    addToCart as twAddToCart,
    checkout as twCheckout,
    purchase as twPurchase
} from "./twitter" */

import { CartItem, Order, Product } from "@prisma/client"
import { OrderAny } from "./utils"
import { BasicProduct } from "@/types"

export const pageview = (leadId?: string): void => {
    gaPageview(leadId)
    fbPageview()
    phPageview()
    //twPageview()
}

export const searchEvent = (query: string, leadId: string): void => {
    gaSearch(query, leadId)
    fbSearch(query, leadId)
    phSearch(query, leadId)
    //twSearch(query, leadId)
}

// missing implementation
export const signUpEvent = (leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
    gaSignUp(leadId, method)
    fbSignUp(leadId, method)
    phSignUp(leadId, method)
    //twSignUp(leadId, method)
}

// missing implementation
export const loginEvent = (leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
    gaLogin(leadId, method)
    phLogin(leadId, method)
}

export const addToCartEvent = (product:BasicProduct, qty:number, path:string, leadId?: string): void => {
    gaAddToCart(product, qty, path, leadId)
    fbAddToCart(product, qty, leadId)
    phAddToCart(product, qty, path, leadId)
    //twAddToCart(product.id, qty, leadId)
}

export const viewCartEvent = (cartItems:CartItem[], leadId?: string): void=> {
    gaViewCart(cartItems, leadId)
    phViewCart(cartItems, leadId)
}

export const checkoutEvent = (cart:CartItem[], leadId?: string): void=> {
    gaCheckout(cart, leadId)
    fbCheckout(cart, leadId)
    phCheckout(cart, leadId)
    //twCheckout(cart, leadId)
}


export const paymentInfoEvent = (paymentType: string, leadId?: string): void=> {
    gaPaymentInfo(paymentType, leadId)
    fbPaymentInfo(paymentType, leadId)
    phPaymentInfo(paymentType, leadId)
}

export const purchaseEvent = async (order:OrderAny, cartItems: CartItem[]): Promise<void>=> {
    gaPurchase(order, cartItems)
    phPurchase(order, cartItems)
    return await fbPurchase(order, cartItems)
    //twPurchase(order.id, order.total, order.leadId)
}