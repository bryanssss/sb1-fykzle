import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Clock } from 'lucide-react';
import { formatCurrency, formatPercentage } from '../utils/formatters';

interface PriceStatsProps {
  price: string;
  change: string;
  marketCap: string;
  volume24h: string;
  allTimeHigh?: {
    price: string;
    timestamp: number;
  };
  allTimeLow?: {
    price: string;
    timestamp: number;
  };
}

export const PriceStats: React.FC<PriceStatsProps> = ({
  price,
  change,
  marketCap,
  volume24h,
  allTimeHigh,
  allTimeLow
}) => {
  const isPositiveChange = parseFloat(change) > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-purple-50 dark:bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="text-purple-500" />
          <h3 className="font-semibold dark:text-white">Market Stats</h3>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Current Price</p>
            <p className="text-2xl font-bold dark:text-white">{formatCurrency(price)}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">24h Change</p>
            <p className={`text-lg font-semibold ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
              {formatPercentage(change)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="text-purple-500" />
          <h3 className="font-semibold dark:text-white">Trading Volume</h3>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Market Cap</p>
            <p className="text-2xl font-bold dark:text-white">{formatCurrency(marketCap, true)}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">24h Volume</p>
            <p className="text-lg font-semibold dark:text-white">{formatCurrency(volume24h, true)}</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-purple-500" />
          <h3 className="font-semibold dark:text-white">Price History</h3>
        </div>
        <div className="space-y-3">
          {allTimeHigh && (
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">All Time High</p>
              <p className="text-lg font-semibold dark:text-white">{formatCurrency(allTimeHigh.price)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(allTimeHigh.timestamp * 1000).toLocaleDateString()}
              </p>
            </div>
          )}
          {allTimeLow && (
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">All Time Low</p>
              <p className="text-lg font-semibold dark:text-white">{formatCurrency(allTimeLow.price)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(allTimeLow.timestamp * 1000).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};