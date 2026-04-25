import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-botanical-fg text-white">

      {/* Top accent line */}
      <div className="h-px bg-botanical-sage/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl italic font-semibold text-white hover:text-botanical-clay transition-colors duration-300 block mb-4"
            >
              Yvette van Zadel
            </Link>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-[200px]">
              Coaching, ademwerk & stressmanagement in een veilige, warme omgeving.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="font-serif italic text-botanical-clay text-sm mb-5">Pagina's</p>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/over-ons', label: 'Over ons' },
                { to: '/tarieven', label: 'Tarieven' },
                { to: '/contact', label: 'Contact' },
                { to: '/nieuwsbrief', label: 'Nieuwsbrief' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-serif italic text-botanical-clay text-sm mb-5">Diensten</p>
            <div className="flex flex-col gap-3">
              {[
                { to: '/stressmanagement', label: 'Stressmanagement' },
                { to: '/ademwerk', label: 'Ademwerk' },
                { to: '/coaching', label: 'Coaching' },
                { to: '/angst-voor-honden', label: 'Angst voor honden' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Info */}
          <div>
            <p className="font-serif italic text-botanical-clay text-sm mb-5">Contact</p>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="tel:+31627281458"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                +31 6 27 28 14 58
              </a>
              <a
                href="mailto:info@yvettevanzadel.nl"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                info@yvettevanzadel.nl
              </a>
            </div>

            <p className="font-serif italic text-botanical-clay text-sm mb-5">Info</p>
            <div className="flex flex-col gap-3">
              <Link
                to="/algemene-voorwaarden"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Algemene voorwaarden
              </Link>
              <Link
                to="/privacyverklaring"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Privacyverklaring
              </Link>
              <p className="font-sans text-xs text-white/40">KvK: 82957045</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Yvette van Zadel. Alle rechten voorbehouden.
          </p>
          <p className="font-sans text-xs text-white/40">
            {/* Met <span className="text-botanical-terra">♥</span> gemaakt */}
          </p>
        </div>
      </div>

    </footer>
  );
}
