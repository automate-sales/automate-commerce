import Cart from '@/app/[lang]/components/cart/summary'
import Link from 'next/link'
import { getSubTotal } from '@/utils/calc'
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, Props, seoCompotnent } from '../../components/seo';
import { getDictionary } from '@/app/dictionaries'
import { getCartWithItems } from '@/utils/leads/server'


export default async function Page({ params }: { params: { lang: string } }) {
  const cart = await getCartWithItems()
  if (!cart) {
    return <div>No cart found</div>;
  }
  const dict = await getDictionary(params.lang)
  return (
    <>
    <Breadcrumbs crumbs={[
      {name: dict.breadCrumbs.home, path: '/'},
      {name: dict.cart.title, path: '/cart'},
    ]} />
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Cart</h1>
      <Cart cartWithItems={cart} />
      <div id='cart-total' className="flex justify-end pt-5 pb-2">
        ${getSubTotal(cart.cartItems)}
      </div>
      <div className="flex justify-end pb-5">
        <Link className='bg-gray-400 text-white text-xl px-4 py-2' href="/checkout" passHref>Checkout</Link>
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

