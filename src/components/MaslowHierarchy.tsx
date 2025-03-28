
import React from 'react';
import { cn } from '@/lib/utils';
import { Brain, Heart, Home, Shield, Utensils } from 'lucide-react';

interface MaslowLevel {
  name: string;
  color: string;
  bgColor: string;
  progress: number;
  icon: React.ReactNode;
}

interface MaslowHierarchyProps {
  className?: string;
}

const MaslowHierarchy = ({ className }: MaslowHierarchyProps) => {
  // Sample data - in a real app, this would come from the user's progress
  const levels: MaslowLevel[] = [
    { 
      name: 'Physiological', 
      color: 'bg-maslow-physiological',
      bgColor: 'bg-maslow-physiological/20',
      progress: 75, 
      icon: <Utensils className="text-pink-600" />
    },
    { 
      name: 'Safety', 
      color: 'bg-maslow-safety',
      bgColor: 'bg-maslow-safety/20', 
      progress: 60, 
      icon: <Shield className="text-amber-600" />
    },
    { 
      name: 'Belonging', 
      color: 'bg-maslow-belonging',
      bgColor: 'bg-maslow-belonging/20',
      progress: 45, 
      icon: <Heart className="text-purple-600" />
    },
    { 
      name: 'Esteem', 
      color: 'bg-maslow-esteem',
      bgColor: 'bg-maslow-esteem/20',
      progress: 30, 
      icon: <Home className="text-blue-600" />
    },
    { 
      name: 'Self-Actualization', 
      color: 'bg-maslow-selfActualization',
      bgColor: 'bg-maslow-selfActualization/20',
      progress: 15, 
      icon: <Brain className="text-green-600" />
    },
  ];

  return (
    <div className={cn("pyramid-container relative w-full max-w-md mx-auto", className)}>
      <div className="pyramid flex flex-col items-center">
        {levels.map((level, index) => {
          const width = 100 - index * 15; // Decreasing width for each level going up
          
          return (
            <div 
              key={level.name}
              className={cn(
                "pyramid-level relative mb-2 rounded-lg flex items-center justify-between transition-all",
                level.bgColor
              )}
              style={{ width: `${width}%` }}
            >
              <div className="p-3 flex items-center">
                <div className={cn("p-1.5 rounded-full mr-2", level.color)}>
                  {level.icon}
                </div>
                <span className="font-medium text-sm">{level.name}</span>
              </div>
              
              <div className="progress-container h-2 bg-gray-100 rounded-full mr-3 w-20 overflow-hidden">
                <div 
                  className={cn("h-full rounded-full", level.color)}
                  style={{ width: `${level.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaslowHierarchy;
