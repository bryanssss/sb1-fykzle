import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb,
  TrendingUp,
  Shield,
  Target,
  PieChart,
  Clock,
  AlertTriangle,
  BookOpen,
  Brain,
  Search
} from 'lucide-react';

interface Article {
  id: number;
  title: string;
  icon: React.ReactNode;
  category: 'basics' | 'advanced' | 'safety';
  content: React.ReactNode;
}

type Category = 'all' | 'basics' | 'advanced' | 'safety';

export const InvestmentTipsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const articles: Article[] = [
    {
      id: 1,
      title: "Understanding Market Cycles",
      icon: <Clock className="text-purple-500" />,
      category: 'basics',
      content: (
        <div className="space-y-4">
          <p>Key phases of meme coin market cycles:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accumulation Phase: Early adopters begin buying</li>
            <li>Mark-Up Phase: Price starts rising, momentum builds</li>
            <li>Distribution Phase: Early investors take profits</li>
            <li>Mark-Down Phase: Price declines, volume decreases</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400">
            Understanding these cycles helps in timing entry and exit points.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Risk Management Strategies",
      icon: <Shield className="text-purple-500" />,
      category: 'safety',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Never invest more than you can afford to lose</li>
            <li>Use stop-loss orders to limit potential losses</li>
            <li>Diversify across multiple meme coins</li>
            <li>Keep majority of portfolio in established cryptocurrencies</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-4">
            <AlertTriangle className="text-yellow-500 mb-2" />
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Meme coins are highly volatile and risky investments. Always do your own research.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Technical Analysis Basics",
      icon: <TrendingUp className="text-purple-500" />,
      category: 'advanced',
      content: (
        <div className="space-y-4">
          <p>Key indicators to watch:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Trading Volume: Indicates market interest and liquidity</li>
            <li>Price Action: Identify trends and patterns</li>
            <li>Moving Averages: Track momentum and trend direction</li>
            <li>RSI: Measure overbought/oversold conditions</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Due Diligence Checklist",
      icon: <Search className="text-purple-500" />,
      category: 'basics',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Check token contract for security audits</li>
            <li>Verify team background and transparency</li>
            <li>Analyze token distribution and tokenomics</li>
            <li>Review community engagement and growth</li>
            <li>Assess marketing strategy and roadmap</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: "Advanced Trading Strategies",
      icon: <Brain className="text-purple-500" />,
      category: 'advanced',
      content: (
        <div className="space-y-4">
          <p>Advanced techniques for experienced traders:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dollar-Cost Averaging (DCA)</li>
            <li>Swing Trading</li>
            <li>Momentum Trading</li>
            <li>Arbitrage Opportunities</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            These strategies require experience and deep market understanding.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: "Security Best Practices",
      icon: <Shield className="text-purple-500" />,
      category: 'safety',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use hardware wallets for long-term storage</li>
            <li>Enable 2FA on all exchange accounts</li>
            <li>Never share private keys or seed phrases</li>
            <li>Use different passwords for each platform</li>
            <li>Be cautious of phishing attempts</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      title: "Portfolio Diversification Guide",
      icon: <PieChart className="text-purple-500" />,
      category: 'basics',
      content: (
        <div className="space-y-4">
          <p>Recommended portfolio allocation:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>60-70% Established cryptocurrencies (BTC, ETH)</li>
            <li>20-30% Mid-cap altcoins</li>
            <li>5-10% Meme coins</li>
            <li>5-10% Cash reserve for opportunities</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400">
            Adjust percentages based on your risk tolerance and market conditions.
          </p>
        </div>
      )
    }
  ];

  const filteredArticles = articles.filter(
    article => selectedCategory === 'all' || article.category === selectedCategory
  );

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
            <Lightbulb className="text-purple-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Investment Tips
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert guidance and best practices for investing in meme coins safely and effectively.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-purple-500 text-white'
                : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            All Tips
          </button>
          <button
            onClick={() => setSelectedCategory('basics')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'basics'
                ? 'bg-purple-500 text-white'
                : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            Basics
          </button>
          <button
            onClick={() => setSelectedCategory('advanced')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'advanced'
                ? 'bg-purple-500 text-white'
                : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            Advanced
          </button>
          <button
            onClick={() => setSelectedCategory('safety')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'safety'
                ? 'bg-purple-500 text-white'
                : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            Safety
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  {article.icon}
                </div>
                <h2 className="text-xl font-bold dark:text-white">{article.title}</h2>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                {article.content}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};