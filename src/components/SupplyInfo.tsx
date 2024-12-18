import React from 'react';
import { CircleDollarSign, Coins } from 'lucide-react';
import { formatNumber } from '../utils/formatters';

interface SupplyInfoProps {
  supply: {
    confirmed?: boolean;
    circulating?: string;
    total?: string;
    maxSupply?: string;
  };
  symbol: string;
}

export const SupplyInfo: React.FC<SupplyInfoProps> = ({ supply, symbol }) => {
  if (!supply) return null;

  const circulatingSupply = supply.circulating ? parseFloat(supply.circulating) : 0;
  const totalSupply = supply.total ? parseFloat(supply.total) : 0;
  const maxSupply = supply.maxSupply ? parseFloat(supply.maxSupply) : 0;

  const circulatingPercentage = totalSupply ? (circulatingSupply / totalSupply) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
        <Coins className="text-purple-500" />
        Supply Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 dark:text-gray-400">Circulating Supply</p>
            <p className="text-xl font-semibold dark:text-white">
              {formatNumber(circulatingSupply)} {symbol}
            </p>
            {totalSupply > 0 && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 rounded-full h-2"
                    style={{ width: `${circulatingPercentage}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {circulatingPercentage.toFixed(2)}% of total supply
                </p>
              </div>
            )}
          </div>

          {totalSupply > 0 && (
            <div>
              <p className="text-gray-600 dark:text-gray-400">Total Supply</p>
              <p className="text-xl font-semibold dark:text-white">
                {formatNumber(totalSupply)} {symbol}
              </p>
            </div>
          )}

          {maxSupply > 0 && (
            <div>
              <p className="text-gray-600 dark:text-gray-400">Max Supply</p>
              <p className="text-xl font-semibold dark:text-white">
                {formatNumber(maxSupply)} {symbol}
              </p>
            </div>
          )}
        </div>

        <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <CircleDollarSign className="text-purple-500" />
            <h3 className="font-semibold dark:text-white">Supply Status</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 dark:text-gray-300">
              <span className={`w-3 h-3 rounded-full ${supply.confirmed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
              <span>Supply {supply.confirmed ? 'Verified' : 'Unverified'}</span>
            </li>
            {maxSupply > 0 && (
              <li className="flex items-center gap-2 dark:text-gray-300">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Limited Supply</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};