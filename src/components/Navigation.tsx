import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  BookOpen,
  Newspaper,
  Scale,
  Mail,
  Info,
  Lock
} from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/guide', icon: BookOpen, label: 'Guide' },
    { path: '/news', icon: Newspaper, label: 'News' },
    { path: '/compare', icon: Scale, label: 'Compare' },
    { path: '/contact', icon: Mail, label: 'Contact' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/privacy-policy', icon: Lock, label: 'Privacy' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`
      fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 
      dark:border-gray-700 py-2 px-4 z-50 transition-transform duration-300
      md:transform-none safe-area-inset
      ${isScrollingUp ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around items-center overflow-x-auto hide-scrollbar">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`
                flex flex-col items-center p-2 rounded-lg transition-colors
                min-w-[60px] touch-manipulation select-none
                ${
                  isActive(path)
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                }
              `}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};