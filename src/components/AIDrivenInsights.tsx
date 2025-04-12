
import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Info } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

type Insight = {
  id: string;
  type: 'prediction' | 'recommendation' | 'warning';
  title: string;
  description: string;
  details?: string;
};

const AIDrivenInsights: React.FC = () => {
  const insights: Insight[] = [
    {
      id: '1',
      type: 'prediction',
      title: 'Potential Aftershock Risk',
      description: 'High probability of aftershocks in Istanbul within the next 48 hours. Recommend continued emergency preparedness.',
      details: 'Based on historical seismic patterns, there is a 75% chance of 3+ magnitude aftershocks following the main earthquake event. Areas south of the epicenter are at highest risk.'
    },
    {
      id: '2',
      type: 'recommendation',
      title: 'Resource Allocation',
      description: 'Suggest mobilizing medical units and emergency supplies to affected regions in Turkey and India.',
      details: 'Analysis of current hospital capacity shows shortage in eastern districts. Recommend deploying 4 mobile medical units with trauma capabilities and 2 water purification systems.'
    },
    {
      id: '3',
      type: 'warning',
      title: 'Humanitarian Crisis Escalation',
      description: 'Increasing risk of secondary health emergencies due to displacement and infrastructure damage.',
      details: 'Displacement camps already at 85% capacity. Disease outbreak risk increased due to compromised water systems and crowded shelter conditions. Priority: sanitation resources.'
    }
  ];

  const getInsightIcon = (type: Insight['type']) => {
    switch (type) {
      case 'prediction': return <TrendingUp className="text-primary" size={16} />;
      case 'recommendation': return <Brain className="text-futuristic-warning" size={16} />;
      case 'warning': return <AlertTriangle className="text-crisis-high" size={16} />;
    }
  };

  const getInsightColor = (type: Insight['type']) => {
    switch (type) {
      case 'prediction': return 'bg-primary/10 border-primary/20';
      case 'recommendation': return 'bg-futuristic-warning/10 border-futuristic-warning/20';
      case 'warning': return 'bg-crisis-high/10 border-crisis-high/20';
    }
  };

  return (
    <div className="h-full data-card overflow-hidden flex flex-col">
      <div className="p-4 border-b border-accent/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain size={18} className="text-primary" />
          <h3 className="font-medium">AI-Driven Insights</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {insights.map((insight) => (
          <HoverCard key={insight.id}>
            <HoverCardTrigger asChild>
              <div 
                className={`p-4 rounded-lg border ${getInsightColor(insight.type)} cursor-pointer transition-all hover:shadow-md`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getInsightIcon(insight.type)}
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                  </div>
                  {insight.details && (
                    <Info size={14} className="text-muted-foreground" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </HoverCardTrigger>
            {insight.details && (
              <HoverCardContent className="data-card border border-accent/30 p-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Detailed Analysis</h4>
                  <p className="text-xs">{insight.details}</p>
                </div>
              </HoverCardContent>
            )}
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default AIDrivenInsights;
