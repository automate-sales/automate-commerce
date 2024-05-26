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
} from "./facebook"
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
import { CartItem, Order, Product } from "@prisma/client"
//import { CartItemWithProduct,  } from "../../types/shared"
//import { OrderAny } from "./utils"

export const pageview = (url: string, leadId?: string): void => {
    gaPageview(url, leadId)
    fbPageview()
    phPageview()
}

export const search = (query: string, leadId: string): void => {
    gaSearch(query, leadId)
    fbSearch(query, leadId)
    phSearch(query, leadId)
}

export const signUp =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
    gaSignUp(leadId, method)
    fbSignUp(leadId, method)
    phSignUp(leadId, method)
}

export const login =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
    gaLogin(leadId, method)
    phLogin(leadId, method)
}

export const addToCart = (product:Product, qty:number, path:string, leadId: string): void => {
    gaAddToCart(product, qty, path, leadId)
    fbAddToCart(product, qty, leadId)
    phAddToCart(product, qty, path, leadId)
}

export const viewCart =(cartItems:CartItem[], leadId: string): void=> {
    gaViewCart(cartItems, leadId)
    phViewCart(cartItems, leadId)
}

export const checkout =(cart:CartItem[], leadId: string): void=> {
    gaCheckout(cart, leadId)
    fbCheckout(cart, leadId)
    phCheckout(cart, leadId)
}

export const paymentInfo =(paymentType: string, leadId: string): void=> {
    gaPaymentInfo(paymentType, leadId)
    fbPaymentInfo(paymentType, leadId)
    phPaymentInfo(paymentType, leadId)
}

export const purchase =(order:Order, cartItems: CartItem[]): void=> {
    gaPurchase(order, cartItems)
    fbPurchase(order, cartItems)
    phPurchase(order, cartItems)
}