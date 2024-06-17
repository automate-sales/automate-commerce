'use client'

import { getOrCreateLead } from "@/utils/leads/client";
import { useEffect } from "react";

export default function LeadGen(){
    useEffect(() => {
        getOrCreateLead()
    }, []);
    return <></>
}