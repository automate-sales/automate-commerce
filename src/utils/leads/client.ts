'use client'

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { deleteCookie, getCartId, getCookie, getServerCartCookie, getServerLead, isBot, isLeadActive, setCookie, setServerCart, setServerLead } from './server';
import { LEAD_COOKIE } from './constants';
import { findOrCreateLeadWithCart } from '@/app/actions';

export const getLocalStorageItem =(key: string) => {
try {
        if (typeof window !== 'undefined') return localStorage.getItem(key)
        return undefined
    } catch (err) {
        console.error('Error getting local storage item', err)
        return undefined
    }
}
export const setLocalStorageItem = (key: string, value: string) => {
    try {
        if (typeof window !== 'undefined') return localStorage.setItem(key, value)
    } catch (err) {
        console.error('Error setting local storage item', err)
        return false
    }
}

export const getSessionStorageItem = (key: string) => {
    try {
        if (typeof window !== 'undefined') return sessionStorage.getItem(key)
        return undefined
    } catch (err) {
        console.error('Error getting session storage item', err)
        return undefined
    }
}

export const setSessionStorageItem = (key: string, value: string) => {
    try {
        if (typeof window !== 'undefined') return sessionStorage.setItem(key, value)
    } catch (err) {
        console.error('Error setting session storage item', err)
        return false
    }
}

export const isLocalStorageEnabled =()=> {
    try {
        localStorage.setItem('isEnabled', 'yes');
        if (localStorage.getItem('isEnabled') === 'yes') {
            localStorage.removeItem('isEnabled');
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

export const generateFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId
};


export const setClientLead = (leadId: string) => {
    try {
        setLocalStorageItem(LEAD_COOKIE, leadId)
        setSessionStorageItem(LEAD_COOKIE, leadId)
        return true
    } catch (err) {
        console.error('Error setting client lead', err)
        return false
    }
}
export const getClientLead = () => {
    return getLocalStorageItem(LEAD_COOKIE) || getSessionStorageItem(LEAD_COOKIE)
}
export const getLead = async () => {
    // perhaps header Ids are not necessary..
    const [cookiesId, headersId] = await getServerLead()
    return cookiesId || getClientLead() || headersId
}
export const setLead = async (leadId: string) => {
    setClientLead(leadId)
    await setServerLead(leadId)
}

export const getClientCart = () => {
    return getLocalStorageItem('cart')
}
export const setClientCart = (cartId: string) => {
    return setLocalStorageItem('cart', cartId)
}
export const getCart = async () => {
    const leadId = await getLead()
    return leadId && await getCartId(leadId)
}
export const setCart = (cartId: string) => {
    setClientCart(cartId)
    setServerCart(cartId)
}
 
export const getCookiSettings = async(): Promise<{
    doNotTrack: boolean,
    cookiesEnabled: boolean,
    localStorageEnabled: boolean,
    sessionCookiesEnabled: boolean,
    isBot: boolean 
} | undefined>=> {
    if (typeof window !== 'undefined') {
        const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        const bot = await isBot()
        return {
            doNotTrack: dnt === "1" || dnt === "yes" || dnt === "true",
            cookiesEnabled: navigator.cookieEnabled,
            localStorageEnabled: isLocalStorageEnabled(),
            sessionCookiesEnabled: true,
            isBot: bot
        }
    }
    return undefined
}

export const areCookiesEnabled = async() => {
    try {
      await setCookie('isEnabled', 'yes')
      if (await getCookie('isEnabled') === 'yes') {
        await deleteCookie('isEnabled')
        return true
      } else {
        return false
      }
    }
    catch (e) {
      return false
    }
}

let mounted = false
export const getOrCreateLead = async() => {
    try {
        // RETREIVE ULI
        // 1. get the lead id from server or client
        const leadId = await getLead() || new URLSearchParams(window.location.search).get('hid')
        // do this only once per session?
        // 2. check if the lead is active and get the active cart id (only has to be don once per session)  
        const activeLeadId = leadId && await isLeadActive(leadId) ? leadId : undefined
        // if the lead is inactive the should change the leadID to the active leadId... this needs to be added to the swapLeads function 
        // perhaps cart can be fecthed dynamically with lead id ..
        activeLeadId && setCart(await getCartId(activeLeadId))
        // 3. get the users cookie settings
        const cookieSettings = await getCookiSettings()
        // Make sure the visitor without a lead ID is not a bot 
        if (!activeLeadId && !cookieSettings?.isBot) {
            // create a new browser fingerprint
            const fingerprint = await generateFingerprint()
            // perhaps only join by fingerprint if cookie settings match
            const response = await findOrCreateLeadWithCart(fingerprint)
            setLead(response.leadId)
            setCart(response.cartId)

            // checks if all cookies disabled
            if(!await getCookie(LEAD_COOKIE)){
                // add cookiesBlocked in the leads cookie settings 
                console.log('ALL COOKIES DISABLED')
                if(cookieSettings) cookieSettings.sessionCookiesEnabled = false
                // perhaps ignore this route and simply use sessionStorage?
                const params = new URLSearchParams()
                // set encrypted value in the URL
                // const encryptedHid = await encryptUuid(response.leadId)
                params.set('hid', response.leadId || '')
                window.history.pushState(null, '', `?${params.toString()}`)
            }
        }
        return cookieSettings
    } catch (err) {
        console.error('Error getting or creating lead', err)
    }
}
