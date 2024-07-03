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
    console.log("Fingerprint:", result);
    return result.visitorId
};


export const setClientLead = (leadId: string) => {
    try {
        return setLocalStorageItem(LEAD_COOKIE, leadId)
    } catch (err) {
        console.error('Error setting client lead', err)
        return false
    }
}
export const getClientLead = () => {
    return getLocalStorageItem(LEAD_COOKIE)
}
export const getLead = async () => {
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
    const cookiesId = await getServerCartCookie()
    if(cookiesId) return cookiesId
    const localStorageCart = getClientCart()
    if(localStorageCart) return localStorageCart
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
        return {
            doNotTrack: dnt === "1" || dnt === "yes" || dnt === "true",
            cookiesEnabled: navigator.cookieEnabled,
            localStorageEnabled: isLocalStorageEnabled(),
            sessionCookiesEnabled: await areCookiesEnabled(),
            isBot: await isBot()
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
        const [cookiesId, headersId] = await getServerLead()
        const isActiveCookies = cookiesId && await isLeadActive(cookiesId)
        
        if(isActiveCookies) setCart(await getCartId(cookiesId))
        
        const cookieSettings = await getCookiSettings()
        const hid = new URLSearchParams(window.location.search).get('hid')
        console.log('COOKIE SETTINGS', cookieSettings)
        console.log('HID', hid)
        if(!mounted && !isActiveCookies && !hid){
            mounted = true
            // for user of an incognito browser, or browser with cookies blocked, it should use the fingerprint to 
            console.log('NO ACTIVE LEAD ID IN COOKIES')
            // in cdase the user has all cookies blocked
            const localStorageId = getClientLead()
            if (!localStorageId && !cookieSettings?.isBot || !isActiveCookies) {
                console.log('NO LOCAL STORAGE ID')
                const fingerprint = await generateFingerprint()
                const response = await findOrCreateLeadWithCart(fingerprint)
                setLead(response.leadId)
                setCart(response.cartId)

                // checks if all cookies disabled
                if(!await getCookie(LEAD_COOKIE)){
                    //const searchParams = useSearchParams()
                    //console.log('SEARCH PARAMS ', searchParams)
                    const params = new URLSearchParams()
                    // set encrypted value in the URL
                    // const encryptedHid = await encryptUuid(response.leadId)
                    params.set('hid', response.leadId || '')
                    
                    window.history.pushState(null, '', `?${params.toString()}`)
                }
            }
        }
        console.log('LEAD ID', await getLead())
        return cookieSettings
    } catch (err) {
        console.error('Error getting or creating lead', err)
    }
}
