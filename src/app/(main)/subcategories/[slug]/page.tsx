import Item from '@/app/components/item'
import { Product } from '@prisma/client'
import prisma from '@/db'
import Pagination from '@/app/components/pagination';

export default async function Page({ 
  params,
  searchParams 
}: { 
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const pageSize = 20;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0
  const subcategoryData = await prisma.subcategory.findUnique({
    where: {
      slug: params.slug
    },
    include: {
      products: {
        take: pageSize,
        skip: pageSize * pageNumber,
      },
      _count: {
        select: { products: true }
      }
    }
  })
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold pt-16 pb-8">{subcategoryData?.title}</h1>
      <p className='text-xl text-center pb-16'>{subcategoryData?.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategoryData?.products.map((product: Product, index: number) => (
          <Item key={index} price={product.price} link={`/products/${product.sku}`} title={product.title} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}`}/>
        ))}
      </div>
      <Pagination count={subcategoryData?._count.products || 0} pageSize={pageSize} pageNumber={pageNumber} model={`subcategories/${params.slug}`}/>
    </div>
  )
}
