import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ComparisonMetricCardProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const ComparisonMetricCard: React.FC<ComparisonMetricCardProps> = ({
  icon: Icon,
  title,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl transition-all duration-300 flex items-center gap-3
        ${
          isActive
            ? 'bg-purple-500 text-white shadow-lg scale-105'
            : 'bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-gray-700'
        }`}
    >
      <Icon size={24} />
      <span className="font-semibold">{title}</span>
    </button>
  );
};