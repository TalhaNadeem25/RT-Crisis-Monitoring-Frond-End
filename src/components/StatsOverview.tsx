
import React from 'react';
import { ArrowUpRight, Server, AlertOctagon, CheckCircle2, Clock3 } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatCardProps = {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
};

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'neutral',
  color = 'default'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'success': return 'text-futuristic-success';
      case 'warning': return 'text-futuristic-warning';
      case 'danger': return 'text-futuristic-danger';
      default: return 'text-foreground';
    }
  };

  const getTrendIcon = () => {
    if (trend === 'up') return <ArrowUpRight size={14} className="text-futuristic-danger" />;
    if (trend === 'down') return <ArrowUpRight size={14} className="text-futuristic-success transform rotate-90" />;
    return null;
  };

  return (
    <div className="data-card p-4">
      <div className="flex justify-between items-start">
        <p className="text-xs text-muted-foreground">{title}</p>
        <div className={cn("p-2 rounded-full bg-secondary/70", getColorClass())}>
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <p className={cn("text-2xl font-semibold", getColorClass())}>{value}</p>
        {change && (
          <div className="flex items-center mt-1 text-xs">
            {getTrendIcon()}
            <span className={cn(
              trend === 'up' ? 'text-futuristic-danger' : 
              trend === 'down' ? 'text-futuristic-success' : 'text-muted-foreground'
            )}>
              {change}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard 
        title="Active Incidents" 
        value="8"
        change="+2 since yesterday"
        icon={<AlertOctagon size={16} />}
        trend="up"
        color="danger"
      />
      
      <StatCard 
        title="Response Time (avg)" 
        value="42m"
        change="12% faster"
        icon={<Clock3 size={16} />}
        trend="down"
        color="success"
      />
      
      <StatCard 
        title="System Status" 
        value="Online"
        icon={<Server size={16} />}
        color="primary"
      />
      
      <StatCard 
        title="Resolved Today" 
        value="3"
        change="+1 from yesterday"
        icon={<CheckCircle2 size={16} />}
        trend="up"
        color="success"
      />
    </div>
  );
};

export default StatsOverview;
