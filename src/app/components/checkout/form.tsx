'use client'

import { useState } from 'react'
import Link from 'next/link'
import Coupon from '../../components/checkout/coupon'
import { useRouter } from 'next/navigation';
import Cart from '@/app/components/cart/summary';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { FormField, FormGroup } from '@/app/components/forms';
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

import { CartWithItems } from '@/types';
import OrderCostSummary from './costSummary';
import { get } from 'http';
import { getCoupon } from '@/app/actions';

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
}
const emptyAddress = {
    street_1: "",
    street_2: "",
    city: "",
    state: "panama_ciudad",
    zip: "00000",
    country: "panama"
}
const emptyPayment = {
    name: "",
    ccNumber: "",
    ccExp: "",
    cvv: ""
}
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
    paymentMethod: '',
    cartId: '',
    leadId: '',
    loggedIn: false
}

export default function CheckoutForm({ user, cart, cartId, leadId }: {
    user: any,
    cart: CartWithItems,
    cartId: string,
    leadId: string
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
    const router = useRouter()

    const calcDiscount = async (couponCode: string) => {
        const discount = await getDiscount(Object.values(cart.cartItems), couponCode)
        setDiscount(discount)
        setOrder({ ...order, coupon: couponCode })
    }

    const sameAsShipping = (ev: { target: { checked: boolean; }; }) => {
        ev.target.checked && setBilling(shipping)
        Object.entries(shipping).every(e => e[1]) && setSteps({
            ...steps,
            [3]: { ...steps[3], done: true },
            [4]: { ...steps[4], hidden: false }
        })
    }

    const [steps, setSteps] = useState({
        1: { done: false, hidden: false },
        2: { done: false, hidden: true },
        3: { done: false, hidden: true },
        4: { done: false, hidden: true },
        5: {}
    })

    const submitCheckout = async (ev) => {
        ev.preventDefault()
        // add the leadId and cartId to the order
        const orderData = {
            ...order,
            ...customer,
            shippingAddress: shipping,
            billingAddress: billing,
            subtotal: subtotal,
            discount: discount,
            tax: tax,
            shippingFee: shippingFee,
            assemblyFee: assemblyFee,
            total: total,
            cartId: cartId,
            leadId: leadId,
            paymentMethod: getCardType(payment.ccNumber),
            source: 'ecommerce',
            loggedIn: user ? true : false
        }
        try {
            console.log({ payment: payment, order: orderData })
            console.log('¡Gracias por tu compra!')
            const res = '1234'
            router.push(`/order_confirmation?order=${res}`)
        }
        catch (err) {
            console.log(err)
            console.error('Hubo un error al procesar tu pedido')
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
                        <span className="pr-2 text-xl">Igual a la dirección de envío?</span>
                        <input id="same_as_shipping" type="checkbox" onChange={sameAsShipping} />
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
                    <button id="checkout-btn" type='submit' className="w-full md:w-auto md:px-12 link text-2xl uppercase text-white py-2 bg-main">
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