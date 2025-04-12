
import React from 'react';
import { Clock, MapPin, AlertTriangle, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type SeverityLevel = 'high' | 'medium' | 'low' | 'inactive';

type StatusCardProps = {
  title: string;
  location: string;
  time?: string;  // Made optional with default
  date?: string;  // Made optional with default
  description: string;
  affectedCount: number;
  severity: SeverityLevel;
  category: string;
};

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  location,
  time = 'Recent',
  date = 'Today',
  description,
  affectedCount,
  severity,
  category
}) => {
  const getSeverityColor = (severity: SeverityLevel) => {
    switch (severity) {
      case 'high': return 'bg-crisis-high';
      case 'medium': return 'bg-crisis-medium';
      case 'low': return 'bg-crisis-low';
      case 'inactive': return 'bg-crisis-inactive';
    }
  };

  const getSeverityAnimation = (severity: SeverityLevel) => {
    if (severity === 'high') return 'animate-blink-warning';
    if (severity === 'medium') return 'animate-pulse-slow';
    return '';
  };

  return (
    <div className={cn(
      "data-card overflow-hidden",
      severity === 'high' && "animate-glow-pulse"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-accent/10">
        <h3 className="font-medium text-foreground">{title}</h3>
        <div className="flex items-center space-x-2">
          <Badge className={cn(
            "text-xs font-semibold px-2", 
            getSeverityColor(severity),
            getSeverityAnimation(severity)
          )}>
            {severity.toUpperCase()}
          </Badge>
          <Badge variant="outline" className="text-xs bg-secondary/50">
            {category}
          </Badge>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start space-x-2 text-sm">
          <MapPin size={16} className="mt-0.5 text-muted-foreground" />
          <span>{location}</span>
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
        
        <p className="text-sm mt-2">{description}</p>
        
        <div className="flex items-center space-x-1 text-xs bg-secondary/70 p-2 rounded">
          <Users size={14} className="text-primary" />
          <span className="font-medium">{affectedCount.toLocaleString()}</span>
          <span className="text-muted-foreground">people affected</span>
        </div>
        
        <div className="flex justify-between pt-2">
          <Button variant="outline" size="sm" className="text-xs">
            View Details
          </Button>
          <Button variant="secondary" size="sm" className="text-xs">
            Response Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
