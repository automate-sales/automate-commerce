'use client'

import { CartItem, Order, Product } from '@prisma/client';
import { v1 as uuidv1 } from 'uuid';
import { OrderAny, getContentIds, getContents, getSubTotal, getTotalQty } from '../utils';
import { BasicProduct, CartItemWithProduct } from '@/types';
import { sendApiEvent } from './server';
const isAnalyticsEnabled = process.env.NEXT_PUBLIC_USE_ANALYTICS;
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;


export const pageview = (): void => {
  if(isAnalyticsEnabled){
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }
};

export const pixelEvent = (name: string, id: string, options = {}): void => {
  if(isAnalyticsEnabled){
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', name, options, {eventID: id})
    }
  }
};

export const search = (query:string, leadId: string): void => {
  const eventName = 'Search'
  const eventId = uuidv1()
  const eventData = {search_string: query, lead_id: leadId}
  pixelEvent(eventName, eventId, eventData)
  sendApiEvent(eventName, eventId, eventData)
}

export const signUp = (leadId: string, email?: string): void => {
  const eventName = 'Lead'
  const eventId = uuidv1()
  const eventData = {
    content_category: 'signup', 
    content_name: 'signup', 
    currency: 'USD',
    lead_id: leadId
  }
  pixelEvent(eventName, eventId, eventData)
  sendApiEvent(eventName, eventId, eventData, email)
}

export const addToCart = (product:BasicProduct, qty:number, leadId?: string): void => {
  const eventName = 'AddToCart'
  const eventId = uuidv1()
  const eventData = {
    content_ids: [product.sku],
    content_name: product.title,
    content_type: 'product',
    contents: [{ id: product.sku, quantity: qty }],
    currency: 'USD',
    value: product.price * qty,
    lead_id: leadId
  }
  pixelEvent(eventName, eventId, eventData)
  sendApiEvent(eventName, eventId, eventData)
}

export const checkout = (cartItems:CartItemWithProduct[]|CartItem[], leadId?: string): void => {
  const eventName = 'InitiateCheckout'
  const eventId = uuidv1()
  const eventData = {
    content_category: 'checkout',
    content_ids: getContentIds(cartItems),
    contents: getContents(cartItems),
    currency: 'USD',
    num_items: getTotalQty(cartItems),
    value: getSubTotal(cartItems),
    lead_id: leadId
  }
  pixelEvent(eventName, eventId, eventData)
  sendApiEvent(eventName, eventId, eventData)
}

export const paymentInfo = (paymentType:string, leadId?: string, coupon?: string): void => {
  const eventName = 'AddPaymentInfo'
  const eventId = uuidv1()
  const eventData = {
    content_category: 'checkout',
    currency: 'USD',
    payment_type: paymentType,
    lead_id: leadId,
    ...(coupon && {coupon})
  }
  pixelEvent(eventName, eventId, eventData)
  sendApiEvent(eventName, eventId, eventData)
}

export const purchase = async (order: OrderAny, cartItems:CartItemWithProduct[] | CartItem[]) => {
  const eventName = 'Purchase'
  const eventId = uuidv1()
  const eventData = {
    content_ids: getContentIds(cartItems),
    content_name: 'payment_complete', 
    content_type: 'product_group', 
    contents: getContents(cartItems), 
    currency: 'USD', 
    num_items: getTotalQty(cartItems), 
    value: order.subtotal,
    lead_id: order.leadId
  }
  pixelEvent(eventName, eventId, eventData)
  return await sendApiEvent(eventName, eventId, eventData, order.email)
}