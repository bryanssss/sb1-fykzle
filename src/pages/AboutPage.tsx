import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Target, 
  Award,
  BookOpen,
  Lock,
  Eye,
  AlertTriangle,
  ArrowLeft,
  BarChart2,
  Globe,
  Clock,
  Zap,
  Database
} from 'lucide-react';
import { SocialShare } from '../components/SocialShare';

export const AboutPage = () => {
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
            <Shield className="text-purple-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              About Meme Coin Tracker
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Your comprehensive platform for meme coin analysis, tracking, and education.
          </p>
          <div className="flex justify-center">
            <SocialShare 
              title="About Meme Coin Tracker"
              description="Learn about our mission to provide transparent and accurate meme coin information."
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We strive to bring transparency and clarity to the meme coin ecosystem. Our platform 
              combines real-time data analytics, community insights, and educational resources to help 
              investors make informed decisions in this dynamic market segment.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold dark:text-white">Our Team</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our team consists of cryptocurrency experts, data analysts, and blockchain developers 
              with extensive experience in digital assets and decentralized finance. We're passionate 
              about democratizing access to meme coin market intelligence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="text-purple-500" size={20} />
              <h3 className="text-lg font-semibold dark:text-white">Data Sources</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We aggregate data from multiple reliable sources including major exchanges, blockchain 
              explorers, and social media platforms to provide comprehensive market insights.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-purple-500" size={20} />
              <h3 className="text-lg font-semibold dark:text-white">Real-Time Updates</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform provides real-time price tracking, market cap updates, and trading volume 
              data to keep you informed about the latest market movements.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-purple-500" size={20} />
              <h3 className="text-lg font-semibold dark:text-white">Market Analysis</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We offer advanced market analysis tools, technical indicators, and sentiment tracking 
              to help you understand market trends and make better decisions.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-purple-500" size={24} />
            <h2 className="text-2xl font-bold dark:text-white">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="text-purple-500" size={20} />
                <h3 className="font-semibold dark:text-white">Complete Transparency</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We provide full transparency in our data sources, methodologies, and affiliate relationships.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="text-purple-500" size={20} />
                <h3 className="font-semibold dark:text-white">Educational Focus</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive educational resources to help users understand meme coins and crypto markets.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BarChart2 className="text-purple-500" size={20} />
                <h3 className="font-semibold dark:text-white">Advanced Analytics</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Sophisticated analysis tools and metrics for both beginners and experienced traders.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="text-purple-500" size={20} />
                <h3 className="font-semibold dark:text-white">Global Coverage</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Tracking meme coins and market trends from exchanges worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-purple-500" size={24} />
            <h2 className="text-2xl font-bold dark:text-white">Our Commitment</h2>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              We are committed to providing accurate, unbiased information about meme coins and the 
              cryptocurrency market. Our goal is to empower users with the tools and knowledge they 
              need to navigate this exciting but volatile market segment responsibly.
            </p>
            <p>
              We continuously update our platform with new features and improvements based on user 
              feedback and market developments. Our team works tirelessly to ensure that you have 
              access to the most reliable and up-to-date information available.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">Important Disclaimers</h2>
          </div>
          <div className="space-y-4 text-yellow-700 dark:text-yellow-300">
            <p>
              <strong>Investment Risk:</strong> Cryptocurrency investments, especially meme coins, are highly volatile and risky. 
              Never invest more than you can afford to lose.
            </p>
            <p>
              <strong>Not Financial Advice:</strong> The information provided on this website is for educational purposes only 
              and should not be considered financial advice. Always conduct your own research before making investment decisions.
            </p>
            <p>
              <strong>Affiliate Disclosure:</strong> Some links on our platform may be affiliate links. We always clearly 
              mark these links, and they don't affect our analysis or recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};