import type { ReactNode } from 'react';

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <section className="ui-card">
      {title ? <h3>{title}</h3> : null}
      {children}
    </section>
  );
}
