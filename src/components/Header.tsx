
import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 w-full p-3 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu size={20} />
          </Button>
          
          <div className="relative w-full max-w-md hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search incidents, locations..."
              className="pl-9 bg-secondary/50"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Button variant="ghost" size="icon">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-crisis-high rounded-full"></span>
              </Button>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <Badge variant="secondary" className="bg-muted text-xs px-2 py-0">
                <span className="w-2 h-2 rounded-full bg-crisis-high mr-1 inline-block animate-pulse"></span>
                3 Active Crises
              </Badge>
              <Badge variant="secondary" className="bg-muted text-xs px-2 py-0">
                <span className="mr-1 text-crisis-medium">●</span>
                Live Updates
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
