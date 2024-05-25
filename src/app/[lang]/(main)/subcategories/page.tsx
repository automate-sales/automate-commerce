import Item from '@/app/[lang]/components/item'
import { Subcategory } from '@prisma/client'
import prisma from '@/db'
import Pagination from '@/app/[lang]/components/pagination';
import { getIntl } from '@/utils/utils';
import { getDictionary } from '@/app/dictionaries';

export default async function Page({
  params,
  searchParams={page: '0'}
}: {
  params: { lang:string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const dict = await getDictionary(params.lang)
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
      <h1 className="text-4xl text-center font-bold py-16">{dict.subcategories.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategories.map((subcategory: Subcategory, index: number) => (
          <Item key={index} link={`/subcategories/${subcategory.slug}`} title={getIntl(subcategory.title, params.lang)} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${subcategory.images[0]}`}/>
        ))}
      </div>
      <Pagination count={count} pageSize={pageSize} pageNumber={pageNumber} model='subcategories'/>
    </div>
  )
}
