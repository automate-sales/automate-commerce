'use client'

import { signUpEvent } from "@/utils/analytics";
import { getLead } from "@/utils/leads/client";
import { useEffect } from "react";

export default function SignupEvent() {
    useEffect(() => {
        const getFirstLead = async () => {
            const lead = await getLead()
            if (lead) signUpEvent(lead, 'email')
        }
        getFirstLead()
    }, [])
    return <></>
}