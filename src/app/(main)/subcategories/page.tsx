import Item from '@/app/components/item'
import { Subcategory } from '@prisma/client'
import prisma from '@/db'
import Pagination from '@/app/components/pagination';

export default async function Page({
  searchParams={page: '0'}
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const pageSize = 20;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0
  const [count, subcategories] = await prisma.$transaction([
    prisma.subcategory.count(),
    prisma.subcategory.findMany({
      take: pageSize,
      skip: pageSize * pageNumber,
    })
  ])
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Subcategories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategories.map((subcategory: Subcategory, index: number) => (
          <Item key={index} link={`/subcategories/${subcategory.slug}`} title={subcategory.title} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${subcategory.images[0]}`}/>
        ))}
      </div>
      <Pagination count={count} pageSize={pageSize} pageNumber={pageNumber} model='subcategories'/>
    </div>
  )
}
