
import { Category, Product } from '@prisma/client'
import Carousel from '../components/carousel'
import HeroSection from '../components/home/heroSection'
import CenteredImageSection from '../components/home/centeredImageSection'
import TextAndVideoSection from '../components/home/textAndVideoSection'
import SpecsSection from '../components/home/specsSection'
import prisma from '@/db'
import { getDictionary } from '@/app/dictionaries'
export default async function Home(props: any) {
  const dict = await getDictionary(props.params.lang) // en
  const mainProducts = await prisma.product.findMany({
    take: 30
  })
  const categories = await prisma.category.findMany()
  return (
    <div>
      <HeroSection imageSrc='/images/home/header-desktop.jpg' title={dict.heroSection.title} description={dict.heroSection.description}  buttonText={dict.heroSection.btnText} />
      <Carousel items={categories.map((c: Category) => { return {link: `/categories/${c.slug}`, imageUrl: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${c.images[0]}`, heading: c.title} })} />
      <CenteredImageSection imageSrc="/images/home/combinations-desktop.jpg" padding="8" content={dict.centeredImageSection.content1}  />
      <TextAndVideoSection text={dict.textImageSection.text} imageSrc="/path/to/default/image.jpg" textDirection="right" padding="8" />
      <SpecsSection specs={[
        {
          icon: '/path/to/default/image.jpg',
          title: dict.specsSection.feature1.title,
          paragraph: dict.specsSection.feature1.paragraph,
        },
        {
          icon: '/path/to/default/image.jpg',
          title: dict.specsSection.feature2.title,
          paragraph: dict.specsSection.feature2.paragraph,
        },
        {
          icon: '/path/to/default/image.jpg',
          title: dict.specsSection.feature3.title,
          paragraph: dict.specsSection.feature3.paragraph,
        }
      ]} padding="8"/>
      <CenteredImageSection imageSrc="/images/home/mission-desktop.jpg" padding="0" content={dict.centeredImageSection.content2} />
      <Carousel items={mainProducts.map((p: Product) => { return {link: `/products/${p.sku}`, imageUrl: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${p.images[0]}`, heading: p.title, subheading: `$${p.price}`} })} />

     
    </div>
  )
}


