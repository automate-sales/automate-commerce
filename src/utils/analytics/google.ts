import { Product, CartItem, Order } from "@prisma/client";
import { getItems, getSubTotal } from "./utils";
const isAnalyticsEnabled = process.env.NEXT_PUBLIC_USE_ANALYTICS;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

export const pageview = (url: string, leadId?: string): void => {
  if(isAnalyticsEnabled){
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
        ...(leadId && {lead_id: leadId})
      });
    }
  }
};

export const gaEvent = (name: any, options = {}): void => {
  if(isAnalyticsEnabled){
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag("event", name, options);
    }
  }
};

export const search = (query: string, leadId: string): void => {
  const eventName = "search";
  const eventData = { search_string: query, lead_id: leadId };
  gaEvent(eventName, eventData);
}

export const signUp =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
  const eventName = "sign_up";
  const eventData = { lead_id: leadId, method };
  gaEvent(eventName, eventData);
}

export const login =(leadId: string, method:'email'|'google'|'facebook'='email'): void=> {
  const eventName = "login";
  const eventData = { lead_id: leadId, method };
  gaEvent(eventName, eventData);
}

export const addToCart = (product:Product, qty:number, path:string, leadId: string): void => {
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
  gaEvent(eventName, eventData);
}

export const viewCart =(cartItems: CartItem[], leadId: string): void=> {
  const eventName = "view_cart";
  const eventData = {
    currency: "USD",
    value: getSubTotal(cartItems),
    items: getItems(cartItems),
    lead_id: leadId
  };
  gaEvent(eventName, eventData);
}

export const checkout =(cart: CartItem[], leadId: string): void=> {
  const eventName = "begin_checkout";
  const eventData = {
    currency: "USD",
    value: getSubTotal(cart),
    items: getItems(cart),
    lead_id: leadId
  };
  gaEvent(eventName, eventData);
}

export const shippingInfo =(shippingState:string, leadId: string): void=> {
  const eventName = "add_shipping_info";
  const eventData = {
    currency: "USD",
    shipping_tier: shippingState,
    lead_id: leadId
  };
  gaEvent(eventName, eventData);
}

export const paymentInfo =(paymentType:string, leadId: string, coupon?:string)=> {
  const eventName = "add_payment_info";
  const eventData = {
    currency: "USD",
    payment_type: paymentType,
    ...(coupon && {coupon}),
    lead_id: leadId
  };
  gaEvent(eventName, eventData);
}

export const purchase =(order:Order, cartItems: CartItem[])=> {
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
  gaEvent(eventName, eventData);
}

/* export const GaShare =()=> {
  gtag("event", "share", {
      method: "Twitter",
      content_type: "image",
      item_id: "C_12345",
  });
} */