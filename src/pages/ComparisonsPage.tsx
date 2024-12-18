import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  ArrowLeft, 
  Scale,
  TrendingUp,
  DollarSign,
  BarChart2,
  Users,
  Clock,
  Search,
  X
} from 'lucide-react';
import { SocialShare } from '../components/SocialShare';
import { Coin } from '../types';
import { formatCurrency, formatPercentage } from '../utils/formatters';

export const ComparisonsPage = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [selectedCoins, setSelectedCoins] = useState<Coin[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get('https://api.coinranking.com/v2/coins', {
          params: {
            tags: ['meme'],
            limit: 50,
            orderBy: 'marketCap',
            orderDirection: 'desc'
          },
          headers: {
            'x-access-token': 'coinrankingaee56a7f976f05c65e5bdbfb2e06bc508ef6c26d701872c6'
          }
        });
        setCoins(response.data.data.coins);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch coins data');
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const filteredCoins = coins.filter(coin => 
    !selectedCoins.find(selected => selected.uuid === coin.uuid) &&
    (coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddCoin = (coin: Coin) => {
    if (selectedCoins.length < 3) {
      setSelectedCoins([...selectedCoins, coin]);
    }
  };

  const handleRemoveCoin = (coinId: string) => {
    setSelectedCoins(selectedCoins.filter(coin => coin.uuid !== coinId));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Dashboard
        </Link>

        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="text-purple-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Compare Meme Coins
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Compare different meme coins side by side and analyze their performance metrics.
          </p>
          <div className="flex justify-center">
            <SocialShare 
              title="Compare Meme Coins Side by Side"
              description="Compare different meme coins based on price, market cap, volume, and community metrics."
            />
          </div>
        </header>

        {/* Search and Selected Coins */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search coins to compare..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
            />
          </div>

          {/* Selected Coins Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {selectedCoins.map((coin) => (
              <div
                key={coin.uuid}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img src={coin.iconUrl} alt={coin.name} className="w-8 h-8" />
                  <span className="font-medium dark:text-white">{coin.name}</span>
                </div>
                <button
                  onClick={() => handleRemoveCoin(coin.uuid)}
                  className="p-1 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            {Array.from({ length: 3 - selectedCoins.length }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-4 flex items-center justify-center text-gray-500 dark:text-gray-400"
              >
                Select a coin to compare
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {selectedCoins.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-purple-50 dark:bg-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Metric</th>
                      {selectedCoins.map((coin) => (
                        <th key={coin.uuid} className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          {coin.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Price</td>
                      {selectedCoins.map((coin) => (
                        <td key={coin.uuid} className="px-6 py-4 text-sm font-medium dark:text-white">
                          {formatCurrency(coin.price)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">24h Change</td>
                      {selectedCoins.map((coin) => (
                        <td 
                          key={coin.uuid} 
                          className={`px-6 py-4 text-sm font-medium ${
                            parseFloat(coin.change) >= 0 ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {formatPercentage(coin.change)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Market Cap</td>
                      {selectedCoins.map((coin) => (
                        <td key={coin.uuid} className="px-6 py-4 text-sm font-medium dark:text-white">
                          {formatCurrency(coin.marketCap, true)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">24h Volume</td>
                      {selectedCoins.map((coin) => (
                        <td key={coin.uuid} className="px-6 py-4 text-sm font-medium dark:text-white">
                          {formatCurrency(coin.volume24h, true)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Rank</td>
                      {selectedCoins.map((coin) => (
                        <td key={coin.uuid} className="px-6 py-4 text-sm font-medium dark:text-white">
                          #{coin.rank}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Coin Selection List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCoins.map((coin) => (
              <button
                key={coin.uuid}
                onClick={() => handleAddCoin(coin)}
                disabled={selectedCoins.length >= 3}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center gap-3 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed text-left"
              >
                <img src={coin.iconUrl} alt={coin.name} className="w-8 h-8" />
                <div>
                  <div className="font-medium dark:text-white">{coin.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{coin.symbol}</div>
                </div>
                <div className={`ml-auto ${parseFloat(coin.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {formatPercentage(coin.change)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};