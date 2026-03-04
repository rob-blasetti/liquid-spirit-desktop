import { useMemo, useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const ACTIVITIES = [
  { id: 'd1', type: 'Devotional', title: 'Neighborhood devotional', date: 'Thu 7:30 PM', location: 'Northside' },
  { id: 'd2', type: 'Youth', title: 'Junior youth circle', date: 'Fri 6:00 PM', location: 'West End' },
  { id: 'd3', type: 'Study', title: 'Book study group', date: 'Sat 4:00 PM', location: 'Riverdale' },
];

export default function DiscoverPage() {
  const [typeFilter, setTypeFilter] = useState('All');

  const filtered = useMemo(
    () => (typeFilter === 'All' ? ACTIVITIES : ACTIVITIES.filter((activity) => activity.type === typeFilter)),
    [typeFilter],
  );

  return (
    <div>
      <SectionHeader
        title="Discover"
        subtitle="Find activities, events, and people to connect with across communities."
      />

      <div className="filters-bar">
        <select className="input" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
          {['All', 'Devotional', 'Youth', 'Study'].map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <Card title="Activities">
        <div className="list-stack">
          {filtered.map((activity) => (
            <div key={activity.id} className="list-row">
              <strong>{activity.title}</strong>
              <div>{activity.type} · {activity.location} · {activity.date}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
