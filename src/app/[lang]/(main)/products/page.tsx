import Item from '@/app/[lang]/components/item'
import { Product, Prisma } from '@prisma/client'
import prisma from '@/db'
import Pagination from '@/app/[lang]/components/pagination';
import { getIntl } from '@/utils/utils';
import { getDictionary } from '@/app/dictionaries';
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, Props, seoCompotnent } from '../../components/seo';
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

async function searchProducts(
  searchTerm: string | null,
  pageSize: number,
  pageNumber: number,
  locale: string = 'en'
): Promise<[number, Product[] | undefined]> {
  const offset = pageNumber * pageSize;
  const productsQuery = Prisma.sql`
    SELECT * FROM "Product"
    WHERE "sku" = ${searchTerm}
    OR similarity(title->>${locale}, ${searchTerm}) > 0.1
    OR similarity(description->>${locale}, ${searchTerm}) > 0.3
    ORDER BY (
      CASE
        WHEN "sku" = ${searchTerm} THEN 1
        WHEN similarity(title->>${locale}, ${searchTerm}) > 0.3 THEN 2
        WHEN similarity(description->>${locale}, ${searchTerm}) > 0.4 THEN 3
        WHEN similarity(title->>${locale}, ${searchTerm}) > 0.1 THEN 4
        ELSE 5
      END
    ) ASC
    LIMIT ${pageSize} OFFSET ${offset}
  `;
  const countQuery = Prisma.sql`
    SELECT COUNT(*) FROM "Product"
    WHERE "sku" = ${searchTerm}
    OR similarity(title->>${locale}, ${searchTerm}) > 0.1
    OR similarity(description->>${locale}, ${searchTerm}) > 0.3
  `;
  const products = await prisma.$queryRaw(productsQuery) as Product[] | undefined;
  const count = await prisma.$queryRaw(countQuery) as { count: number }[];
  return [Number(count[0].count), products];
}

export default async function Page({
  params,
  searchParams
}: {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const dict = await getDictionary(params.lang)
  const pageSize = 20;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0
  const query = searchParams?.query ? searchParams.query as string : null
  const [count, products] = query ? await searchProducts(query, pageSize, pageNumber, params.lang) : await prisma.$transaction([
    prisma.product.count(),
    prisma.product.findMany({
      take: pageSize,
      skip: pageSize * pageNumber,
    })
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselJsonLd(products || [], params.lang)) }}
      />
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchJsonLd(params.lang)) }}
      /> */}
      <Breadcrumbs crumbs={[
        {name: dict.breadCrumbs.home, path: '/'},
        {name: dict.breadCrumbs.products, path: '/products'}
      ]} />
      <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold py-16">{dict.products.title}</h1>
      <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product: Product, index: number) => (
          <Item 
            key={index} 
            link={`/products/${product.sku}`} 
            title={getIntl(product.title, params.lang)} 
            price={product.price} id={product.id} 
            image={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product.images[0]}`
          }/>
        ))}
        </div>
        <Pagination count={count} pageSize={pageSize} pageNumber={pageNumber} model='products' query={query} />
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
    dict.products.title,
    dict.products.description,
    params.lang,
    [
      {
        url: `${SITE_ROOT}/images/home/combinations-desktop.jpg`,
        width: 800,
        height: 600,
      },
    ],
    'products'
  )
}

/* const searchJsonLd =(lang: string)=> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": SITE_ROOT,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_ROOT}/${lang}/?query={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
} */

const carouselJsonLd = (products: Product[], lang: string) => {
  return {
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
  }
}