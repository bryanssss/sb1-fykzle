import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  iconColor: string;
  bgColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  description,
  isActive,
  onClick,
  iconColor,
  bgColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-white/80 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 transition-all duration-300 
        ${isActive ? 'ring-2 ring-purple-500 shadow-lg scale-105' : 'hover:shadow-md hover:scale-102'}`}
    >
      <div className={`p-3 ${bgColor} rounded-lg`}>
        <Icon className={iconColor} size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </button>
  );
};