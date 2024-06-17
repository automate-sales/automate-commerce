import { Cart, CartItem, PaymentMethod, Product } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';

export type CartItemWithProduct = CartItem & { 
  product: Product | { 
    id: number, 
    title: JsonValue, 
    price: number, 
    stock: number,
    images: string[],
    description: JsonValue,
    sku: string,
    color?: string | null,
    size?: string | null
  } 
};
export type CartProps = {
    cartWithItems: Cart & { cartItems: CartItemWithProduct[]}
};
export type CartWithItems = Cart & { cartItems: CartItemWithProduct[]}


type htmlInputType = "text" | "password" | "radio" | "checkbox" | "submit" | "reset" | "button" | "hidden" | "image" | "file" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "search" | "email" | "tel" | "url" | "color"
type customInputType = "select" | "ccNum" | "ccExp"
export type InputType = htmlInputType | customInputType

export type SelectOptions = { [key: string]: string }


export type CustomerInfo = {
    full_name: string;
    phone_number: string;
    email: string;
  };

  export type ShippingState = 'panama_ciudad' |
    'panama_otro' |
    'colon' |
    'darien' |
    'cocle' |
    'veraguas' |
    'los_santos' |
    'herrera' |
    'chiriqui' |
    'bocas_del_toro' |
    'san_blas'
  
  
  export type ShippingInfo = {
    street_1: string;
    street_2?: string;
    city: string;
    state: ShippingState;
    zip: string;
    country: string;
  };
  
  export type PaymentInfo = {
    name: string;
    ccNumber: string;
    ccExp: string;
    cvv: string;
  };
  
  export type OrderInfo = {
    subtotal: number;
    discount: number;
    tax: number;
    shipping: boolean;
    shippingFee: number;
    assembly: boolean;
    assemblyFee: number;
    total: number;
    coupon: string;
    source: 'ecommerce';
    paymentMethod: PaymentMethod;
    cartId: string;
    leadId: string;
    loggedIn: boolean;
  };
  
  export type CheckoutOrder = {
    orderInfo: OrderInfo;
    customerInfo: CustomerInfo;
    shippingInfo: ShippingInfo;
    billingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
  };
  