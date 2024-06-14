
import AddToCartButton from '@/app/[lang]/components/cart/add';
import ImageDipslay from '@/app/[lang]/components/item/imageDisplay';
import { Product } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils';
import { cookies } from 'next/headers';
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, seoCompotnent } from '@/app/[lang]/components/seo'
import { getDictionary } from '@/app/dictionaries';
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

export default async function Page({
  params
}: {
  params: { sku: string, lang: string }
}) {
  const productData = await prisma.product.findUnique({
    where: {
      sku: params.sku
    }
  }) as Product
  const cookieStore = cookies()
  const visitorId = cookieStore.get('ergo_lead_id')?.value
  const cartId = cookieStore.get('ergo_cart_id')?.value || ''

  const dict = await getDictionary(params.lang)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(productData, params.lang)) }}
      />
      <Breadcrumbs crumbs={[
        {name: dict.breadCrumbs.home, path: '/'},
        {name: dict.products.title, path: '/products'},
        {name: getIntl(productData?.title, params.lang), path: `/products/${productData?.sku}`}
      ]} />
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ImageDipslay product={productData} />
          <div>
            <h1 className="text-3xl font-bold">{getIntl(productData?.title, params.lang)}</h1>
            <p className="text-xl my-2">{productData?.price}</p>
            <p className="mb-4">{getIntl(productData?.description, params.lang)}</p>
            <div className="flex items-center">
            <AddToCartButton cartId={cartId} productId={productData?.id} productPrice={productData?.price} productSku={productData.sku} displayQty/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export type Props = {
  params: { sku: string, lang: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: {
      sku: params.sku
    }
  })
  const title = getIntl(product?.title, params.lang)
  const parentKeywords = (await parent).keywords
  return seoCompotnent(
    title,
    getIntl(product?.description, params.lang),
    params.lang,
    product?.images.map((image: string) => {
      return {
        url: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${image}`,
        width: 800,
        height: 600,
      }
    }),
    `products/${params.sku}`,
    parentKeywords ? parentKeywords.concat(title) : [title]
  )
}

const aMonthFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
const productJsonLd = (product: Product, lang: string = 'en') => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": getIntl(product.title, lang),
    "image": product.images.map(image => `${SITE_ROOT}/products/${image}`),
    "description": getIntl(product.description, lang),
    "sku": product.sku,
    //"gtin": product.gtin,
    "brand": {
      "@type": "Brand",
      "name": "Ergonomica Desk"
    },
    "offers": {
      "@type": "Offer",
      "url": `${SITE_ROOT}/products/${product.sku}`,
      "price": product.price,
      "priceCurrency": "USD",
      "priceValidUntil": aMonthFromNow,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Ergonomica Office"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "PA",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnInStore",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": [
          {
            "@type": "DefinedRegion",
            "addressCountry": "PA",
            "addressRegion": ["PA"]
          }
        ],
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "businessDays": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                  "https://schema.org/Monday",
                  "https://schema.org/Tuesday",
                  "https://schema.org/Wednesday",
                  "https://schema.org/Thursday",
                  "https://schema.org/Friday",
                  "https://schema.org/Saturday"
              ]
          },
          "cutoffTime": "12:00:15Z",
          "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 1,
              "unitCode": "d"
          },
          "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 1,
              "unitCode": "d"
          }
      },
        "shippingRate": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0.00"
        }
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "88"
    },
    "review": [{
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Gabriel K"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": "2023-01-01",
      "reviewBody": "Excellent product with high quality and great value."
    }]
  }
}
