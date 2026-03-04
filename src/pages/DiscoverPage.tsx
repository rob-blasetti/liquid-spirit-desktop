import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { fetchDiscoverActivities } from '../services/desktopDataService';

type Activity = { id?: string; _id?: string; title?: string; type?: string; activityType?: { name?: string }; location?: { city?: string } | string; dateTime?: string };

export default function DiscoverPage() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDiscoverActivities()
      .then((data) => setActivities(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || 'Unable to load activities'));
  }, []);

  const filtered = useMemo(() => {
    if (typeFilter === 'All') return activities;
    return activities.filter((activity) => (activity.activityType?.name || activity.type || 'Other') === typeFilter);
  }, [activities, typeFilter]);

  return (
    <div>
      <SectionHeader
        title="Discover"
        subtitle="Find activities, events, and people to connect with across communities."
      />

      <div className="filters-bar">
        <select className="input" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
          {['All', ...new Set(activities.map((a) => a.activityType?.name || a.type || 'Other'))].map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <Card title="Activities">
        {error ? <p className="empty-text">{error}</p> : null}
        <div className="list-stack">
          {filtered.map((activity) => (
            <div key={activity.id || activity._id} className="list-row">
              <strong>{activity.title || 'Activity'}</strong>
              <div>
                {(activity.activityType?.name || activity.type || 'Other')} · {(typeof activity.location === 'string' ? activity.location : activity.location?.city || 'TBD')} · {(activity.dateTime ? new Date(activity.dateTime).toLocaleString() : 'TBD')}
              </div>
            </div>
          ))}
          {!error && !filtered.length ? <p className="empty-text">No activities found.</p> : null}
        </div>
      </Card>
    </div>
  );
}
