
import React from 'react';
import { cn } from '@/lib/utils';
import TaskCard, { MaslowLevel } from '@/components/TaskCard';

export interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  level: MaslowLevel;
  completed?: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  className?: string;
  title?: string;
}

const TaskList = ({ tasks, onToggleTask, className, title }: TaskListProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {title && <h2 className="text-lg font-medium mb-3">{title}</h2>}
      
      {tasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No tasks available</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              points={task.points}
              level={task.level}
              completed={task.completed}
              onClick={() => onToggleTask(task.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
