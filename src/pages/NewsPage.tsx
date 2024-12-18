import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, RefreshCw, Clock, User, ExternalLink, Calendar } from 'lucide-react';
import { SocialShare } from '../components/SocialShare';
import axios from 'axios';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author?: string;
}

export const NewsPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const cleanDescription = (description: string) => {
    return description
      .replace(/<[^>]+>/g, '')
      .replace(/\s*a&#8230;$/, '')
      .replace(/&#8230;/g, '...')
      .trim();
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      // Using CryptoCompare News API instead of RSS feed
      const response = await axios.get('https://min-api.cryptocompare.com/data/v2/news/?categories=Meme&excludeCategories=Sponsored', {
        headers: {
          'Authorization': 'Apikey 02a8686e9c3e7b2d2c3a7c9e3e5c7b2d2c3a7c9e3e5c7b2d2c3a7c9e3e5c7b2'
        }
      });

      const newsItems: NewsItem[] = response.data.Data.slice(0, 15).map((item: any) => ({
        title: item.title,
        link: item.url,
        pubDate: new Date(item.published_on * 1000).toISOString(),
        description: item.body,
        author: item.source
      }));

      setNews(newsItems);
      setLastUpdated(new Date());
      setError('');
    } catch (err) {
      setError('Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
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
            onClick={fetchNews} 
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
            <Newspaper className="text-purple-500" size={40} />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Latest Meme Coin News
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
            <Clock size={16} />
            <p>Last updated: {lastUpdated?.toLocaleString()}</p>
            <button 
              onClick={fetchNews}
              className="ml-2 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              title="Refresh news"
            >
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="flex justify-center">
            <SocialShare 
              title="Latest Meme Coin News and Updates"
              description="Stay updated with the latest news and developments in the meme coin ecosystem."
            />
          </div>
        </header>

        <div className="space-y-6">
          {news.map((item, index) => {
            const { date, time } = formatDateTime(item.pubDate);
            return (
              <article 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.author && (
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{item.author}</span>
                    </div>
                  )}
                </div>
                
                <h2 className="text-xl font-bold mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-2"
                  >
                    <span className="flex-1">{item.title}</span>
                    <ExternalLink size={18} className="flex-shrink-0 mt-1 opacity-50" />
                  </a>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-3">
                  {cleanDescription(item.description)}
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{time}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};