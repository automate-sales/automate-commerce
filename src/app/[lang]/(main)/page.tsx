
import { Category, Product } from '@prisma/client'
import Carousel from '../components/carousel'
import HeroSection from '../components/home/heroSection'
import CenteredImageSection from '../components/home/centeredImageSection'
import TextAndVideoSection from '../components/home/textAndVideoSection'
import SpecsSection from '../components/home/specsSection'
import prisma from '@/db'
import { getDictionary } from '@/app/dictionaries'
import { getIntl } from '@/utils/utils'
import { Props, seoCompotnent } from '../components/seo'
import type { Metadata, ResolvingMetadata } from 'next'
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

export default async function Home({ 
  params
}: { 
  params: { lang:string } 
}) {
  const dict = await getDictionary(params.lang) // en
  const mainProducts = await prisma.product.findMany({
    take: 30
  })
  const categories = await prisma.category.findMany()
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchJsonLd(params.lang)) }}
      />
      <HeroSection imageSrc='/images/home/header-desktop.jpg' title={dict.home.heroSection.title} description={dict.home.heroSection.description}  buttonText={dict.home.heroSection.btnText} />
      <Carousel lang={params.lang} items={categories.map((c: Category) => { return {link: `/categories/${c.slug}`, imageUrl: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/categories/${c.images[0]}`, heading: getIntl(c.title, params.lang)} } )} />
      <CenteredImageSection imageSrc="/images/home/combinations-desktop.jpg" padding="8" content={dict.home.centeredImageSection.content1}  />
      <TextAndVideoSection text={dict.home.textImageSection.text} imageSrc="/path/to/default/image.jpg" textDirection="right" padding="8" />
      <SpecsSection specs={[
        {
          icon: '/path/to/default/image.jpg',
          title: dict.home.specsSection.feature1.title,
          paragraph: dict.home.specsSection.feature1.paragraph,
        },
        {
          icon: '/path/to/default/image.jpg',
          title: dict.home.specsSection.feature2.title,
          paragraph: dict.home.specsSection.feature2.paragraph,
        },
        {
          icon: '/path/to/default/image.jpg',
          title: dict.home.specsSection.feature3.title,
          paragraph: dict.home.specsSection.feature3.paragraph,
        }
      ]} padding="8"/>
      <CenteredImageSection imageSrc="/images/home/mission-desktop.jpg" padding="0" content={dict.home.centeredImageSection.content2} />
      <Carousel lang={params.lang} items={mainProducts.map((p: Product) => { return {link: `/products/${p.sku}`, imageUrl: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${p.images[0]}`, heading: getIntl(p.title, params.lang), subheading: `$${p.price}`} })} />
    </div>
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return seoCompotnent(
    dict.home.title,
    dict.home.description,
    [
      {
        url: `${process.env.NEXT_PUBLIC_IMAGE_HOST}/home/header-desktop.jpg`,
        width: 800,
        height: 600,
      },
    ],
    params.lang
  )
}

const searchJsonLd =(lang: string)=> {
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
}

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": SITE_ROOT,
  "name": "Ergonomica Desk",
  "description": "Everything you need for your home office",
  "url": SITE_ROOT,
  "telephone": "+50769477336",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle 75 San Francisco, Edif. Mega Storage, unidad 10202",
    "addressLocality": "Panama city",
    "addressRegion": "Panama",
    "postalCode": "00000",
    "addressCountry": "PA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.99437899550739",
    "longitude": "-79.50334275969475"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "12"
  },
  "review": [
    {
      "@type": "Review",
      "author": "Ryan",
      "datePublished": "2021-11-26",
      "name": "Great quality",
      "reviewBody": "Great quality product and service",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "worstRating": "1",
        "ratingValue": "5"
      }
    },
    {
      "@type": "Review",
      "author": "Vladlena",
      "datePublished": "2021-11-26",
      "name": "Exceptional service",
      "reviewBody": "The desks are of the highest quality and the service is exceptional. Less than 3 hours after making the purchase I was already using mine! I am MEGA pleased not only with the product and with the quality of the customer service, which is something very difficult to find. In addition to having a wide range of height with memory options to save the perfect graduation, there are different options of sizes, colors and even wheels to be able to rotate and move it with minimal effort, all this with a 5-year guarantee. 5 STARS!!! I recommend this company WITHOUT REPAIRS. The only downside is not having more rooms in the house to put more desks :) The best recommendation in a long time and definitely a chance to stay healthy while working.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    }
  ],
  "potentialAction": {
    "@type": "ReviewAction",
    "target": "https://g.page/r/CckxMghQ4Z1qEAg/review"
  },
  "areaServed": [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "8.99437899550739",
        "longitude": "-79.50334275969475"
      },
      "geoRadius": "800000"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "350-800"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Standing Desks",
        "description": "We offer high quality standing desks at an affordable price with 5 year warranty."
      }
    },
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "150-700"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Office Chairs",
        "description": "We offer high quality ergonomic office chairs at an affordable price."
      }
    },
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "5-300"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Home office accessories",
        "description": "We have everything you need for your home office. Our list of products includes accessories for your electronic devices, products that can improve your productivity, health and more."
      }
    }
  ],
  "priceRange": "$",
  "image": [
    "https://ergonomicadesk.com/images/home/header-mobile.jpg",
    "https://ergonomicadesk.com/images/home/combinations-mobile.jpg"
  ],
  "sameAs": ["https://www.ergonomicadesk.com"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "validFrom": "2021-12-26",
      "validThrough": "2023-12-26",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "9:00",
      "validFrom": "2021-12-26",
      "validThrough": "2023-12-26",
      "closes": "15:00"
    }
  ]
}

