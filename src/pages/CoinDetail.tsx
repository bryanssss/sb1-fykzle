import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  ArrowLeft, 
  ExternalLink,
  TrendingUp,
  Globe,
  ShoppingCart,
  DollarSign
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Coin } from '../types';
import { PriceStats } from '../components/PriceStats';
import { SupplyInfo } from '../components/SupplyInfo';
import { MarketStats } from '../components/MarketStats';
import { CoinLinks } from '../components/CoinLinks';
import { ROICalculator } from '../components/ROICalculator';
import { MarketSentiment } from '../components/MarketSentiment';
import { SocialShare } from '../components/SocialShare';

type TimeFrame = '24h' | '7d' | '30d' | '3m' | '1y' | 'all';

const timeFrames: { label: string; value: TimeFrame }[] = [
  { label: '24h', value: '24h' },
  { label: '7d', value: '7d' },
  { label: '30d', value: '30d' },
  { label: '3m', value: '3m' },
  { label: '1y', value: '1y' },
  { label: 'All', value: 'all' }
];

const affiliateLinks = [
  {
    name: 'LBank',
    url: 'https://www.lbank.com/en-US/login/?icode=3XCT1',
    description: 'Trade with low fees and high liquidity',
    icon: <DollarSign className="text-purple-500" size={24} />
  },
  {
    name: 'KuCoin',
    url: 'https://www.kucoin.com/r/rf/QBSQ8NJA',
    description: 'Popular exchange with advanced trading features',
    icon: <ShoppingCart className="text-purple-500" size={24} />
  }
];

export const CoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<Coin | null>(null);
  const [history, setHistory] = useState<Array<{ timestamp: number; price: string }>>([]);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('24h');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoinData = async () => {
      if (!id) return;
      
      try {
        const [coinResponse, historyResponse] = await Promise.all([
          axios.get(`https://api.coinranking.com/v2/coin/${id}`, {
            headers: {
              'x-access-token': 'coinrankingaee56a7f976f05c65e5bdbfb2e06bc508ef6c26d701872c6'
            }
          }),
          axios.get(`https://api.coinranking.com/v2/coin/${id}/history`, {
            params: { timePeriod: timeFrame },
            headers: {
              'x-access-token': 'coinrankingaee56a7f976f05c65e5bdbfb2e06bc508ef6c26d701872c6'
            }
          })
        ]);

        setCoin(coinResponse.data.data.coin);
        const sortedHistory = historyResponse.data.data.history.sort((a: any, b: any) => a.timestamp - b.timestamp);
        setHistory(sortedHistory || []);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch coin data');
        setLoading(false);
      }
    };

    fetchCoinData();
    const interval = setInterval(fetchCoinData, 60000);
    return () => clearInterval(interval);
  }, [id, timeFrame]);

  const formatXAxis = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    if (timeFrame === '24h') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const formatYAxis = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value.toFixed(4)}`;
  };

  const formatTooltipValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(value);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !coin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl">{error}</p>
          <Link 
            to="/"
            className="mt-4 inline-flex items-center px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const chartData = history.map(point => ({
    timestamp: point.timestamp,
    price: parseFloat(point.price)
  }));

  const minPrice = Math.min(...chartData.map(d => d.price));
  const maxPrice = Math.max(...chartData.map(d => d.price));
  const priceMargin = (maxPrice - minPrice) * 0.1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 py-8">
      <div className="container mx-auto px-4">
        <Link 
          to="/"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to All Coins
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img src={coin.iconUrl} alt={coin.name} className="w-12 h-12 sm:w-16 sm:h-16" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">{coin.name}</h1>
                  <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl">({coin.symbol})</span>
                </div>
                {coin.websiteUrl && (
                  <a
                    href={coin.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 mt-1"
                  >
                    <Globe size={16} />
                    <span className="text-sm">Official Website</span>
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-2xl sm:text-3xl font-bold mb-2 dark:text-white">
                {formatTooltipValue(parseFloat(coin.price))}
              </div>
              <div className={`flex items-center ${parseFloat(coin.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                <TrendingUp size={20} className={`mr-1 ${parseFloat(coin.change) < 0 ? 'transform rotate-180' : ''}`} />
                <span className="font-semibold">{coin.change}%</span>
              </div>
            </div>
          </div>

          {/* Affiliate Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {affiliateLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-purple-50 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  <div>
                    <span className="font-semibold dark:text-white">Buy on {link.name}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                  </div>
                </div>
                <ExternalLink size={20} className="text-gray-400" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto pb-2">
            {timeFrames.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setTimeFrame(value)}
                className={`px-4 py-2 rounded-lg transition-colors flex-none ${
                  timeFrame === value
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="h-[400px] sm:h-[500px] bg-white dark:bg-gray-800 p-2 sm:p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#374151"
                  vertical={false}
                />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={formatXAxis}
                  interval="preserveStartEnd"
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  axisLine={false}
                  tickLine={false}
                  minTickGap={30}
                  height={50}
                />
                <YAxis
                  domain={[minPrice - priceMargin, maxPrice + priceMargin]}
                  tickFormatter={formatYAxis}
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  axisLine={false}
                  tickLine={false}
                  width={80}
                  orientation="right"
                />
                <Tooltip
                  formatter={(value: number) => [formatTooltipValue(value), 'Price']}
                  labelFormatter={(label) => formatXAxis(label)}
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '8px 12px'
                  }}
                  itemStyle={{ color: '#E5E7EB' }}
                  labelStyle={{ color: '#E5E7EB' }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                  animationDuration={500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <PriceStats
            price={coin.price}
            change={coin.change}
            marketCap={coin.marketCap}
            volume24h={coin.volume24h}
            allTimeHigh={coin.allTimeHigh}
            allTimeLow={coin.allTimeLow}
          />
        </div>

        <div className="space-y-8 mt-8">
          <MarketSentiment
            name={coin.name}
            symbol={coin.symbol}
            sentimentData={{
              socialScore: 85,
              searchVolume: 72,
              communityGrowth: 12.5,
              mentions: 15420,
              sentiment: 'positive',
              trendingScore: 88
            }}
          />

          <ROICalculator
            currentPrice={coin.price}
            name={coin.name}
            symbol={coin.symbol}
          />

          {coin.supply && (
            <SupplyInfo supply={coin.supply} symbol={coin.symbol} />
          )}

          <MarketStats
            rank={coin.rank}
            numberOfMarkets={coin.numberOfMarkets}
            numberOfExchanges={coin.numberOfExchanges}
            btcPrice={coin.btcPrice}
            listedAt={coin.listedAt}
            tags={coin.tags}
          />

          {coin.links && coin.links.length > 0 && (
            <CoinLinks
              websiteUrl={coin.websiteUrl}
              twitterUsername={coin.twitterUsername}
              githubUrl={coin.githubUrl}
              redditUrl={coin.redditUrl}
              mediumUrl={coin.mediumUrl}
              discordUrl={coin.discordUrl}
              telegramUrl={coin.telegramUrl}
              links={coin.links}
            />
          )}

          {coin.description && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">About {coin.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{coin.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};