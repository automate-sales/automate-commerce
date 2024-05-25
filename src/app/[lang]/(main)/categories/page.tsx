import Item from '@/app/[lang]/components/item'
import { Category } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils';
import { getDictionary } from '@/app/dictionaries';

export default async function Page({ 
  params
}: { 
  params: { lang:string } 
}) {
  const dict = await getDictionary(params.lang)
  const categories = await prisma.category.findMany()
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">{dict.categories.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: Category, index: number) => (
          <Item key={index} link={`/categories/${category.slug}`} title={getIntl(category.title, params.lang)} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${category.images[0]}`}/>
        ))}
      </div>
    </div>
  )
}
