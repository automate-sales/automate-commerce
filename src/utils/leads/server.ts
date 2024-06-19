'use server'

import { cookies, headers } from 'next/headers'
import prisma from '@/db'
import { LEAD_COOKIE, CART_COOKIE } from './constants'

export const getCookie = (name: string) => {
  try {
    return cookies().get(name)?.value || undefined
  } catch (err) {
    console.error('Error getting cookie', err)
    return undefined
  }
}
export async function setCookie(name: string, value: string) {
    try {
      return cookies().set({
        name: name,
        value: value,
        httpOnly: true
      })
    } catch (err: any) {
      console.error('Error setting cookie', err)
      return undefined
    }
}
export async function deleteCookie(name: string) {
    try {
      return cookies().delete(name)
    } catch (err: any) {
      console.error('Error deleting cookie', err)
      return undefined
    }
}


export const setServerLead = async (leadId: string) => {
    setCookie(LEAD_COOKIE, leadId)
}

export const getServerLead = async () => {
    const cookiesId = getCookie(LEAD_COOKIE)
    const headersId = headers().get('x-leadid') || undefined
    return [cookiesId, headersId]
}

export const setServerCart = (cartId: string) => {
    setCookie( CART_COOKIE , cartId)
}

export const getServerCartCookie = async () => {
    return getCookie(CART_COOKIE)
}
export const getServerCart = async()=> {
    const cookiesId = await getServerCartCookie()
    if(cookiesId) return cookiesId
    const leadId = await getServerLead()
    return leadId[0] ? await getCartId(leadId[0]) : leadId[1] ? await getCartId(leadId[1]) : undefined
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
    return { leadId: lead.id, cartId: lead.carts[0].id }
}

export async function getCartId(leadId: string) {
    try {
        const cart = await prisma.cart.findFirst({
            where: { leadId: leadId, status: 'active' },
            orderBy: { createdAt: 'desc' },
            select: { id: true },
        })
        if(!cart) throw new Error('No active cart found')
        return cart.id
    } catch (err) {
        console.error('Error getting cart id', err)
        throw new Error('Error getting cart id')
    } 
}

export async function getCartWithItems(id?: string) {
    const cartId = id ? id : await getServerCart()
    if(!cartId) return undefined   
    return await prisma.cart.findUnique({
      where: { id: cartId, status: 'active' },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
          orderBy: { createdAt: 'asc' },
          include: {
            product: {
                select: { 
                    id: true, 
                    title: true,
                    price: true,
                    stock: true,
                    images: true, 
                    description: true,
                    sku: true,
                    color: true,
                    size: true
                },
            }
          },
        },
      },
    }) || undefined
}

export async function getCartLength() {
    const cartId = await getServerCart()
    if(!cartId) return 0   
    const cart = await prisma.cart.findUnique({
      where: { id: cartId, status: 'active' },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
        },
      },
    })
    return cart?.cartItems.reduce((acc, curr) => acc + curr.qty, 0) || 0
}