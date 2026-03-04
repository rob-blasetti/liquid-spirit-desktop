import { useState } from 'react';
import Button from 'liquid-spirit-styleguide/web/Button';
import Typography from 'liquid-spirit-styleguide/web/Typography';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/discover', label: 'Discover' },
  { to: '/news', label: 'News' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/settings', label: 'Settings' },
];

export default function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="shell">
      <aside className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="brand">
          <img src="/LS-Logo.svg" alt="Liquid Spirit logo" className="brand-logo" />
          <Typography as="h1" size="large">Liquid Spirit</Typography>
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Typography as="span" size="small">{item.label}</Typography>
          </NavLink>
        ))}
      </aside>
      {mobileMenuOpen ? <button className="sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation" /> : null}

      <section className="content">
        <header className="topbar">
          <Button className="menu-toggle" onPress={() => setMobileMenuOpen((v) => !v)} label="☰" aria-label="Toggle navigation" tertiary />
          <Typography as="span" size="small">Desktop Admin</Typography>
        </header>
        <main className="page"><Outlet /></main>
      </section>
    </div>
  );
}
