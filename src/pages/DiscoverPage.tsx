import { type ChangeEvent, useEffect, useMemo, useState } from 'react';
import Select from 'liquid-spirit-styleguide/web/Select';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import ActivityCard from '../components/cards/ActivityCard';
import EventCard from '../components/cards/EventCard';
import { fetchDiscoverActivities } from '../services/desktopDataService';

type Activity = {
  id?: string;
  _id?: string;
  title?: string;
  type?: string;
  activityType?: { name?: string };
  location?: { city?: string } | string;
  dateTime?: string;
  imageUrl?: string;
};

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
        <Select
          label="Activity type"
          value={typeFilter}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setTypeFilter(event.target.value)}
          options={['All', ...new Set(activities.map((a) => a.activityType?.name || a.type || 'Other'))]}
        />
      </div>

      <Card title="Activities">
        {error ? <p className="empty-text">{error}</p> : null}
        <div className="cards-grid">
          {filtered.map((activity) => (
            <ActivityCard key={activity.id || activity._id} activity={activity} />
          ))}
          {!error && !filtered.length ? <p className="empty-text">No activities found.</p> : null}
        </div>
      </Card>

      <Card title="Upcoming Events">
        <div className="cards-grid">
          {filtered.slice(0, 4).map((activity, index) => (
            <EventCard
              key={`event-${activity.id || activity._id || index}`}
              event={{
                id: String(activity.id || activity._id || index),
                title: activity.title || 'Community Event',
                subtitle: activity.activityType?.name || activity.type || 'Event',
                dateLabel: activity.dateTime ? new Date(activity.dateTime).toLocaleString() : 'TBD',
                location: typeof activity.location === 'string' ? activity.location : activity.location?.city,
                imageUrl: activity.imageUrl,
              }}
            />
          ))}
          {!error && !filtered.length ? <p className="empty-text">No events found.</p> : null}
        </div>
      </Card>
    </div>
  );
}
