import { cookies } from 'next/headers'
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { createCookie, createLeadAndCart } from "../app/actions"

export const getServerVisitorInfo =(source: string)=> {
  const cookieStore = cookies()
  const leadId = cookieStore.get(`${source}_lead_id`)?.value
  const cartId = cookieStore.get(`${source}_cart_id`)?.value
  return {leadId, cartId}
}

export const getClientVisitorInfo =(source: string)=> {
    'use client'

    let leadId, cartId
    if (typeof window !== 'undefined') {
        leadId = localStorage.getItem(`${source}_lead_id`)
        cartId = localStorage.getItem(`${source}_cart_id`)
    }
    return {leadId, cartId}
}

export const generateFingerprint = async () => {
    'use client'

    const fp = await FingerprintJS.load();
    const result = await fp.get();
    console.log("Fingerprint:", result);
    return result.visitorId
};


export const getOrCreateLead = async(
    source: string,
    leadId?: string | null | undefined,
    cartId?: string | null | undefined
) => {
    'use client'

    let mounted = false
    if(!leadId && !mounted) {
        mounted = true
        const clientData = getClientVisitorInfo(source)
        if(!clientData.leadId) {
            const fingerprint = await generateFingerprint()
            const response = await createLeadAndCart(fingerprint)
            leadId = response.leadId
            cartId = response.cartId
            localStorage.setItem(`${source}_lead_id`, leadId)
            localStorage.setItem(`${source}_cart_id`, cartId)
        }
        createCookie(`${source}_lead_id`, leadId || '')
        createCookie(`${source}_cart_id`, cartId || '')
    }
    console.log('visitorId: ', leadId)
}