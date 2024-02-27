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
  quantity: number,
  price: number,
) {
    const cartItem = await prisma.cartItem.upsert({
        where: {
          cartId_productId: {
            cartId: cartId,
            productId: productId,
          },
        },
        update: {
          qty: quantity
        },
        create: {
          cartId: cartId,
          productId: productId,
          qty: quantity,
          price: price
        },
    })
    console.log('CART ITEM MUTATION RESULT: ', cartItem)
    return cartItem
}