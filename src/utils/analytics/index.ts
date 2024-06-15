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

import {
    pageview as twPageview,
    search as twSearch,
    signUp as twSignUp,
    addToCart as twAddToCart,
    checkout as twCheckout,
    purchase as twPurchase
} from "./twitter"

import { CartItem, Order, Product } from "@prisma/client"
import { OrderAny } from "./utils"

export const pageview = (leadId?: string): void => {
    gaPageview(leadId)
    fbPageview()
    phPageview()
    //twPageview()
}

export const search = (query: string, leadId: string): void => {
    gaSearch(query, leadId)
    fbSearch(query, leadId)
    phSearch(query, leadId)
    //twSearch(query, leadId)
}

export const signUp =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
    gaSignUp(leadId, method)
    fbSignUp(leadId, method)
    phSignUp(leadId, method)
    //twSignUp(leadId, method)
}

export const login =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
    gaLogin(leadId, method)
    phLogin(leadId, method)
}

export const addToCart = (product:Product, qty:number, path:string, leadId: string): void => {
    gaAddToCart(product, qty, path, leadId)
    fbAddToCart(product, qty, leadId)
    phAddToCart(product, qty, path, leadId)
    //twAddToCart(product.id, qty, leadId)
}

export const viewCart =(cartItems:CartItem[], leadId: string): void=> {
    gaViewCart(cartItems, leadId)
    phViewCart(cartItems, leadId)
}

export const checkout =(cart:CartItem[], leadId: string): void=> {
    gaCheckout(cart, leadId)
    fbCheckout(cart, leadId)
    phCheckout(cart, leadId)
    //twCheckout(cart, leadId)
}

export const paymentInfo =(paymentType: string, leadId: string): void=> {
    gaPaymentInfo(paymentType, leadId)
    fbPaymentInfo(paymentType, leadId)
    phPaymentInfo(paymentType, leadId)
}

export const purchase =(order:OrderAny, cartItems: CartItem[]): void=> {
    gaPurchase(order, cartItems)
    fbPurchase(order, cartItems)
    phPurchase(order, cartItems)
    //twPurchase(order.id, order.total, order.leadId)
}