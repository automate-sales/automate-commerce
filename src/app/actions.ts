'use server'

import { cookies } from 'next/headers'
import { CartItem, Lead, Order } from '@prisma/client'
import { CartWithItems, CheckoutOrder, CustomerInfo, OrderInfo, ShippingInfo } from '@/types'
import { validateCart, validateCheckout, validateUniqueCart } from '@/utils/validations'
import { formatAddress } from '@/utils/calc'
import { processPayment } from '@/utils/payments/nmi'
import { sendEmail } from '@/utils/email'
import prisma from '@/db'
import { redirect } from 'next/navigation'
import { setServerCart } from '@/utils/leads/server'

export async function setCookie(name: string, value: string) {
  try {
    cookies().set({
      name: name,
      value: value,
      httpOnly: true
    })
    return true
  } catch (err: any) {
    console.error('Error setting cookie', err)
    return false
  }
}

export async function findLeadByFingerprint(fingerprint: string) {
  return await prisma.lead.findFirst({
    where: {
      fingerprint: fingerprint,
      createdAt: {
        gte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30),
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      carts: {
        where: {status: 'active'},
        orderBy: {createdAt: 'desc'},
      }
    },
  })
}

export async function createLeadWithCart(
  fingerprint: string,
  id?: string,
) {
  const lead = await prisma.lead.create({
    data: {
      fingerprint: fingerprint,
      ...(id && { id: id }),
      carts: {
        create: {},
      },
    },
    include: {
      carts: true,
    },
  })
  return { leadId: lead.id, cartId: lead.carts[0].id }
}

type UpdateLeadInput = {
  [P in keyof Lead]?: Lead[P];
};
export async function updateLead(leadId: string, data: UpdateLeadInput, userId?: string | null ) {
  userId && await prisma.user.update({
    where: { id: userId },
    data: { username: data.email?.split('@')[0] || data.name?.split('').join('_') }
  })
  return await prisma.lead.update({
    where: { id: leadId },
    data: data
  })
}

export async function findOrCreateLeadWithCart(fingerprint: string, id?: string) {
  const lead = await findLeadByFingerprint(fingerprint)
  if (lead) return { leadId: lead.id, cartId: lead.carts[0].id }
  else return createLeadWithCart(fingerprint, id)
}

export async function addToCart(
  cartId: string,
  productId: number,
  price: number,
  quantity: number = 1,
): Promise<{ type: 'error' | 'warn' | 'success', text: string, item: CartItem }> {
  // Fetch the current cart item, if it exists
  const existingCartItem = await prisma.cartItem.findUnique({
    where: {
      cartId_productId: {
        cartId: cartId,
        productId: productId,
      },
    },
  });

  // Fetch the product's stock
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      stock: true,
    },
  });

  if (!product) throw new Error('Product not found');

  // Calculate the current quantity and requested quantity
  const currentQty = existingCartItem ? existingCartItem.qty : 0;
  const allowableQty = Math.min(quantity, product.stock - currentQty);

  console.log(existingCartItem, product, currentQty, quantity, allowableQty)
  // Perform the upsert operation with the allowable quantity
  const cartItem = await prisma.cartItem.upsert({
    where: {
      cartId_productId: {
        cartId: cartId,
        productId: productId,
      },
    },
    update: {
      qty: currentQty + allowableQty,
    },
    create: {
      cartId: cartId,
      productId: productId,
      qty: allowableQty,
      price: price,
    },
  });

  if (product.stock <= 0) return ({ type: 'error', text: `Item is out of stock`, item: cartItem })
  else if (allowableQty < quantity) return ({ type: 'warn', text: `${allowableQty} items were added to the cart, ${quantity - allowableQty} are not in stock`, item: cartItem });
  else return ({ type: 'success', text: `${allowableQty} items were added to the cart`, item: cartItem });
}

type MsgType = 'error' | 'warn' | 'success'
export async function updateCartItem(
  cartId: string,
  productId: number,
  quantity: number
): Promise<{ type: MsgType, text: string, item: CartItem }> {
  // Fetch the product's stock
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      stock: true,
    },
  });
  let qty = quantity
  let msg = 'Item quantity updated'
  let msgType: MsgType = 'success'
  if (quantity && product && quantity > product.stock) {
    qty = product.stock
    msg = `Only ${product.stock} available`
    msgType = 'warn'
  }
  const cartItem = await prisma.cartItem.update({
    data: { qty: qty },
    where: {
      cartId_productId: {
        cartId: cartId,
        productId: productId,
      },
    }
  })
  return {
    type: msgType,
    text: msg,
    item: cartItem
  }
}

export async function getCoupon(
  code: string
) {
  const res = await prisma.coupon.findUnique({
    where: { code: code },
  });
  return res
}

const getCart = async (orderInfo: OrderInfo) => {
  let cart: CartWithItems | null
  try {
    cart = await prisma.cart.findUnique({
      where: { id: orderInfo.cartId },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
          include: { product: true }
        }
      }
    })
  } catch (err: any) {
    const msg = 'Error getting cart'
    console.error(msg, err)
    throw new Error(msg)
  }
  if (!cart) throw new Error('Cart not found')
  return cart
}

const submitOrder = async (
  orderInfo: OrderInfo,
  customerInfo: CustomerInfo,
  shippingInfo: ShippingInfo,
  billingInfo: ShippingInfo,
) => {
  try {
    const order = await prisma.order.create({
      data: {
        full_name: customerInfo.full_name,
        phone_number: customerInfo.phone_number,
        email: customerInfo.email,
        shippingAddress: formatAddress(shippingInfo),
        billingAddress: formatAddress(billingInfo),
        shipping: orderInfo.shipping,
        assembly: orderInfo.assembly,
        coupon: orderInfo.coupon || undefined,
        subtotal: orderInfo.subtotal,
        discount: orderInfo.discount || undefined,
        shippingFee: orderInfo.shippingFee || undefined,
        assemblyFee: orderInfo.assemblyFee || undefined,
        tax: orderInfo.tax,
        total: orderInfo.total,
        loggedIn: orderInfo.loggedIn,
        source: orderInfo.source,
        paymentMethod: orderInfo.paymentMethod, // Assuming payment method is stored in name. Adjust as needed.
        cartId: orderInfo.cartId,
        leadId: orderInfo.leadId || undefined,
      }
    })
    return order
  } catch (err: any) {
    const msg = 'Error creating order'
    console.error(msg, err)
    throw new Error(msg)
  }
}

const errorOrder = async (orderId: string, errorMsg?: string) => {
  try {
    return prisma.order.update({
      where: { id: orderId },
      data: { status: 'payment_error', ...(errorMsg && { errorMsg: String(errorMsg) }) }
    })
  } catch (err: any) {
    const msg = 'Error setting status to error'
    console.error(msg, err)
  }
}

const submitPayment = async (paymentInfo: any, total: number, orderId: string) => {
  try {
    return await processPayment({ ...paymentInfo, total: total, orderId: orderId })
  } catch (err: any) {
    await errorOrder(orderId, err.message)
    throw new Error(err.message)
  }
}


export async function createOrder(
  payload: CheckoutOrder
) {
  try {
    //get the cart by id
    const { orderInfo, customerInfo, shippingInfo, billingInfo, paymentInfo } = payload
    const cart = await getCart(orderInfo)
    validateCart(orderInfo.leadId, cart);
    await validateUniqueCart(cart);
    await validateCheckout(payload, cart.cartItems);
    const newOrder = await submitOrder(orderInfo, customerInfo, shippingInfo, billingInfo)

    // if payment errors out, set the order as inactive then return error
    const paymentId = await submitPayment(paymentInfo, orderInfo.total, newOrder.id)

    const newCartId = await processOrder(newOrder, cart, paymentId)
    setCookie('ergo_cart_id', String(newCartId))
    const sentEmail = await sendEmail(cart, newOrder)
    return { orderId: newOrder.id, newCartId: newCartId, sentEmail: sentEmail }
  } catch (err: any) {
    const msg = 'Error creating order'
    console.error(msg, err)
    throw new Error(`${msg}: ${err.message}`)
  }
}

const confirmOrder = (orderId: string, paymentId: string) => {
  return prisma.order.update({
    where: {
      id: orderId
    },
    data: {
      status: 'complete_payment',
      paymentId: paymentId
    }
  })
}

const confirmCart = (cartId: string) => {
  return prisma.cart.update({
    where: {
      id: cartId
    },
    data: {
      status: 'purchased',
      purchasedAt: new Date()
    }
  })
}

const createNewCart = (leadId: string) => {
  return prisma.cart.create({
    data: {
      leadId: leadId,
      status: 'active'
    }
  })
}

export const processOrder = async (
  order: Order,
  cart: CartWithItems,
  paymentId: string
) => {
  try {
    const result = await prisma.$transaction([
      ...cart.cartItems.map(cartItem => prisma.product.update({
        where: { id: cartItem.productId },
        data: { stock: { decrement: cartItem.qty } }
      })
      ),
      confirmOrder(order.id, paymentId),
      confirmCart(order.cartId),
      createNewCart(order.leadId || '')
    ])
    return result[result.length - 1].id
  } catch (err: any) {
    const msg = 'Error processing order'
    console.error(msg, err)
    throw new Error(msg)
  }
};


export const swapCarts = async (
  currentCartId: string,
  newCartId: string,
  leadId: string,
  reroute: boolean = true
) => {
  // set current cart inactive
  await prisma.cart.update({
    where: { id: currentCartId },
    data: { status: 'inactive' }
  })
  // set leadID on new cart
  await prisma.cart.update({
    where: { id: newCartId },
    data: { leadId: leadId, status: 'active'}
  })
  setServerCart(newCartId)
  reroute && redirect('/cart')
  return 
}