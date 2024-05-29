'use server'
 
import { cookies } from 'next/headers'
import { CartItem, Order } from '@prisma/client'
import { CartWithItems, CheckoutOrder } from '@/types'
import { validateCart, validateCheckout, validateUniqueCart } from '@/utils/validations'
import { formatAddress } from '@/utils/calc'
import { processPayment } from '@/utils/payments/nmi'
import { sendEmail } from '@/utils/email'
import prisma from '@/db'
import { redirect } from 'next/navigation'
import { FormEvent } from 'react'

export async function createCookie(name: string, value: string) {
    cookies().set({
        name: name,
        value: value,
        httpOnly: true
      })
}

export async function createLeadAndCart(
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
    return {leadId: lead.id, cartId: lead.carts[0].id}
}

export async function updateCartItem(
  cartId: string,
  productId: number,
  price: number,
  quantity?: number | null | undefined,
): Promise<{type: 'error' | 'warn' | 'success', text: string, item: CartItem}>{
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

  if (!product) {
    throw new Error('Product not found');
  }

  // Calculate the current quantity and requested quantity
  const currentQty = existingCartItem ? existingCartItem.qty : 0;
  const requestedQty = quantity ?? 1;
  const allowableQty = Math.min(requestedQty, product.stock - currentQty);

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

  if(product.stock <= 0) return({type: 'error', text: `Item is out of stock`, item: cartItem})
  else if(allowableQty < requestedQty) return({type: 'warn', text: `${allowableQty} items were added to the cart, ${requestedQty - allowableQty} are not in stock`, item: cartItem });
  else return({type: 'success', text:`${allowableQty} items were added to the cart`, item: cartItem});
}



export async function getCoupon(
  code: string
) {
  const res = await prisma.coupon.findUnique({
    where: { code: code },
  });
  return res
}

export async function createOrder(
  payload: CheckoutOrder
) {
  try{
    //get the cart by id
    const { orderInfo, customerInfo, shippingInfo, billingInfo, paymentInfo } = payload
    const cart = await prisma.cart.findUnique({
        where: { id: orderInfo.cartId },
        include: { cartItems: {
          where: { qty: { gt: 0 } },
          include: { product: true }
        } 
      }
    })
    if(!cart) throw new Error('Invalid cart')
    validateCart(orderInfo.leadId, cart);
    await validateUniqueCart(cart);
    await validateCheckout(payload, cart.cartItems);
    //create order in database
    const newOrder = await prisma.order.create({data: {
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
    }})
    //process payment
    const paymentId = await processPayment({...paymentInfo, total: orderInfo.total, orderId: newOrder.id})
    //update product inventory, order status, paymentRef
    const newCartId = await completeOrder(newOrder, cart, paymentId)
    cookies().set({
      name: 'ergo_cart_id',
      value: String(newCartId),
      httpOnly: true
    })
    //send confirmation email
    await sendEmail(cart, newOrder)
    return {orderId: newOrder.id, newCartId: newCartId}
  }catch(err: any){
    console.error(err)
      throw new Error('error')
  }
}

const confirmOrder =(orderId:string, paymentId:string)=>{
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

const confirmCart =(cartId:string)=>{
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

const createNewCart =(leadId:string)=>{
  return prisma.cart.create({
      data: {
          leadId: leadId,
          status: 'active'
      }
  })
}

export const completeOrder = async (
  order: Order, 
  cart:CartWithItems,
  paymentId: string
) => {
  try{
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
  console.log('TRANSACTION RESULT ', result);
  return result[result.length-1].id
}catch(err: any){
  console.error(err)
  throw new Error('error')
}
};


export const swapCarts = async (
  currentCartId: string, 
  newCartId: string, 
  leadId: string
) => {
  // set current cart inactive
  await prisma.cart.update({
      where: { id: currentCartId },
      data: { status: 'inactive' }
  })
  // set leadID on new cart
  await prisma.cart.update({
      where: { id: newCartId },
      data: { leadId: leadId }
  })
  cookies().set({
    name: 'ergo_cart_id',
    value: newCartId,
    httpOnly: true
  })
  redirect('/cart')
}