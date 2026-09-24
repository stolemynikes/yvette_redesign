import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Banner from '../assets/images/OverOns/Banner.jpg';
import IntroFoto from '../assets/images/OverOns/Yvette.jpg';      // 1. intro — ik weet hoe het is
import DoorgaanFoto from '../assets/images/OverOns/Yvette2.jpg';  // 2. doorgaan was voor mij normaal
import ErvarenFoto from '../assets/images/OverOns/Fred.jpg';      // 3. van begrijpen naar ervaren
import SlotFoto from '../assets/images/kennis/Foto1.jpg';         // 4. onderaan

export default function OverMij() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.profile-section').forEach((section) => {
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
        <img src={Banner} alt="Over mij" />
        <div><h1>"Ik weet hoe het is om altijd maar door te gaan"</h1></div>
      </div>

      {/* 1. Intro — foto 1 */}
      <section className="profile-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Over Yvette</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Ik weet hoe het is om altijd maar <em className="italic">door te gaan</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik ben Yvette van Zadel, Ademcoach, Stress/burn-out coach en HeartMath coach.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Persoonlijke ontwikkeling heeft mij al sinds mijn puberteit geïnteresseerd. Ik was
                altijd nieuwsgierig naar het gedrag van mensen en dieren. Ik observeerde,
                analyseerde en probeerde te begrijpen waarom mensen doen wat ze doen.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={IntroFoto} alt="Yvette van Zadel" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Doorgaan was voor mij normaal — foto 2 */}
      <section className="profile-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={DoorgaanFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Het keerpunt</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Doorgaan was voor mij <em className="italic">normaal</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Toen ik 46 was, kreeg ik een motorongeluk. Mijn herstel duurde jaren en dwong me om
                te vertragen. Dat was niet gemakkelijk voor iemand die gewend was altijd bezig te
                zijn, snel te denken en veel verantwoordelijkheid te dragen.
              </p>
              <blockquote className="botanical-pullquote">
                "Vertragen voelde als luiheid."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Tijdens mijn herstel ontdekte ik hoe sterk ik vooral vanuit mijn hoofd leefde. Ik
                wilde mijn lichaam eigenlijk niet voelen, omdat het pijn deed. Mijn lichaam voelde
                als een belemmering en ik was het vertrouwen erin kwijtgeraakt.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Juist doordat ik moest vertragen, ontstond er ruimte om opnieuw te leren luisteren
                naar mijn lijf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Van begrijpen naar ervaren — foto 3 */}
      <section className="profile-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Mensen en dieren</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Van begrijpen naar <em className="italic">ervaren</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Mijn interesse in persoonlijke ontwikkeling kwam terug en ik besloot opleidingen te
                gaan volgen. In een project met getraumatiseerde en verwaarloosde paarden en later
                in mijn opleiding tot hondenspiegeltrainer leerde ik veel over menselijk en dierlijk
                gedrag.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Die ervaringen hebben mijn kijk op persoonlijke ontwikkeling veranderd.
              </p>
              <blockquote className="botanical-pullquote">
                "Lichaam en geest zijn onlosmakelijk met elkaar verbonden."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Dat vormt nu de basis van mijn manier van werken. Ik wil niet alleen met je praten
                over wat er gebeurt, maar je laten ervaren wat er in je lichaam gebeurt, wat je
                voelt en welke invloed je daar zelf op kunt hebben.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={ErvarenFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Waarom ik dit werk doe — tekst, kop links en leeskolom rechts */}
      <section className="profile-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold mb-4">Mijn drijfveer</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Waarom ik dit werk <em className="italic">doe</em>
              </h2>
            </div>
            <div className="space-y-5 fade-up max-w-[65ch]">
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Het mooiste moment in coaching vind ik wanneer iemand zelf ontdekt wat er werkelijk
                speelt. Niet omdat ik het antwoord heb gegeven, maar omdat de cliënt het zelf heeft
                gevonden.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Daar ontstaat ruimte voor verandering: meer helderheid, meer vertrouwen, meer
                energie en uiteindelijk meer regie.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik heb niet alle wijsheid in handen en ook niet alle antwoorden. Maar wat ik wel
                meebreng is ervaring, kennis, nieuwsgierigheid en het vertrouwen dat jij zelf veel
                meer weet en kunt dan je misschien op dit moment ervaart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mijn overtuiging + kennismaken — foto 4 */}
      <section className="profile-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={SlotFoto} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra font-bold">Mijn overtuiging</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Je hoeft niet harder je best te <em className="italic">doen</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Soms is het nodig om te vertragen, te voelen en opnieuw te ontdekken wat voor jou
                werkt. Daar begeleid ik je graag bij.
              </p>
              <p className="font-serif italic text-botanical-sage text-xl">Wil je kennismaken?</p>
              <div className="pt-2">
                <Link to="/contact" className="button-nav">
                  Plan een vrijblijvend kennismakingsgesprek
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
