import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { cookies } from 'next/headers'

let locales: string[] = ["en", "es"];


function getLocale(request: NextRequest): string {
  const req = {
    headers: { "accept-language": request.headers.get("accept-language") || "en" },
  };
  let languages = new Negotiator(req).languages();
  let defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname, search } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => {
    return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
  });
  let currentLocaleVal = request.cookies.get('locale');
  const userSelectedLocale = search.split("?lang=")[1];
  const isValidLocale = userSelectedLocale
    ? locales.find((x) => x === userSelectedLocale)
    : true;
  const currentLocale = isValidLocale ? locales.find((x) => x !== userSelectedLocale) : null;
  if (userSelectedLocale && currentLocale) {
    const pathWithNoLocale = pathname.split(`/${currentLocale}/`);
    request.nextUrl.pathname = pathWithNoLocale[1]
      ? `/${userSelectedLocale}/${pathWithNoLocale[1]}`
      : `/${userSelectedLocale}`;
    request.nextUrl.search = "";
    const response = NextResponse.redirect(request.nextUrl);
    response.cookies.set("locale", userSelectedLocale);
    return response;
  }
  if (pathnameHasLocale) return;


  // Redirect if there is no locale
  const locale = currentLocaleVal && currentLocaleVal.value && currentLocaleVal.value !== '' ? currentLocaleVal.value : getLocale(request);
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
