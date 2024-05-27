import CheckoutForm from "@/app/[lang]/components/checkout/form";
import { CartWithItems } from "@/types";
import { getCurrentUser } from "@/utils/auth";
import { cookies } from "next/headers";
import prisma from '@/db';

import type { Metadata, ResolvingMetadata } from 'next'
import { Props, seoCompotnent } from '../../components/seo';
import { getDictionary } from "@/app/dictionaries";

export default async function Page() {
    const cookieStore = cookies()
    const leadId = cookieStore.get('ergo_lead_id')?.value || ''
    const cartId = cookieStore.get('ergo_cart_id')?.value || ''
    const user = await getCurrentUser()
    const cart = await prisma.cart.findUnique({
        where: { id: cartId },
        include: { 
            cartItems: {
                where: { qty: { gt: 0 } },
                include: { product: true },
            },
        }
    })                                                                  
    return(
        <div className="container mx-auto p-8">
            <h1 className="text-3xl text-center font-bold py-4">Checkout</h1>
                <CheckoutForm
                    user={user}
                    leadId={leadId}
                    cartId={cartId}
                    cart={cart as CartWithItems}
                />
            </div>
    )
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const dict = await getDictionary(params.lang)
    return seoCompotnent(
      dict.checkout.title,
      dict.checkout.description,
      params.lang,
      undefined,
      'checkout'
    )
  }