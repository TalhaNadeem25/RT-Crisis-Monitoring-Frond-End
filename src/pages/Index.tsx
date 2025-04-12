import AIInsights from '@/components/AIInsights';
import LiveFeed from '@/components/LiveFeed';
import Sidebar from '@/components/Sidebar';
import StatsOverview from '@/components/StatsOverview';
import StatusCard from '@/components/StatusCard';
import WorldMap from '@/components/WorldMap';
import { mockFeedItems, mockIncidents } from '@/services/mockData';
import { useState } from 'react';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <div className="container mx-auto py-6 px-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Crisis Copilot</h1>
            <p className="text-muted-foreground">Real-time monitoring and AI-powered insights for emergency response</p>
          </div>
          
          <div className="mb-6">
            <StatsOverview />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <WorldMap />
            </div>
            <div className="h-full">
              <LiveFeed items={mockFeedItems} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockIncidents.map((incident) => (
                <StatusCard
                  key={incident.id}
                  title={incident.title}
                  location={incident.location}
                  time={incident.time}
                  date={incident.date}
                  description={incident.description}
                  affectedCount={incident.affectedCount}
                  severity={incident.severity as any}
                  category={incident.category}
                />
              ))}
            </div>
            <div className="h-full">
              <AIInsights />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
