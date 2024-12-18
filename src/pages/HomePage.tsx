import React, { useState, useEffect } from 'react';
import { Rocket, Sparkles, TrendingUp } from 'lucide-react';
import axios from 'axios';
import { CoinCard } from '../components/CoinCard';
import { StatCard } from '../components/StatCard';
import { FAQ } from '../components/FAQ';
import { SocialShare } from '../components/SocialShare';
import { CommunityPolls } from '../components/CommunityPolls';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { SearchBar } from '../components/SearchBar';
import { Coin } from '../types';

export const HomePage: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState<'all' | 'performers' | 'recent' | 'market'>('all');

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
        setError('Failed to fetch meme coins data');
        setLoading(false);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 60000);
    return () => clearInterval(interval);
  }, []);

  const filterCoins = () => {
    switch (viewMode) {
      case 'performers':
        return [...coins].sort((a, b) => parseFloat(b.change) - parseFloat(a.change));
      case 'recent':
        return [...coins].sort((a, b) => b.listedAt - a.listedAt);
      case 'market':
        return [...coins].sort((a, b) => parseFloat(b.marketCap) - parseFloat(a.marketCap));
      default:
        return coins;
    }
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
    <>
      <DisclaimerBanner />
      <div className="min-h-screen py-12 mb-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="text-purple-500" size={40} />
              <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Meme Coin Tracker
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              Discover the latest trends in the meme coin universe. Track real-time prices, market movements, and find the next moonshot. 🚀
            </p>
            <div className="flex justify-end mb-8">
              <SearchBar />
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <StatCard
              icon={TrendingUp}
              title="Top Performers"
              description="Best performing meme coins"
              isActive={viewMode === 'performers'}
              onClick={() => setViewMode('performers')}
              iconColor="text-purple-500"
              bgColor="bg-purple-100"
            />
            <StatCard
              icon={Sparkles}
              title="Real-Time Updates"
              description="Latest market movements"
              isActive={viewMode === 'recent'}
              onClick={() => setViewMode('recent')}
              iconColor="text-pink-500"
              bgColor="bg-pink-100"
            />
            <StatCard
              icon={Rocket}
              title="Market Leaders"
              description="Highest market cap coins"
              isActive={viewMode === 'market'}
              onClick={() => setViewMode('market')}
              iconColor="text-blue-500"
              bgColor="bg-blue-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {filterCoins().map((coin) => (
              <CoinCard key={coin.uuid} coin={coin} />
            ))}
          </div>

          <CommunityPolls />
          <FAQ />
        </div>
      </div>
    </>
  );
};