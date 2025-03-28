
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskList from '@/components/TaskList';
import ProfileSection from '@/components/ProfileSection';
import Navigation from '@/components/Navigation';
import { MaslowLevel } from '@/components/TaskCard';

interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  level: MaslowLevel;
  completed?: boolean;
}

const Tasks = () => {
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

  // Toggle task completion
  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  // Filter tasks by level
  const getTasksByLevel = (level: MaslowLevel | 'all') => {
    if (level === 'all') return tasks;
    return tasks.filter(task => task.level === level);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <ProfileSection userName="Alex" className="mb-6" />
        
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        
        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="physiological">Basic</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="belonging">Social</TabsTrigger>
            <TabsTrigger value="esteem">Esteem</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={getTasksByLevel('all')} 
                  onToggleTask={handleTaskToggle} 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="physiological">
            <Card>
              <CardHeader>
                <CardTitle>Physiological Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={getTasksByLevel('physiological')} 
                  onToggleTask={handleTaskToggle} 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle>Safety Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={getTasksByLevel('safety')} 
                  onToggleTask={handleTaskToggle} 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="belonging">
            <Card>
              <CardHeader>
                <CardTitle>Belonging Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={getTasksByLevel('belonging')} 
                  onToggleTask={handleTaskToggle} 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="esteem">
            <Card>
              <CardHeader>
                <CardTitle>Esteem Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList 
                  tasks={getTasksByLevel('esteem')} 
                  onToggleTask={handleTaskToggle} 
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Tasks;
