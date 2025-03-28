
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileSection from '@/components/ProfileSection';
import Navigation from '@/components/Navigation';
import MaslowHierarchy from '@/components/MaslowHierarchy';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Check, TrendingUp } from 'lucide-react';

const Progress = () => {
  // Sample data for charts
  const weeklyData = [
    { day: 'Mon', points: 45 },
    { day: 'Tue', points: 30 },
    { day: 'Wed', points: 60 },
    { day: 'Thu', points: 25 },
    { day: 'Fri', points: 50 },
    { day: 'Sat', points: 75 },
    { day: 'Sun', points: 40 },
  ];

  // Stats data
  const stats = [
    { label: 'Tasks Completed', value: 37, icon: <Check className="h-4 w-4 text-green-500" /> },
    { label: 'Current Streak', value: 5, icon: <Calendar className="h-4 w-4 text-appPurple" /> },
    { label: 'Weekly Growth', value: '12%', icon: <TrendingUp className="h-4 w-4 text-blue-500" /> },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <ProfileSection userName="Alex" className="mb-6" />
        
        <h1 className="text-2xl font-bold mb-4">Your Progress</h1>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-3 text-center">
                <div className="flex justify-center mb-1">{stat.icon}</div>
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Weekly Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="points" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Maslow's Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
            <MaslowHierarchy />
          </CardContent>
        </Card>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Progress;
