import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    name: 'Stress Management Traject',
    description: '3–4 maanden via de HeartMath methode. Met werkboek en gebruik van bio feedbackapparatuur.',
    price: '€ 797',
    highlight: true,
  },
  {
    name: 'Adem Traject',
    description: '3 maanden — met intake, ademanalyse en verschillende technieken.',
    price: '€ 577',
  },
  {
    name: 'Coaching met Fred Traject',
    description: '3 maanden — met intake.',
    price: '€ 637',
  },
  {
    name: 'Angst voor Honden Traject',
    description: '3 maanden — met intake.',
    price: '€ 637',
  },
];

const sessions = [
  { name: 'Ademsessie', price: '€ 120' },
  { name: 'Coachsessie', price: '€ 120' },
  { name: 'Coach Sessie met Fred', price: '€ 120' },
  { name: 'Coaching zakelijk', price: 'Offerte op aanvraag' },
];

export default function Tarieven() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: { trigger: '.programs-section', start: 'top 75%', once: true },
        y: 50, stagger: 0.12, duration: 0.85, ease: 'power3.out',
      });
      gsap.from('.session-row', {
        scrollTrigger: { trigger: '.sessions-section', start: 'top 80%', once: true },
        y: 30, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-botanical-bg min-h-screen">

      {/* Header */}
      <section className="py-24 md:py-32 text-center bg-botanical-card">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-6">Investering</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-botanical-fg leading-tight mb-6">
            Investeren in jezelf geeft <em className="italic text-botanical-terra">Rijkdom</em>
          </h1>
          <p className="font-sans text-lg text-botanical-fg/70 leading-relaxed">
            Start met een gratis, vrijblijvend kennismakingsgesprek. Samen kijken we wat bij jou past.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-3xl px-8 py-5 shadow-botanical-md">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-1">Kennismakingsgesprek</p>
              <p className="font-serif text-3xl font-bold text-botanical-fg">Gratis</p>
            </div>
            <div className="w-px h-10 bg-botanical-stone" />
            <Link to="/kennismakingsgesprek" className="button-nav">Plan nu</Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-4">Trajecten</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg">
              <em className="italic">Volledige</em> begeleidingstrajecten
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <div
                key={p.name}
                className={`pricing-card rounded-3xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-botanical-xl ${
                  p.highlight
                    ? 'bg-botanical-fg text-white shadow-botanical-xl'
                    : 'bg-white shadow-botanical-md'
                }`}
              >
                <p className={`font-serif text-xl font-bold mb-3 leading-tight ${p.highlight ? 'text-white' : 'text-botanical-fg'}`}>
                  {p.name}
                </p>
                <p className={`font-sans text-sm leading-relaxed flex-1 mb-6 ${p.highlight ? 'text-white/75' : 'text-botanical-fg/65'}`}>
                  {p.description}
                </p>
                <p className={`font-serif text-3xl font-bold ${p.highlight ? 'text-botanical-clay' : 'text-botanical-terra'}`}>
                  {p.price}
                </p>
                <p className={`font-sans text-xs mt-1 ${p.highlight ? 'text-white/50' : 'text-botanical-fg/40'}`}>incl. BTW</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="sessions-section py-20 md:py-24 bg-botanical-card">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-4">Losse sessies</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg">
              Individuele <em className="italic">sessies</em>
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-botanical-md overflow-hidden">
            {sessions.map((s, i) => (
              <div
                key={s.name}
                className={`session-row flex items-center justify-between px-7 py-5 ${
                  i < sessions.length - 1 ? 'border-b border-botanical-stone' : ''
                }`}
              >
                <p className="font-sans text-base font-medium text-botanical-fg">{s.name}</p>
                <p className="font-serif text-xl font-bold text-botanical-terra">{s.price}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-botanical-fg/50 text-center mt-6">
            Alle tarieven zijn inclusief BTW en exclusief reiskosten van € 0,21 per kilometer (meer dan 5 km).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-botanical-fg text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om te <em className="italic text-botanical-clay">beginnen</em>?
          </h2>
          <p className="font-sans text-lg text-white/65 mb-8">
            Het kennismakingsgesprek is gratis en vrijblijvend. Laten we samen de juiste keuze maken.
          </p>
          <Link to="/kennismakingsgesprek" className="inline-flex items-center justify-center bg-botanical-terra text-white rounded-full px-8 py-4 font-sans text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-botanical-fg transition-all duration-300 shadow-botanical-xl">
            Kennismakingsgesprek plannen
          </Link>
        </div>
      </section>
    </div>
  );
}
