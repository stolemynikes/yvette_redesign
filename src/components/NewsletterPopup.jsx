import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('nl_dismissed')) return;
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setClosing(true);
    setTimeout(() => {
      sessionStorage.setItem('nl_dismissed', '1');
      setShow(false);
      setClosing(false);
    }, 350);
  }

  if (!show) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-72 bg-white rounded-2xl shadow-botanical-xl overflow-hidden"
      style={{
        animation: closing
          ? 'popupOut 0.35s cubic-bezier(0.4, 0, 1, 1) both'
          : 'popupIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popupOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(12px) scale(0.95); }
        }
      `}</style>

      {/* Top accent */}
      <div className="h-1 bg-botanical-sage" />

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <p className="font-serif italic text-botanical-fg text-base leading-snug pr-4">
            Meld je aan voor mijn nieuwsbrief
          </p>
          <button
            onClick={dismiss}
            aria-label="Sluiten"
            className="text-botanical-fg/30 hover:text-botanical-fg/70 transition-colors duration-200 mt-0.5 shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <p className="font-sans text-xs text-botanical-fg/60 mb-4 leading-relaxed">
          Tips, inspiratie en nieuws over coaching, ademwerk en stressmanagement.
        </p>

        <Link to="/nieuwsbrief" onClick={dismiss} className="button-nav text-xs w-full justify-center">
          Aanmelden
        </Link>
      </div>
    </div>
  );
}
