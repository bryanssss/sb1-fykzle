import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  likes: number;
  tags: string[];
}

const polls: Poll[] = [
  {
    id: '1',
    question: 'Best platform for meme coin trading?',
    options: [
      { id: '1a', text: 'LBank', votes: 1245 },
      { id: '1b', text: 'KuCoin', votes: 892 },
      { id: '1c', text: 'Binance', votes: 1567 },
      { id: '1d', text: 'Other', votes: 433 }
    ],
    likes: 234,
    tags: ['exchanges', 'trading']
  },
  {
    id: '2',
    question: 'Most promising meme coin category?',
    options: [
      { id: '2a', text: 'Dog-themed', votes: 2341 },
      { id: '2b', text: 'Food-themed', votes: 1122 },
      { id: '2c', text: 'Internet culture', votes: 1876 },
      { id: '2d', text: 'Other themes', votes: 567 }
    ],
    likes: 445,
    tags: ['trends', 'analysis']
  },
  {
    id: '3',
    question: 'Most important factor for meme coin success?',
    options: [
      { id: '3a', text: 'Community size', votes: 2567 },
      { id: '3b', text: 'Utility/Use case', votes: 1890 },
      { id: '3c', text: 'Marketing', votes: 2234 },
      { id: '3d', text: 'Development team', votes: 1456 }
    ],
    likes: 567,
    tags: ['research', 'fundamentals']
  },
  {
    id: '4',
    question: 'Preferred holding strategy for meme coins?',
    options: [
      { id: '4a', text: 'Short-term trading', votes: 1789 },
      { id: '4b', text: 'Mid-term (3-6 months)', votes: 2345 },
      { id: '4c', text: 'Long-term (1+ year)', votes: 1567 },
      { id: '4d', text: 'Depends on the coin', votes: 2890 }
    ],
    likes: 345,
    tags: ['strategy', 'investment']
  }
];

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const CommunityPolls: React.FC = () => {
  const [votedPolls, setVotedPolls] = useState<Set<string>>(new Set());
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [likedPolls, setLikedPolls] = useState<Set<string>>(new Set());

  const handleVote = (pollId: string, optionId: string) => {
    if (!votedPolls.has(pollId)) {
      setVotedPolls(new Set([...votedPolls, pollId]));
      setSelectedOptions({ ...selectedOptions, [pollId]: optionId });
    }
  };

  const handleLike = (pollId: string) => {
    if (likedPolls.has(pollId)) {
      const newLikedPolls = new Set(likedPolls);
      newLikedPolls.delete(pollId);
      setLikedPolls(newLikedPolls);
    } else {
      setLikedPolls(new Set([...likedPolls, pollId]));
    }
  };

  return (
    <section className="py-12 bg-purple-50 dark:bg-gray-900 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Community Polls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {polls.map((poll) => (
            <div
              key={poll.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4 dark:text-white">{poll.question}</h3>
              
              <div className="space-y-3">
                {poll.options.map((option) => {
                  const isVoted = votedPolls.has(poll.id);
                  const isSelected = selectedOptions[poll.id] === option.id;
                  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
                  const percentage = ((option.votes + (isSelected ? 1 : 0)) / (totalVotes + (isVoted ? 1 : 0)) * 100).toFixed(1);

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleVote(poll.id, option.id)}
                      disabled={votedPolls.has(poll.id)}
                      className={`w-full p-3 rounded-lg transition-all relative overflow-hidden ${
                        isSelected
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                          : isVoted
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400'
                      }`}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <span>{option.text}</span>
                        {isVoted && (
                          <span className="text-sm font-medium">
                            {percentage}% ({formatNumber(option.votes + (isSelected ? 1 : 0))})
                          </span>
                        )}
                      </div>
                      {isVoted && (
                        <div
                          className={`absolute inset-0 ${
                            isSelected ? 'bg-purple-100 dark:bg-purple-900/50' : 'bg-gray-100 dark:bg-gray-700/50'
                          }`}
                          style={{ width: `${percentage}%`, transition: 'width 0.3s ease-in-out' }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handleLike(poll.id)}
                  className={`flex items-center gap-1 ${
                    likedPolls.has(poll.id)
                      ? 'text-red-500'
                      : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={16} className={likedPolls.has(poll.id) ? 'fill-current' : ''} />
                  {formatNumber(poll.likes + (likedPolls.has(poll.id) ? 1 : 0))}
                </button>
                <div className="flex gap-2">
                  {poll.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};