
import React from 'react';
import { AlertCircle, ArrowUpRight, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type FeedItemType = 'tweet' | 'news' | 'alert';

type FeedItem = {
  id: string;
  type: FeedItemType;
  content: string;
  source: string;
  time: string;
};

type LiveFeedProps = {
  items: FeedItem[];
};

const LiveFeed: React.FC<LiveFeedProps> = ({ items }) => {
  const getIcon = (type: FeedItemType) => {
    switch (type) {
      case 'tweet': return <svg className="h-4 w-4 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>;
      case 'news': return <Globe size={16} className="text-primary" />;
      case 'alert': return <AlertCircle size={16} className="text-crisis-high" />;
    }
  };

  const getBgColor = (type: FeedItemType) => {
    switch (type) {
      case 'tweet': return 'bg-[#1DA1F2]/5';
      case 'news': return 'bg-primary/5';
      case 'alert': return 'bg-crisis-high/5';
    }
  };

  return (
    <div className="h-full data-card overflow-hidden flex flex-col">
      <div className="p-4 border-b border-accent/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap size={18} className="text-primary" />
          <h3 className="font-medium">Live Feed</h3>
        </div>
        <span className="flex items-center text-xs text-crisis-medium">
          <span className="w-2 h-2 rounded-full bg-crisis-high mr-1 animate-pulse"></span>
          LIVE
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-1 space-y-1">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={cn(
                "p-3 rounded-md border border-accent/5 text-sm",
                getBgColor(item.type)
              )}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1.5">
                  {getIcon(item.type)}
                  <span className="font-medium text-xs">{item.source}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
              <p className="text-xs leading-normal">{item.content}</p>
              <div className="flex justify-end mt-1">
                <button className="text-xs text-primary flex items-center">
                  View
                  <ArrowUpRight size={12} className="ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
