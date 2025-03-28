
import React from 'react';
import { cn } from '@/lib/utils';

interface WelcomeMessageProps {
  userName: string;
  className?: string;
}

// This component provides a motivational welcome message based on time of day
const WelcomeMessage = ({ userName, className }: WelcomeMessageProps) => {
  const getCurrentTimeMessage = () => {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const getMotivationalQuote = () => {
    const quotes = [
      "Small steps lead to big changes.",
      "Every task completed is a step toward your best self.",
      "Your wellbeing matters – prioritize it today.",
      "Progress is progress, no matter how small.",
      "Today is another chance to grow."
    ];
    
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return (
    <div className={cn("bg-gradient-to-br from-appPurple/10 to-appPurple/20 p-4 rounded-xl", className)}>
      <h2 className="text-lg font-medium text-gray-800">{getCurrentTimeMessage()}, {userName}!</h2>
      <p className="text-sm text-gray-600 mt-1">{getMotivationalQuote()}</p>
    </div>
  );
};

export default WelcomeMessage;
