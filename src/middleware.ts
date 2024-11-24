import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
//import { cookies } from 'next/headers'
import locales from "./utils/locales";
//import { createId } from '@paralleldrive/cuid2';
const defaultLocale = 'en'

const getLocale =(request: NextRequest): string=> {
  console.log(request.headers.get("accept-language"))
  let headers = { "accept-language": request.headers.get("accept-language") || "en" }
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

const hasHid =(urlString: string | undefined | null): boolean => {
  const url = urlString ? new URL(urlString) : null
  if(url) {
    const hid = url.searchParams.get('hid') || ''
    return url.searchParams.has('hid') && hid.length > 1
  }
  return false
}

const pathHasLocale =(path: string)=> {
  return locales.some((locale) => {return path.startsWith(`/${locale}/`) || path === `/${locale}` })
};

export async function middleware(request: NextRequest) {
  try {
    const { href, pathname, search } = request.nextUrl;
    const currentUrl = href
    const previousUrl = request.headers.get('referer');

    const requestHeaders = new Headers(request.headers)

    const ip = request.headers.get('x-forwarded-for') || request.ip || '127.0.0.1';
    const host = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const geoUrl = `${protocol}://${host}/api/geo`
    console.log('GEOURL ', geoUrl)
    
    const geoResponse = await fetch(geoUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip }),
    })
    const geoData = await geoResponse.json()
    console.log('GEO ', geoData)

    // get hid from previous url and set it in headers and search params
    if (previousUrl) {
        const previousUrlObj = new URL(previousUrl);
        if (previousUrlObj.searchParams.has('hid')) {
          const hidValue = previousUrlObj.searchParams.get('hid');
          // set encrypted value in headers and search params
          // const decryptedHid = await decryptUuid(hidValue);
          hidValue && request.nextUrl.searchParams.set('hid', hidValue);
          hidValue && requestHeaders.set('x-leadid', hidValue )
        }
    }
    
    // if the path has a locale and the previous url does not have a hid or the current url has a hid
    if (pathHasLocale(pathname) && !hasHid(previousUrl) || pathHasLocale(pathname) && hasHid(currentUrl)) {
      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
      if(geoData){
        response.headers.set('x-country', geoData.country)
        response.headers.set('x-city', geoData.city)
      }
      return response
    }

    // get locale from the previous url
    const previousPath = previousUrl ? new URL(previousUrl).pathname : '';
    const previousLocale = pathHasLocale(previousPath) && previousPath.split('/')[1];
    const cookiesLocale = request.cookies.get('locale')?.value;
    const browserLocale = getLocale(request);
    const locale = previousLocale || cookiesLocale || browserLocale || defaultLocale;
    if(!pathHasLocale(pathname)) request.nextUrl.pathname = `/${locale}${pathname}`;

    const response = NextResponse.redirect(request.nextUrl);
    response.cookies.set("locale", locale || 'en')
    if(geoData){
      response.headers.set('x-country', geoData.country)
      response.headers.set('x-city', geoData.city)
    }
    
    return response;
  } catch (err: any) {
    if (err.code === 'ECONNRESET' || err.code === 'ECONNABORTED') {
      console.warn('Connection reset by peer:', err);
      return new NextResponse('Connection aborted', { status: 400 });
    } else {
      console.error('Unhandled middleware error:', err);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
}


export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|path|images|icons|videos).*)",
    "/",
  ],
};
