import { Category, Product } from '@prisma/client'
import Carousel from '../components/carousel'
import HeroSection from '../components/home/heroSection'
import CenteredImageSection from '../components/home/centeredImageSection'
import TextAndVideoSection from '../components/home/textAndVideoSection'
import SpecsSection from '../components/home/specsSection'
import prisma from '@/db'

export default async function Home() {
  const mainProducts = await prisma.product.findMany({
    take: 30
  })
  const categories = await prisma.category.findMany()
  return (
    <div>
      <HeroSection imageSrc='/images/home/header-desktop.jpg' title="Welcome to the Next.js E-commerce Store" description="This is a simple e-commerce store built with Next.js and Prisma." buttonText="Shop Now" />
      <Carousel items={categories.map((c: Category) => { return {link: `/categories/${c.slug}`, imageUrl: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${c.images[0]}`, heading: c.title} })} />
      <CenteredImageSection imageSrc="/images/home/combinations-desktop.jpg" padding="8" content="This is a centered image section." />
      <TextAndVideoSection text="This is a text and image section." imageSrc="/path/to/default/image.jpg" textDirection="right" padding="8" />
      <SpecsSection specs={[
        {
          icon: '/path/to/default/image.jpg',
          title: 'Feature 1',
          paragraph: 'This is the first feature.'
        },
        {
          icon: '/path/to/default/image.jpg',
          title: 'Feature 2',
          paragraph: 'This is the second feature.'
        },
        {
          icon: '/path/to/default/image.jpg',
          title: 'Feature 3',
          paragraph: 'This is the third feature.'
        }
      ]} padding="8"/>
      <CenteredImageSection imageSrc="/images/home/mission-desktop.jpg" padding="0" content="This is another centered image section." />
      <Carousel items={mainProducts.map((p: Product) => { return {link: `/products/${p.sku}`, imageUrl: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${p.images[0]}`, heading: p.title, subheading: `$${p.price}`} })} />

     
    </div>
  )
}
