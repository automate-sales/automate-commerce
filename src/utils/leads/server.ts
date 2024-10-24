'use server'

import { cookies, headers } from 'next/headers'
import prisma from '@/db'
import { LEAD_COOKIE, CART_COOKIE } from './constants'
import { Cart, Lead } from '@prisma/client';

//import { Lead } from '@prisma/client';

/* import * as crypto from 'crypto';
import base62 from 'base62/lib/ascii';

// Set the secret key and salt directly for testing purposes
const SECRET_KEY = process.env.SECRET_KEY || 'any_length_secret_key_you_want';
const SALT = process.env.SALT || 'some_salt_value'; // Should be unique and securely generated
const IV_LENGTH = 16; // AES block size
const KEY_LENGTH = 32; // AES-256 key length

// Derive a fixed-length key from the provided secret key
function deriveKey(secretKey: string, salt: string, keyLength: number): Buffer {
  return crypto.pbkdf2Sync(secretKey, salt, 100000, keyLength, 'sha256');
}

const derivedKey = deriveKey(SECRET_KEY, SALT, KEY_LENGTH);

export async function encryptUuid(uuid: string) {
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', derivedKey, iv);
    const encrypted = Buffer.concat([cipher.update(uuid, 'utf8'), cipher.final()]);
    const encryptedHex = `${iv.toString('hex')}:${encrypted.toString('hex')}`;
    return base62.encode(Buffer.from(encryptedHex, 'utf8'));
  } catch (err) {
    console.error('Error encrypting UUID:', err);
    throw new Error(`Error encrypting UUID: ${err.message}`);
  }
}

export async function decryptUuid(encoded: string) {
  try {
    const buffer = Buffer.from(base62.decode(encoded));
    const encryptedHex = buffer.toString('utf8');
    const [ivHex, encryptedTextHex] = encryptedHex.split(':');
    if (!ivHex || !encryptedTextHex) {
      throw new Error('Invalid encrypted data format');
    }
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedText = Buffer.from(encryptedTextHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', derivedKey, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decrypted.toString('utf8');
  } catch (err) {
    console.error('Error decrypting UUID:', err);
    throw new Error(`Error decrypting UUID: ${err.message}`);
  }
} */


const botUserAgents = [
  'Googlebot',
  'Bingbot',
  'Slurp',        // Yahoo
  'DuckDuckBot',  // DuckDuckGo
  'Baiduspider',  // Baidu
  'YandexBot',    // Yandex
  'Sogou',
  'Exabot',
  'facebot',      // Facebook
  'ia_archiver',  // Alexa
];

// Function to check if the user-agent belongs to a bot
export const isBot = async(): Promise<boolean> => {
  const userAgent = (await headers()).get('user-agent')
  if (!userAgent) return false;
  return botUserAgents.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase())) || false;
}

export const getCookie = async (name: string) => {
  try {
    return cookies().get(name)?.value || undefined
  } catch (err) {
    console.error('Error getting cookie', err)
    return undefined
  }
}

export async function setCookie(name: string, value: string) {
    try {
      return cookies().set({
        name: name,
        value: value,
        httpOnly: true
      })
    } catch (err: any) {
      console.error('Error setting cookie', err)
      return undefined
    }
}

export async function deleteCookie(name: string) {
    try {
      return cookies().delete(name)
    } catch (err: any) {
      console.error('Error deleting cookie', err)
      return undefined
    }
}

export const setServerLead = async (leadId: string) => {
    setCookie(LEAD_COOKIE, leadId)
}

export const getServerLead = async () => {
    const cookiesId = await getCookie(LEAD_COOKIE)
    const headersId = headers().get('x-leadid') || undefined
    return [cookiesId, headersId]
}

export const getServerLeadId = async () => {
  const cookiesId = await getCookie(LEAD_COOKIE)
  const headersId = headers().get('x-leadid') || undefined
  return cookiesId || headersId
}

export const setServerCart = (cartId: string) => {
    setCookie( CART_COOKIE , cartId)
}

export const getServerCartCookie = async () => {
    return getCookie(CART_COOKIE)
}

export const getServerCart = async()=> {
    const cookiesId = await getServerCartCookie()
    if(cookiesId) return cookiesId
    const leadId = await getServerLead()
    return leadId[0] ? await getCartId(leadId[0]) : leadId[1] ? await getCartId(leadId[1]) : undefined
}

export const isLeadActive = async (leadId: string) => {
    try {
        const lead = await prisma.lead.findUnique({ where: { id: leadId }, select: {status: true} })
        return lead && lead.status !== 'inactive' ? true : false
    } catch (err) {
        console.error('Error checking if lead is active', err)
        return false
    }
}

export async function createLeadAndCart(
    fingerprint: string,
    id?: string,
  ) {
    const lead = await prisma.lead.create({
      data: {
        fingerprint: fingerprint,
        ...(id && { id: id }),
        carts: {
          create: {},
        },
      },
      include: {
        carts: true,
      },
    })
    return { leadId: lead.id, cartId: lead.carts[0].id }
}

export async function getCartId(leadId: string) {
    try {
        const cart = await prisma.cart.findFirst({
            where: { leadId: leadId, status: 'active' },
            orderBy: { createdAt: 'desc' },
            select: { id: true },
        })
        if(!cart) throw new Error('No active cart found')
        return cart.id
    } catch (err) {
        console.error('Error getting cart id', err)
        throw new Error('Error getting cart id')
    } 
}

export async function getCartWithItems(id?: string) {
    const cartId = id ? id : await getServerCart()
    //const leadID = await getServerLead()
    if(!cartId) return undefined   
    return await prisma.cart.findUnique({
      where: { id: cartId, status: 'active' },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
          orderBy: { createdAt: 'asc' },
          include: {
            product: {
                select: { 
                    id: true, 
                    title: true,
                    price: true,
                    stock: true,
                    images: true, 
                    description: true,
                    sku: true,
                    color: true,
                    size: true
                },
            }
          },
        },
      },
    }) || undefined
}

export async function getCartLength() {
    const cartId = await getServerCart()
    if(!cartId) return 0   
    const cart = await prisma.cart.findUnique({
      where: { id: cartId, status: 'active' },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
        },
      },
    })
    return cart?.cartItems.reduce((acc, curr) => acc + curr.qty, 0) || 0
}

export const joinLeads = async (currentLeadId: string, otherLeadId: string): Promise<Lead> => {
  try {
    let currentLead = await prisma.lead.findUnique({ where: { id: currentLeadId } }) as any;
    const otherLead = await prisma.lead.findUnique({ 
      where: { id: otherLeadId },
      include: { carts: true },
    }) as Lead & { carts: Cart[] };
    if (!currentLead || !otherLead) { throw new Error('Lead not found'); }
    const excludeFields = ['id', 'fingerprint', 'carts'];
    
    Object.keys(otherLead).forEach((key) => {
      if (!excludeFields.includes(key) && otherLead[key as keyof Lead] && !currentLead[key]) {
        currentLead[key] = otherLead[key as keyof Lead];
      }
    });

    // prisma transaction

    // Save the updated currentLead back to the database
    const updatedLead = await prisma.lead.update({
      where: { id: currentLeadId },
      data: currentLead,
    });

    // disable the other lead
    await prisma.lead.update({
      where: { id: otherLeadId },
      data: { status: 'inactive' },
    });

    // Move the other lead's cart to the current lead
    otherLead.carts.forEach(async (cart: Cart) => {
      await prisma.cart.update({
        where: { id: cart.id },
        data: { leadId: currentLeadId, status: 'inactive' },
      });
    });
    
    return updatedLead;

  } catch (err) {
    console.error('Error joining leads', err);
    throw new Error('Error joining leads');
  }
};


export async function getCartWithItemsByLead(leadId?: string) {
  try {
    const leadID = leadId ? leadId : await getServerLeadId()
    if(!leadID) return undefined 
    const cartId = leadID ? await getCartId(leadID) : undefined
    return cartId ? await prisma.cart.findUnique({
      where: { id: cartId, status: 'active' },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
          orderBy: { createdAt: 'asc' },
          include: {
            product: {
                select: { 
                    id: true, 
                    title: true,
                    price: true,
                    stock: true,
                    images: true, 
                    description: true,
                    sku: true,
                    color: true,
                    size: true
                },
            }
          },
        },
      },
    }) : undefined
  } catch (err) {
    console.error('Error getting cart with items by lead', err)
    return undefined
  }
}


export async function getCartLengthByLead(leadId?: string) {
  try {
    const leadID = leadId ? leadId : await getServerLeadId()
    if(!leadID) return undefined
    const cartId = leadID ? await getCartId(leadID) : undefined
    const results = cartId ? await prisma.cart.findUnique({
      where: { id: cartId, status: 'active' },
      include: {
        cartItems: {
          where: { qty: { gt: 0 } },
        },
      },
    }) : undefined
    return results? results.cartItems.reduce((acc, curr) => acc + curr.qty, 0) : undefined
  } catch (err) {
    console.error('Error getting cart length by lead', err)
    return 0
  }
}