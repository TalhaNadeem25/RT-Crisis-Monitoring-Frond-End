
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatusCard from '@/components/StatusCard';
import WorldMap from '@/components/WorldMap';
import CrisisFeeds from '@/components/CrisisFeeds';
import StatsOverview from '@/components/StatsOverview';
import AIDrivenInsights from '@/components/AIDrivenInsights';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Mock crisis data to simulate real-time monitoring
  const crisisEvents = [
    {
      id: '1',
      title: 'Istanbul Earthquake',
      location: 'Istanbul, Turkey',
      type: 'Natural Disaster',
      severity: 'high',
      affectedPopulation: 50000,
      urgencyLevel: 'Critical'
    },
    {
      id: '2', 
      title: 'Flood Emergency',
      location: 'Chennai, India',
      type: 'Natural Disaster', 
      severity: 'medium',
      affectedPopulation: 25000,
      urgencyLevel: 'High'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <div className="container mx-auto py-6 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary">CrisisCopilot</h1>
            <p className="text-muted-foreground">Real-time Global Emergency Detection & Response Platform</p>
          </div>
          
          <StatsOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <WorldMap crisisEvents={crisisEvents} />
            </div>
            <div className="h-full">
              <CrisisFeeds />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {crisisEvents.map((event) => (
                <StatusCard
                  key={event.id}
                  title={event.title}
                  location={event.location}
                  category={event.type}
                  severity={event.severity as any}
                  affectedCount={event.affectedPopulation}
                  description={`Urgency Level: ${event.urgencyLevel}`}
                />
              ))}
            </div>
            <div className="h-full">
              <AIDrivenInsights />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
