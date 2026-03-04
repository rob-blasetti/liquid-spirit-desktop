import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './layout/AppShell';
import DashboardPage from './pages/DashboardPage';
import MembersPage from './pages/MembersPage';
import ApprovalsPage from './pages/ApprovalsPage';
import TreasuryPage from './pages/TreasuryPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/approvals" element={<ApprovalsPage />} />
        <Route path="/treasury" element={<TreasuryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
