'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Coupon from '../../components/checkout/coupon'
import { useRouter } from 'next/navigation';
import Cart from '@/app/[lang]/components/cart/summary';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { FormField, FormGroup } from '@/app/[lang]/components/forms';
import {
    getAssemblyCost,
    getCardType,
    getDiscount,
    getShippingCost,
    getSubTotal,
    getTax,
    getTotal,
    //getDiscount
} from '@/utils/calc'

import { CartWithItems, CustomerInfo, OrderInfo, PaymentInfo, ShippingInfo } from '@/types';
import OrderCostSummary from './costSummary';
import { createOrder } from '@/app/actions';
import { toast } from 'react-toastify';
import { paymentInfoEvent, purchaseEvent } from '@/utils/analytics';
import { setCart } from '@/utils/leads/client';

const addressFields: FormField[] = [
    { name: 'street_1', label: 'Dirección', inputType: 'text' },
    { name: 'street_2', label: 'Detalle adicional', inputType: 'text' },
    { name: 'city', label: 'Ciudad', inputType: 'text' },
    {
        name: 'state', label: 'Provincia', inputType: 'select', options: {
            'panama_ciudad': 'Panamá Ciudad',
            'panama_otro': 'Otra Ciudad',
            'colon': 'Colón',
            'darien': 'Darién',
            'cocle': 'Coclé',
            'veraguas': 'Veraguas',
            'los_santos': 'Los Santos',
            'herrera': 'Herrera',
            'chiriqui': 'Chiriquí',
            'bocas_del_toro': 'Bocas del Toro',
            'san_blas': 'San Blas'
        }
    },
    { name: 'zip', label: 'Código Postal', inputType: 'number' },
    { name: 'country', label: 'País', inputType: 'text' }
]
const assemblyOptions = [
    'panama_ciudad',
    'panama_otro',
    'colon'
]

const emptyCustomer = {
    full_name: "",
    phone_number: "",
    email: ""
} as CustomerInfo
const emptyAddress = {
    street_1: "",
    street_2: "",
    city: "",
    state: "panama_ciudad",
    zip: "00000",
    country: "panama"
} as ShippingInfo
const emptyPayment = {
    name: "",
    ccNumber: "",
    ccExp: "",
    cvv: ""
} as PaymentInfo
const emptyOrder = {
    subtotal: 0,
    discount: 0,
    tax: 0,
    shipping: false,
    shippingFee: 0,
    assembly: false,
    assemblyFee: 0,
    total: 0,
    coupon: '',
    //referredBy: null,
    source: 'ecommerce',
    paymentMethod: 'unknown',
    cartId: '',
    leadId: '',
    loggedIn: false
} as OrderInfo

export default function CheckoutForm({ user, cart, cartId, leadId }: {
    user: any,
    cart: CartWithItems,
    cartId?: string,
    leadId?: string
}) {
    const newCustomer = user ? { ...emptyCustomer, email: user?.email, full_name: user?.name } : emptyCustomer
    const [customer, setCustomer] = useState(newCustomer)
    const [shipping, setShipping] = useState(emptyAddress)
    const [billing, setBilling] = useState(emptyAddress)
    const [payment, setPayment] = useState(emptyPayment)
    const [order, setOrder] = useState(emptyOrder)
    const [showSummary, setShowSummary] = useState(false)
    const [discount, setDiscount] = useState(0)
    const subtotal = getSubTotal(Object.values(cart.cartItems))
    const shippingFee = getShippingCost(Object.values(cart.cartItems), shipping.state as any)
    const assemblyFee = order.assembly ? getAssemblyCost(Object.values(cart.cartItems)) : 0
    const tax = getTax(subtotal, discount, shippingFee, assemblyFee)
    const total = getTotal(subtotal, discount, shippingFee, assemblyFee, tax)
    const [submitting, setSubmitting] = useState(false)
    const [checked, setChecked] = useState(false)
    const router = useRouter()

    const calcDiscount = async (couponCode: string) => {
        const discount = await getDiscount(cart.cartItems, couponCode)
        setDiscount(discount)
        setOrder({ ...order, coupon: couponCode })
    }

    const [steps, setSteps] = useState({
        1: { done: false, hidden: false },
        2: { done: false, hidden: true },
        3: { done: false, hidden: true },
        4: { done: false, hidden: true },
        5: {}
    })

    const [sameAsShippingSet, setSameAsShippingSet] = useState(false);

    const sameAsShipping = useCallback((ev: { target: { checked: any; }; }) => {
        if(ev.target.checked){
            setChecked(true)
            const optional = { street_2: true };
            ev.target.checked && setBilling(shipping);
            Object.entries(shipping).every(e => e[1] || e[0] in optional ) && setSteps({
                ...steps,
                [3]:{...steps[3], done:true, hidden: true}, 
                [4]:{...steps[4], hidden: false}
            });
        } else {
            setChecked(false);
            setBilling(emptyAddress);
        }
    }, [shipping, steps]);
    
    
    useEffect(() => {
        if (steps[2].done && !sameAsShippingSet) {
            sameAsShipping({ target: { checked: true } });
            setSameAsShippingSet(true);
        }
    }, [steps, sameAsShippingSet, sameAsShipping]);


    const submitCheckout = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        paymentInfoEvent(getCardType(payment.ccNumber), leadId)
        setSubmitting(true)
        try {
            const orderInfo = { 
                ...order,
                subtotal,
                discount,
                tax,
                shippingFee,
                assemblyFee,
                total,
                cartId: cartId || '', 
                leadId: leadId || '' 
            }
            const {orderId, newCartId, sentEmail} = await toast.promise(createOrder({
                orderInfo: orderInfo,
                customerInfo: customer,
                shippingInfo: shipping,
                billingInfo: billing,
                paymentInfo: payment
            }), {
                pending: 'Submitting order',
                success: 'Congratulations',
                error: {
                    render({data}: {data: Error}){
                    // When the promise reject, data will contains the error
                    return data.message
                    }
                }
            })
            if(!sentEmail) toast.warning('Failed to send confirmation email')
            setCart(String(newCartId))
            await purchaseEvent({
                id: orderId,
                email: customer.email,
                ...order
            }, cart.cartItems)
            setSubmitting(false)
            console.info('The order has been created succesfully with id: ', orderId)
            router.push(`/orders/confirmation?id=${orderId}`)
        } catch (error) {
            setSubmitting(false)
            console.error('Error creating order', error)
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-5">

            <form onSubmit={submitCheckout}>
                <FormGroup
                    step={1}
                    title='Información de contacto'
                    item={customer}
                    setItem={setCustomer}
                    steps={steps}
                    setSteps={setSteps}
                    fields={[
                        { name: 'full_name', label: 'Nombre Completo', inputType: 'text', required: true },
                        { name: 'phone_number', label: 'Número de teléfono', inputType: 'tel', required: true },
                        { name: 'email', label: 'Correo electrónico', inputType: 'email', required: true}
                    ]}
                >
                    <div className="inline">
                        {user ? <span className="pr-2 text-gray-400">{`autenticado como ${user.email}`}</span> : <>
                        <span className="pr-2">Ya tienes una cuenta?</span>
                        <Link id="login" className='text-blue-400 hover:underline' scroll={false} passHref href="/login?redirect=checkout">Inicia sesión</Link></>}
                    </div>
                </FormGroup>
                <FormGroup
                    step={2}
                    title='Dirección de envío'
                    item={shipping}
                    setItem={setShipping}
                    steps={steps}
                    setSteps={setSteps}
                    fields={addressFields}
                    optional={{ street_2: true }}
                />
                <FormGroup
                    step={3}
                    title='Dirección de facturación'
                    item={billing}
                    setItem={setBilling}
                    steps={steps}
                    setSteps={setSteps}
                    fields={addressFields}
                    optional={{ street_2: true }}
                >
                    <div className="inline">
                        <span className="pr-2 text-l">Igual a la dirección de envío?</span>
                        <input id="same_as_shipping" type="checkbox" onChange={sameAsShipping} defaultChecked value={checked.toString()} />
                    </div>
                </FormGroup>
                <FormGroup
                    step={4}
                    title='Información del pagos'
                    item={payment}
                    setItem={setPayment}
                    steps={steps}
                    setSteps={setSteps}
                    fields={[
                        { name: 'name', label: 'Nombre', inputType: 'text' },
                        { name: 'ccNumber', label: 'Número de la tarjeta', inputType: 'ccNum' },
                        { name: 'ccExp', label: 'Fecha de Expiración', inputType: 'ccExp' },
                        { name: 'cvv', label: 'Código de seguridad', inputType: 'password' }
                    ]}
                />
                <div className='pt-5 flex justify-end'>
                    <button disabled={submitting} id="checkout-btn" type='submit' className="w-full md:w-auto md:px-12 text-2xl uppercase text-white py-2 bg-gray-400">
                        Checkout
                    </button>
                </div>
            </form>

            <div className="order-first md:order-last pt-3">
                <div className='border border-gray-200'>
                    <div className="flex justify-between py-2 px-2 md:px-5">
                        <button onClick={() => setShowSummary(!showSummary)} className="flex w-full justify-between items-center">
                            <div>Detalles de la orden</div>
                            <div className='h-full w-5'>{showSummary ? <ChevronDownIcon /> : <ChevronRightIcon />}</div>
                        </button>
                    </div>
                    <div className='border-t border-gray-200'>
                        <div className={showSummary ? 'block' : 'hidden'}>
                            <Cart cartWithItems={cart} />
                        </div>
                        <OrderCostSummary
                            subtotal={subtotal}
                            discount={discount}
                            tax={tax}
                            shippingFee={shippingFee}
                            assemblyFee={assemblyFee}
                            total={total}
                        />
                    </div>
                </div>

                <div className='border border-gray-200 p-3 mt-5'>
                    <div className="grid grid-cols-3 gap-4 pb-2">
                        <div className="col-span-2">
                            {
                                assemblyOptions.includes(shipping.state) ?
                                    <label className="text-gray-700 text-sm mb-2 inline">Desea agregar Ensamblaje?</label> :
                                    <label className="text-red-400 text-sm mb-2 inline">No ofrecemos ensamblaje en {shipping.state}</label>

                            }
                            <input disabled={!assemblyOptions.includes(shipping.state)} onChange={(ev)=> setOrder({ ...order, assembly: !order.assembly })} name='assembly' checked={order.assembly} className="inline ml-3" type="checkbox" />
                        </div>
                    </div>
                </div>

                <Coupon setCoupon={(val: string) => calcDiscount(val)} coupon={order.coupon} />

            </div>
        </div>
    )
}
