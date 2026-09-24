import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Banner from '../assets/images/Stressmanagement/Banner.jpg';
import BovenaanFoto from '../assets/images/Stressmanagement/Foto1.jpg'; // foto 1: bovenaan
import AdemFoto from '../assets/images/Adem/BoxFoto.jpg';       // box 2 op de homepage
import HondenFoto from '../assets/images/honden/BoxFoto.jpg';    // box 4 op de homepage

export default function HoeIkWerk() {
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
        <img src={Banner} alt="Hoe ik werk" />
        <div><h1>"Niet alleen begrijpen wat er gebeurt, maar ervaren wat voor jou werkt"</h1></div>
      </div>

      {/* Intro */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Hoe ik werk</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Je hoeft nu niet te weten wat het <em className="italic">antwoord</em> is
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Wanneer je langere tijd gespannen bent, leef je vaak vooral vanuit je hoofd. Je
                denkt, analyseert en probeert oplossingen te vinden. Ondertussen vertelt je lichaam
                vaak al wat er nodig is.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Daarom werken we in mijn coaching niet alleen met praten en nadenken. We brengen
                ook de aandacht naar je lichaam en onderzoeken wat je daar ervaart.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je hoeft nu niet te weten wat het antwoord is. We gaan samen op onderzoek uit.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={BovenaanFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Eerst rust en vertrouwen */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">Het begin</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Eerst rust en <em className="italic">vertrouwen</em>
              </h2>
            </div>
            <div className="space-y-5 fade-up max-w-[65ch]">
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik vind het belangrijk dat je je vanaf het begin veilig en gezien voelt.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je krijgt ruimte voor jouw verhaal. We onderzoeken wat er speelt, wat je voelt en wat je
                anders wilt. Ik luister, stel vragen en voel aan wat er nodig is.
              </p>
              <blockquote className="botanical-pullquote">
                "Ik stuur op het proces, maar niet op de inhoud."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Van je hoofd naar je lichaam */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">De aandacht verleggen</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Van je hoofd naar je <em className="italic">lichaam</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Wanneer je vooral vanuit je hoofd leeft, kan het lastig zijn om te voelen wat je
                werkelijk nodig hebt.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Met ademhaling en lichaamsgerichte oefeningen brengen we je aandacht terug naar je
                lichaam. Je hoeft niets te forceren.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Door te ervaren wat er gebeurt, ontstaat ruimte voor inzichten die verder gaan dan
                alleen denken en analyseren.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={AdemFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Ervaren wat voor jou werkt */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={HondenFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">In de sessies</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Ervaren wat voor <em className="italic">jou</em> werkt
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                We combineren gesprekken met ademhaling, lichaamsgerichte oefeningen en HeartMath
                met HRV-biofeedback.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                De biofeedback maakt zichtbaar wat er in je lichaam gebeurt. Daardoor kun je niet
                alleen begrijpen wat er gebeurt, maar het ook zelf ervaren.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je leert technieken die je vervolgens kunt gebruiken in je dagelijks leven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ruimte voor wat zich aandient */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">Onderweg</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Ruimte voor wat zich <em className="italic">aandient</em>
              </h2>
            </div>
            <div className="space-y-5 fade-up max-w-[65ch]">
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als je ergens vastloopt, zoeken we niet eindeloos naar hetzelfde antwoord. Soms stel ik
                een andere vraag, doen we een oefening of laten we het even rusten.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Niet ieder inzicht hoeft op het moment zelf te ontstaan.
              </p>
              <blockquote className="botanical-pullquote">
                "Sommige dingen hebben suddertijd nodig."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mijn rol als coach */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">Mijn rol als coach</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Ik hoef niet degene te zijn die vertelt wat jij <em className="italic">moet doen</em>
              </h2>
            </div>
            <div className="space-y-5 fade-up max-w-[65ch]">
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Mijn rol is om rust te brengen, veiligheid te creëren, intuïtief aan te voelen wat nodig
                is en je te laten ervaren.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Want duurzame verandering ontstaat wanneer je niet alleen begrijpt wat je anders wilt,
                maar het ook werkelijk zelf ervaart.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik help je ontdekken wat voor jou werkt, zodat je uiteindelijk zelf verder kunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slot */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-6">Begin vandaag</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight mb-8">
              Wil je ervaren of mijn manier van werken bij je <em className="italic">past</em>?
            </h2>
            <Link to="/contact" className="button-nav">
              Plan een vrijblijvend kennismakingsgesprek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
