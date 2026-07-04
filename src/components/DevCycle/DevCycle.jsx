import { useState } from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import { useInView } from '../../hooks/useInView';
import './DevCycle.css';

const STEPS = [
  {
    number: 1,
    title: 'Frontend',
    label: 'USER INTERFACE',
    subtitle: 'What user interacts with',
    icon: '🖥️',
    color: 'var(--accent-cyan)',
    description: 'The user inputs data into a sleek form built with HTML, CSS, and React. A mouse clicks "Submit" — and the journey begins.',
    visual: 'frontend',
  },
  {
    number: 2,
    title: 'Request',
    label: 'HTTP REQUEST',
    subtitle: 'Sends data to server',
    icon: '📦',
    color: 'var(--accent-purple)',
    description: 'A glowing data packet labeled "USER DATA" is sent from the browser to the server via an HTTP POST request.',
    visual: 'request',
  },
  {
    number: 3,
    title: 'Backend',
    label: 'SERVER & LOGIC',
    subtitle: 'Where processing happens',
    icon: '⚙️',
    color: 'var(--accent-orange)',
    description: 'Node.js + Express receives the data. It validates inputs, checks authentication, runs business logic, and routes to the right handler.',
    visual: 'backend',
  },
  {
    number: 4,
    title: 'Database',
    label: 'DATA STORAGE',
    subtitle: 'Where info is kept safe',
    icon: '🗄️',
    color: 'var(--accent-green)',
    description: 'MongoDB stores or retrieves the data. A query searches the collection, finds the record, and the data is read or written.',
    visual: 'database',
  },
  {
    number: 5,
    title: 'Response',
    label: 'SERVER RESPONSE',
    subtitle: 'Server returns data',
    icon: '📨',
    color: 'var(--accent-blue)',
    description: 'The processed data is packaged into a JSON response and sent back through the API to the waiting frontend.',
    visual: 'response',
  },
  {
    number: 6,
    title: 'Result',
    label: 'USER RESULT',
    subtitle: 'Shows updated information',
    icon: '🎉',
    color: 'var(--accent-pink)',
    description: 'The user\'s screen updates instantly! A friendly "Welcome, User!" message appears with a success animation.',
    visual: 'result',
  },
];

function StepCard({ step, index }) {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div className="cycle-step-wrapper" ref={ref}>
      {/* Connection line */}
      {index < STEPS.length - 1 && (
        <div className="cycle-connector">
          <svg className="cycle-connector__svg" viewBox="0 0 40 80" fill="none">
            <path
              d="M20,0 L20,80"
              stroke={step.color}
              strokeWidth="2"
              strokeDasharray="6 4"
              className={`cycle-connector__line ${isVisible ? 'cycle-connector__line--visible' : ''}`}
            />
          </svg>
          <div className={`cycle-connector__packet ${isVisible ? 'cycle-connector__packet--visible' : ''}`} style={{ '--packet-color': step.color }}></div>
        </div>
      )}

      <div
        className={`cycle-step ${isVisible ? 'cycle-step--visible' : ''}`}
        style={{ '--step-color': step.color }}
      >
        {/* Number badge */}
        <div className="cycle-step__number">{step.number}</div>

        {/* Content */}
        <div className="cycle-step__content">
          <div className="cycle-step__header">
            <span className="cycle-step__icon">{step.icon}</span>
            <div>
              <h3 className="cycle-step__title">{step.title}</h3>
              <span className="cycle-step__label">{step.label}</span>
            </div>
          </div>
          <p className="cycle-step__subtitle">{step.subtitle}</p>
          <p className="cycle-step__desc">{step.description}</p>

          {/* Step-specific visuals */}
          <div className="cycle-step__visual">
            {step.visual === 'frontend' && (
              <div className="cycle-vis-frontend">
                <div className="cycle-vis-form">
                  <div className="cycle-vis-input"><span>Name:</span> <div className="cycle-vis-field"></div></div>
                  <div className="cycle-vis-input"><span>Email:</span> <div className="cycle-vis-field"></div></div>
                  <button className="cycle-vis-submit">Submit →</button>
                </div>
              </div>
            )}
            {step.visual === 'request' && (
              <div className="cycle-vis-request">
                <div className="cycle-vis-packet">
                  <span>📦</span>
                  <span className="cycle-vis-packet-label">USER DATA</span>
                </div>
                <div className="cycle-vis-trail">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            {step.visual === 'backend' && (
              <div className="cycle-vis-backend">
                <div className="cycle-vis-check">✓ Validate</div>
                <div className="cycle-vis-check">🔐 Auth</div>
                <div className="cycle-vis-check">⚡ Process</div>
              </div>
            )}
            {step.visual === 'database' && (
              <div className="cycle-vis-database">
                <div className="cycle-vis-doc">{"{ _id, name, email }"}</div>
                <div className="cycle-vis-action">📝 Storing new user...</div>
              </div>
            )}
            {step.visual === 'response' && (
              <div className="cycle-vis-response">
                <div className="cycle-vis-json">
                  <code>{"{ status: 200, data: { ... } }"}</code>
                </div>
                <div className="cycle-vis-checkmark">✅</div>
              </div>
            )}
            {step.visual === 'result' && (
              <div className="cycle-vis-result">
                <div className="cycle-vis-screen">
                  <div className="cycle-vis-welcome">Welcome, User! 🎉</div>
                  <div className="cycle-vis-confetti">
                    {[...Array(12)].map((_, i) => (
                      <span key={i} className="cycle-vis-confetti-piece" style={{
                        '--x': `${Math.random() * 100}%`,
                        '--delay': `${Math.random() * 0.5}s`,
                        '--color': ['var(--accent-cyan)', 'var(--accent-purple)', 'var(--accent-pink)', 'var(--accent-green)', 'var(--accent-orange)'][i % 5],
                      }}></span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DevCycle() {
  return (
    <section className="cycle-section" id="dev-cycle">
      <div className="container">
        <ScrollReveal>
          <div className="cycle-section__header">
            <span className="section-badge">🔄 Section 04</span>
            <h2 className="section-title">The Web Development Cycle</h2>
            <p className="section-subtitle">
              Follow a single user action — from clicking a button to seeing the result —
              through every layer of the full-stack architecture.
            </p>
          </div>
        </ScrollReveal>

        <div className="cycle-timeline">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
