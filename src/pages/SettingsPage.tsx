import { useMemo, useState } from 'react';
import Button from 'liquid-spirit-styleguide/web/Button';
import Checkbox from 'liquid-spirit-styleguide/web/Checkbox';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { API_URL, getStoredToken, getStoredUser } from '../services/apiClient';
import { useAuth } from '../contexts/AuthContext';

export default function SettingsPage() {
  const [compactMode, setCompactMode] = useState(localStorage.getItem('ls.desktop.compactMode') === '1');
  const [signedOut, setSignedOut] = useState(false);
  const { signOut } = useAuth();

  const user = useMemo(() => getStoredUser(), []);
  const hasToken = Boolean(getStoredToken());

  const toggleCompactMode = () => {
    setCompactMode((prev) => {
      const next = !prev;
      localStorage.setItem('ls.desktop.compactMode', next ? '1' : '0');
      return next;
    });
  };

  const onSignOut = () => {
    signOut();
    setSignedOut(true);
  };

  return (
    <div>
      <SectionHeader title="Settings" subtitle="Desktop preferences, account/session, and backend config." />

      <div className="dashboard-grid">
        <Card title="Account">
          <div className="list-stack">
            <div className="list-row">Signed in: {hasToken && !signedOut ? 'Yes' : 'No'}</div>
            <div className="list-row">Name: {user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User' : '—'}</div>
            <div className="list-row">Email: {user?.email || '—'}</div>
            <Button label="Sign out (local)" onPress={onSignOut} secondary />
          </div>
        </Card>

        <Card title="Desktop preferences">
          <div className="list-stack">
            <div className="list-row">
              <Checkbox label="Compact mode" checked={compactMode} onChange={toggleCompactMode} />
            </div>
            <div className="list-row">Theme: System (placeholder)</div>
            <div className="list-row">Notifications: Enabled (placeholder)</div>
          </div>
        </Card>
      </div>

      <Card title="Backend configuration">
        <div className="list-stack">
          <div className="list-row">API URL: {API_URL}</div>
          <div className="list-row">Token present: {hasToken && !signedOut ? 'Yes' : 'No'}</div>
          <div className="list-row">To change API URL, set <code>VITE_API_URL</code>.</div>
        </div>
      </Card>
    </div>
  );
}
