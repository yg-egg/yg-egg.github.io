import { Link } from 'wouter';

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)', // 55% opacity
        padding: '20px 40px', // more top-bottom and side padding
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        fontSize: '1.1rem', // 2x standard (~24px)
      }}
    >
      {/* Left: Tagline */}
      <div style={{ color: 'white', fontStyle: 'italic' }}>
        We are much more alike than we are different.
      </div>

      {/* Right: Nav Links */}
      <div style={{ display: 'flex', gap: '30px' }}>
        <NavLink href="/" label="Home" />
        <NavLink href="/documentary" label="Documentary" />
        <NavLink href="/fiction" label="Fiction" />
        <NavLink href="/branded-content" label="Branded Content" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        color: 'white',
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        transition: 'background 0.2s ease',
      }}
      onMouseOver={e => {
        e.target.style.background = 'rgba(255,255,255,0.1)';
      }}
      onMouseOut={e => {
        e.target.style.background = 'transparent';
      }}
    >
      {label}
    </Link>
  );
}
