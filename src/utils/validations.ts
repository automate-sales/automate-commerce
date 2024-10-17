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
            NOT: [
                { status: 'payment_error' },
            ],
            AND: [
                { cartId: cart.id }
            ]
        }
    })
    if(existingOrders.length > 0) {
        console.error(`There are other active orders with this cart id `, existingOrders)
        throw new Error(`Duplicate cart: ${cart.id}`)
    }
    return true
}

// validate subtotal
export const validateSubtotal = (order: OrderInfo, cart: CartItem[]): void => {
    if (getSubTotal(cart) !== order.subtotal) {
        throw new Error('Invalid subtotal amount');
    }
}

// validate shipping
export const validateShipping = (shipping: ShippingInfo, order: OrderInfo, cart: CartItem[]): void => {
    if (shipping.state && getShippingCost(cart, shipping.state) !== order.shippingFee) {
        throw new Error('Invalid shipping fee');
    }
}

// validate assembly
export const validateAssembly = (order: OrderInfo, cart: CartItem[]): void => {
    const assemblyCost = order.assembly ? getAssemblyCost(cart) : 0;
    if (assemblyCost !== order.assemblyFee) {
        throw new Error('Invalid assembly fee');
    }
}

// validate discount
export const validateDiscount = async (order: OrderInfo, cart: CartItemWithProduct[]): Promise<void> => {
    if (await getDiscount(cart, order.coupon) !== order.discount) {
        throw new Error('Invalid discount');
    }
}

// validate tax
export const validateTax = (order: OrderInfo): void => {
    if (getTax(order.subtotal, order.discount, order.shippingFee, order.assemblyFee) !== order.tax) {
        throw new Error('Invalid tax');
    }
}

// validate total
export const validateTotal = (order: OrderInfo): void => {
    if (getTotal(order.subtotal, order.discount, order.shippingFee, order.assemblyFee, order.tax) !== order.total) {
        throw new Error('Invalid total');
    }
}

// validate the order
export const validateCheckout = async (payload: CheckoutOrder, cart: CartItemWithProduct[]): Promise<string> => {
    try {
        validateSubtotal(payload.orderInfo, cart);
        validateShipping(payload.shippingInfo, payload.orderInfo, cart);
        validateAssembly(payload.orderInfo, cart);
        await validateDiscount(payload.orderInfo, cart);
        validateTax(payload.orderInfo);
        validateTotal(payload.orderInfo);
        return 'Checkout form is valid';
    } catch (error) {
        return `Invalid checkout form: ${(error as Error).message}`;
    }
}

