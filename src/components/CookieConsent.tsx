import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 p-4 z-50">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="text-purple-500 flex-shrink-0" size={24} />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <Link to="/privacy-policy" className="text-purple-600 dark:text-purple-400 hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};