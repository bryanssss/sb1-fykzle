import React, { useState } from 'react';
import { MessageCircle, TrendingUp, Users, Star, ThumbsUp, Share2, MessageSquare, Clock } from 'lucide-react';

interface Discussion {
  id: string;
  title: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies: number;
  tags: string[];
  isLiked?: boolean;
  isSaved?: boolean;
}

// Mock data for initial discussions
const mockDiscussions: Discussion[] = [
  {
    id: '1',
    title: "What's your take on the latest PEPE pump?",
    author: "CryptoEnthusiast",
    content: "The recent price action on PEPE has been incredible. What's driving this momentum and how long do you think it will last?",
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    likes: 42,
    replies: 18,
    tags: ['PEPE', 'Price Discussion', 'Analysis']
  },
  {
    id: '2',
    title: "Technical Analysis: DOGE forming a bullish pattern?",
    author: "ChartMaster",
    content: "Looking at the 4H chart, DOGE seems to be forming a potential bull flag. Here's what I'm seeing...",
    timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    likes: 35,
    replies: 12,
    tags: ['DOGE', 'Technical Analysis', 'Trading']
  },
  {
    id: '3',
    title: "New meme coin launch: Community thoughts?",
    author: "MemeHunter",
    content: "Just discovered a new meme coin launching tomorrow. The team looks solid and they've passed audit. Anyone else looking into this?",
    timestamp: new Date(Date.now() - 10800000), // 3 hours ago
    likes: 28,
    replies: 24,
    tags: ['New Projects', 'Due Diligence', 'Research']
  }
];

const trendingTopics = [
  { name: 'PEPE Analysis', count: 1234 },
  { name: 'DOGE News', count: 856 },
  { name: 'Trading Strategies', count: 654 },
  { name: 'New Listings', count: 432 },
  { name: 'Technical Analysis', count: 321 }
];

export const CommunitySpace: React.FC = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>(mockDiscussions);
  const [newPost, setNewPost] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newDiscussion: Discussion = {
      id: (discussions.length + 1).toString(),
      title: newPost,
      author: "You",
      content: newPost,
      timestamp: new Date(),
      likes: 0,
      replies: 0,
      tags: selectedTags,
    };

    setDiscussions([newDiscussion, ...discussions]);
    setNewPost('');
    setSelectedTags([]);
  };

  const handleLike = (id: string) => {
    setDiscussions(discussions.map(discussion => 
      discussion.id === id 
        ? { 
            ...discussion, 
            likes: discussion.isLiked ? discussion.likes - 1 : discussion.likes + 1,
            isLiked: !discussion.isLiked 
          }
        : discussion
    ));
  };

  const handleSave = (id: string) => {
    setDiscussions(discussions.map(discussion => 
      discussion.id === id 
        ? { ...discussion, isSaved: !discussion.isSaved }
        : discussion
    ));
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Community Space
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSortBy('recent')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                sortBy === 'recent'
                  ? 'bg-purple-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Clock size={18} />
              Recent
            </button>
            <button
              onClick={() => setSortBy('popular')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                sortBy === 'popular'
                  ? 'bg-purple-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <TrendingUp size={18} />
              Popular
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Discussion Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* New Post Form */}
            <form onSubmit={handlePostSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="text-purple-500" />
                <h3 className="text-lg font-semibold dark:text-white">Start a Discussion</h3>
              </div>
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your thoughts with the community..."
                className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white mb-4"
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {['Analysis', 'Question', 'News', 'Discussion'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTags(prev => 
                        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                      )}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-purple-500 text-white'
                          : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={!newPost.trim()}
                  className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
                >
                  Post
                </button>
              </div>
            </form>

            {/* Discussions List */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <article
                  key={discussion.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white mb-1">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{discussion.author}</span>
                        <span>•</span>
                        <span>{formatTimeAgo(discussion.timestamp)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSave(discussion.id)}
                      className={`p-2 rounded-full transition-colors ${
                        discussion.isSaved
                          ? 'text-yellow-500'
                          : 'text-gray-400 hover:text-yellow-500'
                      }`}
                    >
                      <Star size={20} className={discussion.isSaved ? 'fill-current' : ''} />
                    </button>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {discussion.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                    <button
                      onClick={() => handleLike(discussion.id)}
                      className={`flex items-center gap-1 transition-colors ${
                        discussion.isLiked ? 'text-purple-500' : 'hover:text-purple-500'
                      }`}
                    >
                      <ThumbsUp size={18} className={discussion.isLiked ? 'fill-current' : ''} />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-purple-500 transition-colors">
                      <MessageSquare size={18} />
                      <span>{discussion.replies}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-purple-500 transition-colors">
                      <Share2 size={18} />
                      <span>Share</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-purple-500" />
                <h3 className="text-lg font-semibold dark:text-white">Community Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15.2K</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">892</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Online</div>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-purple-500" />
                <h3 className="text-lg font-semibold dark:text-white">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="flex items-center justify-between p-2 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        #{index + 1}
                      </span>
                      <span className="font-medium dark:text-white">{topic.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {topic.count} posts
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};