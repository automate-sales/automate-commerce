import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST || 'https://localhost:3000';

type BreadCrumb = {
    name: string,
    path: string
}
export function Breadcrumbs({
	crumbs,
    hide=false
}:{
	crumbs: BreadCrumb[],
    hide?: boolean
}){
	const breadCrumbs = crumbs.map((crumb, index)=>
		index===crumbs.length-1?
			<li key={index} className="text-gray-400 md:whitespace-nowrap">{crumb.name}</li> :
			<li className="flex h-5 items-center" key={index}>
				<Link className="link text-blue-300 md:whitespace-nowrap" href={`${SITE_ROOT}${crumb.path}`}>{crumb.name}</Link>
				<ChevronRightIcon height={20}/>
			</li>
	)
	return <>
		<>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd(SITE_ROOT, crumbs)) }}
            />
            {!hide && <ol className='flex items-center absolute z-10 p-4'>{breadCrumbs}</ol>}
		</>
	</>
}

export function breadCrumbJsonLd(
    baseUrl: string,
    breadCrumbs: BreadCrumb[]
){
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadCrumbs.map((crumb, index)=>{
            return{
                "@type": "ListItem",
                "position": index+1,
                "name": crumb.name,
                "item": `${baseUrl}${crumb.path}`
            }
        })
    }
}

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