import { CartItem, Order, PrismaClient } from "@prisma/client";
import type { CartItemWithProduct, CartWithItems, CheckoutOrder, OrderInfo, ShippingInfo } from "@/types";
import { getAssemblyCost, getDiscount, getShippingCost, getSubTotal, getTax, getTotal } from "./calc";
const prisma = new PrismaClient()

// validate cart ownership
export const validateCart = (leadId: string, cart: CartWithItems): boolean => {
    if(cart.leadId === leadId && cart.status === 'active' && cart.cartItems.length > 0) return true
    else throw new Error('Invalid cart')
}

export const validateUniqueCart = async(cart: CartWithItems): Promise<boolean> => {
    const existingOrders = await prisma.order.findMany({
        where: {
            OR: [
              { status: 'complete_payment', cartId: cart.id },
              { status: 'ready_to_ship', cartId: cart.id },
              { status: 'on_route', cartId: cart.id },
              { status: 'delivered', cartId: cart.id },
            ],
        }
    })
    if(existingOrders.length > 0) throw new Error('Cart already used in another completed order')
    console.log('Cart is unique')
    return true
}

// validate subtotal
export const validateSubtotal = (order: OrderInfo, cart: CartItem[]): boolean => {
    const isValid = getSubTotal(cart) === order.subtotal;
    if(isValid) console.log('Subtotal is valid')
    return isValid
}
    
// validate shipping
export const validateShipping = (shipping: ShippingInfo, order: OrderInfo, cart: CartItem[]): boolean => {
    const isValid = getShippingCost(cart, shipping.state) === order.shippingFee
    if(isValid) console.log('Shipping is valid')
    return isValid
}

// validate assembly
export const validateAssembly = (order: OrderInfo, cart: CartItem[]): boolean => {
    const assemblyCost = order.assembly? getAssemblyCost(cart) : 0 
    const isValid = assemblyCost === order.assemblyFee
    if(isValid) console.log('Assembly is valid')
    return isValid
}

// validate discount
export const validateDiscount = async(order: OrderInfo, cart: CartItemWithProduct[]): Promise<boolean> => {
    const isValid = await getDiscount(cart, order.coupon) === order.discount
    if(isValid) console.log('Discount is valid')
    return isValid
}

// validate tax
export const validateTax = (order: OrderInfo): boolean => {
    const isValid = getTax(order.subtotal, order.discount, order.shippingFee, order.assemblyFee) === order.tax
    if(isValid) console.log('Tax is valid')
    return isValid
}

// validate total
export const validateTotal = (order: OrderInfo): boolean => {
    const isValid = getTotal(order.subtotal, order.discount, order.shippingFee, order.assemblyFee, order.tax) === order.total
    if(isValid) console.log('Total is valid')
    return isValid
}

// validate the order
export const validateCheckout = async(payload: CheckoutOrder, cart: CartItemWithProduct[]): Promise<boolean> => {
    if(
        validateSubtotal(payload.orderInfo, cart) 
        && validateShipping(payload.shippingInfo, payload.orderInfo, cart) 
        && validateAssembly(payload.orderInfo, cart) 
        && await validateDiscount(payload.orderInfo, cart) 
        && validateTax(payload.orderInfo) 
        && validateTotal(payload.orderInfo)
    ) return true;
    else throw new Error('Invalid order')
}
