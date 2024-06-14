'use server'

import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const FB_API_VERSION = 'v13.0';

export const hashUserData = (data: string): string => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

export const hashEmail = (email: string): string => {
  const emailNormalized = email.trim().toLowerCase();
  return crypto
    .createHash('sha256')
    .update(emailNormalized)
    .digest('hex');
}

export const getClientIp = (req: NextApiRequest): string | undefined => {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string') {
    return forwardedFor.split(',').shift();
  }
  return req.socket?.remoteAddress;
};

export const sendApiEvent = async (
  eventName: string,
  eventId: string,
  eventData: any,
  email?: string,
  userAgent?: string,
  ipAddress?: string
) => {
  try {
    const event = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      user_data: {
        ...(email && { em: hashEmail(email) }),
        ...(userAgent && { client_user_agent: userAgent }),
        ...(ipAddress && { client_ip_address: ipAddress })
      },
      custom_data: eventData,
      event_id: eventId
    };
    const response = await fetch(
      `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [event],
          test_event_code: 'TEST6833'
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending event to Facebook Conversion API:', error);
  }
};