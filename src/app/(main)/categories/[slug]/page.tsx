import Item from '@/app/components/item'
import { Subcategory } from '@prisma/client'
import prisma from '@/db'

export default async function Page({ params }: { params: { slug: string } }) {
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
      <h1 className="text-4xl text-center font-bold pt-16 pb-8">{categoryData?.title}</h1>
      <p className='text-xl text-center pb-16'>{categoryData?.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData?.subcategories.map((subcategory: Subcategory, index: number) => (
          <Item key={index} link={`/subcategories/${subcategory.slug}`} title={subcategory.title} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${subcategory.images[0]}`}/>
        ))}
      </div>
    </div>
  )
}
