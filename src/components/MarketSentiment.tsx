import React from 'react';
import { TrendingUp, MessageCircle, Search, Activity, Users, BarChart2 } from 'lucide-react';

interface SentimentData {
  socialScore: number;
  searchVolume: number;
  communityGrowth: number;
  mentions: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  trendingScore: number;
}

interface MarketSentimentProps {
  name: string;
  symbol: string;
  sentimentData: SentimentData;
}

const SentimentIndicator: React.FC<{ value: number; maxValue: number }> = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-purple-500 rounded-full h-2 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive':
      return 'text-green-500';
    case 'negative':
      return 'text-red-500';
    default:
      return 'text-yellow-500';
  }
};

export const MarketSentiment: React.FC<MarketSentimentProps> = ({ name, symbol, sentimentData }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Activity className="text-purple-500" size={24} />
          <h2 className="text-2xl font-bold dark:text-white">Market Sentiment</h2>
        </div>
        <div className={`flex items-center gap-2 ${getSentimentColor(sentimentData.sentiment)}`}>
          <span className="text-lg font-semibold capitalize">{sentimentData.sentiment}</span>
          <div className="w-3 h-3 rounded-full bg-current" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-purple-500" size={18} />
                <span className="text-sm font-medium dark:text-white">Trending Score</span>
              </div>
              <span className="text-sm font-semibold dark:text-white">{sentimentData.trendingScore}/100</span>
            </div>
            <SentimentIndicator value={sentimentData.trendingScore} maxValue={100} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="text-purple-500" size={18} />
                <span className="text-sm font-medium dark:text-white">Social Score</span>
              </div>
              <span className="text-sm font-semibold dark:text-white">{sentimentData.socialScore}/100</span>
            </div>
            <SentimentIndicator value={sentimentData.socialScore} maxValue={100} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Search className="text-purple-500" size={18} />
                <span className="text-sm font-medium dark:text-white">Search Volume</span>
              </div>
              <span className="text-sm font-semibold dark:text-white">{sentimentData.searchVolume}/100</span>
            </div>
            <SentimentIndicator value={sentimentData.searchVolume} maxValue={100} />
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Community Insights</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="text-purple-500" size={18} />
                  <span className="text-sm font-medium dark:text-white">Community Growth</span>
                </div>
                <span className={`text-sm font-semibold ${sentimentData.communityGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {sentimentData.communityGrowth >= 0 ? '+' : ''}{sentimentData.communityGrowth}%
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Last 24 hours
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="text-purple-500" size={18} />
                  <span className="text-sm font-medium dark:text-white">Social Mentions</span>
                </div>
                <span className="text-sm font-semibold dark:text-white">
                  {new Intl.NumberFormat().format(sentimentData.mentions)}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Across social platforms
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
              <h4 className="text-sm font-medium mb-2 dark:text-white">Popular Discussion Topics</h4>
              <div className="flex flex-wrap gap-2">
                {['Price Action', 'Development', 'Partnerships', 'Community', 'News'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 className="text-purple-500" size={18} />
          <h3 className="text-lg font-semibold dark:text-white">Market Sentiment Analysis</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {name} ({symbol}) is currently showing {sentimentData.sentiment} sentiment in the market. 
          The coin has a trending score of {sentimentData.trendingScore}/100, indicating 
          {sentimentData.trendingScore > 75 ? ' strong' : sentimentData.trendingScore > 50 ? ' moderate' : ' low'} 
          market interest. Social media activity and community engagement suggest 
          {sentimentData.socialScore > 75 ? ' high' : sentimentData.socialScore > 50 ? ' moderate' : ' low'} 
          community confidence.
        </p>
      </div>
    </div>
  );
};