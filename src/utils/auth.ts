import prisma from "@/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { createTransport } from "nodemailer"
import type { Adapter } from 'next-auth/adapters';
import { getCartWithItems, getServerLead, joinLeads } from "./leads/server";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { swapCarts } from "@/app/actions";

export type UserObj = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id?: string | null;
}

export const getCurrentUser = async ()=> {
    const session = await getServerSession(authOptions)
    console.log('current session: ', session)
    if(session && session.user) {
        return session.user as User & { swapModal?: string }
    } else return undefined
}

export const authOptions: NextAuthOptions = {
    debug: true,
    providers: [
        EmailProvider({
          server: process.env.EMAIL_HOST == 'gmail' ? {
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD
            }
          }: {
            host: 'localhost',
            port: 7777,
            secure: false
          },
          from: process.env.EMAIL_USER,
          async sendVerificationRequest({
            identifier: email,
            url,
            provider: { server, from },
          }) {
              const { host } = new URL(url);
              const transport = createTransport(server);
              const result = await transport.sendMail({
                to: email,
                from,
                subject: `Sign in to ${host}`,
                text: text ({ url, host }),
                html: html({ url, host }),
              });
              const failed = result.rejected.concat(result.pending).filter(Boolean)
              if (failed.length) {
                throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
              } else console.info(`Sent a verification email from ${process.env.EMAIL_HOST}`)
          },
        })
    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    callbacks: {
        async signIn({ user }: {user: UserObj}) {
          console.log('user signing in: ', user)
          return true
        },
        async session({ session, token, user }) {
          try {
            const leads = await getServerLead()
            const currentLeadId = leads[0] || leads[1]
            const currentCart = await getCartWithItems()
            console.log('current lead id: ', currentLeadId)
            console.log('current cart id: ', currentCart)
            if(!currentLeadId || !currentCart) return session
            console.log('current session user: ', user)
            
            const userWithLeadAndCart = await prisma.user.findUnique({
              where: { id: user.id },
              include : { leads: {
                where: { status: { not: 'inactive'} },
                orderBy: { createdAt: 'desc' },
                take: 1,
                include: { carts: {
                  where: { status: 'active' },
                  orderBy: { createdAt: 'desc' },
                  include: { cartItems: {
                    select: { id: true, qty: true, productId: true } }
                  },
                  take: 1
                }}
              } }
            })

            const userLead = userWithLeadAndCart?.leads[0]
            const userCart = userLead?.carts[0]

            session.user = {
              ...user, 
              leadId: currentLeadId, 
              username: userWithLeadAndCart?.username 
            } as any;

            if(!userLead || userLead && userLead.id !== currentLeadId) {
              
              await prisma.lead.update({
                where: { id: currentLeadId },
                data: { user: { connect: { id: user.id } } }
              })

              if(userLead){
                console.log('\n\n USERERRRR LEADDDD !!!!! \n\n', userLead)
                await joinLeads(currentLeadId, userLead.id)
                if(userCart?.cartItems.length && userCart?.cartItems.length > 0) {
                  if(currentCart.cartItems.length > 0) {

                    console.log('REDIECTING TO CART !!!!!') 
                    // reroute the user to a pop up asking if they want to keep the current cart
                    //redirect(`/user/cart/${userCart.id}`)
                    session.user = {
                      ...session.user, 
                      swapModal: userCart.id
                    } as any

                    // add a parameter in the session that will trigger the modal
                  } else {
                    swapCarts(currentCart.id, userCart.id, currentLeadId)
                  }
                }

              }
            }          

            
            return session;
          } catch (err) {
            console.error('Error getting session', err)
            return session;
          }
        }
    },
}


export function html(params: { url: string; host: string }) {
    const { url, host } = params
  
    return `
    <html>
  
    <head>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
    
        body {
          font-family: 'Lato', sans-serif
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
    
        .bg-gray {
          background-color: #f2f2f2 !important;
        }
    
        @media only screen and (max-width: 600px) {
          .container {
            padding: 20px;
          }
        }
      </style>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    
    <body>
    
      <div class="text-center container" style="padding-top: 30px;">
        <img style="padding-bottom: 20px;" src="https://ergonomicadesk.com/logo.png" width="60px" height="auto"
          alt="Company Logo">
        <h2 class="py">Empieza a chatiar</h2>
        <p class="py text-dark">Haz clic en el botón para iniciar tu sesión de usuario en el chat de ergonomica</p>
        <div style="padding: 20px;">
          <a href="${url}" target="_blank" class="text-dark"
            style="text-decoration: none; font-size: 18px; background-color: transparent; border: 2px solid rgba(147,197,253); padding: 10px 20px; font-weight: bold;">
            Iniciar Sesión
          </a>
        </div>
      </div>
      
    </body>
    
    </html>
  `
  }
  
  /** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
  export function text({ url, host }: { url: string; host: string }) {
    return `Sign in to ${host}\n${url}\n\n`
  }