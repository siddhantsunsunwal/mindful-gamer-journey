
import React, { useState } from 'react';
import ProfileSection from '@/components/ProfileSection';
import ProgressSummary from '@/components/ProgressSummary';
import MaslowHierarchy from '@/components/MaslowHierarchy';
import TaskList from '@/components/TaskList';
import BadgeDisplay, { predefinedBadges } from '@/components/BadgeDisplay';
import Navigation from '@/components/Navigation';
import WelcomeMessage from '@/components/WelcomeMessage';
import { MaslowLevel } from '@/components/TaskCard';
import DailyStreak from '@/components/DailyStreak';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  level: MaslowLevel;
  completed?: boolean;
}

const Index = () => {
  // Sample tasks - in a real app, these would come from an API/backend
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Get 7+ hours of sleep',
      description: 'Prioritize getting enough rest to maintain your energy and focus.',
      points: 30,
      level: 'physiological',
      completed: false,
    },
    {
      id: '2',
      title: 'Weekly budget review',
      description: 'Take 15 minutes to review your finances and adjust your budget.',
      points: 25,
      level: 'safety',
      completed: false,
    },
    {
      id: '3',
      title: 'Connect with a friend',
      description: 'Call or meet up with a friend you haven\'t spoken to recently.',
      points: 20,
      level: 'belonging',
      completed: false,
    },
    {
      id: '4',
      title: 'Learn something new',
      description: 'Spend 20 minutes learning a new skill or reading about a topic that interests you.',
      points: 15,
      level: 'self-actualization',
      completed: false,
    },
    {
      id: '5',
      title: 'Give yourself a compliment',
      description: 'Recognize something you did well today or a positive quality about yourself.',
      points: 10,
      level: 'esteem',
      completed: false,
    },
  ]);

  // User stats
  const userStats = {
    name: 'Alex',
    level: 3,
    points: 245,
    todayPoints: 35,
    streak: 5,
  };

  // Toggle task completion
  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Main content */}
      <div className="container mx-auto max-w-md px-4 py-6">
        {/* Profile section */}
        <ProfileSection 
          userName={userStats.name} 
          className="mb-6" 
        />

        {/* Welcome message */}
        <WelcomeMessage
          userName={userStats.name}
          className="mb-6"
        />
        
        <div className="flex gap-3 mb-6">
          {/* Progress Summary */}
          <ProgressSummary 
            level={userStats.level}
            points={userStats.points}
            todayPoints={userStats.todayPoints}
            streak={userStats.streak}
            className="flex-1"
          />
          
          {/* Daily Streak */}
          <DailyStreak days={userStats.streak} className="w-24" />
        </div>
        
        {/* Maslow Hierarchy */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Wellbeing Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <MaslowHierarchy />
          </CardContent>
        </Card>
        
        {/* Daily Tasks */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList 
              tasks={tasks} 
              onToggleTask={handleTaskToggle} 
            />
          </CardContent>
        </Card>

        {/* Badges section */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <BadgeDisplay badges={predefinedBadges} />
          </CardContent>
        </Card>
      </div>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Index;
