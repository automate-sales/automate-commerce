import { v1 as uuidv1 } from 'uuid';

const isAnalyticsEnabled = process.env.NEXT_PUBLIC_USE_ANALYTICS;

const sendTwitterEvent = async (
  eventName: string,
  eventId: string,
  eventData: any,
  userId?: string
) => {
  if (isAnalyticsEnabled) {
    try {
      const response = await fetch('/api/twitter-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
        },
        body: JSON.stringify({
          eventName,
          eventId,
          eventData,
          userId,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Event sent to Twitter Conversion API:', data);
      } else {
        console.error('Error sending event to Twitter Conversion API:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending event to Twitter Conversion API:', error);
    }
  }
};

export const trackPageView = (): void => {
  if (isAnalyticsEnabled) {
    const eventName = 'PageView';
    const eventId = uuidv1();
    const eventData = {
      url: window.location.href,
      referrer: document.referrer,
    };
    sendTwitterEvent(eventName, eventId, eventData);
  }
};

export const trackEvent = (name: string, data: any): void => {
  if (isAnalyticsEnabled) {
    const eventId = uuidv1();
    sendTwitterEvent(name, eventId, data);
  }
};

export const trackSearch = (query: string, userId: string): void => {
    const eventName = 'Search';
    const eventId = uuidv1();
    const eventData = { search_string: query, user_id: userId };
    trackEvent(eventName, eventData);
  };
  
  export const trackSignUp = (userId: string, email?: string): void => {
    const eventName = 'SignUp';
    const eventId = uuidv1();
    const eventData = { user_id: userId, email };
    trackEvent(eventName, eventData);
  };
  
  export const trackAddToCart = (productId: string, quantity: number, userId: string): void => {
    const eventName = 'AddToCart';
    const eventId = uuidv1();
    const eventData = { product_id: productId, quantity, user_id: userId };
    trackEvent(eventName, eventData);
  };
  
  export const trackCheckout = (cartItems: any[], userId: string): void => {
    const eventName = 'Checkout';
    const eventId = uuidv1();
    const eventData = { cart_items: cartItems, user_id: userId };
    trackEvent(eventName, eventData);
  };
  
  export const trackPurchase = (orderId: string, amount: number, userId: string): void => {
    const eventName = 'Purchase';
    const eventId = uuidv1();
    const eventData = { order_id: orderId, amount, user_id: userId };
    trackEvent(eventName, eventData);
  };
