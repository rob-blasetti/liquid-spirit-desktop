import SectionHeader from '../components/ui/SectionHeader';
import StatCard from '../components/ui/StatCard';
import ListCard from '../components/ui/ListCard';

const pendingApprovals = [
  'Venue request · Feast at Northside · 2h ago',
  'Member update · Contact change · 5h ago',
  'Treasury entry · Needs review · 1d ago',
];

const upcomingSessions = [
  'LSA Consultation · Thu 7:30 PM',
  'Feast Coordination · Fri 6:00 PM',
  'Holy Day Planning · Sun 4:00 PM',
];

export default function DashboardPage() {
  return (
    <div>
      <SectionHeader
        title="Assembly Dashboard"
        subtitle="Daily snapshot for approvals, sessions, and treasury health."
      />

      <div className="stats-grid">
        <StatCard label="Pending approvals" value="12" hint="3 urgent" />
        <StatCard label="Upcoming sessions" value="8" hint="Next in 2 hours" />
        <StatCard label="Treasury balance" value="$24,930" hint="+4.2% this month" />
      </div>

      <div className="dashboard-grid">
        <ListCard
          title="Pending approvals"
          items={pendingApprovals.map((item) => (
            <div key={item} className="list-row">{item}</div>
          ))}
        />

        <ListCard
          title="Upcoming sessions"
          items={upcomingSessions.map((item) => (
            <div key={item} className="list-row">{item}</div>
          ))}
        />
      </div>
    </div>
  );
}
