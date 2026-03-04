type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <section className="stat-card">
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
      {hint ? <small className="stat-hint">{hint}</small> : null}
    </section>
  );
}
