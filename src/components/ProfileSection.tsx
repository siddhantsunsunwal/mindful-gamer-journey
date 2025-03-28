
import React from 'react';
import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileSectionProps {
  userName: string;
  profileImage?: string;
  className?: string;
}

const ProfileSection = ({ userName, profileImage, className }: ProfileSectionProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-appPurple to-appPurple-dark flex items-center justify-center mr-3 shadow-sm">
          {profileImage ? (
            <img 
              src={profileImage} 
              alt={userName} 
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-medium">
              {userName.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <p className="font-medium text-gray-700">Hello, {userName}</p>
          <p className="text-xs text-gray-500">Let's boost your wellbeing today</p>
        </div>
      </div>

      <Button variant="outline" size="icon" className="h-8 w-8">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProfileSection;
