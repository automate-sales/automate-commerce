/* 'use client'

import { navigate } from "@/app/actions"
import { useEffect } from "react"
import { toast } from "react-toastify"

export default function Session({username, redirectPath='/'}: {username?: string | null | undefined, redirectPath: string }){
    useEffect   (() => {
        if(username){
            toast.success(`Welcome back ${username}`)
            navigate('/en')
            console.log('NAVIAGTED BRO ')
        }
    }, [])
    return <></>
} */