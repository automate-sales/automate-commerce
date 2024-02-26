import Cart from '@/app/components/cart/summary'
import { PrismaClient, Category } from '@prisma/client'
const prisma = new PrismaClient()

import { cookies } from 'next/headers'

export default async function Page() {
    const cookieStore = cookies()
    const cartId = cookieStore.get('ergo_cart_id')?.value
    const cartWithItems = await prisma.cart.findUnique({
        where: { id: cartId },
        include: { cartItems: {
            include: { product: true }
        } 
    }
  })
  if (!cartWithItems) {
    return <div>No cart found</div>;
  }
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Cart</h1>
      <Cart cartWithItems={cartWithItems} />
    </div>
  )
}
