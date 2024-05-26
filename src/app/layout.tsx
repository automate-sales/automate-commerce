import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import LeadGen from './[lang]/components/leadGen'
const inter = Inter({ subsets: ['latin'] })
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

export const metadata: Metadata = {
  // shared by all files
  generator: 'Torus Commerce',
  applicationName: 'Ergonomica Ecommerce',
  referrer: 'origin-when-cross-origin',
  keywords: ['Home Office', 'Ergonomic', 'Desk', 'Standing Desk', 'Chair', 'Accessories'],
  authors: [{ name: 'Gabriel Kardonski', url: 'https://github.com/gkpty' }],
  creator: 'Gabriel Kardonski',
  publisher: 'Gabriel Kardonski',

  icons: {
    icon: '/icons/logo/favicon-32x32.png',
    shortcut: '/icons/logo/favicon-32x32.png',
    apple: '/icons/logo/apple-touch-icon.png'
  },

  // default values for individual properties
  title: {
    template: '%s | Ergonomica',
    default: 'Ergonomica Office',
  },
  description: 'We sell cool stuff',

  alternates: {
    canonical: SITE_ROOT,
    languages: {
      'en': `${SITE_ROOT}/en`,
      'es': `${SITE_ROOT}/es`,
    },
    media: {
      'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://nextjs.org/rss',
    },
  },

  openGraph: {
    title: 'Ergonomica Office',
    description: 'We sell cool stuff',
    url: SITE_ROOT,
    siteName: 'Ergonomica Office',
    images: [
      {
        url: `${SITE_ROOT}/icons/logo/logo.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ergonomica Office',
    description: 'We sell cool stuff',
    siteId: '1467726470533754880',
    creator: '@ergonomicadesk',
    creatorId: '1467726470533754880',
    images: [`${SITE_ROOT}/icons/logo/logo.png`], 
  },
}

const orgRichSnippet = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ergonomica Desk",
  "url": `${SITE_ROOT}`,
  "logo": `${SITE_ROOT}/icons/logo/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+50769477336",
    "contactType": "customer service",
    "areaServed": "PA",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/ErgonomicaDesk",
    "https://www.twitter.com/ErgonomicaDesk",
    "https://www.instagram.com/ErgonomicaDesk"
  ]
}

const websiteRichSnippet = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": `${SITE_ROOT}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_ROOT}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const cookieStore = cookies()
    const visitorId = cookieStore.get('ergo_lead_id')?.value
    return (
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgRichSnippet) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteRichSnippet) }}
          />
        </head>
        <body className={inter.className}>
          <LeadGen visitorId={visitorId} />
          {children}
        </body>
      </html>
  )
}
