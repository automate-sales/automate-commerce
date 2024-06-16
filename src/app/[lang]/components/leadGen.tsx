'use client'

import { getOrCreateLead } from "@/utils/leads/client";


import { useEffect } from "react";

export default function LeadGen({visitorId}: {visitorId: string | null | undefined}){
    useEffect(() => {
        getOrCreateLead(visitorId)
    }, [visitorId]);
    return <></>
}