import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

export default function ProfilePage() {
  return (
    <div>
      <SectionHeader
        title="Profile"
        subtitle="Personal profile and service details."
      />

      <div className="dashboard-grid">
        <Card title="Profile details">
          <div className="list-stack">
            <div className="list-row">Name: Rob Blasetti</div>
            <div className="list-row">Role: Maintainer</div>
            <div className="list-row">Community: Northside</div>
          </div>
        </Card>

        <Card title="Service context">
          <div className="list-stack">
            <div className="list-row">Body access: LSA, Feast Committee</div>
            <div className="list-row">Recent activity: 6 actions this week</div>
            <div className="list-row">Last sign-in: Today</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
