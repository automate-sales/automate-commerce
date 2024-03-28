'use client'

import { createCookie, createLeadAndCart } from "../actions"

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useEffect } from "react";

const generateFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    console.log("Fingerprint:", result);
    return result.visitorId
};

let mounted = false
const getOrCreateLead = async(
    visitorId: string | null | undefined
) => {
    if(!visitorId && !mounted) {
        mounted = true
        if (typeof window !== 'undefined') {
            let leadId = localStorage.getItem('ergo_lead_id')
            let cartId = localStorage.getItem('ergo_cart_id')
            console.log('leadId: ', leadId)
            console.log('cartId: ', cartId)
            if(!leadId) {
                const fingerprint = await generateFingerprint()
                console.log('fingerprint: ', fingerprint)
                const response = await createLeadAndCart(fingerprint)
                console.log('response: ', response)
                leadId = response.leadId
                cartId = response.cartId
                localStorage.setItem('ergo_lead_id', leadId)
                localStorage.setItem('ergo_cart_id', cartId)
            }
            createCookie('ergo_lead_id', leadId)
            createCookie('ergo_cart_id', cartId || '')
        }
    }
    console.log('visitorId: ', visitorId)
}

export default function LeadGen({visitorId}: {visitorId: string | null | undefined}){
    useEffect(() => {
        getOrCreateLead(visitorId)
    }, [visitorId]);
    return <></>
}