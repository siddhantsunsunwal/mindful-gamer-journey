
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileSection from '@/components/ProfileSection';
import Navigation from '@/components/Navigation';
import BadgeDisplay, { predefinedBadges } from '@/components/BadgeDisplay';
import { Award, Gift, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Rewards = () => {
  // Sample rewards data
  const availableRewards = [
    {
      id: '1',
      name: 'Meditation Collection',
      description: 'Unlock exclusive guided meditations',
      points: 500,
      progress: 48,
    },
    {
      id: '2',
      name: 'Custom Theme',
      description: 'Personalize your app experience',
      points: 750,
      progress: 32,
    },
    {
      id: '3',
      name: 'Expert Content',
      description: 'Access premium wellness articles',
      points: 1000,
      progress: 24,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <ProfileSection userName="Alex" className="mb-6" />
        
        <h1 className="text-2xl font-bold mb-4">Rewards</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-appPurple" />
              Your Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BadgeDisplay badges={predefinedBadges} />
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2 h-5 w-5 text-appPurple" />
              Available Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableRewards.map((reward) => (
                <div key={reward.id} className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{reward.name}</h3>
                      <p className="text-sm text-gray-500">{reward.description}</p>
                    </div>
                    <div className="flex items-center text-sm font-medium text-appPurple">
                      <Zap className="h-4 w-4 mr-1" />
                      {reward.points} pts
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{reward.progress}%</span>
                    </div>
                    <Progress value={reward.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Rewards;
