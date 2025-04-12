
export const mockIncidents = [
  {
    id: 'inc-001',
    title: 'Earthquake in Istanbul',
    location: 'Istanbul, Turkey',
    time: '08:42 AM',
    date: 'Apr 12, 2025',
    description: 'Magnitude 5.9 earthquake struck Istanbul. Multiple buildings damaged in city center. Emergency services deployed.',
    affectedCount: 120000,
    severity: 'high',
    category: 'Earthquake',
    coordinates: [29.0225, 41.0082]
  },
  {
    id: 'inc-002',
    title: 'Flooding in Mumbai',
    location: 'Mumbai, India',
    time: '02:15 PM',
    date: 'Apr 11, 2025',
    description: 'Heavy rainfall caused severe flooding in multiple districts. Roads blocked and public transport disrupted.',
    affectedCount: 250000,
    severity: 'medium',
    category: 'Flood',
    coordinates: [72.8777, 19.0760]
  },
  {
    id: 'inc-003',
    title: 'Wildfire in California',
    location: 'Northern California, USA',
    time: '11:30 AM',
    date: 'Apr 10, 2025',
    description: 'Wildfire spread across 50,000 acres. Multiple communities evacuated. Containment efforts ongoing.',
    affectedCount: 35000,
    severity: 'high',
    category: 'Wildfire',
    coordinates: [-122.4194, 37.7749]
  },
  {
    id: 'inc-004',
    title: 'Typhoon Warning',
    location: 'Manila, Philippines',
    time: '05:20 PM',
    date: 'Apr 12, 2025',
    description: 'Typhoon approaching eastern coast. Expected to make landfall in 48 hours. Preparations underway.',
    affectedCount: 500000,
    severity: 'medium',
    category: 'Typhoon',
    coordinates: [120.9842, 14.5995]
  },
];

export const mockFeedItems = [
  {
    id: 'feed-001',
    type: 'alert',
    content: 'BREAKING: Magnitude 5.9 earthquake reported in Istanbul. Initial reports of building damage in multiple districts.',
    source: 'Emergency Alert System',
    time: '3 min ago'
  },
  {
    id: 'feed-002',
    type: 'tweet',
    content: 'Just felt a strong earthquake in Istanbul. Building shaking for about 20 seconds. People running outside. #IstanbulEarthquake',
    source: '@eyewitness',
    time: '5 min ago'
  },
  {
    id: 'feed-003',
    type: 'news',
    content: 'Wildfire in Northern California now 30% contained. Firefighters making progress despite high winds.',
    source: 'CA News Network',
    time: '12 min ago'
  },
  {
    id: 'feed-004',
    type: 'tweet',
    content: 'Flood waters rising quickly in Mumbai suburbs. Many roads impassable in Andheri and Kurla. #MumbaiRains',
    source: '@weather_watcher',
    time: '18 min ago'
  },
  {
    id: 'feed-005',
    type: 'news',
    content: 'Typhoon Malakas strengthens to Category 4, expected to impact Philippines within 48 hours. Evacuations advised in coastal areas.',
    source: 'Global Weather Agency',
    time: '25 min ago'
  },
  {
    id: 'feed-006',
    type: 'alert',
    content: 'Multiple aftershocks detected in Istanbul region. Magnitude range from 3.2 to 4.1. Citizens advised to stay away from damaged buildings.',
    source: 'Seismic Monitoring Center',
    time: '32 min ago'
  },
];
