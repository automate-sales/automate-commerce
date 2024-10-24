'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Coupon from '../../components/checkout/coupon'
import { useRouter } from 'next/navigation';
import Cart from '@/app/[lang]/components/cart/summary';
import { ChevronDownIcon, ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/16/solid';
import { FormField, FormGroup } from '@/app/[lang]/components/forms';
import {
    getAssemblyCost,
    getDiscount,
    getShippingCost,
    getSubTotal,
    getTax,
    getTotal
} from '@/utils/calc'

import { CartWithItems, CustomerInfo, OrderInfo, PaymentInfo, ShippingInfo } from '@/types';
import OrderCostSummary from './costSummary';
import { createOrder } from '@/app/actions';
import { toast } from 'react-toastify';
import { paymentInfoEvent, purchaseEvent } from '@/utils/analytics';
import { getLead, setCart } from '@/utils/leads/client';
import { getCartWithItemsByLead } from '@/utils/leads/server';

// Form Data Initial Values
const initialFormData = {
    customer: {
        full_name: '',
        phone_number: '',
        email: ''
    } as CustomerInfo,
    shipping: {
        street_1: '',
        street_2: '',
        city: '',
        state: undefined,
        zip: '00000',
        country: 'panama'
    } as ShippingInfo,
    billing: {
        street_1: '',
        street_2: '',
        city: '',
        state: undefined,
        zip: '00000',
        country: 'panama'
    } as ShippingInfo,
    payment: {
        name: '',
        ccNumber: '',
        ccExp: '',
        cvv: ''
    } as PaymentInfo,
    order: {
        subtotal: 0,
        discount: 0,
        shipping: false,
        shippingFee: 0,
        assembly: false,
        assemblyFee: 0,
        tax: 0,
        total: 0,
        coupon: '',
        source: 'ecommerce',
        paymentMethod: 'unknown',
        cartId: '',
        leadId: '',
        loggedIn: false
    } as OrderInfo,
    discount: 0,
    submitting: false,
    checked: false,
    sameAsShippingSet: false
};

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

const useCheckoutForm = (initialData: any) => {
    const [formData, setFormData] = useState(initialData);
    const [steps, setSteps] = useState({
        1: { done: false, hidden: false },
        2: { done: false, hidden: true },
        3: { done: false, hidden: true },
        4: { done: false, hidden: true }
    });

    const updateFormData = (key: string, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleBlur = (step: number, optionalFields: any = {}) => {
        const currentData = formData[Object.keys(formData)[step - 1]];
        if (Object.entries(currentData).every(([key, value]) => value || optionalFields[key])) {
            setSteps((prevSteps: any) => ({
                ...prevSteps,
                // if step is not last step
                [step]: { ...prevSteps[step], done: true, hidden: step == Object.keys(steps).length ? false : true},
                [step + 1]: { ...prevSteps[step + 1], hidden: false },
            }));
        }
    };
    return { formData, steps, setSteps, updateFormData, handleBlur };
}

export default function CheckoutForm({ leadID, cartWithItems, lang='en' }: {
    leadID?: string,
    cartWithItems?: CartWithItems | undefined | null
    user?: any,
    lang?: string 
}) {
    const router = useRouter();
    const [ leadId, setLeadId ] = useState(leadID)
    const [cart, setCart] = useState(cartWithItems)
    const cartId = cart?.id
    
    useEffect(() => {
        if(!cart){
            getLead().then((id) => {
                setLeadId(id)
                getCartWithItemsByLead(id).then((data) => {
                console.log('CART DATA: ', data)
                setCart(data)
                })
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { formData, steps, setSteps, updateFormData, handleBlur } = useCheckoutForm(initialFormData);
    
    const subtotal = cart && getSubTotal(Object.values(cart.cartItems));
    const shippingFee = cart && getShippingCost(Object.values(cart.cartItems), formData.shipping.state);
    const assemblyFee = cart && formData.order.assembly ? getAssemblyCost(Object.values(cart.cartItems)) : 0;
    const tax = subtotal && getTax(subtotal, formData.discount, shippingFee, assemblyFee);
    const total = subtotal && getTotal(subtotal, formData.discount, shippingFee, assemblyFee, tax);

    const calcDiscount = async (couponCode: string) => {
        const discount = cart && await getDiscount(cart.cartItems, couponCode);
        updateFormData('order', { ...formData.order, coupon: couponCode });
        updateFormData('discount', discount);
    };

    // order should only receive leadID nad should get tthe leads latest active cart
    const submitCheckout = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        updateFormData('submitting', true);
        try {
            const orderInfo = {
                ...formData.order,
                subtotal,
                discount: formData.discount,
                tax,
                shippingFee,
                assemblyFee,
                total,
                cartId: cartId || '',
                leadId: leadId || ''
            };
            const { orderId, newCartId, sentEmail } = await toast.promise(createOrder({
                orderInfo,
                customerInfo: formData.customer,
                shippingInfo: formData.shipping,
                billingInfo: formData.billing,
                paymentInfo: formData.payment
            }), {
                pending: 'Submitting order',
                success: 'Congratulations',
                error: {
                    render({ data }: { data: Error }) {
                        return data.message;
                    }
                }
            });
            if (!sentEmail) toast.warning('Failed to send confirmation email');
            //setCart({ ...cart, id: String(newCartId), status: 'active', leadId: leadId || null });
            setCart(undefined)
            cart && await purchaseEvent({
                id: orderId,
                email: formData.customer.email,
                ...formData.order
            }, cart.cartItems);
            updateFormData('submitting', false);
            router.push(`/orders/confirmation?id=${orderId}`);
        } catch (error) {
            updateFormData('submitting', false);
            console.error('Error creating order', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-5">
            <form onSubmit={submitCheckout}>
                <FormGroup
                    step={1}
                    title='Información de contacto'
                    item={formData.customer}
                    setItem={(data: any) => updateFormData('customer', data)}
                    steps={steps}
                    setSteps={setSteps}
                    fields={[
                        { name: 'full_name', label: 'Nombre Completo', inputType: 'text', required: true },
                        { name: 'phone_number', label: 'Número de teléfono', inputType: 'tel', required: true },
                        { name: 'email', label: 'Correo electrónico', inputType: 'email', required: true }
                    ]}
                    onBlur={() => handleBlur(1)}
                />
                <FormGroup
                    step={2}
                    title='Dirección de envío'
                    item={formData.shipping}
                    setItem={(data: any) => updateFormData('shipping', data)}
                    steps={steps}
                    setSteps={setSteps}
                    fields={addressFields}
                    optional={{ street_2: true }}
                    onBlur={() => handleBlur(2, { street_2: true })}
                />
                <FormGroup
                    step={3}
                    title='Dirección de facturación'
                    item={formData.billing}
                    setItem={(data: any) => updateFormData('billing', data)}
                    steps={steps}
                    setSteps={setSteps}
                    fields={addressFields}
                    optional={{ street_2: true }}
                    onBlur={() => handleBlur(3, { street_2: true })}
                >
                    <div className="inline">
                        <span className="pr-2 text-l">Igual a la dirección de envío?</span>
                        <input
                            id="same-as-shipping"
                            type="checkbox"
                            onBlur={() => handleBlur(3, { street_2: true })}
                            onChange={ async(ev) => {
                                console.log('SHIPPING DATA: ', formData.shipping)
                                console.log('CHECKED: ', ev.target.checked)
                                updateFormData('checked', ev.target.checked)
                                ev.target.checked && updateFormData('billing', formData.shipping)
                            }}
                            checked={formData.checked}
                        />
                    </div>
                </FormGroup>
                <FormGroup
                    step={4}
                    title='Información del pagos'
                    item={formData.payment}
                    setItem={(data: any) => updateFormData('payment', data)}
                    steps={steps}
                    setSteps={setSteps}
                    fields={[
                        { name: 'name', label: 'Nombre', inputType: 'text' },
                        { name: 'ccNumber', label: 'Número de la tarjeta', inputType: 'ccNum' },
                        { name: 'ccExp', label: 'Fecha de Expiración', inputType: 'ccExp' },
                        { name: 'cvv', label: 'Código de seguridad', inputType: 'password' }
                    ]}
                    onBlur={() => handleBlur(4)}
                />
                <div className='pt-5 flex justify-end'>
                    <button id='checkout-btn' disabled={formData.submitting} type='submit' className="w-full md:w-auto md:px-12 text-2xl uppercase text-white py-2 bg-gray-400">
                        Checkout
                    </button>
                </div>
            </form>
            <div className="order-first md:order-last pt-3">
                <div className='border border-gray-200'>
                    <div className="flex justify-between py-2 px-2 md:px-5">
                        <button onClick={() => updateFormData('showSummary', !formData.showSummary)} className="flex w-full justify-between items-center">
                            <div>Detalles de la orden</div>
                            <div className='h-full w-5'>{formData.showSummary ? <ChevronDownIcon /> : <ChevronRightIcon />}</div>
                        </button>
                    </div>
                    <div className='border-t border-gray-200'>
                        <div className={formData.showSummary ? 'block' : 'hidden'}>
                            <Cart cartWithItems={cart} />
                        </div>
                        <OrderCostSummary
                            subtotal={subtotal || 0}
                            discount={formData.discount}
                            tax={tax || 0}
                            shippingFee={shippingFee || 0}
                            assemblyFee={assemblyFee}
                            total={total || 0}
                        />
                    </div>
                </div>
                <div className='border border-gray-200 p-3 mt-5'>
                    <div className="grid grid-cols-3 gap-4 pb-2">
                        <div className="col-span-2">
                            {assemblyOptions.includes(formData.shipping.state) ?
                                <label className="text-gray-700 text-sm mb-2 inline">Desea agregar Ensamblaje?</label> :
                                <label className="text-red-400 text-sm mb-2 inline">No ofrecemos ensamblaje en {formData.shipping.state}</label>
                            }
                            <input disabled={!assemblyOptions.includes(formData.shipping.state)}
                                   onChange={() => updateFormData('order', { ...formData.order, assembly: !formData.order.assembly })}
                                   name='assembly' checked={formData.order.assembly} className="inline ml-3" type="checkbox" />
                        </div>
                    </div>
                </div>
                <Coupon setCoupon={(val: string) => calcDiscount(val)} coupon={formData.order.coupon} />
            </div>
        </div>
    );
}
