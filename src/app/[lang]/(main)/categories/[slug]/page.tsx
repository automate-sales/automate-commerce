import Item from '@/app/[lang]/components/item'
import { Subcategory } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils'

export default async function Page({ 
  params 
}: { 
  params: { slug: string, lang:string } 
}) {
  const categoryData = await prisma.category.findUnique({
    where: {
      slug: params.slug
    },
    include: {
      subcategories: true
    }
  })
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold pt-16 pb-8">{getIntl(categoryData?.title, params.lang)}</h1>
      <p className='text-xl text-center pb-16'>{getIntl(categoryData?.description, params.lang)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData?.subcategories.map((subcategory: Subcategory, index: number) => (
          <Item key={index} link={`/subcategories/${subcategory.slug}`} title={getIntl(subcategory.title, params.lang)} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${subcategory.images[0]}`}/>
        ))}
      </div>
    </div>
  )
}

