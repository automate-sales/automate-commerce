import posthog from 'posthog-js'
import { Product, Order, CartItem } from "@prisma/client";
import { OrderAny, getItems, getSubTotal } from './utils';
import { BasicProduct, CartItemWithProduct } from '@/types';
const isAnalyticsEnabled = process.env.NEXT_PUBLIC_USE_ANALYTICS;

export const init =()=> {
  if (typeof window !== 'undefined' && isAnalyticsEnabled) {
    console.log('Posthog Init')
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }
}

export const Identify =(leadId: string)=> {
  posthog?.identify(leadId)
}

export const pageview = (): void => {
  if(isAnalyticsEnabled){
    posthog?.capture('$pageview')
  }
};

export const phEvent = (name: string, data = {}): void => {
  if(isAnalyticsEnabled){
    console.log(`Posthog Event: ${name}`)
    posthog?.capture(name, data);
  }
};

export const search = (query: string, leadId: string): void => {
  const eventName = "search";
  const eventData = { search_string: query, lead_id: leadId };
  phEvent(eventName, eventData);
}

export const signUp =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
  const eventName = "sign_up";
  const eventData = { lead_id: leadId, method };
  phEvent(eventName, eventData);
}

export const login =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
  const eventName = "login";
  const eventData = { lead_id: leadId, method };
  phEvent(eventName, eventData);
}

export const addToCart = (product:BasicProduct, qty:number, path:string, leadId?: string): void => {
  const eventName = "add_to_cart";
  const eventData = {
    currency: "USD",
    value: product.price? product.price*qty : 0,
    items: [
      {
        item_id: product.sku,
        item_name: product.title,
        currency: "USD",
        item_list_name: path,
        item_variant: product.stock && product.stock >= qty? "in-stock": "out-of-stock",
        price: product.price,
        quantity: qty
      }
    ],
    lead_id: leadId
  };
  phEvent(eventName, eventData);
}

export const viewCart =(cartItems:CartItemWithProduct[]|CartItem[], leadId?: string): void=> {
  const eventName = "view_cart";
  const eventData = {
    currency: "USD",
    value: getSubTotal(cartItems),
    items: getItems(cartItems),
    lead_id: leadId
  };
  phEvent(eventName, eventData);
}

export const checkout =(cart:CartItemWithProduct[]|CartItem[], leadId?: string): void=> {
  const eventName = "begin_checkout";
  const eventData = {
    currency: "USD",
    value: getSubTotal(cart),
    items: getItems(cart),
    lead_id: leadId
  };
  phEvent(eventName, eventData);
}

export const shippingInfo =(shippingState:string, leadId?: string): void=> {
  const eventName = "add_shipping_info";
  const eventData = {
    currency: "USD",
    shipping_tier: shippingState,
    lead_id: leadId
  };
  phEvent(eventName, eventData);
}

export const paymentInfo =(paymentType:string, leadId?: string, coupon?:string)=> {
  const eventName = "add_payment_info";
  const eventData = {
    currency: "USD",
    payment_type: paymentType,
    ...(coupon && {coupon}),
    lead_id: leadId
  };
  phEvent(eventName, eventData);
}

export const purchase =(order:OrderAny, cartItems: CartItemWithProduct[] | CartItem[])=> {
  const eventName = "purchase";
  const eventData = {
    transaction_id: order.id,
    value: order.total,
    tax: order.tax,
    shipping: order.shippingFee,
    currency: "USD",
    ...(order.coupon && {coupon: order.coupon}),
    items: getItems(cartItems),
    lead_id: order.leadId
  };
  phEvent(eventName, eventData);
}