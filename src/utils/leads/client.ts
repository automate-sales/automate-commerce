'use client'

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { createLeadAndCart, getCartId, getServerCartCookie, getServerLead, setServerCart, setServerLead } from './server';
import { LEAD_COOKIE } from './constants';

export const getLocalStorageItem =(key: string) => {
    if (typeof window !== 'undefined') return localStorage.getItem(key)
    return undefined
}
export const setLocalStorageItem = (key: string, value: string) => {
    if (typeof window !== 'undefined') localStorage.setItem(key, value)
}
export const generateFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    console.log("Fingerprint:", result);
    return result.visitorId
};


export const setClientLead = (leadId: string) => {
   return setLocalStorageItem(LEAD_COOKIE, leadId)
}
export const getClientLead = () => {
    return getLocalStorageItem(LEAD_COOKIE)
}
export const getLead = async () => {
    const [cookiesId, headersId] = await getServerLead()
    return cookiesId || getClientLead() || headersId
}
export const setLead = (leadId: string) => {
    setClientLead(leadId)
    setServerLead(leadId)
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


let mounted = false
export const getOrCreateLead = async() => {
    try {
        const [cookiesId, headersId] = await getServerLead()
        if(!mounted && !cookiesId){
            mounted = true
            // for user of an incognito browser, or browser with cookies blocked, it should use the fingerprint to 
            console.log('NO COOKIES ID')
            // in cdase the user has all cookies blocked
            const localStorageId = getClientLead()
            if (!localStorageId) {
                const fingerprint = await generateFingerprint()
                const response = await createLeadAndCart(fingerprint, headersId)
                setLead(response.leadId)
                setCart(response.cartId)
                // in case setLead fails to set the lead on the server, it should return the leadId
                return response.leadId
            }
            return localStorageId
        }
        console.log('COOKIES ID', cookiesId)
        return cookiesId
    } catch (err) {
        console.error('Error getting or creating lead', err)
    }
}
