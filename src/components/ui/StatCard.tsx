import Typography from 'liquid-spirit-styleguide/web/Typography';
import CTACard from 'liquid-spirit-styleguide/web/CTACard';

type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <CTACard
      title={label}
      variant="tertiary"
      description={(
        <div className="stat-body">
          <Typography as="strong" size="large">{value}</Typography>
          {hint ? <Typography as="small" size="small">{hint}</Typography> : null}
        </div>
      )}
    />
  );
}
