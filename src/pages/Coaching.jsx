import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import CoachingBanner from '../assets/images/coaching/Banner.jpg';
import Foto1 from '../assets/images/coaching/Foto1.jpg';
import Foto2 from '../assets/images/coaching/Foto2.jpg';
import Foto3 from '../assets/images/coaching/Foto3.jpg';
import UWV from '../assets/images/certificaten/UWV.png';
import CRKBO from '../assets/images/certificaten/CRKBO.png';
import hondenspiegel from '../assets/images/certificaten/hondenspiegel.png';

export default function Coaching() {
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
        <img src={CoachingBanner} alt="Coaching" />
        <div><h1>"Ontdekken wie je bent op een zachte en grensverleggende manier"</h1></div>
      </div>

      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Persoonlijke ontwikkeling</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Ga voor innerlijke verdieping en <em className="italic">persoonlijke ontwikkeling</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Samen met een hond een vraagstuk omtrent je persoonlijke ontwikkeling aanpakken
                en je eigen mogelijkheden ontdekken — mijn ervaring is dat dit een prachtige
                en zachte manier is om jezelf te verkennen.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik ben er erg enthousiast over omdat het mij een enorme innerlijke verdieping
                en transformatie heeft gebracht. Ik zie en voel zoveel meer helderheid over wie
                ik ben, hoe ik me gedraag, wat mijn kwaliteiten zijn.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={Foto1} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={Foto2} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Over Fred</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Een sessie met Fred is altijd <em className="italic">ontspannen</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Een sessie met Fred zorgt voor een unieke en impactvolle ervaring — één die jou
                aanzet tot inzichten en gedragsverandering.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Fred is samen met mij opgeleid en we werken als collega's. Omdat hij deze
                beroepstraining heeft genoten kan hij mensen goed lezen en ondersteunen.
              </p>
              <blockquote className="botanical-pullquote">
                "Fred is betrouwbaar, stabiel, zacht in de omgang en een grote leermeester zonder oordeel."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Begin vandaag</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Pak de regie en kies voor <em className="italic">verandering</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Wil jij meer in verbinding komen met jezelf maar weet je niet hoe?
                Durf jij het aan om te veranderen, patronen te doorbreken, belemmeringen om te
                zetten in kansen?
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Fred en ik willen voor jou de ontspannen basis zijn van waaruit jij rustig kunt
                ontdekken wie je nog meer bent.
              </p>
              <div className="pt-2">
                <Link to="/kennismakingsgesprek" className="button-nav">Kennismakingsgesprek</Link>
              </div>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={Foto3} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-botanical-card">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-serif italic text-botanical-sage text-sm mb-10">Diplomas & Accreditaties</p>
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-sans text-sm text-botanical-fg/60 mb-6">Gediplomeerd Hondenspiegeltrainer</p>
              <div className="flex justify-center">
                <img src={hondenspiegel} alt="Hondenspiegel" className="h-16 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div>
              <p className="font-sans text-sm text-botanical-fg/60 mb-6">Opleiding geaccrediteerd door</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {[CRKBO, UWV].map((logo, i) => (
                  <img key={i} src={logo} alt="" className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
