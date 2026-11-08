import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/states", label: "States" },
  { to: "/funding", label: "Funding" },
  { to: "/past-eu", label: "Past EU" },
];

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink to="/" className="brand" end>
            PhD Materials Archive
            <span>public research</span>
          </NavLink>
          <nav className="nav" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          Read-only archive of application research notes. Personal identity
          documents and letters of recommendation are not included.
        </div>
      </footer>
    </div>
  );
}
