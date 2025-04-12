
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  BarChart3, 
  Globe, 
  History, 
  Home,
  Menu, 
  MessageSquareText, 
  Settings,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
    { name: 'Live Incidents', icon: <AlertTriangle size={20} />, path: '/incidents' },
    { name: 'Map View', icon: <Globe size={20} />, path: '/map' },
    { name: 'Historical Data', icon: <History size={20} />, path: '/history' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
    { name: 'Intelligence', icon: <MessageSquareText size={20} />, path: '/intelligence' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar flex flex-col transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "border-r border-sidebar-border shadow-lg"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <AlertTriangle size={16} className="text-primary-foreground" />
          </div>
          <h1 className="font-bold text-xl text-sidebar-foreground">CrisisCopilot</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
        >
          <X size={20} />
        </Button>
      </div>

      <div className="flex-1 py-6 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center mx-2 px-4 py-3 text-sm text-sidebar-foreground rounded-md hover:bg-sidebar-accent group transition-colors"
          >
            <span className="mr-3 text-muted-foreground group-hover:text-primary">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">RC</span>
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">Response Coordinator</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
