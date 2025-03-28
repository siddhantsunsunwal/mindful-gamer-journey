
import { Check, CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MaslowLevel = 'physiological' | 'safety' | 'belonging' | 'esteem' | 'self-actualization';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  points: number;
  level: MaslowLevel;
  completed?: boolean;
  className?: string;
  onClick?: () => void;
}

const TaskCard = ({ 
  id, 
  title, 
  description, 
  points, 
  level, 
  completed = false,
  className,
  onClick
}: TaskCardProps) => {
  return (
    <div 
      className={cn(`task-card ${level}`, className, {
        'opacity-75': completed
      })}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{description}</p>
        </div>
        <button 
          className={cn(
            "flex-shrink-0 transition-all duration-300 hover:scale-110",
            completed ? "text-appPurple" : "text-gray-300"
          )}
          aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {completed ? <CheckCircle className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
        </button>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <div className={cn(
            "text-xs rounded-full px-2 py-0.5",
            {
              'bg-maslow-physiological/30 text-pink-700': level === 'physiological',
              'bg-maslow-safety/30 text-amber-700': level === 'safety',
              'bg-maslow-belonging/30 text-purple-700': level === 'belonging',
              'bg-maslow-esteem/30 text-blue-700': level === 'esteem',
              'bg-maslow-selfActualization/30 text-green-700': level === 'self-actualization',
            }
          )}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </div>
        </div>
        <div className="flex items-center text-xs font-medium text-appPurple">
          <span>+{points} points</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
