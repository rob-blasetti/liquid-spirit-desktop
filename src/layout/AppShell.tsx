import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/members', label: 'Members' },
  { to: '/approvals', label: 'Approvals' },
  { to: '/treasury', label: 'Treasury' },
  { to: '/settings', label: 'Settings' },
];

export default function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="shell">
      <aside className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="brand">
          <img src="/LS-Logo.svg" alt="Liquid Spirit logo" className="brand-logo" />
          <h1>Liquid Spirit</h1>
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </aside>
      {mobileMenuOpen ? <button className="sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation" /> : null}

      <section className="content">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Toggle navigation">
            ☰
          </button>
          Desktop Admin
        </header>
        <main className="page"><Outlet /></main>
      </section>
    </div>
  );
}
