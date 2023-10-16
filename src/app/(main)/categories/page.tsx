import { PrismaClient, Category } from '@prisma/client'
import Image from 'next/image'
const prisma = new PrismaClient()

export default async function Home() {
  const categories = await prisma.category.findMany()
  return (
    <div className='grid grid-cols-4'>
        {categories.map((c: Category, index: number) => (
            <div key={index} className='flex flex-col items-center'>
                <Image 
                    src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${c.images[0]}`} 
                    width={200} height={200}
                    alt={c.title}
                />
                <p>{c.title}</p>
            </div>)
        )}
    </div>
  )
}
