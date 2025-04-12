import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
    AlertTriangle,
    BarChart2,
    Bell,
    Brain,
    Clock,
    MapPin,
    Menu,
    Settings,
    X
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { 
    name: "Incidents", 
    path: "/incidents", 
    icon: <AlertTriangle className="h-4 w-4 mr-2" />,
    alert: true
  },
  { 
    name: "Map", 
    path: "/map", 
    icon: <MapPin className="h-4 w-4 mr-2" />
  },
  { 
    name: "History", 
    path: "/history", 
    icon: <Clock className="h-4 w-4 mr-2" />
  },
  { 
    name: "Analytics", 
    path: "/analytics", 
    icon: <BarChart2 className="h-4 w-4 mr-2" />
  },
  { 
    name: "Intelligence", 
    path: "/intelligence", 
    icon: <Brain className="h-4 w-4 mr-2" />
  },
  { 
    name: "Settings", 
    path: "/settings", 
    icon: <Settings className="h-4 w-4 mr-2" />
  },
];

interface NavbarProps {
  toggleSidebar?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and mobile menu button */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <Menu size={20} />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            
            <NavLink to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/20 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <div className="font-semibold text-lg hidden md:block">Alert AI Central</div>
            </NavLink>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="md:hidden ml-auto"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => cn(
                      "group flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-accent/50 text-accent-foreground" : "text-foreground"
                    )}
                  >
                    {item.icon}
                    {item.name}
                    {item.alert && (
                      <span className="ml-2 h-2 w-2 rounded-full bg-crisis-high" />
                    )}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Search and User Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-full max-w-md hidden lg:flex">
              <Input
                placeholder="Search incidents, locations..."
                className="pl-9 bg-secondary/50 w-full md:w-60 lg:w-72"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute inset-y-0 left-0"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Notification Bell */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-crisis-high rounded-full"></span>
                    <span className="sr-only">Notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-96 overflow-auto">
                    {[1, 2, 3].map((i) => (
                      <DropdownMenuItem key={i} className="flex flex-col items-start p-3 cursor-pointer">
                        <div className="flex items-center gap-2 w-full">
                          <div className="h-2 w-2 rounded-full bg-crisis-high"></div>
                          <span className="font-medium">New Emergency Alert</span>
                          <span className="ml-auto text-xs text-muted-foreground">5m ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Wildfire detected in Northern California, requiring immediate attention.
                        </p>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center font-medium">
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Status Badges */}
              <div className="hidden md:flex items-center gap-2">
                <Badge variant="secondary" className="bg-muted text-xs px-2 py-0">
                  <span className="w-2 h-2 rounded-full bg-crisis-high mr-1 inline-block animate-pulse"></span>
                  3 Active
                </Badge>
                <Badge variant="secondary" className="bg-muted text-xs px-2 py-0">
                  <span className="mr-1 text-crisis-medium">●</span>
                  Live
                </Badge>
              </div>
              
              {/* User Avatar */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-accent/50 text-accent-foreground" : "text-foreground"
                  )}
                  onClick={toggleMobileMenu}
                >
                  {item.icon}
                  {item.name}
                  {item.alert && (
                    <span className="ml-2 h-2 w-2 rounded-full bg-crisis-high" />
                  )}
                </NavLink>
              ))}
              
              <div className="pt-3 mt-3 border-t border-border">
                <div className="relative px-4 mb-3">
                  <Input
                    placeholder="Search incidents, locations..."
                    className="pl-9 bg-secondary/50 w-full"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute inset-y-0 left-4"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      className="h-4 w-4 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;