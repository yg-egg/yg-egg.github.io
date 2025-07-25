import { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavBar';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function AppLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <main style={{ flex: 1, paddingTop: '100px' }}>{children}</main>
      <Footer />
    </div>
  );
}
