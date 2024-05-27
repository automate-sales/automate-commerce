import Item from '@/app/[lang]/components/item'
import { Category } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils';
import { getDictionary } from '@/app/dictionaries';
import type { Metadata, ResolvingMetadata } from 'next'
import { Props, seoCompotnent } from '../../components/seo';
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

export default async function Page({
  params
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const categories = await prisma.category.findMany()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselJsonLd(categories, params.lang)) }}
      />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-center font-bold py-16">{dict.categories.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category: Category, index: number) => (
            <Item key={index} link={`/categories/${category.slug}`} title={getIntl(category.title, params.lang)} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${category.images[0]}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return seoCompotnent(
    dict.categories.title,
    dict.categories.description,
    params.lang,
    [
      {
        url: `${SITE_ROOT}/images/home/combinations-desktop.jpg`,
        width: 800,
        height: 600,
      },
    ],
    'categories'
  )
}

const carouselJsonLd = (categories: Category[], lang: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": categories.map((category: Category, index: number) => {
      return {
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_ROOT}/categories/${category.slug}`,
        "name": getIntl(category.title, lang),
        "image": `${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${category.images[0]}`
      }
    })
  }
} 