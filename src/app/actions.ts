'use server'
 
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
) {
    const cartItem = await prisma.cartItem.upsert({
        where: {
          cartId_productId: {
            cartId: cartId,
            productId: productId,
          },
        },
        update: {
          ...( quantity ? { qty: quantity } : { qty: { increment: 1 } })
        },
        create: {
          cartId: cartId,
          productId: productId,
          qty: quantity || 1,
          price: price
        },
    })
    console.log('CART ITEM MUTATION RESULT: ', cartItem)
    return cartItem
}

export async function getCoupon(
  code: string
) {
  const res = await prisma.coupon.findUnique({
    where: { code: code },
  });
  return res
}