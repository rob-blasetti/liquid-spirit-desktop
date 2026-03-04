import CTACard from 'liquid-spirit-styleguide/web/CTACard';

type Activity = {
  id?: string;
  _id?: string;
  title?: string;
  activityType?: { name?: string };
  type?: string;
  location?: { city?: string } | string;
  dateTime?: string;
  imageUrl?: string;
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  const title = activity.title || 'Activity';
  const type = activity.activityType?.name || activity.type || 'Activity';
  const location = typeof activity.location === 'string' ? activity.location : activity.location?.city || 'TBD';
  const date = activity.dateTime ? new Date(activity.dateTime).toLocaleString() : 'TBD';

  return (
    <CTACard
      title={`${type} · ${title}`}
      variant="secondary"
      description={`${location} · ${date}`}
      ctaLabel="Open"
    />
  );
}
