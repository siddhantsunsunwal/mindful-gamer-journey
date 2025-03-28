
import React from 'react';
import { cn } from '@/lib/utils';
import { Flame } from 'lucide-react';

interface DailyStreakProps {
  days: number;
  className?: string;
}

const DailyStreak = ({ days, className }: DailyStreakProps) => {
  return (
    <div className={cn("flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 shadow-sm", className)}>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-2">
          <Flame className="text-white h-6 w-6" />
        </div>
        <span className="text-xl font-bold text-gray-900">{days}</span>
        <span className="text-sm text-gray-600">{days === 1 ? 'Day' : 'Days'} Streak</span>
      </div>
    </div>
  );
};

export default DailyStreak;
