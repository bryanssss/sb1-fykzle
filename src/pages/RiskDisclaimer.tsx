import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle,
  ArrowLeft,
  Shield,
  Brain,
  DollarSign,
  TrendingUp,
  Lock,
  Users
} from 'lucide-react';

export const RiskDisclaimer = () => {
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
            <AlertTriangle className="text-yellow-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-600 via-red-500 to-red-600 bg-clip-text text-transparent">
              Risk Disclaimer
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Understanding the risks associated with meme coin and cryptocurrency investments.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">High-Risk Investment Warning</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Cryptocurrency investments, particularly meme coins, are subject to extreme price volatility and carry a high degree of risk. You should be aware that you could lose some or all of your invested capital.
              </p>
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg my-4">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  Never invest more than you can afford to lose. Cryptocurrency investments should only represent a small portion of a diversified investment portfolio.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-purple-500" size={20} />
                <h3 className="text-lg font-semibold dark:text-white">Market Risks</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Extreme price volatility</li>
                <li>• Market manipulation risks</li>
                <li>• Liquidity risks</li>
                <li>• Regulatory uncertainty</li>
                <li>• Technological risks</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="text-purple-500" size={20} />
                <h3 className="text-lg font-semibold dark:text-white">Investment Risks</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Potential for total loss</li>
                <li>• Unproven business models</li>
                <li>• Limited track record</li>
                <li>• High correlation with market sentiment</li>
                <li>• Dependency on community support</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Security Risks</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Cryptocurrency investments face various security risks, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Wallet security compromises</li>
                <li>Smart contract vulnerabilities</li>
                <li>Exchange hacks</li>
                <li>Phishing attacks</li>
                <li>Scams and fraudulent projects</li>
              </ul>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  Always use reputable exchanges, secure wallets, and enable all available security features to protect your investments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Risk Management Strategies</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                To minimize risks when investing in meme coins:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Only invest what you can afford to lose</li>
                <li>Diversify your investment portfolio</li>
                <li>Research thoroughly before investing</li>
                <li>Use secure wallets and exchanges</li>
                <li>Set clear entry and exit strategies</li>
                <li>Monitor your investments regularly</li>
                <li>Be wary of social media hype and FOMO</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl">
            <p className="text-center text-yellow-700 dark:text-yellow-300">
              This information is provided for educational purposes only and should not be considered financial advice. 
              Always conduct your own research and consult with financial professionals before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};