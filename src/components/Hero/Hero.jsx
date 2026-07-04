import { useState, useEffect } from 'react';
import './Hero.css';

const TYPING_TEXT = 'Welcome to The Digital Metropolis';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setTypedText(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  /* Blinking cursor */
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  const scrollToNext = () => {
    document.getElementById('why-webdev')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated city skyline background */}
      <div className="hero__skyline" aria-hidden="true">
        <div className="hero__building hero__b1"></div>
        <div className="hero__building hero__b2"></div>
        <div className="hero__building hero__b3"></div>
        <div className="hero__building hero__b4"></div>
        <div className="hero__building hero__b5"></div>
        <div className="hero__building hero__b6"></div>
        <div className="hero__building hero__b7"></div>
        <div className="hero__building hero__b8"></div>
        <div className="hero__building hero__b9"></div>
        <div className="hero__building hero__b10"></div>
        <div className="hero__building hero__b11"></div>
        <div className="hero__building hero__b12"></div>
        {/* Glowing windows */}
        <div className="hero__windows"></div>
        {/* Ground glow line */}
        <div className="hero__ground"></div>
      </div>

      {/* Floating orbs */}
      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--cyan"></div>
        <div className="hero__orb hero__orb--purple"></div>
        <div className="hero__orb hero__orb--pink"></div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          2nd Year CS — Full-Stack Journey
        </div>

        <h1 className="hero__title" id="hero-title">
          {typedText}
          <span className={`hero__cursor ${showCursor ? '' : 'hero__cursor--hidden'}`}>|</span>
        </h1>

        <p className={`hero__subtitle ${typingDone ? 'hero__subtitle--visible' : ''}`}>
          Build the future, one layer at a time. Explore how modern web applications 
          are architected, from the pixels you see to the servers that power them.
        </p>

        <div className={`hero__cta-row ${typingDone ? 'hero__cta-row--visible' : ''}`}>
          <button className="hero__cta-btn" onClick={scrollToNext} id="explore-btn">
            <span className="hero__cta-text">Start Exploring</span>
            <span className="hero__cta-arrow">→</span>
            <div className="hero__cta-shine"></div>
          </button>
          <div className="hero__tech-pills">
            <span className="hero__pill">MongoDB</span>
            <span className="hero__pill">Express</span>
            <span className="hero__pill">React</span>
            <span className="hero__pill">Node.js</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll-indicator" onClick={scrollToNext} aria-label="Scroll to next section">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot"></div>
        </div>
      </button>
    </section>
  );
}
