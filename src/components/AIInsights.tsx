
import React from 'react';
import { Brain, ChevronDown, LightbulbIcon, PanelTopClose } from 'lucide-react';
import { Button } from '@/components/ui/button';

type InsightProps = {
  title: string;
  content: string;
  type: 'analysis' | 'recommendation' | 'alert';
};

const AIInsights: React.FC = () => {
  const insights: InsightProps[] = [
    {
      title: 'Istanbul Earthquake Analysis',
      content: 'Based on historical data and current reports, this earthquake has affected primarily the northern districts. Expect aftershocks in the next 24-48 hours. Power outages are reported in 4 districts.',
      type: 'analysis'
    },
    {
      title: 'Recommended Response',
      content: '1. Deploy mobile medical units to Besiktas, Kadikoy, and Sisli districts. 2. Establish temporary shelters in city parks. 3. Coordinate with Turkish Red Crescent for emergency supplies.',
      type: 'recommendation'
    },
    {
      title: 'Early Warning',
      content: 'Social media analysis indicates potential flooding in southern Chennai due to heavy rainfall. Monitors suggest this may develop into a crisis within 24 hours.',
      type: 'alert'
    }
  ];

  const getIcon = (type: InsightProps['type']) => {
    switch (type) {
      case 'analysis': return <Brain size={16} className="text-primary" />;
      case 'recommendation': return <LightbulbIcon size={16} className="text-futuristic-warning" />;
      case 'alert': return <PanelTopClose size={16} className="text-futuristic-danger" />;
    }
  };

  const getBgColor = (type: InsightProps['type']) => {
    switch (type) {
      case 'analysis': return 'bg-primary/5 border-primary/20';
      case 'recommendation': return 'bg-futuristic-warning/5 border-futuristic-warning/20';
      case 'alert': return 'bg-futuristic-danger/5 border-futuristic-danger/20';
    }
  };

  return (
    <div className="data-card overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-accent/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Brain size={18} className="text-primary" />
          <h3 className="font-medium">AI Insights</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          View All
          <ChevronDown size={14} className="ml-1" />
        </Button>
      </div>
      
      <div className="p-4 space-y-3 flex-1 overflow-y-auto">
        {insights.map((insight, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-md border ${getBgColor(insight.type)}`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              {getIcon(insight.type)}
              <h4 className="text-sm font-medium">{insight.title}</h4>
            </div>
            <p className="text-xs leading-normal">{insight.content}</p>
          </div>
        ))}
      </div>

      <div className="p-3 bg-secondary/50 border-t border-accent/10 text-xs text-center text-muted-foreground">
        AI analysis powered by machine learning models trained on historical crisis data
      </div>
    </div>
  );
};

export default AIInsights;
