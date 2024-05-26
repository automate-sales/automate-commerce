interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      params?: { [key: string]: any }
    ) => void;
    fbq: (
      command: string,
      eventOrPixelId?: string | number,
      eventData?: { [key: string]: any },
      customData?: { [key: string]: any }
    ) => void;
}