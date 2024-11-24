// app/banner.js
'use client';
import Link from "next/link";
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
          py-8
          px-16
          text-left
          rounded-sm
          shadow-lg
          flex
          flex-col
          gap-3
        ">
          <h4 className="text-lg font-bold">We value your privacy</h4>
          <p>
          We use cookies 🍪 to enhance your shopping experience.<br/>
          They help us remember your preferences, and improve your user experience in our website. By continuing, you agree to our use of cookies. Learn more in our 
          <Link className="text-blue-400 hover:underline" href="/policies/cookies/"> Cookie Policy</Link>.
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={handleDeclineCookies} className="border-blue-400 border-2 py-2 px-4 rounded-sm">Decline cookies</button>
            <button type="button" onClick={handleAcceptCookies} className="bg-blue-400 border-blue-400 border-2 py-2 px-4 rounded-sm">Accept cookies</button>
          </div>
        </div>
      )}
    </div>
  );
}