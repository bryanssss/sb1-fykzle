import React, { useState, useRef, useEffect } from 'react';
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Link as LinkIcon,
  ChevronDown,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquare,
  SendHorizontal,
  Check,
  Copy
} from 'lucide-react';

interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ 
  title, 
  description = "Check out this awesome meme coin tracker!", 
  url = window.location.href 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
  };

  const handleShare = async (platform?: string) => {
    if (!platform) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        // If Web Share API fails or is not supported, copy to clipboard as fallback
        await copyToClipboard();
      }
    } else {
      window.open(shareLinks[platform as keyof typeof shareLinks], '_blank');
    }
  };

  const copyToClipboard = async () => {
    try {
      const shareText = `${title}\n${description}\n${url}`;
      await navigator.clipboard.writeText(shareText);
      setShowCopiedTooltip(true);
      setTimeout(() => setShowCopiedTooltip(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = `${title}\n${description}\n${url}`;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 2000);
      } catch (err) {
        console.error('Fallback copying failed:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
        <Share2 size={16} />
        Share:
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleShare('twitter')}
          className="p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
          title="Share on Twitter"
        >
          <Twitter size={18} />
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"
          title="Share on Facebook"
        >
          <Facebook size={18} />
        </button>
        <button
          onClick={copyToClipboard}
          className="p-2 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-full transition-colors relative"
          title="Copy to clipboard"
        >
          {showCopiedTooltip ? <Check size={18} /> : <Copy size={18} />}
          {showCopiedTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
              Copied to clipboard!
            </div>
          )}
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center gap-1"
            title="More sharing options"
          >
            <ChevronDown size={18} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={18} className="text-blue-600" />
                LinkedIn
              </button>
              <button
                onClick={() => handleShare('reddit')}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <MessageSquare size={18} className="text-orange-600" />
                Reddit
              </button>
              <button
                onClick={() => handleShare('telegram')}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <SendHorizontal size={18} className="text-blue-500" />
                Telegram
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <MessageCircle size={18} className="text-green-500" />
                WhatsApp
              </button>
              <button
                onClick={() => handleShare('email')}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail size={18} className="text-gray-600 dark:text-gray-400" />
                Email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};