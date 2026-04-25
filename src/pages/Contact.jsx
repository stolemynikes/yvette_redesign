import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';

import Banner from '../assets/images/Contact/Banner3.jpg';

const Popup = ({ message }) => (
  <div className="fixed bottom-6 right-6 z-50 bg-botanical-fg text-white rounded-2xl px-6 py-4 shadow-botanical-xl font-sans text-sm animate-pulse">
    {message}
  </div>
);

export default function Contact() {
  const form = useRef();
  const [isActive, setIsActive] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = form.current;
    if (!user_name.value || !user_email.value || !message.value) {
      setPopupMessage('Vul alsjeblieft alle velden in');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
      return;
    }
    setButtonDisabled(true);
    emailjs
      .sendForm('service_ml3iuth', 'template_7fq0z4d', form.current, 'iGEj97IcEM67oB6Y2')
      .then(
        () => { setIsActive(false); setTimeout(() => setShowThanks(true), 400); },
        (error) => { console.log(error.text); setButtonDisabled(false); }
      );
  };

  return (
    <div className="bg-botanical-bg min-h-screen">

      <div className="page-banner">
        <img src={Banner} alt="Contact" />
        <div><h1>"Elke samenwerking begint bij het maken van contact"</h1></div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-botanical-sage mb-4">Neem contact op</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-botanical-fg leading-tight mb-3">
                  We horen <em className="italic">graag</em> van je
                </h2>
                <p className="font-sans text-lg text-botanical-fg/70 leading-relaxed">
                  Heb je vragen of wil je meer weten? Neem gerust contact op.
                  Ik reageer binnen 2 werkdagen.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="tel:+31627281458"
                  className="flex items-center gap-5 group p-5 rounded-2xl bg-white shadow-botanical-sm hover:shadow-botanical-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-full bg-botanical-card flex items-center justify-center shrink-0 group-hover:bg-botanical-sage/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8C9A84">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-botanical-fg/50 mb-0.5">Telefonisch</p>
                    <p className="font-sans text-base font-medium text-botanical-fg group-hover:text-botanical-sage transition-colors duration-300">+31 6 27 28 14 58</p>
                  </div>
                </a>

                <a
                  href="mailto:info@yvettevanzadel.nl"
                  className="flex items-center gap-5 group p-5 rounded-2xl bg-white shadow-botanical-sm hover:shadow-botanical-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-full bg-botanical-card flex items-center justify-center shrink-0 group-hover:bg-botanical-sage/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8C9A84">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-botanical-fg/50 mb-0.5">Email</p>
                    <p className="font-sans text-base font-medium text-botanical-fg group-hover:text-botanical-sage transition-colors duration-300">info@yvettevanzadel.nl</p>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-botanical-card border border-botanical-stone">
                <p className="font-serif italic text-botanical-sage text-sm mb-2">Liever direct plannen?</p>
                <p className="font-sans text-sm text-botanical-fg/70 mb-4">
                  Plan direct een gratis kennismakingsgesprek van 30 minuten via Calendly.
                </p>
                <a
                  href="https://calendly.com/yvettevanzadel/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="button-nav inline-flex"
                >
                  Calendly plannen
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-botanical-card border border-botanical-stone">
                <p className="font-serif italic text-botanical-sage text-sm mb-2">Blijf op de hoogte</p>
                <p className="font-sans text-sm text-botanical-fg/70 mb-4">
                  Ontvang tips, inspiratie en nieuws over coaching, ademwerk en stressmanagement via de nieuwsbrief.
                </p>
                <Link to="/nieuwsbrief" className="button-nav inline-flex">
                  Aanmelden voor nieuwsbrief
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              {showThanks ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-white rounded-3xl shadow-botanical-md">
                  <div className="w-16 h-16 rounded-full bg-botanical-sage/20 flex items-center justify-center mb-6">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8C9A84">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-botanical-fg mb-3">Bedankt voor je bericht!</h3>
                  <p className="font-sans text-botanical-fg/70">Ik zal zo spoedig mogelijk reageren.</p>
                </div>
              ) : (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className={`bg-white rounded-3xl shadow-botanical-md p-8 space-y-6 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h3 className="font-serif text-2xl font-bold text-botanical-fg">Stuur een bericht</h3>

                  <div>
                    <label className="block font-sans text-sm text-botanical-fg/70 mb-2">Wat is je naam?</label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full border-b border-botanical-stone bg-transparent py-3 font-sans text-botanical-fg placeholder-botanical-fg/30 focus:outline-none focus:border-botanical-sage transition-colors duration-300"
                      placeholder="Jouw naam"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-botanical-fg/70 mb-2">Wat is je emailadres?</label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full border-b border-botanical-stone bg-transparent py-3 font-sans text-botanical-fg placeholder-botanical-fg/30 focus:outline-none focus:border-botanical-sage transition-colors duration-300"
                      placeholder="jouw@email.nl"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-botanical-fg/70 mb-2">Wat kan ik voor je doen?</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full border-b border-botanical-stone bg-transparent py-3 font-sans text-botanical-fg placeholder-botanical-fg/30 focus:outline-none focus:border-botanical-sage transition-colors duration-300 resize-none"
                      placeholder="Vertel me meer..."
                    />
                  </div>

                  <input
                    type="submit"
                    disabled={buttonDisabled}
                    value="Versturen"
                    className="button-nav cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {showPopup && <Popup message={popupMessage} />}
    </div>
  );
}
