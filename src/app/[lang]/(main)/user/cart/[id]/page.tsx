import SwapCartDialog from '@/app/[lang]/components/swapCartDialog'
import { getServerCart, getServerLead } from '@/utils/leads/server'
import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'

export default async function Page({ 
    params,
    searchParams 
  }: { 
    params: { id: string, lang:string }
    searchParams: { redirect?: string }
  }) {
    const userCart = params.id
    const leadIds = await getServerLead()
    const leadId = leadIds[0] || leadIds[1]
    const currentCart = await getServerCart()
    if(!leadId || !currentCart) {
        toast.error('Error swapping carts')
        return redirect(searchParams.redirect ? searchParams.redirect : '/login')
    } 
    return (
        <SwapCartDialog currentCartId={currentCart} newCartId={userCart} leadId={leadId}/>
    )
}