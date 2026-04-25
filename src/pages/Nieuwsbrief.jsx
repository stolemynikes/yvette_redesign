import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LAPOSTA_API_KEY = import.meta.env.VITE_LAPOSTA_API_KEY;
const LAPOSTA_LIST_ID = import.meta.env.VITE_LAPOSTA_LIST_ID;

const Popup = ({ message }) => (
  <div className="fixed bottom-6 right-6 z-50 bg-botanical-fg text-white rounded-2xl px-6 py-4 shadow-botanical-xl font-sans text-sm animate-pulse">
    {message}
  </div>
);

export default function Nieuwsbrief() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  function showError(msg) {
    setPopupMessage(msg);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showError('Vul alsjeblieft alle velden in');
      return;
    }
    setLoading(true);
    try {
      const body = new URLSearchParams({
        list_id: LAPOSTA_LIST_ID,
        email: email.trim(),
        ip: '127.0.0.1',
        'custom_fields[firstname]': name.trim(),
      });
      const res = await fetch('https://api.laposta.nl/v2/member', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(LAPOSTA_API_KEY + ':'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      });
      if (res.ok || res.status === 201) {
        setShowThanks(true);
      } else {
        const data = await res.json().catch(() => ({}));
        showError(data?.error?.message || 'Er is iets misgegaan. Probeer het opnieuw.');
      }
    } catch {
      showError('Er is iets misgegaan. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-botanical-bg min-h-screen">

      {/* Header — same style as Tarieven */}
      <section className="py-24 md:py-32 text-center bg-botanical-card">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-6">Nieuwsbrief</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-botanical-fg leading-tight mb-6">
            Blijf op de <em className="italic text-botanical-terra">hoogte</em>
          </h1>
          <p className="font-sans text-lg text-botanical-fg/70 leading-relaxed max-w-xl mx-auto">
            Ontvang tips, inspiratie en nieuws over coaching, ademwerk en stressmanagement — rechtstreeks in je inbox.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: what to expect */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-4">Wat kan je verwachten?</p>
              <h2 className="font-serif text-3xl font-bold text-botanical-fg leading-tight mb-6">
                Praktische <em className="italic">inzichten</em> voor meer rust
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Tips & oefeningen', text: 'Eenvoudige ademhalings- en ontspanningstechnieken die je direct kunt toepassen.' },
                  { title: 'Inspirerende verhalen', text: 'Ervaringen van anderen op het pad naar meer kalmte en veerkracht.' },
                  { title: 'Nieuws & aanbod', text: 'Updates over nieuwe trajecten, evenementen en andere mogelijkheden.' },
                ].map(({ title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-botanical-sage mt-2.5 shrink-0" />
                    <div>
                      <p className="font-sans font-semibold text-botanical-fg text-sm mb-1">{title}</p>
                      <p className="font-sans text-sm text-botanical-fg/65 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-botanical-card border border-botanical-stone">
                <p className="font-serif italic text-botanical-sage text-sm leading-relaxed">
                  "Je kunt je op elk moment uitschrijven. Geen spam, beloofd."
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {showThanks ? (
                <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-3xl shadow-botanical-md">
                  <div className="w-16 h-16 rounded-full bg-botanical-sage/20 flex items-center justify-center mb-6">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8C9A84">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-botanical-fg mb-3">Welkom aan boord!</h3>
                  <p className="font-sans text-botanical-fg/70 mb-6">
                    Je bent aangemeld. Check je inbox voor een bevestigingsmail.
                  </p>
                  <Link to="/" className="button-nav">Terug naar home</Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl shadow-botanical-md p-8 space-y-6"
                >
                  <h3 className="font-serif text-2xl font-bold text-botanical-fg">Aanmelden</h3>

                  <div>
                    <label className="block font-sans text-sm text-botanical-fg/70 mb-2">Wat is je naam?</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full border-b border-botanical-stone bg-transparent py-3 font-sans text-botanical-fg placeholder-botanical-fg/30 focus:outline-none focus:border-botanical-sage transition-colors duration-300"
                      placeholder="Jouw naam"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-botanical-fg/70 mb-2">Wat is je e-mailadres?</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full border-b border-botanical-stone bg-transparent py-3 font-sans text-botanical-fg placeholder-botanical-fg/30 focus:outline-none focus:border-botanical-sage transition-colors duration-300"
                      placeholder="jouw@email.nl"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="button-nav w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Aanmelden…' : 'Aanmelden voor nieuwsbrief'}
                  </button>

                  <p className="font-sans text-xs text-botanical-fg/40 text-center">
                    Je gegevens worden nooit gedeeld. Uitschrijven kan altijd.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-20 bg-botanical-fg text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Liever eerst een <em className="italic text-botanical-clay">gesprek</em>?
          </h2>
          <p className="font-sans text-lg text-white/65 mb-8">
            Plan een gratis en vrijblijvend kennismakingsgesprek van 30 minuten.
          </p>
          <Link
            to="/kennismakingsgesprek"
            className="inline-flex items-center justify-center bg-botanical-terra text-white rounded-full px-8 py-4 font-sans text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-botanical-fg transition-all duration-300 shadow-botanical-xl"
          >
            Kennismakingsgesprek plannen
          </Link>
        </div>
      </section>

      {showPopup && <Popup message={popupMessage} />}
    </div>
  );
}
