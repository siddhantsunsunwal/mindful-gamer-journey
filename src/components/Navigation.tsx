
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ListTodo, Award, User, BarChart } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem = ({ icon, label, to, active = false }: NavItemProps) => (
  <Link 
    to={to}
    className={`relative flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
      active 
        ? 'text-appPurple after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-appPurple' 
        : 'text-gray-500 hover:text-appPurple'
    }`}
  >
    <div className="mb-1">{icon}</div>
    <span className="text-xs">{label}</span>
  </Link>
);

const Navigation = () => {
  // Determine active route based on current path
  const pathname = window.location.pathname;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-2 py-1 flex justify-around items-center shadow-sm z-10">
      <NavItem 
        icon={<Home size={20} />} 
        label="Home" 
        to="/" 
        active={pathname === '/'}
      />
      <NavItem 
        icon={<ListTodo size={20} />} 
        label="Tasks" 
        to="/tasks" 
        active={pathname === '/tasks'}
      />
      <NavItem 
        icon={<Award size={20} />} 
        label="Rewards" 
        to="/rewards" 
        active={pathname === '/rewards'}
      />
      <NavItem 
        icon={<BarChart size={20} />} 
        label="Progress" 
        to="/progress" 
        active={pathname === '/progress'}
      />
      <NavItem 
        icon={<User size={20} />} 
        label="Profile" 
        to="/profile" 
        active={pathname === '/profile'}
      />
    </div>
  );
};

export default Navigation;
