// app/banner.js
'use client';
import { useEffect, useState } from "react";

export function cookieConsentGiven() {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent');
}

export default function Banner() {
  const [consentGiven, setConsentGiven] = useState<string | null>('');
  
  useEffect(() => {
    setConsentGiven(cookieConsentGiven() || '');
  }, []);

  useEffect(() => {
    setConsentGiven(cookieConsentGiven());
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  return (
    <div>
      {consentGiven === 'undecided' && (
        <div className="
          fixed z-50 
          bottom-0 
          w-full 
          bg-white 
          bg-opacity-70
          p-4
          text-center
        ">
          <p>
            We use tracking cookies to understand how you use 
            the product and help us improve it.
            Please accept cookies to help us improve.
          </p>
          <button type="button" onClick={handleDeclineCookies} className="py-2 px-4">Decline cookies</button>
          <span> </span>
          <button type="button" onClick={handleAcceptCookies} className="border-blue-400 border-2 py-2 px-4 rounded-sm">Accept cookies</button>
        </div>
      )}
    </div>
  );
}