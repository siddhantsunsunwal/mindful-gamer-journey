
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, TrendingUp } from 'lucide-react';

interface ProgressSummaryProps {
  level: number;
  points: number;
  todayPoints: number;
  streak: number;
  className?: string;
}

const ProgressSummary = ({ level, points, todayPoints, streak, className }: ProgressSummaryProps) => {
  // Calculate progress to next level (for demo purposes: assume 100 points per level)
  const nextLevelPoints = level * 100;
  const progressPercent = (points % 100);

  return (
    <div className={cn("bg-white rounded-xl p-4 shadow-sm", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm text-gray-500 font-medium">Current Level</h2>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">{level}</span>
            <span className="ml-2 text-xs bg-appPurple/10 text-appPurple rounded-full px-2 py-0.5 flex items-center">
              <ArrowUp className="h-3 w-3 mr-0.5" />
              {streak} day streak
            </span>
          </div>
        </div>
        
        <div className="progress-ring w-14 h-14">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#eee"
              strokeWidth="3"
            />
            <circle
              className="progress-ring-circle"
              cx="18" 
              cy="18" 
              r="16"
              fill="none"
              stroke="#9b87f5"
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 16}`}
              strokeDashoffset={`${2 * Math.PI * 16 * (1 - progressPercent / 100)}`}
            />
            <text 
              x="18" 
              y="18" 
              textAnchor="middle" 
              dy=".3em" 
              className="text-xs font-medium"
              fill="#333"
            >
              {progressPercent}%
            </text>
          </svg>
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="text-center py-2 px-3 bg-gray-50 rounded-lg flex-1 mr-2">
          <h3 className="text-xs text-gray-500 mb-1">Total Points</h3>
          <p className="text-gray-900 font-semibold">{points}</p>
        </div>
        <div className="text-center py-2 px-3 bg-gray-50 rounded-lg flex-1">
          <h3 className="text-xs text-gray-500 mb-1">Today</h3>
          <div className="flex items-center justify-center">
            <TrendingUp className="text-green-500 h-3 w-3 mr-1" />
            <p className="text-gray-900 font-semibold">+{todayPoints}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;
