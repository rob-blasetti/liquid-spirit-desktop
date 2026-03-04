import type { ReactNode } from 'react';
import Typography from 'liquid-spirit-styleguide/web/Typography';
import CTACard from 'liquid-spirit-styleguide/web/CTACard';

type ListCardProps = {
  title: string;
  items: ReactNode[];
};

export default function ListCard({ title, items }: ListCardProps) {
  return (
    <CTACard
      title={title}
      variant="secondary"
      description={(
        <div className="list-stack">
          {items.length ? items : <Typography as="p" size="small">No items</Typography>}
        </div>
      )}
    />
  );
}
