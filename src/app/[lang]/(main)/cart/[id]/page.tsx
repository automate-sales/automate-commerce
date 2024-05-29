import SwapCartDialog from '@/app/[lang]/components/swapCartDialog'
import { swapCarts } from '@/app/actions'
import prisma from '@/db'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { FormEvent } from 'react'

export default async function Page({ 
    params 
  }: { 
    params: { id: string, lang:string } 
  }) {
    const cookieStore = cookies()
    const cartId = cookieStore.get('ergo_cart_id')?.value || '';
    const leadId = cookieStore.get('ergo_lead_id')?.value || '';

    const newCart = await prisma.cart.findUnique({
        where: { id: params.id },
        include: {
            cartItems: {
                where: { qty: { gt: 0 } },
                include: { product: true },
                orderBy: { createdAt: 'asc' }
            }
        }
    })
    if (newCart && !newCart.leadId) {
       const currentCart = await prisma.cart.findUnique({
            where: { id: cartId },
            include: {
                cartItems: {
                    where: { qty: { gt: 0 } },
                    include: { product: true },
                    orderBy: { createdAt: 'asc' }
                }
            }
        })
        if (currentCart && currentCart.cartItems.length > 0) {
            return (
                <SwapCartDialog currentCartId={cartId} newCartId={newCart.id} leadId={leadId}/>
            )
        } else swapCarts(cartId, params.id, leadId)
    } else redirect('/cart')

    
}