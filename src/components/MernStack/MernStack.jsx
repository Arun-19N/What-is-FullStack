import { useRef } from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import './MernStack.css';

const MERN_TECHS = [
  {
    letter: 'M',
    name: 'MongoDB',
    tagline: 'The Flexible Warehouse',
    icon: '🍃',
    color: '#00ed64',
    colorVar: 'var(--accent-green)',
    description: 'Your app\'s memory. Instead of rigid tables (like Excel), MongoDB stores data as flexible JSON documents. Need to add a new field? Just add it — no restructuring needed!',
    animClass: 'mern-card__anim--mongo',
    features: ['Document-based', 'Scalable', 'Schema-flexible', 'JSON native'],
  },
  {
    letter: 'E',
    name: 'Express.js',
    tagline: 'The Traffic Controller',
    icon: '⚡',
    color: '#f5f5f5',
    colorVar: 'var(--text-primary)',
    description: 'The traffic cop of your server. When a request arrives at your server, Express decides: "Where should this go? What should happen?" It organizes everything.',
    animClass: 'mern-card__anim--express',
    features: ['Routing', 'Middleware', 'RESTful APIs', 'Lightweight'],
  },
  {
    letter: 'R',
    name: 'React',
    tagline: 'The Building Blocks',
    icon: '⚛️',
    color: '#61dafb',
    colorVar: 'var(--accent-cyan)',
    description: 'The LEGO bricks of web UI. Instead of writing one huge HTML file, you build small reusable pieces (components) that snap together. Change one piece, and only that piece updates!',
    animClass: 'mern-card__anim--react',
    features: ['Components', 'Virtual DOM', 'State Management', 'Reusable'],
  },
  {
    letter: 'N',
    name: 'Node.js',
    tagline: 'The Power Grid',
    icon: '💚',
    color: '#68a063',
    colorVar: 'var(--accent-green)',
    description: 'JavaScript, but running on the SERVER instead of the browser. This means you can use ONE language (JS) for everything — frontend AND backend. That\'s the MERN superpower!',
    animClass: 'mern-card__anim--node',
    features: ['Server-side JS', 'Event-driven', 'Non-blocking', 'NPM ecosystem'],
  },
];

function MernCard({ tech, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <ScrollReveal delay={index * 0.12}>
      <div
        className="mern-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ '--card-color': tech.color, '--card-color-var': tech.colorVar }}
      >
        {/* Hover animation area */}
        <div className={`mern-card__anim ${tech.animClass}`}>
          {/* MongoDB: morphing boxes */}
          {tech.letter === 'M' && (
            <div className="mongo-anim">
              <div className="mongo-box mongo-box--1"></div>
              <div className="mongo-box mongo-box--2"></div>
              <div className="mongo-box mongo-box--3"></div>
            </div>
          )}
          {/* Express: organizing dots */}
          {tech.letter === 'E' && (
            <div className="express-anim">
              <div className="express-dot"></div>
              <div className="express-dot"></div>
              <div className="express-dot"></div>
              <div className="express-dot"></div>
              <div className="express-dot"></div>
              <div className="express-lane"></div>
            </div>
          )}
          {/* React: floating blocks snap together */}
          {tech.letter === 'R' && (
            <div className="react-anim">
              <div className="react-block react-block--1"></div>
              <div className="react-block react-block--2"></div>
              <div className="react-block react-block--3"></div>
              <div className="react-orbit"></div>
            </div>
          )}
          {/* Node: power grid */}
          {tech.letter === 'N' && (
            <div className="node-anim">
              <div className="node-line node-line--1"></div>
              <div className="node-line node-line--2"></div>
              <div className="node-line node-line--3"></div>
              <div className="node-pulse"></div>
            </div>
          )}
        </div>

        <div className="mern-card__letter">{tech.letter}</div>
        <div className="mern-card__icon">{tech.icon}</div>
        <h3 className="mern-card__name">{tech.name}</h3>
        <p className="mern-card__tagline">{tech.tagline}</p>
        <p className="mern-card__desc">{tech.description}</p>
        <div className="mern-card__features">
          {tech.features.map((f, i) => (
            <span className="mern-card__feature" key={i}>{f}</span>
          ))}
        </div>
        <div className="mern-card__glow"></div>
      </div>
    </ScrollReveal>
  );
}

export default function MernStack() {
  return (
    <section className="mern-section" id="mern">
      <div className="container">
        <ScrollReveal>
          <div className="mern-section__header">
            <span className="section-badge">🦸 Section 03</span>
            <h2 className="section-title">Meet Your Toolkit: MERN</h2>
            <p className="section-subtitle">
              These four technologies are your weapons of choice. The best part? 
              They ALL use JavaScript — so you learn ONE language and build EVERYTHING. 
              Hover over each card to see them in action!
            </p>
          </div>
        </ScrollReveal>

        {/* JS Everywhere Banner */}
        <ScrollReveal delay={0.1}>
          <div className="mern-js-banner">
            <div className="mern-js-banner__icon">JS</div>
            <div className="mern-js-banner__text">
              <strong>JavaScript Everywhere</strong> — One language to rule the entire stack
            </div>
            <div className="mern-js-banner__line"></div>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="mern-grid">
          {MERN_TECHS.map((tech, i) => (
            <MernCard key={tech.letter} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
