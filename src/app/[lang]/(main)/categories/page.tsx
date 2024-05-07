import Item from '@/app/[lang]/components/item'
import { Category } from '@prisma/client'
import prisma from '@/db'

export default async function Page() {
  const categories = await prisma.category.findMany()
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: Category, index: number) => (
          <Item key={index} link={`/categories/${category.slug}`} title={category.title} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${category.images[0]}`}/>
        ))}
      </div>
    </div>
  )
}
