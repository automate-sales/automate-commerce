import CheckoutForm from "@/app/[lang]/components/checkout/form";
import { CartWithItems } from "@/types";
import { getCurrentUser } from "@/utils/auth";
import prisma from '@/db';

import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, Props, seoCompotnent } from '../../components/seo';
import { getDictionary } from "@/app/dictionaries";
import CheckoutEvent from "../../components/analytics/checkout";
import { getCartWithItemsByLead, getServerLeadId } from "@/utils/leads/server";

export default async function Page({ params }: { params: { lang: string } }) {
    const leadId = await getServerLeadId()
    const cart = await getCartWithItemsByLead(leadId)
    const dict = await getDictionary(params.lang)
    const user = await getCurrentUser()
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
                    leadID={leadId}
                    cartWithItems={cart}
                    user={user}
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