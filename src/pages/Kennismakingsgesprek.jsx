import React from 'react';
import { Link } from 'react-router-dom';

import Foto1 from '../assets/images/kennis/Foto1.jpg';

export default function Kennismakingsgesprek() {
  return (
    <div className="bg-botanical-bg min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-6">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra">Gratis &amp; vrijblijvend</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-botanical-fg leading-tight">
                Kennismakings<em className="italic">gesprek</em>
              </h1>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Plan hier je gratis gesprek van 30 minuten.
                Want hoe fijn is het om weer een stap verder te komen?
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik beantwoord graag je vragen en we bespreken wat jij nodig hebt.
                Ons gesprek kan telefonisch maar ook via beeldbellen als je dat prettig vindt.
              </p>
              <blockquote className="botanical-pullquote">
                "Ik kijk ernaar uit om je te leren kennen!"
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/yvettevanzadel/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="button-nav"
                >
                  Plan via Calendly
                </a>
                <Link to="/contact" className="button">
                  Of stuur een bericht
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm shadow-botanical-xl" style={{ borderRadius: '200px 200px 40px 40px' }}>
                <div style={{ clipPath: 'inset(0 round 200px 200px 40px 40px)' }}>
                  <img
                    src={Foto1}
                    alt="Kennismakingsgesprek"
                    className="w-full aspect-[3/4] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-5">Wat kun je verwachten?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg mb-14">
            Een <em className="italic">warm</em> en persoonlijk gesprek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: '30', unit: 'minuten', label: 'Duur van het gesprek' },
              { number: '100%', unit: '', label: 'Gratis en vrijblijvend' },
              { number: '2', unit: 'opties', label: 'Telefonisch of beeldbellen' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-3xl p-8 shadow-botanical-md">
                <p className="font-serif text-5xl font-bold text-botanical-terra mb-1">
                  {item.number}<span className="text-2xl text-botanical-sage"> {item.unit}</span>
                </p>
                <p className="font-sans text-sm text-botanical-fg/65 mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-botanical-fg text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Zet vandaag de <em className="italic text-botanical-clay">eerste stap</em>
          </h2>
          <p className="font-sans text-lg text-white/65 mb-8">
            Je leven hoeft er niet zo uit te zien. Er is een weg naar meer rust, vreugde en vrijheid.
          </p>
          <a
            href="https://calendly.com/yvettevanzadel/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-botanical-terra text-white rounded-full px-8 py-4 font-sans text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-botanical-fg transition-all duration-300 shadow-botanical-xl"
          >
            Plan je kennismakingsgesprek
          </a>
        </div>
      </section>

    </div>
  );
}
