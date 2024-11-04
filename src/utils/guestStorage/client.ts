import { getCookie, setCookie } from "./server"

export const getLocalStorageItem = (key: string) => {
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

export const getItem = async (key: string, val?: string) => {
    return val ||
        await getCookie(key) ||
        getLocalStorageItem(key) ||
        getSessionStorageItem(key)
}

export const setItem = async (key: string, val: string) => {
    return await setCookie(key, val) &&
        setLocalStorageItem(key, val) &&
        setSessionStorageItem(key, val)
}

