'use client'

import { pageview } from "@/utils/analytics"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Identify, init } from "@/utils/analytics/posthog"
import Script from "next/script"

init()

export default function Analytics({leadId}:{leadId: string}) {
    console.log('LEAD ID IN ANALYTICS ', leadId)
    const path = usePathname()
    useEffect(() => {
        Identify(leadId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        pageview(leadId)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [path])
    return (<>
    <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { 'user_id': '${leadId}' });
          `
        }
      </Script>
      <Script
        id='fb-pixel'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FB_PIXEL_ID});
          `,
        }}
      />
      {/* <Script
        id='twitter-pixel'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init', '${TWITTER_PIXEL_ID}');
          `,
        }}
      /> */}
    </>)
}