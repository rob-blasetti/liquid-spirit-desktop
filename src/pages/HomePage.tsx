import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

export default function HomePage() {
  return (
    <div>
      <SectionHeader
        title="Home"
        subtitle="Community pulse, quick actions, and upcoming moments of service."
      />

      <div className="dashboard-grid">
        <Card title="Community snapshot">
          <div className="list-stack">
            <div className="list-row">Members active this week: 48</div>
            <div className="list-row">Upcoming sessions: 8</div>
            <div className="list-row">Recent comments: 17</div>
          </div>
        </Card>

        <Card title="Quick actions">
          <div className="list-stack">
            <div className="list-row">Open Discover</div>
            <div className="list-row">Review News Feed</div>
            <div className="list-row">Check Dashboard metrics</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
