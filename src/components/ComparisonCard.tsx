import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ComparisonCoin } from '../types';
import { formatCurrency, formatPercentage } from '../utils/formatters';

interface ComparisonCardProps {
  coin: ComparisonCoin;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ coin }) => {
  const isPositiveChange = parseFloat(coin.change) > 0;

  return (
    <Link
      to={`/coin/${coin.uuid}`}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={coin.iconUrl} alt={coin.name} className="w-12 h-12" />
          <div>
            <h3 className="font-bold text-xl">{coin.name}</h3>
            <span className="text-gray-500 dark:text-gray-400">{coin.symbol}</span>
          </div>
        </div>
        <div className={`flex items-center ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          {isPositiveChange ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          <span className="font-semibold ml-1">{formatPercentage(coin.change)}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Price:</span>
          <span className="font-semibold">{formatCurrency(coin.price)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Market Cap:</span>
          <span className="font-semibold">{formatCurrency(coin.marketCap, true)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">24h Volume:</span>
          <span className="font-semibold">{formatCurrency(coin.volume24h, true)}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Rank:</span>
          <span className="font-semibold">#{coin.rank}</span>
        </div>
      </div>
    </Link>
  );
};