import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    name: 'Inzicht',
    description: 'Je ontdekt de relatie tussen stress, energie, veerkracht, gedachten, gevoelens en gedrag.',
    price: '1',
  },
  {
    name: 'Rust',
    description: 'Je leert hoe je jouw lichaam en geest tot rust te brengen.',
    price: '2',
  },
  {
    name: 'Emoties',
    description: 'Je leert emoties beter herkennen, begrijpen en ermee omgaan.',
    price: '3',
  },
  {
    name: 'Balans',
    description: 'Je ontdekt hoe positieve emoties kunnen helpen om met stress om te gaan.',
    price: '4',
  },
  {
    name: 'Regie',
    description: 'Je leert de technieken toepassen in je dagelijks leven en beter omgaan met onverwachte situaties.',
    price: '5',
  },
  {
    name: 'Helderheid',
    description: 'Je leert vanuit meer rust en balans situaties te benaderen, beslissingen te nemen en effectiever te communiceren.',
    price: '6',
  },
  {
    name: 'Verankeren',
    description: 'Je kijkt terug op je ontwikkeling en maakt een persoonlijk plan om het geleerde blijvend toe te passen.',
    price: '7',
  },
];

const sessions = [
  { name: 'Van spanning naar veerkracht — 7 sessies', price: '€ 835' },
  { name: 'Vrijblijvend kennismakingsgesprek en intake', price: 'Gratis' },
];

export default function Tarieven() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: { trigger: '.programs-section', start: 'top 75%', once: true },
        y: 24, duration: 0.5, ease: 'power3.out',
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
          <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-6">Mijn aanbod</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-botanical-fg leading-tight mb-6">
            Van Spanning naar <em className="italic text-botanical-sage">Veerkracht</em>
          </h1>
          <p className="font-sans text-lg text-botanical-fg/70 leading-relaxed">
            Een 7-delig coachingstraject voor meer rust, energie en regie. Je hoeft niet eerst uit
            te vallen om te merken dat het anders moet. In Van Spanning naar Veerkracht leer je wat
            er bij jou gebeurt én hoe je daar zelf invloed op kunt krijgen.
          </p>
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl px-6 sm:px-8 py-5 shadow-botanical-md max-w-full">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-1">Kennismakingsgesprek</p>
              <p className="font-serif text-3xl font-bold text-botanical-fg">Gratis</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-botanical-stone" />
            <Link to="/kennismakingsgesprek" className="button-nav">Plan nu</Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">Het traject</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg">
              Zeven <em className="italic">persoonlijke</em> coachingsessies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {programs.map((p, i) => (
              <div
                key={p.name}
                className={`pricing-card h-full rounded-3xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-botanical-xl ${
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
                <p className={`font-serif text-3xl font-bold ${p.highlight ? 'text-botanical-clay' : 'text-botanical-sage'}`}>
                  {p.price}
                </p>
                <p className={`font-sans text-xs mt-1 ${p.highlight ? 'text-white/50' : 'text-botanical-fg/40'}`}>Sessie</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="sessions-section py-20 md:py-24 bg-botanical-card">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">De investering</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg">
              Wat het <em className="italic">kost</em>
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
                <p className="font-serif text-xl font-bold text-botanical-sage">{s.price}</p>
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
            Klaar om de eerste stap te <em className="italic text-botanical-clay">zetten</em>?
          </h2>
          <p className="font-sans text-lg text-white/65 mb-8">
            Vooraf bespreken we tijdens een vrijblijvend kennismakingsgesprek en intake waar je
            tegenaan loopt, wat je wilt veranderen en of mijn begeleiding bij je past.
          </p>
          <Link to="/kennismakingsgesprek" className="inline-flex items-center justify-center bg-botanical-sage text-white rounded-full px-8 py-4 font-sans text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-botanical-fg transition-all duration-300 shadow-botanical-xl">
            Kennismakingsgesprek plannen
          </Link>
        </div>
      </section>
    </div>
  );
}
