import CheckoutForm from "@/app/[lang]/components/checkout/form";
import { CartWithItems } from "@/types";
import { getCurrentUser } from "@/utils/auth";
import prisma from '@/db';

import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, Props, seoCompotnent } from '../../components/seo';
import { getDictionary } from "@/app/dictionaries";
import CheckoutEvent from "../../components/analytics/checkout";
import { getCartId, getServerCart, getServerLead } from "@/utils/leads/server";

export default async function Page({ params }: { params: { lang: string } }) {
    const [leadId] = await getServerLead()
    const cartId = leadId && await getCartId(leadId)
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
    const dict = await getDictionary(params.lang)
    // make a client side component to get the cart form the client side if no server cart                                                                  
    return(
        <>
        <CheckoutEvent />
        <Breadcrumbs crumbs={[
            {name: dict.breadCrumbs.home, path: '/'},
            {name: dict.cart.title, path: '/cart'},
            {name: dict.checkout.title, path: '/checkout'},
            ]} />
            <div className="container mx-auto p-8">
            <h1 className="text-3xl text-center font-bold py-4">Checkout</h1>
                <CheckoutForm
                    user={user}
                    leadId={leadId}
                    cartId={cartId}
                    cart={cart as CartWithItems}
                />
            </div>
        </>
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