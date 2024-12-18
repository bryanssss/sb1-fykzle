import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  TrendingUp,
  Search,
  DollarSign,
  Shield,
  BookOpen,
  ArrowLeft,
  Rocket,
  Target,
  Brain,
  Wallet,
  BarChart2,
  Users,
  Lock,
  Globe,
  MessageCircle
} from 'lucide-react';
import { SocialShare } from '../components/SocialShare';

const GuideSection: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
        {icon}
      </div>
      <h2 className="text-xl font-bold dark:text-white">{title}</h2>
    </div>
    <div className="space-y-3 text-gray-600 dark:text-gray-300">
      {children}
    </div>
  </div>
);

export const BeginnersGuide = () => {
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
            <BookOpen className="text-purple-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Complete Guide to Meme Coins
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to understanding, researching, and investing in meme coins safely.
          </p>
          <div className="flex justify-center mt-4">
            <SocialShare 
              title="Complete Guide to Meme Coin Investing"
              description="Learn everything you need to know about investing in meme coins safely and effectively."
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-xl shadow-lg">
            <Rocket className="mb-4" size={32} />
            <h2 className="text-2xl font-bold mb-4">What are Meme Coins?</h2>
            <p className="text-white/90 leading-relaxed">
              Meme coins are cryptocurrencies that originated from internet memes or viral content. Unlike traditional 
              cryptocurrencies, they often start as jokes but can gain significant value through community support 
              and social media popularity. Examples include Dogecoin, Shiba Inu, and Pepe.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">
            <Target className="mb-4" size={32} />
            <h2 className="text-2xl font-bold mb-4">Key Characteristics</h2>
            <ul className="space-y-2 text-white/90">
              <li>• Community-driven growth and development</li>
              <li>• High volatility and price swings</li>
              <li>• Strong social media presence</li>
              <li>• Often inspired by popular culture</li>
              <li>• Usually have large token supplies</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <GuideSection icon={<AlertTriangle className="text-red-500" size={24} />} title="Understanding the Risks">
            <div className="space-y-4">
              <p className="font-semibold text-red-500 dark:text-red-400">
                Before investing in meme coins, understand these critical risks:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Extreme price volatility - values can change dramatically within minutes</li>
                <li>Pump and dump schemes - coordinated price manipulation</li>
                <li>Rug pulls - developers abandoning projects with investor funds</li>
                <li>Limited utility - many projects lack real-world use cases</li>
                <li>Market manipulation - susceptible to whale activity</li>
                <li>Regulatory risks - uncertain legal status in many jurisdictions</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mt-4">
                <p className="text-red-700 dark:text-red-300 text-sm">
                  Never invest more than you can afford to lose. Meme coins should only represent a small portion of your portfolio.
                </p>
              </div>
            </div>
          </GuideSection>

          <GuideSection icon={<Search className="text-blue-500" size={24} />} title="How to Research Meme Coins">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">1. Community Analysis</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Monitor social media presence (Twitter, Reddit, Telegram)</li>
                  <li>Evaluate community size and engagement levels</li>
                  <li>Check growth rate of followers and community members</li>
                  <li>Assess quality of discussions and community sentiment</li>
                  <li>Look for active developer and community involvement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">2. Technical Analysis</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Review token distribution and tokenomics</li>
                  <li>Check liquidity locks and smart contract audits</li>
                  <li>Analyze trading volume and market capitalization</li>
                  <li>Examine price history and volatility patterns</li>
                  <li>Verify contract ownership and security features</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">3. Project Fundamentals</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Research the development team background</li>
                  <li>Review whitepaper and roadmap</li>
                  <li>Check for unique features or use cases</li>
                  <li>Assess marketing strategy and partnerships</li>
                  <li>Evaluate long-term sustainability plans</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection icon={<Wallet className="text-green-500" size={24} />} title="Getting Started with Meme Coins">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Setting Up Your Wallet</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Choose a secure cryptocurrency wallet</li>
                  <li>Enable two-factor authentication (2FA)</li>
                  <li>Backup your recovery phrase securely</li>
                  <li>Never share private keys or seed phrases</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Buying Your First Meme Coins</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Register on a reputable cryptocurrency exchange</li>
                  <li>Complete identity verification (KYC)</li>
                  <li>Start with small investments to learn the process</li>
                  <li>Use limit orders to control entry prices</li>
                  <li>Keep records of all transactions for tax purposes</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection icon={<BarChart2 className="text-purple-500" size={24} />} title="Trading Strategies">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Basic Trading Principles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dollar-cost averaging (DCA) for reducing risk</li>
                  <li>Setting stop-loss orders to protect capital</li>
                  <li>Taking profits at predetermined levels</li>
                  <li>Diversifying across multiple projects</li>
                  <li>Monitoring market sentiment and trends</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Risk Management</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Only invest disposable income</li>
                  <li>Use position sizing strategies</li>
                  <li>Keep emergency funds separate</li>
                  <li>Avoid emotional trading decisions</li>
                  <li>Regular portfolio rebalancing</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection icon={<Lock className="text-yellow-500" size={24} />} title="Security Best Practices">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Wallet Security</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use hardware wallets for long-term storage</li>
                  <li>Enable all available security features</li>
                  <li>Regular security audits of connected apps</li>
                  <li>Keep software and firmware updated</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Exchange Security</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use strong, unique passwords</li>
                  <li>Enable 2FA with authenticator apps</li>
                  <li>Verify withdrawal addresses carefully</li>
                  <li>Be cautious of phishing attempts</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          <GuideSection icon={<Globe className="text-indigo-500" size={24} />} title="Community Engagement">
            <div className="space-y-4">
              <p>
                Active participation in meme coin communities can provide valuable insights and early information about 
                project developments. Here's how to engage effectively:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Join official Telegram groups and Discord servers</li>
                <li>Follow project developers and influencers on Twitter</li>
                <li>Participate in community discussions and governance</li>
                <li>Attend virtual events and AMAs</li>
                <li>Contribute to community initiatives</li>
              </ul>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <p className="text-sm">
                  Remember: While community engagement is important, always verify information independently and be 
                  wary of potential scams or manipulation attempts.
                </p>
              </div>
            </div>
          </GuideSection>

          <GuideSection icon={<MessageCircle className="text-pink-500" size={24} />} title="Common Questions">
            <div className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold dark:text-white">Q: How much should I invest in meme coins?</h3>
                  <p>A: Only invest what you can afford to lose completely. A common recommendation is no more than 5-10% of your crypto portfolio.</p>
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Q: How do I spot potential scams?</h3>
                  <p>A: Watch for red flags like anonymous teams, unrealistic promises, pressure to buy quickly, and lack of clear utility or purpose.</p>
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Q: When should I take profits?</h3>
                  <p>A: Set clear profit targets before investing and stick to them. Consider taking partial profits to secure gains while maintaining exposure.</p>
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Q: How important is timing?</h3>
                  <p>A: While timing is important, it's nearly impossible to perfectly time the market. Focus on research and risk management instead.</p>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>
      </div>
    </div>
  );
};