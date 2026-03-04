import { useEffect, useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { fetchProfile } from '../services/desktopDataService';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetchProfile().then(setProfile).catch(() => setProfile(null));
  }, []);

  const fullName = profile ? `${profile.firstName || ''} ${profile.lastName || ''}`.trim() : 'Rob Blasetti';

  return (
    <div>
      <SectionHeader
        title="Profile"
        subtitle="Personal profile and service details."
      />

      <div className="dashboard-grid">
        <Card title="Profile details">
          <div className="list-stack">
            <div className="list-row">Name: {fullName || 'User'}</div>
            <div className="list-row">Email: {profile?.email || '—'}</div>
            <div className="list-row">Community: {profile?.community?.name || 'Northside'}</div>
          </div>
        </Card>

        <Card title="Service context">
          <div className="list-stack">
            <div className="list-row">Body access: {(profile?.userBodies || []).map((b: any) => b.name).filter(Boolean).join(', ') || 'LSA'}</div>
            <div className="list-row">Role: {profile?.role || 'Maintainer'}</div>
            <div className="list-row">Last sign-in: Today</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
