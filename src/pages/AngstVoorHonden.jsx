import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import HondenBanner from '../assets/images/honden/Banner.jpg';
import Foto1 from '../assets/images/honden/Foto1.jpg';
import Foto2 from '../assets/images/honden/Foto2.jpg';
import Foto3 from '../assets/images/honden/Foto3.jpg';
import UWV from '../assets/images/certificaten/UWV.png';
import CRKBO from '../assets/images/certificaten/CRKBO.png';
import APDT from '../assets/images/certificaten/APDT.png';
import NVGH from '../assets/images/certificaten/NVGH.svg';
import AVH from '../assets/images/certificaten/AVH2023.png';

export default function AngstVoorHonden() {
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
        <img src={HondenBanner} alt="Angst voor honden" />
        <div><h1>"Angst helpt om vooruit te komen"</h1></div>
      </div>

      <section className="service-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 fade-up">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Je voelt het</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Je voelt dat het tijd is voor <em className="italic">verandering</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Je bent op het punt aangekomen van een grote uitdaging. Want hoe fijn zou het zijn om
                rustig over straat, het strand of door het bos te kunnen lopen zonder steeds alert te
                zijn op de aanwezigheid van die harige viervoeters?
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Angst is hét signaal voor jou om de stap te nemen en vooruit te komen!
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
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">De aanpak</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                De oplossing zit <em className="italic">in jou</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Door het inzetten van je moed kun jij leren om weer te vertrouwen. Als begeleider
                ondersteun ik jou bij het herkennen, erkennen en onder controle krijgen van je angst.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als je genoeg vertrouwen hebt opgebouwd, kun je daarna in de praktijk rustig
                oefenen met mijn hond en collega Fred.
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
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage">Het programma</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Pak de regie en neem <em className="italic">de stap</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als jij gemotiveerd bent om de angst aan te pakken doorloop ik samen met jou de
                7 stappen van de methode 'Stappen van Inzicht'. Deze methode helpt je om de angst
                beheersbaar te maken of misschien wel kwijt te raken.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                De flexibiliteit binnen dit programma zorgt voor maatwerk op basis van jouw behoefte.
                Het is geen 'quick fix' maar een beproefde aanpak waarmee positieve resultaten worden behaald.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 font-medium">Gewoon doen! Elke stap is er één.</p>
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
              <p className="font-sans text-sm text-botanical-fg/60 mb-6">Gediplomeerd begeleider Angst voor honden</p>
              <div className="flex justify-center">
                <img src={AVH} alt="AVH" className="h-16 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div>
              <p className="font-sans text-sm text-botanical-fg/60 mb-6">Opleiding geaccrediteerd door</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {[CRKBO, APDT, NVGH].map((logo, i) => (
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
