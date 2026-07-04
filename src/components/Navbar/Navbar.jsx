import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'why-webdev', label: 'Why Web Dev' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'dev-cycle', label: 'Dev Cycle' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      /* Scroll spy */
      const sections = NAV_ITEMS.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      })).filter(s => s.el);

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('hero')} aria-label="Go to top">
          <span className="navbar__logo-icon">◈</span>
          <span className="navbar__logo-text">Digital<span>Metropolis</span></span>
        </button>

        <button 
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <button
                className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
