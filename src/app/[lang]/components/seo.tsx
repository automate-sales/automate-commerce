const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

export const seoCompotnent = (
    title: string, 
    description: string,
    locale: string = 'en',
    images?: {url: string, width: number, height: number}[],
    urlPath?: string,
    keywords?: string[],
) => {
    return {
        ...(keywords? {keywords: ['Home Office', 'Ergonomic', 'Desk', 'Standing Desk', 'Chair', 'Accessories'] } : {}),
      
        // default values for individual properties
        title: title,
        description: description,
      
        ...(urlPath ? {alternates: {
          canonical: `${SITE_ROOT}/${urlPath}`,
          languages: {
            'en': `${SITE_ROOT}/en/${urlPath}`,
            'es': `${SITE_ROOT}/es/${urlPath}`,
          }
        }} : {}),
      
        openGraph: {
          title: `${title} | Ergonomica`,
          description: description,
          url: SITE_ROOT,
          siteName: 'Ergonomica Office',
          images: images ? images : {
                url: `${SITE_ROOT}/icons/logo/logo.png`,
                width: 800,
                height: 600,
          },
          locale: locale,
          type: 'website',
        },
      
        twitter: {
          card: 'summary_large_image',
          title: `${title} | Ergonomica`,
          description: description,
          images: images? images.map(i => i.url) : [`${SITE_ROOT}/icons/logo/logo.png`], 
          siteId: '1467726470533754880',
          creator: '@ergonomicadesk',
          creatorId: '1467726470533754880',
        },
    }
}

export type Props = {
    params: { lang: string }
    searchParams: { [key: string]: string | string[] | undefined }
}