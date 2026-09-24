import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Banner from '../assets/images/honden/Banner.jpg';
import AngstFoto from '../assets/images/honden/BoxFoto.jpg';
import WorkshopFoto from '../assets/images/Adem/Foto3.jpg';

const trajectPunten = [
  '7 persoonlijke sessies',
  'begeleiding bij jou thuis',
  'de eerste sessies zonder hond',
  'stap voor stap werken aan vertrouwen en verandering',
];

export default function OverigAanbod() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.service-section').forEach((section) => {
        gsap.from(section.querySelectorAll('.fade-up'), {
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          y: 40, stagger: 0.12, duration: 0.85, ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-botanical-bg min-h-screen">
      <div className="page-banner">
        <img src={Banner} alt="Overig aanbod" />
        <div><h1>"Overig aanbod"</h1></div>
      </div>

      {/* De Angst Voorbij */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Begeleiding bij hondenangst</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                De Angst <em className="italic">Voorbij</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Een 7-delig persoonlijk traject voor mensen die meer vrijheid en vertrouwen willen
                ervaren in situaties met honden.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je hoeft niet eerst zonder angst te zijn om stappen te kunnen zetten. We kijken
                samen naar wat jouw angst veroorzaakt en wat er in jou gebeurt wanneer je een hond
                ziet. Je leert je angst herkennen, ermee omgaan en stap voor stap weer vertrouwen
                opbouwen.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                De eerste sessies vinden zonder hond plaats. Wanneer jij daar klaar voor bent, kan
                Fred op een rustige en beperkte manier onderdeel worden van het traject,
                bijvoorbeeld door op afstand aanwezig te zijn of samen een kort stukje te wandelen.
                Altijd afgestemd op wat voor jou passend is én op wat voor Fred prettig is.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={AngstFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Het traject + investering */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">Het traject</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Wat je kunt <em className="italic">verwachten</em>
              </h2>
            </div>
            <div className="space-y-6 fade-up max-w-[65ch]">
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                {trajectPunten.map((punt) => (
                  <li key={punt} className="flex items-start gap-3">
                    <span className="mt-3 h-0.5 w-4 bg-botanical-terra shrink-0" />
                    <span className="font-sans text-base text-botanical-fg/75 leading-relaxed">{punt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex w-full sm:inline-flex sm:w-auto flex-col sm:flex-row items-center gap-5 sm:gap-8 bg-white rounded-3xl px-6 sm:px-8 py-7 shadow-botanical-md text-center sm:text-left">
                <div>
                  <p className="font-serif text-4xl font-bold text-botanical-fg leading-none">€ 835,-</p>
                  <p className="font-sans text-sm text-botanical-fg/65 mt-2">De investering</p>
                </div>
                <div className="hidden sm:block w-px h-14 bg-botanical-stone" />
                <div>
                  <p className="font-serif text-4xl font-bold text-botanical-fg leading-none">Gratis</p>
                  <p className="font-sans text-sm text-botanical-fg/65 mt-2">Kennismakingsgesprek</p>
                </div>
              </div>
              <div>
                <p className="font-serif italic text-botanical-sage text-xl mb-2">Zo start je</p>
                <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                  Je begint met een vrijblijvend kennismakingsgesprek. We bespreken waar je tegenaan
                  loopt en wat je graag anders zou willen. Is er een klik en voelt mijn begeleiding
                  passend? Dan volgt de intake en starten we het traject.
                </p>
              </div>
              <blockquote className="botanical-pullquote">
                "De angst voorbij sluit mooi aan bij Van spanning naar veerkracht: beide namen
                beschrijven een beweging van waar iemand nu staat naar waar iemand naartoe wil."
              </blockquote>
              <div className="pt-2">
                <Link to="/contact" className="button-nav">Plan een vrijblijvend kennismakingsgesprek</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={WorkshopFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Ontspannen, voelen en ervaren</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                <em className="italic">Workshops</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Samen met een collega organiseer ik verschillende workshops rondom persoonlijke
                ontwikkeling, intuïtie en gevoeligheid.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Tijdens deze workshops verzorg ik de verbonden ademsessie. Het doel hiervan is om
                diep te ontspannen en spanning los te laten. Wanneer je lichaam tot rust komt,
                ontstaat er ruimte om beter te voelen wat er in jou gebeurt en te ervaren wat voor
                jou klopt.
              </p>
              <blockquote className="botanical-pullquote">
                "Je hoeft het niet alleen te begrijpen. Door te ontspannen en te ervaren ontstaat
                er ruimte om te voelen."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Een voorbeeld is de workshop 'Ontdek de kracht van jouw intuïtie en gevoeligheid'.
                Daarin combineren we de verbonden ademsessie met een verdiepende oefening rondom
                energie en intuïtie.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="button">Bekijk actuele workshops en data</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adempauzes */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-6">Even de stopknop indrukken</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight mb-6">
              <em className="italic">Adempauzes</em>
            </h2>
          </div>
          <div className="space-y-5 fade-up">
            <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
              Soms loopt je hoofd simpelweg over. Geen paniek, je hoeft niet meteen uren te
              mediteren of op een berg in Tibet te gaan zitten. Met deze gesproken oefeningen geef
              je jezelf binnen een paar minuten een mentale reset.
            </p>
            <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
              Plug je oortjes in, adem in, adem uit, en ga weer door met je dag.
            </p>
          </div>
          <div className="mt-10 fade-up">
            <div className="w-16 h-px bg-botanical-terra mx-auto mb-8" />
            <p className="font-serif italic text-botanical-sage text-xl">Kies hieronder jouw adempauze</p>
            <p className="font-sans text-sm text-botanical-fg/50 mt-4">
              De audiofragmenten worden hier geplaatst zodra ze er zijn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
