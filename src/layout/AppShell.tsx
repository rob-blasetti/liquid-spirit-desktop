import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/members', label: 'Members' },
  { to: '/approvals', label: 'Approvals' },
  { to: '/treasury', label: 'Treasury' },
  { to: '/settings', label: 'Settings' },
];

export default function AppShell() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <img src="/LS-Logo.svg" alt="Liquid Spirit logo" className="brand-logo" />
          <h1>Liquid Spirit</h1>
        </div>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className="nav-link">
            {item.label}
          </NavLink>
        ))}
      </aside>
      <section className="content">
        <header className="topbar">Desktop Admin</header>
        <main className="page"><Outlet /></main>
      </section>
    </div>
  );
}
