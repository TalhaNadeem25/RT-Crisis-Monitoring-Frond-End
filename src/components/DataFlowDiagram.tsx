
import React from 'react';
import { ArrowDown, Database, Globe, Cpu, BarChart4, Search, Filter, Map } from 'lucide-react';

const DataFlowDiagram: React.FC = () => {
  const steps = [
    { id: 1, name: 'Source Scraping', icon: <Globe size={24} className="text-primary" />, description: 'Collect data from various internet sources' },
    { id: 2, name: 'Tweets / News', icon: <BarChart4 size={24} className="text-primary" />, description: 'Process tweets and news articles' },
    { id: 3, name: 'Gemini Classification', icon: <Cpu size={24} className="text-primary" />, description: 'AI classifies content as crisis-related or not' },
    { id: 4, name: 'Group into Events', icon: <Filter size={24} className="text-primary" />, description: 'Group by type + location + time' },
    { id: 5, name: 'Gemini Summarization', icon: <Cpu size={24} className="text-primary" />, description: 'AI summarizes and structures events' },
    { id: 6, name: 'MongoDB Atlas', icon: <Database size={24} className="text-primary" />, description: 'Store structured event data' },
    { id: 7, name: 'Frontend UI', icon: <Map size={24} className="text-primary" />, description: 'Live updates, map, search, filter' },
  ];

  return (
    <div className="data-card p-4 overflow-hidden">
      <h3 className="text-lg font-medium mb-4 text-center">System Data Flow</h3>
      <div className="space-y-1">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center p-3 bg-secondary/40 rounded-md border border-accent/10">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary mr-3">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{step.name}</div>
                <div className="text-xs text-muted-foreground">{step.description}</div>
              </div>
              <div className="text-xs font-mono text-muted-foreground">Step {step.id}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown size={16} className="text-muted-foreground" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DataFlowDiagram;
