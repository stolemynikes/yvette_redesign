import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import StressmanagementBanner from '../assets/images/Stressmanagement/Banner.jpg';
import Foto1 from '../assets/images/Stressmanagement/Foto1.jpg';
import Foto2 from '../assets/images/Stressmanagement/Foto2.jpg';
import Foto3 from '../assets/images/Stressmanagement/Foto3.jpg';
import HearthMath from '../assets/images/certificaten/HearthMath.webp';

export default function Stressmanagement() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.service-section').forEach((section) => {
        gsap.from(section.querySelectorAll('.fade-up'), {
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          y: 40,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-botanical-bg min-h-screen">

      {/* Banner */}
      <div className="page-banner">
        <img src={StressmanagementBanner} alt="Stressmanagement" />
        <div>
          <h1>"De verborgen wijsheid van het Hart"</h1>
        </div>
      </div>

      {/* Section 1 */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Het probleem</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Onze hedendaagse leefstijl geeft <em className="italic">stress.</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Veel mensen hebben een verhoogd gevoel van spanning en overprikkeling.
                Je ervaart dit als je onder druk staat en er veel van je wordt gevraagd.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Stress wordt vaak veroorzaakt door situaties die je als moeilijk of overweldigend
                ervaart. Op het werk, school, in relaties of tijdens veranderingen in je leven.
              </p>
            </div>
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group">
              <img src={Foto1} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="service-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up overflow-hidden rounded-[40px] shadow-botanical-lg group order-2 md:order-1">
              <img src={Foto2} alt="" className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="space-y-5 fade-up order-1 md:order-2">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">De aanpak</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Stress zit niet alleen in je hoofd maar ook in je <em className="italic">lichaam.</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Het zorgt vaak voor een slechte nachtrust en fysieke klachten. Als HeartMath coach
                bied ik je een programma aan waarin je leert op een simpele en effectieve manier
                grip te krijgen op de gedachten en emoties die stress veroorzaken.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                De apparatuur die we daarbij gebruiken geeft real-time biofeedback over je
                hartcoherentie en laat zien hoe je lichaam reageert op stress en emoties.
              </p>
              <blockquote className="botanical-pullquote">
                "Het HeartMath programma is eenvoudig, solide en heeft wetenschappelijk aangetoonde resultaten."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 + CTA */}
      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Het programma</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Pak de regie en kies voor <em className="italic">Veerkracht, Inzicht en Vaardigheden</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                In 7 sessies krijg je niet alleen inzicht in de stress die jij ervaart — je krijgt
                ook allerlei technieken aangereikt om je stress te managen of zelfs te laten verdwijnen.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als coach werk ik ook voor de Provincie Noord-Holland. Meerdere werknemers hebben
                het programma doorlopen. De resultaten zijn geweldig!
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

      {/* Certificates */}
      <section className="py-16 bg-botanical-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif italic text-botanical-sage text-sm mb-8">Gecertificeerd</p>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <img src={HearthMath} alt="HeartMath" className="h-20 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>

    </div>
  );
}
