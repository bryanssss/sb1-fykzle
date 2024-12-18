import React from 'react';
import { Globe, Link as LinkIcon, Hash, Award } from 'lucide-react';
import { formatNumber } from '../utils/formatters';

interface MarketStatsProps {
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  btcPrice: string;
  listedAt: number;
  tags: string[];
}

export const MarketStats: React.FC<MarketStatsProps> = ({
  rank,
  numberOfMarkets,
  numberOfExchanges,
  btcPrice,
  listedAt,
  tags
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
        <Globe className="text-purple-500" />
        Market Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-purple-500" />
            <h3 className="font-semibold dark:text-white">Rankings</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Market Cap Rank</p>
              <p className="text-2xl font-bold dark:text-white">#{rank}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <LinkIcon className="text-purple-500" />
            <h3 className="font-semibold dark:text-white">Trading Data</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Trading Markets</p>
              <p className="text-xl font-bold dark:text-white">{formatNumber(numberOfMarkets)}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Active Exchanges</p>
              <p className="text-xl font-bold dark:text-white">{formatNumber(numberOfExchanges)}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Hash className="text-purple-500" />
            <h3 className="font-semibold dark:text-white">Additional Info</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-gray-600 dark:text-gray-400">BTC Price</p>
              <p className="text-xl font-bold dark:text-white">₿ {parseFloat(btcPrice).toFixed(8)}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Listed Since</p>
              <p className="text-lg font-semibold dark:text-white">
                {new Date(listedAt * 1000).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};