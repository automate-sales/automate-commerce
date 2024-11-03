
import AddToCartButton from '@/app/[lang]/components/cart/add';
import ImageDipslay from '@/app/[lang]/components/item/imageDisplay';
import { Product } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils';
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs, seoCompotnent } from '@/app/[lang]/components/seo'
import { getDictionary } from '@/app/dictionaries';
import { getServerCart } from '@/utils/leads/server';
import Link from 'next/link';
import Image from 'next/image';
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

async function getColorSizeMappings(skuGroup: string) {
  // Fetch all products in the specified skuGroup with distinct color and size combinations
  const products = await prisma.product.findMany({
    where: { skuGroup },
    select: {
      color: true,
      size: true,
      sku: true,
    },
    distinct: ['color', 'size'],
  });

  const colors: Record<string, { firstSku: string | null; sizes: string[] | null }> = {};
  const sizes: Record<string, string[] | null> = {};

  // Initialize mappings with all unique colors and sizes
  for (const { color, size, sku } of products) {
    if (color && !colors[color]) {
      colors[color] = { firstSku: sku || null, sizes: [] };
    }
    if (size && !sizes[size]) {
      sizes[size] = [];
    }
  }

  // Populate mappings with actual size and color combinations
  for (const { color, size, sku } of products) {
    if (color && size && sku) {
      colors[color].sizes!.push(size);
      sizes[size]!.push(color);
    }
  }

  // Set sizes to null if no sizes are associated with a color
  for (const color in colors) {
    if (colors[color].sizes && colors[color].sizes.length === 0) {
      colors[color].sizes = null;
    }
  }

  // Set sizes to null if no colors are associated with a size
  for (const size in sizes) {
    if (sizes[size] && sizes[size]!.length === 0) {
      sizes[size] = null;
    }
  }

  return { colors, sizes };
}


export default async function Page({
  params
}: {
  params: { sku: string, lang: 'en' | 'es' }
}) {
  const productData = await prisma.product.findUnique({
    where: {
      sku: params.sku
    }
  }) as Product
  const { colors, sizes } = await getColorSizeMappings(productData.skuGroup)
  const currentColor = productData.color;
  const currentSize = productData.size
  const availableSizes = currentColor ? colors[currentColor].sizes : currentSize ? Object.keys(sizes) : null;
  const productUrl = (skuGroup: string, color?: string|null, size?: string|null) => `/products/${skuGroup}${color? `-${color}`:''}${size? `-${size}`:''}`
  const lang = params.lang
  const cartId = await getServerCart()
  const dict = await getDictionary(lang)
  const productTitle = getIntl(productData?.title, lang)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(productData, lang)) }}
      />
      <Breadcrumbs crumbs={[
        {name: dict.breadCrumbs.home, path: '/'},
        {name: dict.products.title, path: '/products'},
        {name: getIntl(productData?.title, lang), path: `/products/${productData?.sku}`}
      ]} />
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ImageDipslay product={productData} lang={lang} priority={true}/>
          <div>
            <h1 className="text-3xl font-bold pb-4">{productTitle}</h1>
            <p className="mb-4">{getIntl(productData?.description, lang)}</p>
            <p className="text-xl font-bold my-2">$ {productData?.price}</p>
              { currentColor &&
                <div className="pb-4">
                  <span className="block text-sm">Color:</span>
                  <div className="grid grid-cols-5 lg:grid-cols-6 gap-2">
                    {
                      Object.keys(colors).map((c, i) => 
                        <Link scroll={false} passHref href={currentSize && colors[c].sizes && colors[c].sizes.includes(currentSize) ? productUrl(productData.skuGroup, c, currentSize) : `/products/${colors[c].firstSku}`} key={i}>
                          <div className={`text-center link ${c === currentColor && 'border-2 border-blue-400'}`}>
                            <Image
                              src={`/images/colors/${c}.jpg`} 
                              alt={`Ergonomica - ${c}`}
                              width={80}
                              height={80}
                            />
                          </div>
                        </Link>
                      )
                    }
                  </div>
                </div>
              }

              { availableSizes && <div className="pb-4">
                  <span className="block text-sm">Tamaño:</span>
                  <div className="flex flex-wrap gap-3">
                    { 
                      availableSizes.map((s, i) => 
                        <Link scroll={false} passHref href={productUrl(productData.skuGroup, currentColor, s)} key={i}>
                          <div className={`text-center link px-3 py-2 bg-gray-100 ${s === currentSize && 'border-2 border-blue-400'}`}>
                            {s?.toString()}
                          </div>
                        </Link>
                      )
                    }
                  </div>
                </div>
              } 

            <div className="flex items-center">
              <AddToCartButton
                cartId={cartId} 
                productId={productData?.id} 
                productSku={productData.sku}
                productPrice={productData?.price}
                productTitle={productTitle}
                productStock={productData?.stock}
                displayQty
              />
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
