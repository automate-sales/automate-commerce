'use client'

import { getOrCreateLead } from "@/utils/leads/client";
import { useEffect, useState } from "react";

export default function LeadGen(){
    const [cookieSettings, setCookieSettings] = useState({
        doNotTrack: false,
        cookiesEnabled: false,
        localStorageEnabled: false,
        sessionCookiesEnabled: false,
        isBot: false
    })
    useEffect(() => {
        const doLeadGen = async()=> {
            const settings = await getOrCreateLead()
            settings && setCookieSettings(settings)
            const enableCookiesMsg = 'Enable cookies in your browser for a better exeprience in this site'
            if( !settings?.cookiesEnabled || !settings?.sessionCookiesEnabled || !settings?.localStorageEnabled ) console.log(enableCookiesMsg)
        }
        doLeadGen()
    }, []);
    return <></>
}