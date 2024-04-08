import Item from '@/app/components/item'
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Page() {
  const products = await prisma.product.findMany()
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: Product, index: number) => (
          <Item key={index} link={`/products/${product.sku}`} title={product.title} price={product.price} id={product.id} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}`}/>
        ))}
      </div>
    </div>
  )
}