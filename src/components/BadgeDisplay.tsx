
import React from 'react';
import { cn } from '@/lib/utils';
import { Award, Flame, Heart, Shield, Zap } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  unlocked: boolean;
}

interface BadgeDisplayProps {
  badges: Badge[];
  className?: string;
}

const BadgeDisplay = ({ badges, className }: BadgeDisplayProps) => {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {badges.map((badge) => (
        <div key={badge.id} className="flex flex-col items-center">
          <div className={cn("badge-item", { "locked": !badge.unlocked })}>
            {badge.icon}
          </div>
          <span className="text-xs mt-1 text-gray-600">{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

// Predefined badge set
export const predefinedBadges = [
  {
    id: 'streak-7',
    name: '7 Day Streak',
    icon: <Flame size={18} />,
    unlocked: true,
  },
  {
    id: 'self-care',
    name: 'Self Care',
    icon: <Heart size={18} />,
    unlocked: true,
  },
  {
    id: 'achiever',
    name: 'Achiever',
    icon: <Award size={18} />,
    unlocked: false,
  },
  {
    id: 'safety-first',
    name: 'Safety First',
    icon: <Shield size={18} />,
    unlocked: false,
  },
  {
    id: 'energized',
    name: 'Energized',
    icon: <Zap size={18} />,
    unlocked: true,
  },
];

export default BadgeDisplay;
