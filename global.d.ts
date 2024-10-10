interface Window {
  doNotTrack: string; 
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

interface Navigator {
  doNotTrack: string;
  msDoNotTrack: string;
}