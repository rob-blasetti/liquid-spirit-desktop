import type { ReactNode } from 'react';

type ListCardProps = {
  title: string;
  items: ReactNode[];
};

export default function ListCard({ title, items }: ListCardProps) {
  return (
    <section className="ui-card">
      <h3>{title}</h3>
      <div className="list-stack">
        {items.length ? items : <p className="empty-text">No items</p>}
      </div>
    </section>
  );
}
