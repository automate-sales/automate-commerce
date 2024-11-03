import Item from '@/app/[lang]/components/item'
import { Product } from '@prisma/client'
import prisma from '@/db'
import Pagination from '@/app/[lang]/components/pagination';
import { getIntl } from '@/utils/utils';
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, seoCompotnent } from '@/app/[lang]/components/seo'
import { getDictionary } from '@/app/dictionaries';
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

export default async function Page({
  params,
  searchParams
}: {
  params: { slug: string, lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const pageSize = 20;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0
  const subcategoryData = await prisma.subcategory.findUnique({
    where: {
      slug: params.slug
    },
    include: {
      products: {
        distinct: ['skuGroup'],  // Retrieve unique skuGroups
        orderBy: { createdAt: 'asc' }, // Adjust to ensure the "first" product per skuGroup
        take: pageSize,
        skip: pageSize * pageNumber,
      },
      _count: {
        select: { products: true }
      }
    }
  })

  const groups = await prisma.product.groupBy({
    by: ['skuGroup'],
    where: {
      subcategoryId: subcategoryData?.id, // Adjust to match your subcategory ID
    },
    _count: {
      skuGroup: true, // Count of products in each skuGroup (optional)
    },
  });
  console.log('GROUPS ', groups)
  
  const dict = await getDictionary(params.lang)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselJsonLd(subcategoryData?.products, params.lang)) }}
      />
      <Breadcrumbs crumbs={[
        {name: dict.breadCrumbs.home, path: '/'},
        {name: dict.subcategories.title, path: '/subcategories'},
        {name: getIntl(subcategoryData?.title, params.lang), path: `/subcategories/${subcategoryData?.slug}`}
      ]} />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-center font-bold pt-16 pb-8">{getIntl(subcategoryData?.title, params.lang)}</h1>
        <p className='text-xl text-center pb-16'>{getIntl(subcategoryData?.description, params.lang)}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subcategoryData?.products.map((product: Product, index: number) => (
            <Item 
              key={index}
              id={product.id}
              price={product.price}
              link={`/products/${product.sku}`}
              title={getIntl(product.title, params.lang)}
              variants={groups.find((group) => group.skuGroup === product.skuGroup)?._count?.skuGroup}
              image={product.images.length > 0 ? `${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}` : '/images/no-image.png'}
            />
          ))}
        </div>
        <Pagination count={subcategoryData?._count.products || 0} pageSize={pageSize} pageNumber={pageNumber} model={`subcategories/${params.slug}`} />
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
  const subcategory = await prisma.subcategory.findUnique({
    where: {
      slug: params.slug
    }
  })
  const title = getIntl(subcategory?.title, params.lang)
  const parentKeywords = (await parent).keywords
  return seoCompotnent(
    title,
    getIntl(subcategory?.description, params.lang),
    params.lang,
    subcategory?.images.map((image: string) => {
      return {
        url: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/subcategories/${image}`,
        width: 800,
        height: 600,
      }
    }),
    `subcategories/${params.slug}`,
    parentKeywords ? parentKeywords.concat(title) : [title]
  )
}

const carouselJsonLd = (products?: Product[], lang: string = 'en') => {
  return products ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product: Product, index: number) => {
      return {
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_ROOT}/products/${product.sku}`,
        "name": getIntl(product.title, lang),
        "image": `${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}`
      }
    })
  } : {}
} 
