import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Foto's — nummering volgt de fotolijst in Homepage_DEF
import Banner from '../assets/images/Stressmanagement/Foto1.jpg';          // 1. hero
import UitvallenPhoto from '../assets/images/Stressmanagement/Foto2.jpg';  // 2. Je hoeft niet eerst uit te vallen
import AanpakPhoto from '../assets/images/Adem/Foto1.jpg';                 // 4. Van spanning naar veerkracht
import PersoonlijkPhoto from '../assets/images/Contact/Banner2.jpg';       // 5. Persoonlijke begeleiding

const signalen = [
  'je hoofd staat voortdurend aan;',
  'je piekert en kunt moeilijk loslaten;',
  'je hebt het gevoel dat je achter de feiten aanloopt;',
  'je bent snel geïrriteerd, emotioneel of overprikkeld;',
  'je hebt steeds minder energie;',
  'ontspannen lukt niet meer vanzelf;',
  'je probeert vooral door te gaan, terwijl dat steeds moeilijker wordt.',
];

const ruimteVoor = ['meer rust', 'meer helderheid', 'meer vertrouwen', 'meer energie', 'meer regie'];

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text > *', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.95,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.4,
      });

      // Alleen y animeren, geen opacity: met opacity: 0 in een from-tween
      // blijft een sectie onzichtbaar als de trigger nooit afgaat.
      document.querySelectorAll('.home-section').forEach((section) => {
        gsap.from(section.querySelectorAll('.fade-up'), {
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
          y: 30,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-botanical-bg min-h-screen">

      {/* ── Hero — foto 1 ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex items-center py-16 md:py-24">
        <div
          className="absolute right-0 top-0 w-full h-[calc(50%+40px)] lg:w-1/2 lg:h-[115%] bg-botanical-teal/25 pointer-events-none"
          style={{ borderRadius: '0 0 0 60% / 0 0 0 40%' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="hero-text order-2 lg:order-1">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-botanical-fg mb-6">
                Van spanning naar <em className="italic text-botanical-sage">veerkracht</em>
              </h1>
              <p className="font-serif text-2xl md:text-3xl text-botanical-fg leading-relaxed">
                Meer rust in je hoofd. Meer energie. Meer regie over je leven.
              </p>
            </div>

            <div className="hero-image order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                className="relative w-64 sm:w-80 lg:w-[380px] xl:w-[420px] shadow-botanical-xl"
                style={{ borderRadius: '200px 200px 40px 40px' }}
              >
                <div style={{ clipPath: 'inset(0 round 200px 200px 40px 40px)' }}>
                  <img
                    src={Banner}
                    alt="Yvette van Zadel"
                    className="w-full h-auto block hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Je hoofd staat niet stil ───────────────────────────────────────── */}
      <section className="home-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl text-botanical-fg leading-relaxed fade-up">
            Je hoofd staat niet stil.
          </p>
          <div className="space-y-5 mt-6 fade-up">
            <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
              Je denkt aan alles wat nog moet, wat niet af is en wat beter moet. Je probeert
              overzicht te houden, gaat door en houdt zoveel mogelijk onder controle.
            </p>
            <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
              Maar ondertussen merk je dat het steeds meer moeite kost.
            </p>
            <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
              Je bent sneller gespannen of overprikkeld, slaapt minder goed, hebt minder energie of
              merkt dat je niet meer kunt ontspannen zoals je gewend was.
            </p>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-botanical-fg leading-relaxed mt-8 fade-up">
            Aan de buitenkant gaat het misschien nog prima.{' '}
            <em className="italic text-botanical-sage">Vanbinnen voelt het steeds zwaarder.</em>
          </p>
          <div className="mt-10 fade-up">
            <div className="w-16 h-px bg-botanical-terra mx-auto" />
          </div>
        </div>
      </section>

      {/* ── Je hoeft niet eerst uit te vallen — foto 2 ─────────────────────── */}
      <section className="home-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img
                src={UitvallenPhoto}
                alt=""
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-5 fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Je hoeft niet eerst <em className="italic">uit te vallen</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Misschien herken je jezelf hierin:
              </p>
              <ul className="space-y-2.5">
                {signalen.map((signaal) => (
                  <li key={signaal} className="flex items-start gap-3">
                    <span className="mt-3 h-0.5 w-4 bg-botanical-terra shrink-0" />
                    <span className="font-sans text-base text-botanical-fg/75 leading-relaxed">{signaal}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">Misschien denk je:</p>
              <blockquote className="botanical-pullquote">
                "Waarom lukt het me allemaal niet meer zoals vroeger?"
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">Of:</p>
              <blockquote className="botanical-pullquote">
                "Ik moet me gewoon wat beter organiseren en nog even volhouden."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Maar als je al langere tijd over je grenzen gaat, is harder doorgaan meestal niet de
                oplossing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Van spanning naar veerkracht — foto 4 ──────────────────────────── */}
      <section className="home-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-5 fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Van spanning naar <em className="italic">veerkracht</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                In mijn coaching leer je niet alleen begrijpen wat er met je gebeurt. Je leert
                vooral ervaren hoe je zelf invloed kunt krijgen op spanning, emoties en je reacties
                daarop.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                We brengen je aandacht uit je hoofd en terug naar je lichaam. Met gesprekken,
                ademhaling, lichaamsgerichte oefeningen en HeartMath met HRV-biofeedback ontdek je
                wat voor jou werkt.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">Zo ontstaat ruimte voor:</p>
              <div className="flex flex-wrap gap-2">
                {ruimteVoor.map((item) => (
                  <span
                    key={item}
                    className="font-serif text-lg text-botanical-sage bg-botanical-bg border border-botanical-stone rounded-full px-4 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Het doel is niet dat je nooit meer spanning ervaart.
              </p>
              <p className="font-serif text-2xl text-botanical-fg leading-relaxed">
                Het doel is dat je weet wat je kunt doen wanneer spanning er{' '}
                <em className="italic text-botanical-sage">wél</em> is.
              </p>
            </div>

            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img
                src={AanpakPhoto}
                alt=""
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Persoonlijke begeleiding — foto 5 ──────────────────────────────── */}
      <section className="home-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img
                src={PersoonlijkPhoto}
                alt=""
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-5 fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Persoonlijke begeleiding die bij <em className="italic">jou</em> begint
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Iedereen reageert anders op spanning. Daarom kijken we niet alleen naar je klachten,
                maar naar jou.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Wat speelt er? Welke patronen herken je? Wat vertelt je lichaam? Wat heb jij nodig?
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik stuur op het proces, maar niet op de inhoud. Door vragen te stellen, te laten
                ervaren en soms juist even ruimte te geven, help ik je ontdekken wat voor jou werkt.
              </p>
              <blockquote className="botanical-pullquote">
                "Niet alleen begrijpen wat er gebeurt, maar ervaren wat voor jou werkt."
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ── Wil jij weer ruimte ervaren? ───────────────────────────────────── */}
      <section className="home-section py-20 md:py-28 bg-botanical-fg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-8 fade-up">
            Wil jij weer <em className="italic text-botanical-clay">ruimte</em> ervaren?
          </h2>
          <div className="space-y-5 mb-10 fade-up">
            <p className="font-sans text-lg text-white/75">
              Je hoeft niet te wachten tot het echt niet meer gaat.
            </p>
            <p className="font-sans text-lg text-white/75">
              In een vrijblijvend kennismakingsgesprek bespreken we waar je tegenaan loopt, wat je
              graag anders zou willen en of mijn manier van werken bij je past.
            </p>
          </div>
          <div className="fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-botanical-sage rounded-full px-8 py-4 font-sans text-sm tracking-widest uppercase font-bold hover:bg-botanical-clay hover:text-botanical-fg transition-all duration-300 shadow-botanical-xl"
            >
              Plan een vrijblijvend kennismakingsgesprek
            </Link>
          </div>
          <div className="mt-12 fade-up">
            <p className="font-serif text-xl text-white">Yvette van Zadel</p>
            <p className="font-sans text-sm text-white/70 mt-1">
              Ademcoach | Stress- &amp; burn-outcoach | HeartMath coach
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
