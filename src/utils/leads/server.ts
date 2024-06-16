'use server'

import { cookies, headers } from 'next/headers'
import prisma from '@/db'
import { LEAD_COOKIE } from './constants'

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

export const setServerLead = (leadId: string) => {
    setCookie(LEAD_COOKIE, leadId)
}

export const getServerLead = () => {
    const cookiesId = cookies().get(LEAD_COOKIE)?.value
    const headersId = headers().get('x-leadid')
    return [cookiesId, headersId]
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