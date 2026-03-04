import type { ReactNode } from 'react';
import CTACard from 'liquid-spirit-styleguide/web/CTACard';

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return <CTACard title={title} description={children} variant="secondary" className="ls-block-card" />;
}
