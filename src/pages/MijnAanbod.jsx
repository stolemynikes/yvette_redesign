import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Banner from '../assets/images/Stressmanagement/Banner.jpg';
import VeerkrachtFoto from '../assets/images/Stressmanagement/Foto3.jpg'; // 1. Van Spanning naar Veerkracht
import TrajectFoto from '../assets/images/kennis/BoxFoto.jpg';            // 2. Het traject
import WerkwijzeFoto from '../assets/images/Adem/Foto2.jpg';              // 3. Hoe we werken

const opbrengsten = [
  'ervaar je meer rust en helderheid',
  'heb je meer vertrouwen in jezelf',
  'kun je beter omgaan met spanning en emoties',
  'weet je hoe je je energie beter kunt inzetten',
  'kun je in moeilijke situaties bewuster reageren',
  'heb je praktische technieken die je zelfstandig kunt blijven gebruiken',
];

const stappen = [
  { n: '1', title: 'Inzicht', text: 'Je ontdekt de relatie tussen stress, energie, veerkracht, gedachten, gevoelens en gedrag.' },
  { n: '2', title: 'Rust', text: 'Je leert hoe je jouw lichaam en geest tot rust te brengen.' },
  { n: '3', title: 'Emoties', text: 'Je leert emoties beter herkennen, begrijpen en ermee omgaan.' },
  { n: '4', title: 'Balans', text: 'Je ontdekt hoe positieve emoties kunnen helpen om met stress om te gaan.' },
  { n: '5', title: 'Regie', text: 'Je leert de technieken toepassen in je dagelijks leven en beter omgaan met onverwachte situaties.' },
  { n: '6', title: 'Helderheid', text: 'Je leert vanuit meer rust en balans situaties te benaderen, beslissingen te nemen en effectiever te communiceren.' },
  { n: '7', title: 'Verankeren', text: 'Je kijkt terug op je ontwikkeling en maakt een persoonlijk plan om het geleerde blijvend toe te passen.' },
];

export default function MijnAanbod() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.service-section').forEach((section) => {
        gsap.from(section.querySelectorAll('.fade-up'), {
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          y: 40, stagger: 0.12, duration: 0.85, ease: 'power3.out',
        });
      });
      gsap.from('.step-card', {
        scrollTrigger: { trigger: '.steps-section', start: 'top 80%', once: true },
        y: 24, duration: 0.5, ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-botanical-bg min-h-screen">
      <div className="page-banner">
        <img src={Banner} alt="Mijn aanbod" />
        <div><h1>"Van Spanning naar Veerkracht"</h1></div>
      </div>

      {/* 1. Van Spanning naar Veerkracht — foto 1 */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Mijn aanbod</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Een 7-delig coachingstraject voor meer rust, energie en <em className="italic">regie</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je hoeft niet eerst uit te vallen om te merken dat het anders moet.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Misschien staat je hoofd voortdurend aan, heb je steeds minder energie of lukt
                ontspannen niet meer vanzelf. Je probeert het op te lossen door harder te werken,
                beter te plannen of gewoon door te gaan. Maar ergens weet je: zo houd ik het niet
                vol.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                In Van Spanning naar Veerkracht leer je wat er bij jou gebeurt én hoe je daar zelf
                invloed op kunt krijgen.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={VeerkrachtFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Wat levert het je op */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">De opbrengst</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Wat levert het je <em className="italic">op</em>?
              </h2>
            </div>
            <div className="space-y-5 fade-up max-w-[65ch]">
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je leert spanning eerder herkennen, je lichaam en emoties beter begrijpen en jezelf
                reguleren. Na het traject:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                {opbrengsten.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3 h-0.5 w-4 bg-botanical-terra shrink-0" />
                    <span className="font-sans text-base text-botanical-fg/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="botanical-pullquote">
                "Het doel is niet dat je nooit meer spanning ervaart, maar dat je weet wat je kunt
                doen wanneer spanning er wél is."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Het traject — foto 2 */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={TrajectFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Het traject</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Zeven <em className="italic">persoonlijke</em> coachingsessies
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Naast een vrijblijvend kennismakingsgesprek en intake. Elke sessie bouwt voort op
                de vorige.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De zeven stappen */}
      <section className="steps-section pb-20 md:pb-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {stappen.map((s) => (
              <div key={s.n} className="step-card h-full rounded-3xl p-7 flex flex-col bg-white shadow-botanical-md transition-all duration-500 hover:-translate-y-2 hover:shadow-botanical-xl">
                <p className="font-serif text-3xl font-bold text-botanical-sage leading-none">{s.n}</p>
                <p className="font-serif text-xl font-bold text-botanical-fg mt-3 mb-2 leading-tight">{s.title}</p>
                <p className="font-sans text-sm text-botanical-fg/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hoe we werken — foto 3 */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Hoe we werken</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Niet alleen begrijpen, maar vooral <em className="italic">ervaren</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                We combineren gesprekken met ademhaling, lichaamsgerichte oefeningen en HeartMath
                met HRV-biofeedback. Je leert niet alleen begrijpen wat er gebeurt, maar vooral
                ervaren wat voor jou werkt.
              </p>
              <blockquote className="botanical-pullquote">
                "Ik stuur op het proces, maar niet op de inhoud."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Jij ontdekt uiteindelijk zelf wat voor jou werkt.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={WerkwijzeFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* De investering */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-6">De investering</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight mb-8">
              Van spanning naar <em className="italic">veerkracht</em>
            </h2>
          </div>
          <div className="fade-up flex w-full sm:inline-flex sm:w-auto flex-col sm:flex-row items-center gap-5 sm:gap-8 bg-white rounded-3xl px-6 sm:px-8 py-7 shadow-botanical-md">
            <div>
              <p className="font-serif text-4xl font-bold text-botanical-fg leading-none">€ 835,-</p>
              <p className="font-sans text-sm text-botanical-fg/65 mt-2">7 sessies</p>
            </div>
            <div className="hidden sm:block w-px h-14 bg-botanical-stone" />
            <div>
              <p className="font-serif text-4xl font-bold text-botanical-fg leading-none">Gratis</p>
              <p className="font-sans text-sm text-botanical-fg/65 mt-2">Kennismakingsgesprek en intake</p>
            </div>
          </div>
          <div className="fade-up">
            <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed mt-10 mb-8">
              Vooraf bespreken we tijdens een vrijblijvend kennismakingsgesprek en intake waar je
              tegenaan loopt, wat je wilt veranderen en of mijn begeleiding bij je past.
            </p>
            <p className="font-serif italic text-botanical-sage text-xl mb-6">Klaar om de eerste stap te zetten?</p>
            <Link to="/contact" className="button-nav">
              Plan een vrijblijvend kennismakingsgesprek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
