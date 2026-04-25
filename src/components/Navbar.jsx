import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setOpenNavbar((prev) => !prev);
  const closeNavbar = () => setOpenNavbar(false);

  useEffect(() => {
    if (openNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openNavbar]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpenNavbar(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-sans text-sm tracking-wide transition-colors duration-300 pb-0.5 ${
      isActive
        ? 'text-botanical-sage after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-botanical-sage'
        : 'text-botanical-fg hover:text-botanical-sage'
    }`;

  const services = [
    { to: '/stressmanagement', label: 'Stressmanagement' },
    { to: '/ademwerk', label: 'Ademwerk' },
    { to: '/coaching', label: 'Coaching' },
    { to: '/angst-voor-honden', label: 'Angst voor honden' },
  ];

  const pages = [
    { to: '/', label: 'Home', exact: true },
    { to: '/over-ons', label: 'Over ons' },
    { to: '/tarieven', label: 'Tarieven' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-botanical-bg/95 backdrop-blur-sm shadow-botanical-sm border-b border-botanical-stone'
            : 'bg-botanical-bg border-b border-botanical-stone'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl font-semibold italic text-botanical-fg hover:text-botanical-sage transition-colors duration-300 shrink-0"
            >
              Yvette van Zadel
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {pages.map(({ to, label, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  className={navLinkClass}
                >
                  {label}
                </NavLink>
              ))}
              <div className="w-px h-4 bg-botanical-stone" />
              {services.map(({ to, label }) => (
                <NavLink key={to} to={to} className={navLinkClass}>
                  {label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                to="/kennismakingsgesprek"
                className="hidden md:inline-flex button-nav"
              >
                Kennismakingsgesprek
              </Link>

              {/* Hamburger button */}
              <button
                onClick={toggleNavbar}
                aria-label="Menu openen"
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-full hover:bg-botanical-card transition-colors duration-300"
              >
                <span
                  className={`block w-5 h-px bg-botanical-fg transition-all duration-300 ${
                    openNavbar ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-botanical-fg transition-all duration-300 ${
                    openNavbar ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-botanical-fg transition-all duration-300 ${
                    openNavbar ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-20" />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          openNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-botanical-fg/40 backdrop-blur-sm"
          onClick={closeNavbar}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-botanical-bg shadow-botanical-xl transition-transform duration-500 ease-out ${
            openNavbar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-8 pt-20">

            <div className="flex flex-col gap-1 mb-8">
              <p className="font-serif italic text-xs text-botanical-sage tracking-widest uppercase mb-3">Pagina's</p>
              {pages.map(({ to, label, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `font-sans text-lg py-2 border-b border-botanical-stone transition-colors duration-300 ${
                      isActive ? 'text-botanical-sage' : 'text-botanical-fg hover:text-botanical-sage'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-1 mb-10">
              <p className="font-serif italic text-xs text-botanical-sage tracking-widest uppercase mb-3">Diensten</p>
              {services.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `font-sans text-lg py-2 border-b border-botanical-stone transition-colors duration-300 ${
                      isActive ? 'text-botanical-sage' : 'text-botanical-fg hover:text-botanical-sage'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/kennismakingsgesprek"
              onClick={closeNavbar}
              className="button-nav text-center"
            >
              Kennismakingsgesprek
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
