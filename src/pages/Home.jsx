import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Images
import Banner from '../assets/images/homepage/banner.jpg';
import HomePhoto from '../assets/images/homepage/Foto1.jpg';
import StressPhoto from '../assets/images/stressmanagement/Banner.jpg';
import AdemPhoto from '../assets/images/adem/BoxFoto.jpg';
import CoachingPhoto from '../assets/images/coaching/BoxFoto.jpg';
import HondenPhoto from '../assets/images/honden/BoxFoto.jpg';

// ─── Data ──────────────────────────────────────────────────────────────────

const services = [
  {
    to: '/stressmanagement',
    title: 'Stressmanagement',
    subtitle: 'De verborgen wijsheid van het Hart',
    description: 'Leer je zenuwstelsel te kalmeren en rust te vinden in het midden van de storm met de HeartMath-methode.',
    image: StressPhoto,
  },
  {
    to: '/ademwerk',
    title: 'Ademwerk',
    subtitle: 'Ademen, meer dan alleen in- en uit',
    description: 'Ontdek hoe bewust ademhalen je helpt spanningen los te laten en je lichaam te helen van binnenuit.',
    image: AdemPhoto,
    offset: true,
  },
  {
    to: '/coaching',
    title: 'Coaching',
    subtitle: 'Samen met een hond jezelf ontdekken',
    description: 'Fred, onze reddingshond, fungeert als eerlijke spiegel en begeleidt je in een uniek coachtraject.',
    image: CoachingPhoto,
  },
  {
    to: '/angst-voor-honden',
    title: 'Angst voor honden',
    subtitle: 'Toon je lef',
    description: 'Stap voor stap, op jouw tempo, bouw je vertrouwen op en ontdek dat honden een vriend kunnen zijn.',
    image: HondenPhoto,
    offset: true,
  },
];

const testimonials = [
  // Stressmanagement
  { quote: 'Ik merkte al enige tijd dat ik vermoeid was, mijzelf niet meer kon opladen en achter mijn ademhaling aanliep. Het coachtraject bij Yvette sloot aan bij mijn verwachtingen en heeft deze zelfs overtroffen. Belangrijkste resultaat is dat ik meer rust ervaar en aanvoel wanneer er stress of een energielek ontstaat en er nu wat aan kan doen.', name: 'J.V.', service: 'Stressmanagement' },
  { quote: 'Ik voelde mij heel veilig bij Yvette. Ze weet een goede balans te vinden tussen de techniek van deze methode en ook intuïtief de sessies in te steken. Voor mij was het een groot winstpunt dat ik mij minder laat meeslepen in emoties. De dingen meer van een afstand bekijk en bewuster kies.', name: 'M.G.', service: 'Stressmanagement' },
  { quote: 'Yvette is rustig, integer, ontspannen en duidelijk. Ze luistert en begrijpt je. Ze stelt de juiste vragen waardoor je meer gaat nadenken en voelen. Ik luister nu meer naar mijn lichaam. Slaap beter en knars bijna niet meer. Overdag voel ik mij rustiger en meer ontspannen.', name: 'P.v.B.', service: 'Stressmanagement' },
  { quote: 'Aanrader! Yvette helpt je controle te krijgen over jezelf.', name: 'S.P.', service: 'Stressmanagement' },
  // Coaching
  { quote: 'Ik heb de sessie ervaren als helder en met rust. Ik had het gevoel dat ik serieus genomen werd en dat ik de ruimte kreeg om na te denken en te voelen. Fred is lekker duidelijk een warme zachte spiegel.', name: 'E.', service: 'Coaching' },
  { quote: 'De ruimte die Yvette biedt binnen de aangegeven grenzen om in te spelen, vind ik echt een bijzonder recept van kwaliteiten. Ik dacht dat het gevoel van vrijheid betekent alle vrijheid geven aan de ander. Terwijl er dus ook vrijheid gevoeld kan worden binnen grenzen.', name: 'R.J.', service: 'Coaching' },
  { quote: 'Vond de sessie in 1 woord geweldig. Veel geleerd. Ben nu druk aan de slag met verder ontwikkelen en ga een cursus doen voor meer verdieping.', name: 'G.', service: 'Coaching' },
  { quote: 'De begeleiding is goed. Ik voelde mij veilig en totaal gehoord. De volledige aandacht was op mij. Fred\'s aanwezigheid was heel fijn — hij laat heel duidelijk de situatie zien. Je begrijpt mij. Je voelt mij. Je herkent mij.', name: 'A.W.', service: 'Coaching' },
  // Ademwerk
  { quote: 'Ik heb ons contact als heel fijn en rustig ervaren en inzicht in ademwerk gekregen. Ik neem een mooie nieuwe ervaring mee en een gezonder lijf. Dank voor je sessies, dank voor je vertrouwen en dank voor alle info en ervaring!', name: 'A.W.', service: 'Ademwerk' },
  { quote: 'Yvette, bedankt voor een heerlijke ademsessie. We zijn nu een paar uur verder en ik voel me echt heel lekker. Mijn hart blijft maar open gaan. Je hebt een groot talent om mensen te begrijpen en te begeleiden.', name: 'A.S.', service: 'Ademwerk' },
  { quote: 'Jouw adem-coaching heeft mij geholpen mijn hoofd en lichaam te laten ontspannen door enkel mijn manier van ademen bewust te veranderen. In 4 sessies heb ik geleerd wat "beter ademen" mij brengt.', name: 'M.L.', service: 'Ademwerk' },
  // Angst voor honden
  { quote: 'Yvette heeft heel geduldig het proces opgebouwd en een band ontwikkeld waardoor W. zich veilig voelde. Ze is een fijne persoonlijkheid en we zijn erg te spreken over hoe ze dit heeft aangepakt. Het behaalde resultaat mag er zijn!', name: 'E. en M. v.W.', service: 'Angst voor honden' },
  { quote: 'Ik vond het samenwerken heel leuk en ook met Fred. Op het strand vond ik het op het begin nog een beetje spannend, maar daarna niet meer.', name: 'J.', service: 'Angst voor honden' },
  { quote: 'Super bedankt voor je begeleiding. J. heeft echt stappen gemaakt dankzij jou en Fred.', name: 'S.v.H.', service: 'Angst voor honden' },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function Home() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const ctaRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Modal state
  const [modal, setModal] = useState(null);
  const [modalClosing, setModalClosing] = useState(false);
  const [marquePaused, setMarquePaused] = useState(false);

  function closeModal() {
    setModalClosing(true);
    setTimeout(() => { setModal(null); setModalClosing(false); }, 300);
  }

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
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

      // Scroll-triggered sections — only animate y, NOT opacity
      // (opacity:0 in gsap.from causes permanent invisibility if trigger never fires)
      const sections = ['.intro-section', '.cta-section', '.services-section', '.testimonials-section'];
      sections.forEach((sel) => {
        gsap.from(`${sel} .fade-up`, {
          scrollTrigger: { trigger: sel, start: 'top 85%', once: true },
          y: 30,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
        });
      });

      // Service cards stagger
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-section', start: 'top 85%', once: true },
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Testimonial cards
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: '.testimonials-section', start: 'top 85%', once: true },
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-botanical-bg min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center py-16 md:py-24"
      >
        {/* Decorative background blob */}
        <div
          className="hidden lg:block absolute right-0 top-0 w-1/2 h-[115%] bg-botanical-card opacity-60 pointer-events-none"
          style={{ borderRadius: '0 0 0 60% / 0 0 0 40%' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="hero-text order-2 lg:order-1">
              <span className="inline-block font-sans text-xs tracking-widest uppercase text-botanical-terra mb-6 fade-up">
                Coaching · Ademwerk · Stressmanagement
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-botanical-fg mb-6">
                Voel jij te veel onrust en wil je weer{' '}
                <em className="italic text-botanical-sage">ontspannen</em> leven?
              </h1>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed mb-10 max-w-lg">
                Je hoofd staat niet stil. Je piekert, voelt de druk en komt niet tot rust.
                Samen vinden we jouw weg naar meer kalmte en veerkracht.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/kennismakingsgesprek" className="button-nav">
                  Kennismakingsgesprek
                </Link>
                <Link
                  to="/over-ons"
                  className="font-sans text-sm tracking-wide text-botanical-fg/60 hover:text-botanical-terra transition-colors duration-300 underline underline-offset-4"
                >
                  Over Yvette →
                </Link>
              </div>
            </div>

            {/* Arch Image */}
            <div className="hero-image order-1 lg:order-2 flex justify-center lg:justify-end">
              {/* Outer: shadow + border-radius for shadow shape */}
              <div
                className="relative w-64 sm:w-80 lg:w-[380px] xl:w-[420px] shadow-botanical-xl"
                style={{ borderRadius: '200px 200px 40px 40px' }}
              >
                {/* Inner: clip-path always clips, even during hover scale */}
                <div style={{ clipPath: 'inset(0 round 200px 200px 40px 40px)' }}>
                  <img
                    src={Banner}
                    alt="Yvette van Zadel"
                    className="w-full h-auto block hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
                {/* Floating quote card */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-botanical-md">
                  <p className="font-serif italic text-sm text-botanical-fg text-center leading-snug">
                    "Spanning is wie je denkt te moeten zijn,<br />
                    ontspanning is wie je bent."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── Intro Text ───────────────────────────────────────────────────── */}
      <section className="intro-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-6">Herken jij dit?</p>
          </div>
          <div className="space-y-5 fade-up">
            <p className="font-serif text-2xl md:text-3xl text-botanical-fg leading-relaxed">
              Je denkt de hele dag aan wat je nog moet doen — de afspraken, de tijd die tekort komt,
              de dingen waar je tegenop ziet.
            </p>
            <p className="font-sans text-lg text-botanical-fg/70 leading-relaxed">
              Je hoofd staat niet stil. Negatieve gedachten dringen zich op.
              Je slaapt slecht, bent niet veerkrachtig en hebt weinig energie.
              Je hebt het gevoel dat je de controle kwijt raakt.
            </p>
          </div>
          <div className="mt-8 fade-up">
            <div className="w-16 h-px bg-botanical-clay mx-auto" />
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="cta-section py-16 md:py-24 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img
                src={HomePhoto}
                alt="Yvette van Zadel"
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Text */}
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra mb-5">De eerste stap</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-botanical-fg leading-tight mb-6">
                Wil jij ook meer rust in je hoofd en{' '}
                <em className="italic">minder stress</em> ervaren?
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed mb-4">
                Neem dan vandaag de eerste stap.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed mb-10">
                In een vrijblijvend kennismakingsgesprek krijgen we samen helder
                wat jouw specifieke vraag is en hoe ik jou kan ondersteunen.
              </p>
              <Link to="/kennismakingsgesprek" className="button-nav">
                Plan een kennismakingsgesprek
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="services-section py-20 md:py-32 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16 md:mb-20 fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-4">Waar ik mee kan helpen</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-botanical-fg leading-tight">
              Mijn <em className="italic">diensten</em>
            </h2>
          </div>

          {/*! Look at the cards grid staggered, I fixed the clippath of the white backgrounmd, but now the box shadow is broken. */}

          {/* Cards grid — staggered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              /* Outer div: shadow only — no clip-path, so drop-shadow follows the arch shape */
              <div
                key={service.to}
                className={`[filter:drop-shadow(0_10px_15px_rgba(45,58,49,0.07))] hover:[filter:drop-shadow(0_25px_50px_rgba(45,58,49,0.15))] hover:-translate-y-2 transition-all duration-500 ${service.offset ? 'md:mt-10 lg:mt-16' : ''}`}
              >
                <Link
                  to={service.to}
                  style={{ clipPath: 'inset(0 round 100px 100px 0 0)', overflow: 'hidden' }}
                  className="service-card group flex flex-col rounded-3xl bg-white block"
                >
                  {/* Arch image */}
                  <div style={{ clipPath: 'inset(0 round 100px 100px 0 0)' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-botanical-fg mb-2 group-hover:text-botanical-sage transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-serif italic text-sm text-botanical-terra mb-3">{service.subtitle}</p>
                    <p className="font-sans text-sm text-botanical-fg/65 leading-relaxed mb-4 flex-1">{service.description}</p>
                    <span className="font-sans text-xs tracking-widest uppercase text-botanical-sage group-hover:text-botanical-terra inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Meer lezen
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decorative divider ───────────────────────────────────────────── */}
      <div className="flex items-center justify-center py-4 bg-botanical-bg">
        <div className="w-px h-12 bg-botanical-clay" />
      </div>

      {/* ── Testimonials marquee ─────────────────────────────────────────── */}
      <section className="testimonials-section py-20 md:py-28 bg-botanical-bg overflow-hidden">
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.96) translateY(8px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes modalOut {
            from { opacity: 1; transform: scale(1) translateY(0); }
            to   { opacity: 0; transform: scale(0.96) translateY(8px); }
          }
          @keyframes modalOverlayIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes modalOverlayOut {
            from { opacity: 1; }
            to   { opacity: 0; }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-4">Ervaringen</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-botanical-fg">
              Wat anderen <em className="italic">zeggen</em>
            </h2>
          </div>
        </div>

        {/* Marquee track — full width, edge-to-edge */}
        <div className="relative">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-botanical-bg to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-botanical-bg to-transparent" />

          <div
            className="flex gap-6 w-max"
            style={{ animation: `marquee 60s linear infinite`, animationPlayState: marquePaused ? 'paused' : 'running' }}
            onMouseEnter={() => setMarquePaused(true)}
            onMouseLeave={() => setMarquePaused(false)}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                onClick={t.quote.length > 120 ? () => setModal(t) : undefined}
                className={`group w-80 min-h-[280px] bg-white rounded-3xl p-7 shadow-botanical-md flex flex-col shrink-0 ${t.quote.length > 120 ? 'cursor-pointer hover:shadow-botanical-lg transition-shadow duration-300' : ''}`}
              >
                <div className="font-serif text-5xl text-botanical-clay/50 leading-none mb-3 select-none">"</div>
                <p className="font-serif italic text-sm text-botanical-fg leading-relaxed flex-1 mb-4 line-clamp-4">
                  {t.quote}
                </p>
                <div className="mt-auto">
                  {t.quote.length > 120 && (
                    <button
                      onClick={() => setModal(t)}
                      className="font-sans text-xs text-botanical-sage group-hover:text-botanical-terra transition-colors duration-200 mb-3 block"
                    >
                      Lees meer →
                    </button>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-sm font-semibold text-botanical-fg">{t.name}</p>
                    <span className="font-sans text-xs text-botanical-sage bg-botanical-card px-2.5 py-1 rounded-full">{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial modal (portal → bypasses page-transition transform) ── */}
      {modal && createPortal(
        <div
          className="fixed inset-0 z-[60] bg-botanical-fg/40 backdrop-blur-sm flex items-center justify-center p-6"
          style={{ animation: modalClosing ? 'modalOverlayOut 0.3s ease both' : 'modalOverlayIn 0.3s ease both' }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-8 md:p-10 shadow-botanical-xl relative"
            style={{ animation: modalClosing ? 'modalOut 0.3s cubic-bezier(0.4,0,1,1) both' : 'modalIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Sluiten"
              className="absolute top-5 right-5 text-botanical-fg/30 hover:text-botanical-fg/70 transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="font-serif text-5xl text-botanical-clay/50 leading-none mb-4 select-none">"</div>
            <p className="font-serif italic text-base text-botanical-fg leading-relaxed mb-8">{modal.quote}</p>
            <div className="flex items-center justify-between">
              <p className="font-sans text-sm font-semibold text-botanical-fg">{modal.name}</p>
              <span className="font-sans text-xs text-botanical-sage bg-botanical-card px-3 py-1 rounded-full">{modal.service}</span>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ── Final CTA strip ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-botanical-fg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-botanical-clay/70 mb-5">Begin vandaag</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Klaar om de eerste stap te <em className="italic text-botanical-clay">zetten</em>?
          </h2>
          <p className="font-sans text-lg text-white/65 mb-10">
            Het kennismakingsgesprek is vrijblijvend en gratis. Laten we samen kijken wat jij nodig hebt.
          </p>
          <Link
            to="/kennismakingsgesprek"
            className="inline-flex items-center justify-center bg-botanical-terra text-white rounded-full px-8 py-4 font-sans text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-botanical-fg transition-all duration-300 shadow-botanical-xl"
          >
            Kennismakingsgesprek plannen
          </Link>
        </div>
      </section>

    </div>
  );
}
