'use client'

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { createLeadAndCart, getServerLead, setServerLead } from './server';
import { CART_COOKIE, LEAD_COOKIE } from './constants';

export const generateFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    console.log("Fingerprint:", result);
    return result.visitorId
};

export const setClientLead = (leadId: string) => {
    if (typeof window !== 'undefined') localStorage.setItem(LEAD_COOKIE, leadId)
}

export const getClientLead = () => {
    if (typeof window !== 'undefined') return localStorage.getItem(LEAD_COOKIE)
    return undefined
}

let mounted = false
export const getOrCreateLead = async(
    visitorId: string | null | undefined
) => {
    const [cookiesId, headersId] = await getServerLead()

    console.log('cookie HEAD ', cookiesId, headersId)
    if(!cookiesId && !mounted) {
        mounted = true
        if (typeof window !== 'undefined') {
            let leadId = getClientLead()
            //let cartId = localStorage.getItem(CART_COOKIE)
            console.log('leadId: ', leadId)
            //console.log('cartId: ', cartId)
            if(!leadId) {
                const fingerprint = await generateFingerprint()
                console.log('fingerprint: ', fingerprint)
                const response = await createLeadAndCart(fingerprint)
                console.log('response: ', response)
                leadId = response.leadId
                //cartId = response.cartId
                setClientLead(leadId)
                //localStorage.setItem(CART_COOKIE, cartId)
            }
            setServerLead(leadId)
            //setCookie(CART_COOKIE, cartId || '')
        }
    }
    console.log('visitorId: ', visitorId)
}
