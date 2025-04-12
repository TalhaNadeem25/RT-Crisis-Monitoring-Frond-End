import React from 'react';

const WorldMap: React.FC = () => {
  // This is a simplified map representation. In a real app, you'd use a proper map library like react-simple-maps or leaflet
  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-border">
      <div className="aspect-[16/9] w-full bg-secondary grid-pattern">
        {/* Placeholder for the actual map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-muted-foreground text-center">
            <p className="mb-2">Interactive World Map</p>
            <p className="text-xs">Would connect to a real mapping service in production</p>
          </div>
        </div>

        {/* Fake disaster markers */}
        <div className="absolute top-1/3 left-1/4">
          <div className="relative">
            <div className="h-4 w-4 rounded-full bg-crisis-high animate-pulse"></div>
            <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-crisis-high animate-ping opacity-75"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-2/3">
          <div className="relative">
            <div className="h-4 w-4 rounded-full bg-crisis-medium animate-pulse"></div>
            <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-crisis-medium animate-ping opacity-75"></div>
          </div>
        </div>
        
        <div className="absolute top-2/3 left-1/2">
          <div className="relative">
            <div className="h-4 w-4 rounded-full bg-crisis-low animate-pulse"></div>
            <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-crisis-low animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Radar animation overlay */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full border-2 border-primary/30 opacity-30">
          <div className="absolute inset-0 origin-center animate-radar-scan">
            <div className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded text-xs border border-border">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-crisis-high"></span>
            <span>High</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-crisis-medium"></span>
            <span>Medium</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-crisis-low"></span>
            <span>Low</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
