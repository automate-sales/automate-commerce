import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
//import { cookies } from 'next/headers'
import locales from "./utils/locales";

function getLocale(request: NextRequest): string {
  console.log(request.headers.get("accept-language"))
  let headers = { "accept-language": request.headers.get("accept-language") || "en" }
  let languages = new Negotiator({ headers }).languages()
  let defaultLocale = 'en'
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname, search } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => {
    return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
  });
  if (pathnameHasLocale) return;

  let cookiesLocale = request.cookies.get('locale')?.value;
  console.log('cookiesLocale', cookiesLocale)
  const locale = cookiesLocale ? cookiesLocale : getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
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
