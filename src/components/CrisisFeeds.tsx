
import React from 'react';
import { Zap, AlertCircle, Globe, Twitter } from 'lucide-react';

type CrisisFeedItem = {
  id: string;
  source: 'twitter' | 'news' | 'alert';
  content: string;
  timestamp: string;
  location: string;
};

const CrisisFeeds: React.FC = () => {
  const feedItems: CrisisFeedItem[] = [
    {
      id: '1',
      source: 'twitter',
      content: 'Massive earthquake reported in Istanbul. Buildings damaged, people evacuating.',
      timestamp: '2m ago',
      location: 'Istanbul, Turkey'
    },
    {
      id: '2',
      source: 'news',
      content: 'Flooding in Chennai causing widespread disruption. Rescue operations underway.',
      timestamp: '15m ago',
      location: 'Chennai, India'
    },
    {
      id: '3',
      source: 'alert',
      content: 'Severe storm warning issued for coastal regions. Prepare for potential evacuation.',
      timestamp: '30m ago',
      location: 'Coastal Regions'
    }
  ];

  const getSourceIcon = (source: CrisisFeedItem['source']) => {
    switch (source) {
      case 'twitter': return <Twitter className="text-[#1DA1F2]" size={16} />;
      case 'news': return <Globe className="text-primary" size={16} />;
      case 'alert': return <AlertCircle className="text-crisis-high" size={16} />;
    }
  };

  return (
    <div className="h-full data-card overflow-hidden flex flex-col">
      <div className="p-4 border-b border-accent/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap size={18} className="text-primary" />
          <h3 className="font-medium">Crisis Feeds</h3>
        </div>
        <span className="flex items-center text-xs text-crisis-medium">
          <span className="w-2 h-2 rounded-full bg-crisis-high mr-1 animate-pulse"></span>
          LIVE
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {feedItems.map((item) => (
          <div 
            key={item.id} 
            className="p-4 border-b border-accent/10 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                {getSourceIcon(item.source)}
                <span className="text-xs font-medium text-muted-foreground">{item.source.toUpperCase()}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.timestamp}</span>
            </div>
            <p className="text-sm mb-1">{item.content}</p>
            <div className="flex items-center space-x-1">
              <AlertCircle size={12} className="text-crisis-medium" />
              <span className="text-xs text-muted-foreground">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrisisFeeds;
