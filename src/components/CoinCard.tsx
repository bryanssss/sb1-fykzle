import React from 'react';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Coin } from '../types';

interface CoinCardProps {
  coin: Coin;
}

export const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const isPositiveChange = parseFloat(coin.change) > 0;
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  }).format(parseFloat(coin.price));

  const formattedMarketCap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2
  }).format(parseFloat(coin.marketCap));

  return (
    <div className="relative">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <div className="absolute top-2 right-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          #{coin.rank}
        </div>
        
        <Link to={`/coin/${coin.uuid}`} className="block mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
              <img 
                src={coin.iconUrl} 
                alt={coin.name} 
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                loading="lazy"
              />
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg truncate dark:text-white">
                  {coin.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{coin.symbol}</span>
              </div>
            </div>
            <div className={`flex items-center ${isPositiveChange ? 'text-green-500' : 'text-red-500'} ml-2`}>
              {isPositiveChange ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
              <span className="font-semibold">{coin.change}%</span>
            </div>
          </div>
          
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Price:</span>
              <span className="font-semibold dark:text-white text-right break-all">
                {formattedPrice}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Market Cap:</span>
              <span className="font-semibold dark:text-white text-right">
                {formattedMarketCap}
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://www.lbank.com/en-US/login/?icode=3XCT1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 bg-purple-50 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-sm font-medium dark:text-white">LBank</span>
              <ExternalLink size={14} className="text-gray-400" />
            </a>
            <a
              href="https://www.kucoin.com/r/rf/QBSQ8NJA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 bg-purple-50 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-sm font-medium dark:text-white">KuCoin</span>
              <ExternalLink size={14} className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};