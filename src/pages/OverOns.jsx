import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Banner from '../assets/images/OverOns/Banner.jpg';
import Yvette from '../assets/images/OverOns/Yvette2.jpg';
import Fred from '../assets/images/OverOns/Fred2.jpg';
import Digby from '../assets/images/OverOns/Digby2.jpg';

export default function OverOns() {
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
        <img src={Banner} alt="Over ons" />
        <div><h1>"Spanning is wie je denkt te moeten zijn, ontspanning is wie je bent"</h1></div>
      </div>

      {/* Yvette */}
      <section className="profile-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <div className="shadow-botanical-xl" style={{ borderRadius: '200px 200px 40px 40px' }}>
                <div style={{ clipPath: 'inset(0 round 200px 200px 40px 40px)' }}>
                  <img src={Yvette} alt="Yvette" className="w-full aspect-[3/4] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>
            <div className="space-y-5 fade-up pt-4">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra">Yvette van Zadel</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                Mijn talent is het <em className="italic">brengen van ontspanning</em>
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                In een bedrijfstraining ontdekte ik dat mijn talent 'het brengen van ontspanning' is.
                Ik was verbaasd door deze uitkomst maar als ik naar mezelf kijk en hoe ik omga met
                mensen en dieren, dan klopt het. Daar gaat mijn innerlijk vuur van aan.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik wil dan ook heel graag samen met jou de deuren openen die ervoor zorgen dat jij
                in de flow van verandering en ontspanning komt. Want voor een ontspannen mens is geen
                berg te hoog, geen zee te diep.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ontspanning zorgt voor ruimte en vrijheid in je hoofd en in je hart. Tijdens mijn
                coachopleidingen heb ik hard gewerkt om zonder oordeel naar mezelf te kunnen kijken.
                Om blokkades op te heffen, lichamelijk te herstellen en trauma's te verwerken.
              </p>
              <blockquote className="botanical-pullquote">
                "Je leeft je leven maar één keer. Gun jezelf dan ook de beste versie."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik ben creatief, liefdevol, beweeg vanuit zachtheid, kan goed relativeren en ben
                resultaatgericht. Humor vind ik belangrijk net als veiligheid. Laten we elkaar snel ontmoeten!
              </p>
              <p className="font-serif italic text-botanical-sage">Liefs, Yvette</p>
              <div className="pt-4">
                <Link to="/kennismakingsgesprek" className="button-nav">Kennismakingsgesprek</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digby */}
      <section className="profile-section py-20 md:py-28 bg-botanical-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-5 fade-up order-2 md:order-1 pt-4">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra">Digby</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                <em className="italic">Begrip</em> zorgt voor verbinding
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Ik ben de leermeester en inspirator van Yvette. Zonder mij zou dit bedrijf niet bestaan.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als pup ben ik in Spanje te vroeg bij mijn moeder weggehaald en werd ik in een onbekende
                tuin gegooid. Gelukkig kon ik via Stichting Puppy Rescue Spain snel naar Nederland reizen.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Weetje dat Yvette eigenlijk helemaal niet van honden hield. Ik heb haar dan ook alles
                geleerd over hoe wij in elkaar steken — ik ben de beste leraar van Nederland in
                hondengedrag en -taal geworden.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Mijn ontspanning vind ik als ik slaap onder een dekentje. Als jij met Yvette en Fred
                werkt, help ik op de achtergrond mee met het bedenken van creatieve oefeningen.
              </p>
              <p className="font-serif italic text-botanical-sage">Liefs, Digby</p>
            </div>
            <div className="fade-up order-1 md:order-2">
              <div className="shadow-botanical-xl" style={{ borderRadius: '200px 200px 40px 40px' }}>
                <div style={{ clipPath: 'inset(0 round 200px 200px 40px 40px)' }}>
                  <img src={Digby} alt="Digby" className="w-full aspect-[3/4] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fred */}
      <section className="profile-section py-20 md:py-28 bg-botanical-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <div className="shadow-botanical-xl" style={{ borderRadius: '200px 200px 40px 40px' }}>
                <div style={{ clipPath: 'inset(0 round 200px 200px 40px 40px)' }}>
                  <img src={Fred} alt="Fred" className="w-full aspect-[3/4] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>
            <div className="space-y-5 fade-up pt-4">
              <p className="font-sans text-xs tracking-widest uppercase text-botanical-terra">Fred</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight">
                <em className="italic">Zachtheid</em> zet je in beweging
              </h2>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als adoptiehond ben ik vanuit Spanje naar Nederland gekomen. Ik ben door een
                dierenactivist bij een jager weggehaald. In Nederland kwam ik in het Walhalla.
              </p>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Omdat mijn band met Yvette heel krachtig is vond ik het helemaal niet erg om als
                coachhond opgeleid te worden. Sterker nog, het is fijn om te werken met mensen.
                Ik hou van ze. Bijna net zoveel als van voertjes.
              </p>
              <blockquote className="botanical-pullquote">
                "Ik ben zacht van aard maar ook van vacht. Ik heb een groot hart en je kunt mij vertrouwen."
              </blockquote>
              <p className="font-sans text-lg text-botanical-fg/75 leading-relaxed">
                Als ik met jou mag werken laat ik je zien waar het in jouw leven over gaat.
                Omdat ik alleen de hondentaal ken, zal ik nooit een oordeel over jouw gedrag hebben.
                Dat is prettig want dan kun jij lekker zijn wie je bent.
              </p>
              <p className="font-serif italic text-botanical-sage">Tot snel, Fred</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
