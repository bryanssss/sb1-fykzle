import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface SearchResult {
  uuid: string;
  name: string;
  symbol: string;
  iconUrl: string;
  type: 'coin';
  description?: string;
}

export const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setSearchTerm('');
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearch = async (value: string) => {
    setSearchTerm(value);
    if (value.length >= 2) {
      setLoading(true);
      try {
        const response = await axios.get('https://api.coinranking.com/v2/coins', {
          params: {
            search: value,
            tags: ['meme'],
            limit: 5,
            orderBy: 'marketCap',
            orderDirection: 'desc'
          },
          headers: {
            'x-access-token': 'coinrankingaee56a7f976f05c65e5bdbfb2e06bc508ef6c26d701872c6'
          }
        });

        const searchResults: SearchResult[] = response.data.data.coins.map((coin: any) => ({
          uuid: coin.uuid,
          name: coin.name,
          symbol: coin.symbol,
          iconUrl: coin.iconUrl,
          type: 'coin',
          description: `${coin.symbol} - Market Cap: $${Number(coin.marketCap).toLocaleString()}`
        }));

        setResults(searchResults);
      } catch (err) {
        console.error('Search error:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setIsExpanded(false);
  };

  const handleResultClick = (uuid: string) => {
    navigate(`/coin/${uuid}`);
    clearSearch();
  };

  return (
    <div ref={containerRef} className="relative">
      <div className={`flex items-center justify-end transition-all duration-300 ${isExpanded ? 'w-full md:w-[600px]' : 'w-10'}`}>
        {isExpanded ? (
          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search coins..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white animate-fade-in"
            />
            <Search 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Search size={24} />
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fade-in">
          {loading ? (
            <div className="p-4 text-center text-gray-600 dark:text-gray-400">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-500 border-t-transparent mx-auto"></div>
            </div>
          ) : results.length > 0 ? (
            results.map((result) => (
              <button
                key={result.uuid}
                onClick={() => handleResultClick(result.uuid)}
                className="w-full p-4 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={result.iconUrl} 
                    alt={result.name} 
                    className="w-8 h-8"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {result.name} ({result.symbol})
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {result.description}
                    </p>
                  </div>
                </div>
              </button>
            ))
          ) : searchTerm.length >= 2 ? (
            <div className="p-4 text-center text-gray-600 dark:text-gray-400">
              No coins found
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};