import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
//import { cookies } from 'next/headers'
import locales from "./utils/locales";
//import { createId } from '@paralleldrive/cuid2';

const getLocale =(request: NextRequest): string=> {
  console.log(request.headers.get("accept-language"))
  let headers = { "accept-language": request.headers.get("accept-language") || "en" }
  let languages = new Negotiator({ headers }).languages()
  let defaultLocale = 'en'
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

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { href, pathname, search } = request.nextUrl;

  const currentUrl = href
  const previousUrl = request.headers.get('referer');

  const requestHeaders = new Headers(request.headers)
  //!requestHeaders.get('x-leadid') && requestHeaders.set('x-leadid', createId() )


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
  
  
  if (pathHasLocale(pathname) && !hasHid(previousUrl) || pathHasLocale(pathname) && hasHid(currentUrl)) {
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    return response
  }

  let cookiesLocale = request.cookies.get('locale')?.value;
  const locale = cookiesLocale ? cookiesLocale : getLocale(request);
  if(!pathHasLocale(pathname)) request.nextUrl.pathname = `/${locale}${pathname}`;


  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set("locale", locale)
  
  return response;
}


export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|path|images|icons|videos).*)",
    "/",
  ],
};
