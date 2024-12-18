import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

interface ROICalculatorProps {
  currentPrice: string;
  name: string;
  symbol: string;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ currentPrice, name, symbol }) => {
  const [investment, setInvestment] = useState<string>('100');
  const [targetPrice, setTargetPrice] = useState<string>('');
  const [percentageChange, setPercentageChange] = useState<string>('');
  const [potentialReturns, setPotentialReturns] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [calculationType, setCalculationType] = useState<'price' | 'percentage'>('price');

  const currentPriceNum = parseFloat(currentPrice);

  useEffect(() => {
    if (!investment || isNaN(parseFloat(investment))) return;

    const investmentAmount = parseFloat(investment);
    
    if (calculationType === 'price' && targetPrice && !isNaN(parseFloat(targetPrice))) {
      const targetPriceNum = parseFloat(targetPrice);
      const returns = (investmentAmount / currentPriceNum) * targetPriceNum;
      setPotentialReturns(returns);
      setProfit(returns - investmentAmount);
      const changePercent = ((targetPriceNum - currentPriceNum) / currentPriceNum) * 100;
      setPercentageChange(changePercent.toFixed(2));
    } else if (calculationType === 'percentage' && percentageChange && !isNaN(parseFloat(percentageChange))) {
      const changePercent = parseFloat(percentageChange);
      const multiplier = 1 + (changePercent / 100);
      const returns = investmentAmount * multiplier;
      setPotentialReturns(returns);
      setProfit(returns - investmentAmount);
      const targetPrice = currentPriceNum * multiplier;
      setTargetPrice(targetPrice.toFixed(8));
    }
  }, [investment, targetPrice, percentageChange, calculationType, currentPriceNum]);

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInvestment(value);
    }
  };

  const handleTargetPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setTargetPrice(value);
      setCalculationType('price');
    }
  };

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setPercentageChange(value);
      setCalculationType('percentage');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="text-purple-500" size={24} />
        <h2 className="text-2xl font-bold dark:text-white">ROI Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Investment (USD)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={investment}
                onChange={handleInvestmentChange}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                placeholder="Enter investment amount"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Target Price ({symbol})
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={targetPrice}
                  onChange={handleTargetPriceChange}
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                  placeholder={`Current: ${formatCurrency(currentPrice)}`}
                />
              </div>
            </div>

            <div className="text-center text-gray-600 dark:text-gray-400">OR</div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Change (%)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Percent size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={percentageChange}
                  onChange={handlePercentageChange}
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                  placeholder="e.g., 100 for 2x"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Potential Returns</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Initial Investment</p>
              <p className="text-xl font-bold dark:text-white">
                {formatCurrency(investment || '0')}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Potential Value</p>
              <p className="text-xl font-bold dark:text-white">
                {formatCurrency(potentialReturns.toString())}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Profit/Loss</p>
              <p className={`text-xl font-bold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {profit >= 0 ? '+' : ''}{formatCurrency(profit.toString())}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className={profit >= 0 ? 'text-green-500' : 'text-red-500'} />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  If {name} reaches {formatCurrency(targetPrice || '0')}{' '}
                  ({percentageChange}% {parseFloat(percentageChange) >= 0 ? 'increase' : 'decrease'})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          Note: This calculator is for educational purposes only. Cryptocurrency investments are highly volatile and past performance does not guarantee future results.
        </p>
      </div>
    </div>
  );
};