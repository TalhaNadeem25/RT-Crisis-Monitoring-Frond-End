
import React from 'react';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';

type Insight = {
  id: string;
  type: 'prediction' | 'recommendation' | 'warning';
  title: string;
  description: string;
};

const AIDrivenInsights: React.FC = () => {
  const insights: Insight[] = [
    {
      id: '1',
      type: 'prediction',
      title: 'Potential Aftershock Risk',
      description: 'High probability of aftershocks in Istanbul within the next 48 hours. Recommend continued emergency preparedness.'
    },
    {
      id: '2',
      type: 'recommendation',
      title: 'Resource Allocation',
      description: 'Suggest mobilizing medical units and emergency supplies to affected regions in Turkey and India.'
    },
    {
      id: '3',
      type: 'warning',
      title: 'Humanitarian Crisis Escalation',
      description: 'Increasing risk of secondary health emergencies due to displacement and infrastructure damage.'
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
          <div 
            key={insight.id} 
            className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}
          >
            <div className="flex items-center space-x-2 mb-2">
              {getInsightIcon(insight.type)}
              <h4 className="font-semibold text-sm">{insight.title}</h4>
            </div>
            <p className="text-xs text-muted-foreground">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIDrivenInsights;
