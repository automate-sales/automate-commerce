import Item from '@/app/components/item'
import {  Product, Prisma } from '@prisma/client'
import prisma from '@/db'

async function searchProducts(searchTerm: string) {
  const query = Prisma.sql`
    SELECT * FROM "Product"
    WHERE "sku" = ${searchTerm}
    OR similarity(title, ${searchTerm}) > 0.1
    OR similarity(description, ${searchTerm}) > 0.3
    ORDER BY (
      CASE
        WHEN "sku" = ${searchTerm} THEN 1
        WHEN similarity(title, ${searchTerm}) > 0.5 THEN 2
        WHEN similarity(title, ${searchTerm}) > 0.2 THEN 3
        WHEN similarity(description, ${searchTerm}) > 0.3 THEN 4
        WHEN similarity(title, ${searchTerm}) > 0.1 THEN 5
        ELSE 6
      END
    ) ASC
  `;
  return await prisma.$queryRaw(query) as Product[] | undefined;
}

export default async function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.query ? searchParams.query as string : null

  const productFields = {
    id: true,
    sku: true,
    title: true,
    description: true,
    price: true,
    stock: true,
    images: true,
    subcategory: {
      select: {
        id: true,
        slug: true,
        title: true
      }
    }
  }
  const products = query? await searchProducts(query) : await prisma.product.findMany({
    select: productFields
  });
  console.log('PRODUCTS: ', products)
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product: any, index: number) => (
          <Item key={index} link={`/products/${product.sku}`} title={product.title} price={product.price} id={product.id} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}`}/>
        ))}
      </div>
    </div>
  )
}
