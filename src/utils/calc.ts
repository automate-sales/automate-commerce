import type { CartItem, Coupon, Product } from "@prisma/client"
import { getCoupon } from "@/app/actions"
import { CartItemWithProduct, ShippingInfo } from "@/types"


const shippingRates = {
  'panama_ciudad':3.5,
  'panama_otro':6,
  'colon':6,
  'darien':6,
  'cocle':6,
  'veraguas':6,
  'los_santos':6,
  'herrera':6,
  'chiriqui':6,
  'bocas_del_toro':6,
  'san_blas':6
}

export const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, "_")
}

export const formatAddress = (address: ShippingInfo): string => {
    const addressParts = [
      address.street_1,
      address.street_2,
      address.city,
      address.state,
      address.zip,
      address.country
    ].filter(part => part); // Remove any empty parts to avoid including unnecessary commas

    return addressParts.join(', ');
};

//get the credit card type
export const getCardType =(cardNumber:string)=> {
    if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) return 'visa'
    else if(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(cardNumber)) return 'mastercard'
    else return 'unknown'
}

//format the expiration date to contain leading zeros and a dash
export const formatExp =(newExp:string, oldExp:string)=> {
    return newExp.length > oldExp.length ? 
    newExp.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' 
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' 
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' 
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' 
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' 
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' 
    ).replace(
      /\/\//g, '/' 
    ): newExp
}

//get the cart sub total
export const getSubTotal =(cart:Array<CartItem>)=>{
    return cart.reduce((a:number, b:CartItem)=>a + b.qty*b.price, 0)
}
  
//get the total number of items in the cart
export const getTotalQty =(cart:Array<CartItem>)=>{
    return cart.reduce((a:number, b:CartItem)=>a + b.qty, 0)
}
  
//calculate the shiping costs
export const getShippingCost =(cart:Array<CartItem>, province: keyof typeof shippingRates)=>{
    if(province === 'panama_ciudad' && getSubTotal(cart) > 100) return 0
    else return cart.reduce((a:number, b:CartItem)=>a + shippingRates[province]*b.qty, 0)
}
  
//calculate the assembly cost
export const getAssemblyCost =(cart:Array<CartItem>) =>{
    const assembly = 2
    if(cart.length>0) {
        if(getSubTotal(cart) > 100) return 0
        else return cart.reduce((a:number, b:CartItem)=>a + assembly*b.qty, 0)
    }
    else return 0
}

//calculate the total discount
export const getDiscount =async(
    cart:Array<CartItemWithProduct>,
    couponCode: string
)=>{
    let discount = 0
    const today = new Date()
    const directDiscount = cart.reduce((a:number, b:CartItemWithProduct)=>a+(b.product.price-b.price)*b.qty, 0)
    // there should be an && pricelock.getTime() > today.getTime()
    const coupon = await getCoupon(couponCode)
    if(directDiscount > 0){
        if(coupon) console.error('You may not use coupons if your order already has a discount')
        return directDiscount
    }
    else if(coupon){
        if(coupon.valid_till && new Date(coupon.valid_till).getTime() > today.getTime()){
            console.log('coupon valid till date is greater than current date')
            for(const item of cart){
                //if(coupon.products.includes(item.productId)) 
                discount += (coupon.discount/100)*item.qty*item.price
            } return discount
        } else {
            console.error('The provided coupon has expired')
            return 0
        }
    } 
    else {
        console.error('The provided coupon does not exist')
        return 0
    }
}

//calculate the total tax
export const getTax =(
    subTotal:number, 
    discount:number, 
    shippingFee:number, 
    assemblyFee:number
)=>{
    const taxRate = .07
    return ((subTotal-discount+shippingFee+assemblyFee)*taxRate)
}

//get the cart total
export const getTotal =(
    subTotal:number, 
    discount:number, 
    shippingFee:number, 
    assemblyFee:number,
    tax:number
)=> {
    return subTotal-discount+shippingFee+assemblyFee+tax
}

// method that checks the stock to see if the stock of any given product is correct
/* export const checkStock = async(cart:Array<CartItem>)=> {
    if(cart.length>0){
        return await Promise.all(
        cart.map(async(item:CartItem)=>{
            let product = {stock:2, sku:'xyz'}
            if(item.qty < 1) throw new Error(`Cantidad invalida para el producto ${product.sku}`)
            else if(!product.stock || product.stock < 1) throw new Error(`El producto ${product.sku} se ha agotado, por favor remuevalo de su carrito para continuar`)
            else if(item.qty > product.stock) throw new Error(`Solo nos quedan ${product.stock} unidades del producto ${product.sku}, por favor actualize la cantidad en su carrito para continuar`)
            else return true
        })
        )
    } else throw new Error(`Tu carrito esta vacío`)
} */