import { CartWithItems } from "@/types";
import type { Order } from "@prisma/client";
import { createTransport } from "nodemailer"

export const emailBody = (orderId:string, orderSummary:string) => {
  return(
    `<html>
      <head>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family:'Lato',sans-serif
          }
          .text-dark {
            color: #2d2d2d !important;
          }
          .container {
            padding: 10px 60px;
          }
          .bold {
            font-weight: bold;
          }
          .py {
            padding: 10px 0;
          }
          .text-center {
            text-align: center;
          }
          .product {
            display: flex;
            align-items: center;
          }
          .product-text {
            padding: 20px;
          }
          .order-summary {
            width: 100%;
            border-collapse: collapse;
          }
          .order-summary td,
          .order-summary th {
            padding: 8px;
            text-align: left;
          }
          .order-summary tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          .order-summary th,
          .bg-gray {
            background-color: #f2f2f2 !important;
          }
          @media only screen and (max-width: 600px) {
            .container {
                padding: 20px;
            }
            .product {
              display: block;
            }  
          }
        </style>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      </head>
      <body>

        <div class="text-center container" style="padding-top: 30px;">
          <img style="padding-bottom: 20px;" src="https://ergonomicadesk.com/logo.png" width="60px" height="auto" alt="Company Logo">
          <h2 class="py">¡Gracias por tu compra!</h2>
          <p class="py text-dark">Hemos recibido tu orden. Te estaremos contactando por telefono dentro de las proximas 24 horas para coordinar la entrega.</p>
          <p class="py text-dark" style="padding-top: 20px;">
            <span>El identificador unico de tu orden es: </span>
            <span class="bold">${orderId}</span>
          </p>
        </div>

        <div class="container">
          <table class="order-summary" style="margin: 0 auto; padding: 20px;">
            <thead>
              <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${orderSummary}
            </tbody>
          </table>
        </div>

        <div class="text-center text-dark container">
          <p class="py">
            <span>Tienes preguntas o sugerencias? Contactanos a cualquier hora al </span>
            <span><a href="tel:+50769533776">(507) 6953-3776</a></span>
            <span>, o envianos un correo a </span>
            <span><a href="mailto:ventas@ergonomicadesk.com">ventas@ergonomicadesk.com</a></span>
          </p>
          <div style="padding-top: 30px">
            <a href="https://ergonomicadesk.com/faq">FAQ</a>
            <span> | </span>
            <a href="https://ergonomicadesk.com/policies/delivery">Devoluciones</a>
            <span> | </span>
            <a href="https://ergonomicadesk.com/blog">Blog</a>
          </div>
          <p class="py" style="padding-bottom: 20px">Copyright © 2021 Ergonomica Desk. Derechos reservados.</p>
        </div>

        <div class="bg-gray text-center" style="padding: 30px 30px 80px;">
          <span>Has recibido este correo porque pusiste una orden en </span>
          <a href="https://ergonomicadesk.com">ergonomicadesk.com</a> 
        </div>

      </body>
    </html>`
  )
}

export const genOrderSummary =(cart: CartWithItems, order: Order)=> {
  const cartItems = cart.cartItems.map(item => `
      <tr>
        <td class="product" data-label="Product">
          <img src="${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${item.product.images[0]}" height="100" width="100">
          <span class="product-text">
            <h4>${item.product.title}</h4>
            <span>${item.product.sku}</span>
          </span>
        </td>
        <td data-label="Quantity">${item.qty}</td>
        <td data-label="Price">$${item.product.price}</td>
      </tr>
    `).join('')
  const cost = {
    subtotal: order.subtotal,
    shipping: order.shippingFee,
    assembly: order.assembly? order.assemblyFee : null,
    tax: order.tax,
    total: order.total
  }
  const costSummary = Object.keys(cost).map((key) => {
    const costKey = key as keyof typeof cost;
    return cost[costKey] ? `
      <tr class="bg-gray">
        <td></td>
        <td class="bold">${costKey}</td>
        <td>$${cost[costKey]}</td>
      </tr>
    ` : '';
  }).join('')
  return cartItems + costSummary
}

export const buildHtmlEmail = (cart: CartWithItems, order: Order) => {
  const htmlEmial = emailBody(order.id, genOrderSummary(cart, order))
  return htmlEmial
  .replace(/\s+/g, ' ')
  .replace(/\n|\t/g, ' ')
  .replace(/> *</g, '><')
  .trim()
}

export const buildTextEmail = (order: Order) => {
  return `Hemos recibido tu orden por un total de ${order.total}. Te estaremos contactando por telefono dentro de las proximas 24 horas para coordinar la entrega. El identificador unico de tu orden es: ${order.id}`
}

export const sendEmail = async(cart: CartWithItems, order: Order)=> {
  try{
    const server = process.env.EMAIL_HOST == 'gmail' ? {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    }: {
      host: 'localhost',
      port: 7777,
      secure: false
    }
    const transport = createTransport(server);
    const result = await transport.sendMail({
      to: order.email,
      from: process.env.EMAIL_USER,
      subject: `Ergonomica - order success`,
      text: buildTextEmail(order),
      html: buildHtmlEmail(cart, order)
    });
    if(process.env.DEBUG) console.log('Email sent: ', result)
    const failed = result.rejected.concat(result.pending).filter(Boolean)
    if (failed.length) {
      throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
    } else return true
  } catch(err: any ){
    const msg = 'Error sending email'
    console.error(msg, err)
    return false
  }
}