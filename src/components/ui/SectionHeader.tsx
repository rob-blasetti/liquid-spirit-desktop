import Typography from 'liquid-spirit-styleguide/web/Typography';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <Typography as="h2" size="large">{title}</Typography>
      {subtitle ? <Typography as="p" size="small">{subtitle}</Typography> : null}
    </header>
  );
}
