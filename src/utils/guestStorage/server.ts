import { cookies, headers } from 'next/headers'

export const getCookie = async (name: string) => {
    try {
      return cookies().get(name)?.value || undefined
    } catch (err) {
      console.error('Error getting cookie', err)
      return undefined
    }
}
  
export const setCookie = async(name: string, value: string)=> {
    try {
    return cookies().set({
        name: name,
        value: value,
        httpOnly: true
    })
    } catch (err: any) {
        console.error('Error setting cookie', err)
        return undefined
    }
}
  
export const deleteCookie = async(name: string)=> {
    try {
    return cookies().delete(name)
    } catch (err: any) {
    console.error('Error deleting cookie', err)
    return undefined
    }
}

export const getHeader = async (name: string) => {
    try {
      return headers().get(name) || undefined
    } catch (err) {
      console.error('Error getting header', err)
      return undefined
    }
}