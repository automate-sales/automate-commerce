import { Cart, CartItem, Product } from '@prisma/client';

export type CartItemWithProduct = CartItem & { product: Product };
export type CartProps = {
    cartWithItems: Cart & { cartItems: CartItemWithProduct[]}
};
export type CartWithItems = Cart & { cartItems: CartItemWithProduct[]}


type htmlInputType = "text" | "password" | "radio" | "checkbox" | "submit" | "reset" | "button" | "hidden" | "image" | "file" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "search" | "email" | "tel" | "url" | "color"
type customInputType = "select" | "ccNum" | "ccExp"
export type InputType = htmlInputType | customInputType

export type SelectOptions = { [key: string]: string }