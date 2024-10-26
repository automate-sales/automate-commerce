import Cart from '@/app/[lang]/components/cart/summary'
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, Props, seoCompotnent } from '../../components/seo';
import { getDictionary } from '@/app/dictionaries'
import { getCartWithItemsByLead, getServerLeadId } from '@/utils/leads/server'
import CartEvent from '../../components/analytics/cart';
import Link from 'next/link';


export default async function Page({ params }: { params: { lang: string } }) {
  const leadId = await getServerLeadId()
  const cart = await getCartWithItemsByLead(leadId)
  const dict = await getDictionary(params.lang)
  return (
    <>
    <CartEvent />
    <Breadcrumbs crumbs={[
      {name: dict.breadCrumbs.home, path: '/'},
      {name: dict.cart.title, path: '/cart'},
    ]} />
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Cart</h1>
      <Cart cartWithItems={cart} fullWidth={true} lang={params.lang}/>
      <div className="flex justify-end pb-5">
        <Link id='checkoutBtn' className='bg-gray-400 text-white text-xl px-4 py-2' href="/checkout" passHref>Checkout</Link>
      </div>
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
    dict.cart.title,
    dict.cart.description,
    params.lang,
    undefined,
    'cart'
  )
}

