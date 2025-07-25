import { useState } from 'react';
import { Link } from 'wouter';

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        padding: '20px',
        zIndex: 1000,
      }}
    >
      {/* Top Bar with Hamburger */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'white', fontStyle: 'italic' }}>
          We are much more alike than we are different.
        </div>

        <button
          style={{
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {['Home', 'Documentary', 'Fiction', 'Branded Content', 'Contact'].map(label => (
            <Link
              key={label}
              href={`/${label === 'Home' ? '' : label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
