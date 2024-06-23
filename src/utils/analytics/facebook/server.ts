'use server'

import crypto from 'crypto';
import { headers } from 'next/headers';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const FB_API_VERSION = 'v13.0';

export const hashUserData = async (data: string): Promise<string> => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

export const hashEmail = async (email: string): Promise<string> => {
  const emailNormalized = email.trim().toLowerCase();
  return crypto
    .createHash('sha256')
    .update(emailNormalized)
    .digest('hex');
}

export const getClientIp = async (headers: ReadonlyHeaders): Promise<string | undefined> => {
  const forwardedFor = headers.get('x-forwarded-for');
  if (typeof forwardedFor === 'string') {
    return forwardedFor.split(',').shift();
  }
  return undefined;
};

export const sendApiEvent = async (
  eventName: string,
  eventId: string,
  eventData: any,
  email?: string,
  //userAgent?: string | null,
  //ipAddress?: string
) => {
  try {
    const reqHeaders = headers()
    const userAgent = reqHeaders.get('user-agent');
    const ipAddress = await getClientIp(reqHeaders);
    const event = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      user_data: {
        ...(email && { em: await hashEmail(email) }),
        ...(userAgent && { client_user_agent: userAgent }),
        ...(ipAddress && { client_ip_address: ipAddress })
      },
      custom_data: eventData,
      event_id: eventId
    };
    console.log('EVENTOO: ', event)
    const response = await fetch(
      `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [event],
          ...(process.env.NODE_ENV === 'development' && { test_event_code: process.env.FB_TEST_CODE })
        }),
      }
    );
    const data = await response.json();
    console.log('META CONVERSION API RESPONSE: ', data);
    return data;
  } catch (error) {
    console.error('Error sending event to Facebook Conversion API:', error);
  }
};