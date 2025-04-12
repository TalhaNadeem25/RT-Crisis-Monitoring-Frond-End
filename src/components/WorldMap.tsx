
import React from 'react';
import { AlertTriangle } from 'lucide-react';

type CrisisEvent = {
  id: string;
  location: string;
  severity: 'high' | 'medium' | 'low';
  coordinates?: [number, number]; // Optional coordinates
};

type WorldMapProps = {
  crisisEvents: CrisisEvent[];
};

const WorldMap: React.FC<WorldMapProps> = ({ crisisEvents = [] }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-border">
      <div className="aspect-[16/9] w-full bg-secondary grid-pattern">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-muted-foreground text-center">
            <p className="mb-2">Global Crisis Monitoring</p>
            <p className="text-xs">Powered by AI-driven real-time detection</p>
          </div>
        </div>

        {crisisEvents && crisisEvents.map((event) => (
          <div 
            key={event.id} 
            className="absolute" 
            // Note: In a real implementation, you'd calculate precise coordinates
            style={{ 
              top: event.id === '1' ? '35%' : '50%', 
              left: event.id === '1' ? '40%' : '60%' 
            }}
          >
            <div className="relative">
              <div 
                className={`
                  h-4 w-4 rounded-full 
                  ${event.severity === 'high' ? 'bg-crisis-high' : 
                    event.severity === 'medium' ? 'bg-crisis-medium' : 'bg-crisis-low'} 
                  animate-pulse
                `}
              ></div>
              <div 
                className={`
                  absolute top-0 left-0 h-4 w-4 rounded-full 
                  ${event.severity === 'high' ? 'bg-crisis-high' : 
                    event.severity === 'medium' ? 'bg-crisis-medium' : 'bg-crisis-low'} 
                  animate-ping opacity-75
                `}
              ></div>
            </div>
          </div>
        ))}
        
        <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded text-xs border border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-crisis-high"></span>
              <span>High Risk</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-crisis-medium"></span>
              <span>Medium Risk</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-crisis-low"></span>
              <span>Low Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
