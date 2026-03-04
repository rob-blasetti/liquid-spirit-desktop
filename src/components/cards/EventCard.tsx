import CTACard from 'liquid-spirit-styleguide/web/CTACard';

type Event = {
  id: string;
  title: string;
  subtitle?: string;
  dateLabel?: string;
  location?: string;
  imageUrl?: string;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <CTACard
      title={event.title}
      variant="tertiary"
      description={`${event.subtitle || 'Community event'} · ${event.location || 'TBD'} · ${event.dateLabel || 'TBD'}`}
      ctaLabel="View"
    />
  );
}
