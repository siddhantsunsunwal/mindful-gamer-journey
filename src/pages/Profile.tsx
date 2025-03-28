
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileSection from '@/components/ProfileSection';
import Navigation from '@/components/Navigation';
import BadgeDisplay, { predefinedBadges } from '@/components/BadgeDisplay';
import { Button } from '@/components/ui/button';
import { Settings, User, Bell, Shield, Moon } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-appPurple to-appPurple-dark flex items-center justify-center mb-4">
                <span className="text-3xl text-white font-medium">A</span>
              </div>
              <h2 className="text-xl font-bold">Alex Johnson</h2>
              <p className="text-gray-500">Wellness Explorer</p>
              <div className="mt-4 flex items-center bg-appPurple/10 px-3 py-1 rounded-full">
                <span className="text-appPurple font-medium">Level 3</span>
              </div>
              <Button className="mt-6 w-full" variant="outline">
                <User className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Your Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <BadgeDisplay badges={predefinedBadges} />
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Shield className="mr-2 h-4 w-4" />
              Privacy
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Moon className="mr-2 h-4 w-4" />
              Dark Mode
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              App Settings
            </Button>
            <div className="pt-2">
              <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                Log out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Profile;
