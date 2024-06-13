import Item from '@/app/[lang]/components/item'
import { Subcategory } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils'
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, seoCompotnent } from '@/app/[lang]/components/seo'
import { getDictionary } from '@/app/dictionaries'
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

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
  const dict = await getDictionary(params.lang)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselJsonLd(categoryData?.subcategories, params.lang)) }}
      />
      <Breadcrumbs crumbs={[
        {name: dict.breadCrumbs.home, path: '/'},
        {name: dict.categories.title, path: '/categories'},
        {name: getIntl(categoryData?.title, params.lang), path: `/categories/${categoryData?.slug}`}
      ]} />
      <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold pt-16 pb-8">{getIntl(categoryData?.title, params.lang)}</h1>
      <p className='text-xl text-center pb-16'>{getIntl(categoryData?.description, params.lang)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData?.subcategories.map((subcategory: Subcategory, index: number) => (
          <Item key={index} link={`/subcategories/${subcategory.slug}`} title={getIntl(subcategory.title, params.lang)} image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${subcategory.images[0]}`}/>
        ))}
      </div>
    </div>
    </>
  )
}

export type Props = {
  params: { slug: string, lang: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = await prisma.category.findUnique({
    where: {
      slug: params.slug
    }
  })
  const title = getIntl(category?.title, params.lang)
  const parentKeywords = (await parent).keywords
  return seoCompotnent(
    title,
    getIntl(category?.description, params.lang),
    params.lang,
    category?.images.map((image: string) => {
      return {
        url: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${image}`,
        width: 800,
        height: 600,
      }
    }),
    `categories/${params.slug}`,
    parentKeywords ? parentKeywords.concat(title): [title]
  )
}

const carouselJsonLd = (subcategories?: Subcategory[], lang: string='en') => {
  return subcategories ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": subcategories.map((subcat: Subcategory, index: number) => {
      return {
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_ROOT}/subcategories/${subcat.slug}`,
        "name": getIntl(subcat.title, lang),
        "image": `${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${subcat.images[0]}`
      }
    })
  } : {}
} 

