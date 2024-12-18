import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DisclaimerBanner = () => {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/30 py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm text-yellow-700 dark:text-yellow-300">
        <AlertTriangle size={16} />
        <p>
          Cryptocurrency investments are high-risk. Only invest what you can afford to lose.{' '}
          <Link to="/risk-disclaimer" className="underline hover:text-yellow-800 dark:hover:text-yellow-200">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
};