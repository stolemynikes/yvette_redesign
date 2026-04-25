import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import AdemBanner from '../assets/images/adem/Banner.jpg';
import Foto1 from '../assets/images/adem/Foto1.jpg';
import Foto2 from '../assets/images/adem/Foto2.jpg';
import Foto3 from '../assets/images/adem/Foto3.jpg';
import HERLEVA from '../assets/images/certificaten/HERLEVA.webp';
import CRKBO from '../assets/images/certificaten/CRKBO.png';
import KTNO from '../assets/images/certificaten/KTNO.svg';
import BATC from '../assets/images/certificaten/BATC.png';
import LVNG from '../assets/images/certificaten/LVNG.png';

export default function Ademwerk() {
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
        <img src={AdemBanner} alt="Ademwerk" />
        <div><h1>"Leer vrijuit voelen en maak een verandering door"</h1></div>
      </div>

      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Waarom ademwerk?</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Ademen is meer dan alleen in- en <em className="italic">uitademen.</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je kunt nog zo gezond eten, genoeg bewegen en goed slapen, maar als je ademhaling
                niet op orde is kan het lichaam niet optimaal functioneren.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">Door je ademhaling op de juiste manier te gebruiken kun jij:</p>
              <ul className="space-y-2">
                {['stress en spanning verminderen','vastgezette emoties en blokkades laten verdwijnen','lichamelijke klachten verzachten of oplossen','mentaal sterker worden','fit en energiek zijn'].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-base text-botanical-fg/75">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-botanical-sage shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={Foto2} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={Foto1} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">De sessies</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Zet je adem <em className="italic">doelgericht</em> in
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                De op jou persoonlijk afgestemde ademsessies zorgen voor een direct positief
                resultaat op fysiek, mentaal, emotioneel en spiritueel niveau.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Met een ademanalyse help ik jou om inzicht in je ademhaling te krijgen.
                De toepassing van verschillende ademtechnieken zorgt ervoor dat je de kracht
                van de ademhaling ontdekt.
              </p>
              <blockquote className="botanical-pullquote">
                "Je zult leren de adem doelgericht en op de juiste manier te blijven inzetten."
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
                Pak de regie en kies voor <em className="italic">ontspanning</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Wil je meer weten over mijn werkwijze en de grote voordelen van een goede ademhaling?
                Of wil je het gewoon gaan ervaren?
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Neem dan via onderstaande button contact met me op.
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
              <p className="font-sans text-sm text-botanical-fg/60 mb-6">Gediplomeerd ademcoach</p>
              <div className="flex justify-center">
                <img src={HERLEVA} alt="HERLEVA" className="h-16 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div>
              <p className="font-sans text-sm text-botanical-fg/60 mb-6">Opleiding geaccrediteerd door</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {[CRKBO, KTNO, BATC, LVNG].map((logo, i) => (
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
