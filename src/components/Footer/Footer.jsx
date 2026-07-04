import ScrollReveal from '../shared/ScrollReveal';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__glow" aria-hidden="true"></div>
      <div className="container">
        <ScrollReveal>
          <div className="footer__cta">
            <h2 className="footer__cta-title">Now It's YOUR Turn to Build</h2>
            <p className="footer__cta-subtitle">
              You've seen how the frontend, backend, and database work together.
              You've watched your own data flow through the entire stack.
              Now it's time to write your first line of code and make it real. Let's go! 🚀
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
            Build with 💙 for 2nd Year Students — Full-Stack Web Development Journey
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
