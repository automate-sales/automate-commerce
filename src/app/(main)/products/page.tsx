import Item from '@/app/components/item'
import {  Product, Prisma } from '@prisma/client'
import prisma from '@/db'
import Pagination from '@/app/components/pagination';

async function searchProducts(
  searchTerm: string | null,
  pageSize: number,
  pageNumber: number
):  Promise<[number, Product[] | undefined]> {
  const offset = pageNumber * pageSize;
  const productsQuery = Prisma.sql`
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
    LIMIT ${pageSize} OFFSET ${offset}
  `;
  const countQuery = Prisma.sql`
    SELECT COUNT(*) FROM "Product"
    WHERE "sku" = ${searchTerm}
    OR similarity(title, ${searchTerm}) > 0.1
    OR similarity(description, ${searchTerm}) > 0.3
  `;
  const products = await prisma.$queryRaw(productsQuery) as Product[] | undefined;
  const count = await prisma.$queryRaw(countQuery) as { count: number }[];
  return [ Number(count[0].count), products ]
}

export default async function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const pageSize = 20;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0
  const query = searchParams?.query ? searchParams.query as string : null
  const [count, products] = query ? await searchProducts(query, pageSize, pageNumber) : await prisma.$transaction([
    prisma.product.count(),
    prisma.product.findMany({
      take: pageSize,
      skip: pageSize * pageNumber,
    })
  ])
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product: any, index: number) => (
          <Item key={index} link={`/products/${product.sku}`} title={product.title} price={product.price} id={product.id} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}`}/>
        ))}
      </div>
      <Pagination count={count} pageSize={pageSize} pageNumber={pageNumber} model='products' query={query}/>
    </div>
  )
}
