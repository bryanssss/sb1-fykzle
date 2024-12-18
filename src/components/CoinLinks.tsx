import React from 'react';
import {
  Globe,
  Twitter,
  Github,
  MessageCircle as Reddit,
  FileText as Medium,
  MessageSquare as Discord,
  Send as Telegram,
  Link as LinkIcon
} from 'lucide-react';

interface CoinLinksProps {
  websiteUrl?: string;
  twitterUsername?: string;
  githubUrl?: string;
  redditUrl?: string;
  mediumUrl?: string;
  discordUrl?: string;
  telegramUrl?: string;
  links?: Array<{ name: string; url: string; type: string }>;
}

export const CoinLinks: React.FC<CoinLinksProps> = ({
  websiteUrl,
  twitterUsername,
  githubUrl,
  redditUrl,
  mediumUrl,
  discordUrl,
  telegramUrl,
  links = []
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
        <LinkIcon className="text-purple-500" />
        Official Links & Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Social Media</h3>
          <div className="space-y-3">
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Globe size={20} />
                <span>Official Website</span>
              </a>
            )}
            {twitterUsername && (
              <a
                href={`https://twitter.com/${twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-400"
              >
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            )}
            {redditUrl && (
              <a
                href={redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-600"
              >
                <Reddit size={20} />
                <span>Reddit</span>
              </a>
            )}
            {mediumUrl && (
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Medium size={20} />
                <span>Medium</span>
              </a>
            )}
            {discordUrl && (
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500"
              >
                <Discord size={20} />
                <span>Discord</span>
              </a>
            )}
            {telegramUrl && (
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                <Telegram size={20} />
                <span>Telegram</span>
              </a>
            )}
          </div>
        </div>

        {links && links.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3 dark:text-white">Additional Resources</h3>
            <div className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <LinkIcon size={20} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};