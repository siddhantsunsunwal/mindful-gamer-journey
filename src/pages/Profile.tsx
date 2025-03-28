
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileSection from '@/components/ProfileSection';
import Navigation from '@/components/Navigation';
import BadgeDisplay, { predefinedBadges } from '@/components/BadgeDisplay';
import { Button } from '@/components/ui/button';
import { Settings, User, Bell, Shield, Moon, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ProfileData {
  username: string | null;
  level: number | null;
  streak: number | null;
  wellbeing_points: number | null;
  avatar_url: string | null;
}

const Profile = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState<ProfileData>({
    username: null,
    level: 1,
    streak: 0,
    wellbeing_points: 0,
    avatar_url: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('username, level, streak, wellbeing_points, avatar_url')
          .eq('id', user.id)
          .single();
        
        if (error) throw error;
        
        if (data) {
          setProfileData({
            username: data.username || user.email?.split('@')[0] || 'User',
            level: data.level || 1,
            streak: data.streak || 0,
            wellbeing_points: data.wellbeing_points || 0,
            avatar_url: data.avatar_url || null
          });
        }
      } catch (error: any) {
        console.error('Error fetching profile:', error);
        toast({
          title: 'Error loading profile',
          description: error.message,
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, toast]);

  const handleLogout = async () => {
    await signOut();
  };

  const displayName = profileData.username || user?.email?.split('@')[0] || 'User';
  const userInitial = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-appPurple to-appPurple-dark flex items-center justify-center mb-4">
                {profileData.avatar_url ? (
                  <img 
                    src={profileData.avatar_url} 
                    alt={displayName} 
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-3xl text-white font-medium">{userInitial}</span>
                )}
              </div>
              <h2 className="text-xl font-bold">{displayName}</h2>
              <p className="text-gray-500">Wellness Explorer</p>
              <div className="mt-4 flex items-center bg-appPurple/10 px-3 py-1 rounded-full">
                <span className="text-appPurple font-medium">Level {profileData.level}</span>
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
              <Button 
                variant="outline" 
                className="w-full text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
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
