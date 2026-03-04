import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';

export default function DashboardPage() {
  return (
    <div>
      <SectionHeader
        title="Dashboard"
        subtitle="Overview cards for approvals, sessions, and treasury snapshot."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <Card title="Pending Approvals"><p>0</p></Card>
        <Card title="Upcoming Sessions"><p>0</p></Card>
        <Card title="Treasury Snapshot"><p>$0.00</p></Card>
      </div>
    </div>
  );
}
