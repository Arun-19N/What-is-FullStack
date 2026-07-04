import ScrollReveal from '../shared/ScrollReveal';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__glow" aria-hidden="true"></div>
      <div className="container">
        <ScrollReveal>
          <div className="footer__cta">
            <h2 className="footer__cta-title">Ready to Build Your City?</h2>
            <p className="footer__cta-subtitle">
              You now understand the full picture — from pixels to databases. 
              It's time to write your first line of code and bring the Digital Metropolis to life.
            </p>
            <div className="footer__cta-buttons">
              <button className="footer__cta-btn footer__cta-btn--primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span>🚀</span> Start From Top
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="footer__bottom">
          <div className="footer__brand">
            <span className="footer__brand-icon">◈</span>
            <span className="footer__brand-text">Digital Metropolis</span>
          </div>
          <p className="footer__copy">
            Built with 💙 for 2nd Year CS Students — Full-Stack Web Development Journey
          </p>
          <div className="footer__tech-stack">
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Express</span>
            <span>•</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
