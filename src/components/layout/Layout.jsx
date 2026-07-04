import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <div
          key={pathname}
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
