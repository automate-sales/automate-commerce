import { CartItemWithProduct } from "@/types"
import { CartItem } from "@prisma/client"
import { getIntl } from "../utils"

export const getContents = (cartItems: CartItem[] | CartItemWithProduct[]) => {
    return cartItems.map(item => {
        return { 'id': item.productId, 'quantity': item.qty }
    })
}

export const getContentIds = (cartItems: CartItemWithProduct[]| CartItem[]) => {
    return cartItems.map(item => {
        return item.productId
    })
}

export const getTotalQty = (cartItems: CartItem[]) => {
    return cartItems.reduce((a: number, b: CartItem) => a + b.qty, 0)
}

export const getSubTotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((a: number, b: CartItem) => a + b.total, 0)
}

export const getItems = (cart: CartItemWithProduct[]| CartItem[]) => {
    return cart.map((item) => {
        return {
            item_id: item.productId,
            item_name: 'product' in item ? getIntl(item.product.title, 'en') : item.productId,
            affiliation: "Ergonomica Desk Ecommerce",
            currency: "USD",
            item_variant: 'product' in item ? (item.product.stock && item.product.stock > 0 ? "in-stock" : "out-of-stock") : "other",
            price: item.price,
            quantity: item.qty
        }
    })
}

export type OrderAny = {
    id: string,
    subtotal: number,
    total: number,
    tax: number,
    shippingFee: number,
    coupon: string,
    leadId: string,
    email: string,
    [key: string]: any
}