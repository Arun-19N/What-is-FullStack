import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import './DevCycle.css';

/*
 * INTERACTIVE WEB DEVELOPMENT CYCLE
 * 
 * Students type real data (name & email), click "Send to Server",
 * then watch their data animate through every step of the full-stack:
 * 
 *   1. Frontend → 2. Request → 3. Backend → 4. Database → 5. Response → 6. Result
 *
 * Each step highlights with a delay, showing the ACTUAL data they typed.
 */

const STEP_META = [
  {
    id: 'frontend',
    number: 1,
    title: 'Frontend',
    label: 'USER INTERFACE',
    icon: '🖥️',
    color: 'var(--accent-cyan)',
    emoji: '👆',
    simpleExplanation: 'This is what YOU see and click on — the form, buttons, and layout. Built with HTML, CSS, and React.',
    techUsed: ['HTML', 'CSS', 'React', 'JavaScript'],
    analogy: '🏪 Think of it like the storefront of a shop — it\'s where customers walk in and interact.',
  },
  {
    id: 'request',
    number: 2,
    title: 'Sending Request',
    label: 'HTTP POST REQUEST',
    icon: '📦',
    color: 'var(--accent-purple)',
    emoji: '🚀',
    simpleExplanation: 'Your data gets packed into a "digital envelope" and sent to the server over the internet using HTTP.',
    techUsed: ['HTTP', 'fetch() / axios', 'JSON', 'URL routing'],
    analogy: '📬 Like putting a letter into a mailbox — it travels from your browser to the server.',
  },
  {
    id: 'backend',
    number: 3,
    title: 'Backend Processing',
    label: 'SERVER & LOGIC',
    icon: '⚙️',
    color: 'var(--accent-orange)',
    emoji: '🔧',
    simpleExplanation: 'The server receives your data and checks everything: Is the email valid? Is the name not empty? Is this request safe?',
    techUsed: ['Node.js', 'Express.js', 'Middleware', 'Validation'],
    analogy: '🏭 Like a factory receiving raw materials — it checks quality, processes, and prepares them.',
  },
  {
    id: 'database',
    number: 4,
    title: 'Database Storage',
    label: 'MONGODB STORAGE',
    icon: '🗄️',
    color: 'var(--accent-green)',
    emoji: '💾',
    simpleExplanation: 'Your validated data is permanently saved as a "document" in MongoDB — like a digital filing cabinet that never forgets.',
    techUsed: ['MongoDB', 'Mongoose', 'CRUD', 'Collections'],
    analogy: '📂 Like filing a paper into a well-organized cabinet — stored safely, easy to find later.',
  },
  {
    id: 'response',
    number: 5,
    title: 'Server Response',
    label: 'JSON RESPONSE',
    icon: '📨',
    color: 'var(--accent-blue)',
    emoji: '✅',
    simpleExplanation: 'The server packages a confirmation (status: 200 = success!) and sends it back to your browser.',
    techUsed: ['JSON', 'Status Codes', 'res.json()', 'Headers'],
    analogy: '📩 Like getting a reply letter — "Yes, we got your order and it\'s confirmed!"',
  },
  {
    id: 'result',
    number: 6,
    title: 'User Sees Result',
    label: 'UI UPDATES',
    icon: '🎉',
    color: 'var(--accent-pink)',
    emoji: '🎊',
    simpleExplanation: 'React instantly updates the page — no reload needed! The user sees their personalized welcome message.',
    techUsed: ['React State', 'Re-render', 'DOM Update', 'UX Feedback'],
    analogy: '🪄 Like magic — the screen changes instantly without you pressing refresh!',
  },
];

export default function DevCycle() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1); /* -1 = idle, 0-5 = steps */
  const [completedSteps, setCompletedSteps] = useState([]);
  const [backendChecks, setBackendChecks] = useState({ validate: false, auth: false, process: false });
  const [showConfetti, setShowConfetti] = useState(false);
  const [simulationDone, setSimulationDone] = useState(false);
  const timelineRef = useRef(null);

  /* Auto-scroll to active step */
  useEffect(() => {
    if (activeStep >= 0 && timelineRef.current) {
      const stepEl = timelineRef.current.querySelector(`[data-step="${activeStep}"]`);
      if (stepEl) {
        stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeStep]);

  /* Run the simulation */
  const runSimulation = () => {
    if (!userName.trim() || !userEmail.trim()) return;

    setIsRunning(true);
    setCompletedSteps([]);
    setBackendChecks({ validate: false, auth: false, process: false });
    setShowConfetti(false);
    setSimulationDone(false);

    /* Step 1: Frontend (instant — the form is already visible) */
    setActiveStep(0);

    /* Step 2: Request — after 1.5s */
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 0]);
      setActiveStep(1);
    }, 1500);

    /* Step 3: Backend — after 3s */
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 1]);
      setActiveStep(2);
    }, 3000);

    /* Backend sub-checks: staggered animations */
    setTimeout(() => setBackendChecks(prev => ({ ...prev, validate: true })), 3600);
    setTimeout(() => setBackendChecks(prev => ({ ...prev, auth: true })), 4200);
    setTimeout(() => setBackendChecks(prev => ({ ...prev, process: true })), 4800);

    /* Step 4: Database — after 5.5s */
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 2]);
      setActiveStep(3);
    }, 5500);

    /* Step 5: Response — after 7.5s */
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 3]);
      setActiveStep(4);
    }, 7500);

    /* Step 6: Result — after 9.5s */
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 4]);
      setActiveStep(5);
      setShowConfetti(true);
    }, 9500);

    /* Done */
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 5]);
      setSimulationDone(true);
      setIsRunning(false);
    }, 11500);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setActiveStep(-1);
    setCompletedSteps([]);
    setBackendChecks({ validate: false, auth: false, process: false });
    setShowConfetti(false);
    setSimulationDone(false);
    setUserName('');
    setUserEmail('');
  };

  const displayName = userName.trim() || 'Your Name';
  const displayEmail = userEmail.trim() || 'your@email.com';
  const isFormValid = userName.trim().length > 0 && userEmail.trim().length > 0;

  return (
    <section className="cycle-section" id="dev-cycle">
      <div className="container">
        <ScrollReveal>
          <div className="cycle-section__header">
            <span className="section-badge">🔄 Section 04 — Interactive</span>
            <h2 className="section-title">The Web Development Cycle</h2>
            <p className="section-subtitle">
              <strong>Try it yourself!</strong> Type your name and email below, then hit "Send to Server" 
              and watch YOUR data flow through every layer of a real web application — live.
            </p>
          </div>
        </ScrollReveal>

        {/* ═══════ INPUT FORM ═══════ */}
        <ScrollReveal delay={0.1}>
          <div className="cycle-input-card">
            <div className="cycle-input-card__header">
              <div className="cycle-input-card__dot-row">
                <span className="dot dot--red"></span>
                <span className="dot dot--yellow"></span>
                <span className="dot dot--green"></span>
              </div>
              <span className="cycle-input-card__url">
                <span className="cycle-input-card__lock">🔒</span>
                https://myapp.com/register
              </span>
            </div>
            <div className="cycle-input-card__body">
              <h3 className="cycle-input-card__title">📝 Enter Your Details</h3>
              <p className="cycle-input-card__hint">Type real data — you'll see it flow through every step below!</p>
              
              <div className="cycle-input-row">
                <label htmlFor="cycle-name" className="cycle-label">
                  <span className="cycle-label-icon">👤</span> Name
                </label>
                <input
                  id="cycle-name"
                  type="text"
                  className="cycle-input"
                  placeholder="e.g. Ravi Kumar"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  disabled={isRunning}
                  maxLength={30}
                />
              </div>

              <div className="cycle-input-row">
                <label htmlFor="cycle-email" className="cycle-label">
                  <span className="cycle-label-icon">📧</span> Email
                </label>
                <input
                  id="cycle-email"
                  type="email"
                  className="cycle-input"
                  placeholder="e.g. ravi@college.edu"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  disabled={isRunning}
                  maxLength={40}
                />
              </div>

              <div className="cycle-input-actions">
                <button
                  className={`cycle-send-btn ${isRunning ? 'cycle-send-btn--running' : ''} ${!isFormValid ? 'cycle-send-btn--disabled' : ''}`}
                  onClick={runSimulation}
                  disabled={isRunning || !isFormValid}
                  id="send-to-server-btn"
                >
                  {isRunning ? (
                    <>
                      <span className="cycle-send-spinner"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span>🚀</span> Send to Server
                    </>
                  )}
                </button>

                {simulationDone && (
                  <button className="cycle-reset-btn" onClick={resetSimulation}>
                    🔄 Try Again
                  </button>
                )}
              </div>

              {!isFormValid && (userName.length > 0 || userEmail.length > 0) && (
                <p className="cycle-input-warning">⚠️ Both fields are required to start the simulation</p>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* ═══════ LIVE STATUS BAR ═══════ */}
        {(isRunning || simulationDone) && (
          <div className="cycle-progress-bar">
            {STEP_META.map((step, i) => (
              <div
                key={step.id}
                className={`cycle-progress-dot 
                  ${activeStep === i ? 'cycle-progress-dot--active' : ''} 
                  ${completedSteps.includes(i) ? 'cycle-progress-dot--done' : ''}`
                }
                style={{ '--dot-color': step.color }}
              >
                <span className="cycle-progress-dot__icon">
                  {completedSteps.includes(i) ? '✓' : step.number}
                </span>
                <span className="cycle-progress-dot__label">{step.title}</span>
                {i < STEP_META.length - 1 && <div className={`cycle-progress-line ${completedSteps.includes(i) ? 'cycle-progress-line--filled' : ''}`}></div>}
              </div>
            ))}
          </div>
        )}

        {/* ═══════ STEP-BY-STEP TIMELINE ═══════ */}
        <div className="cycle-timeline" ref={timelineRef}>
          {STEP_META.map((step, i) => {
            const isActive = activeStep === i;
            const isDone = completedSteps.includes(i);
            const isVisible = activeStep >= i || simulationDone;

            return (
              <div key={step.id} data-step={i}>
                {/* Connector */}
                {i > 0 && (
                  <div className="cycle-connector">
                    <div className={`cycle-connector__line ${isVisible ? 'cycle-connector__line--visible' : ''}`} style={{ '--line-color': step.color }}></div>
                    {isActive && <div className="cycle-connector__packet" style={{ '--packet-color': step.color }}></div>}
                  </div>
                )}

                {/* Step Card */}
                <div
                  className={`cycle-step 
                    ${isActive ? 'cycle-step--active' : ''} 
                    ${isDone ? 'cycle-step--done' : ''} 
                    ${!isVisible ? 'cycle-step--hidden' : ''}`
                  }
                  style={{ '--step-color': step.color }}
                >
                  {/* Left: Number + Status */}
                  <div className="cycle-step__left">
                    <div className={`cycle-step__number ${isActive ? 'cycle-step__number--pulse' : ''}`}>
                      {isDone ? '✓' : step.number}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="cycle-step__content">
                    <div className="cycle-step__header">
                      <span className="cycle-step__icon">{step.icon}</span>
                      <div>
                        <h3 className="cycle-step__title">{step.title}</h3>
                        <span className="cycle-step__label">{step.label}</span>
                      </div>
                      {isActive && <span className="cycle-step__live-badge">● LIVE</span>}
                    </div>

                    {/* Simple explanation */}
                    <p className="cycle-step__explanation">{step.simpleExplanation}</p>

                    {/* Analogy callout */}
                    <div className="cycle-step__analogy">
                      {step.analogy}
                    </div>

                    {/* Tech pills */}
                    <div className="cycle-step__tech-pills">
                      {step.techUsed.map((tech, j) => (
                        <span className="cycle-step__tech-pill" key={j}>{tech}</span>
                      ))}
                    </div>

                    {/* ══ STEP-SPECIFIC LIVE VISUAL ══ */}
                    <div className={`cycle-step__visual ${isActive ? 'cycle-step__visual--active' : ''}`}>

                      {/* Step 1: Frontend — Show the actual form data */}
                      {step.id === 'frontend' && (
                        <div className="cycle-live cycle-live--frontend">
                          <div className="cycle-live__title">What the user sees:</div>
                          <div className="cycle-live__browser">
                            <div className="cycle-live__form-preview">
                              <div className="cycle-live__field-row">
                                <span className="cycle-live__field-label">Name:</span>
                                <span className="cycle-live__field-value">{displayName}</span>
                              </div>
                              <div className="cycle-live__field-row">
                                <span className="cycle-live__field-label">Email:</span>
                                <span className="cycle-live__field-value">{displayEmail}</span>
                              </div>
                              <div className="cycle-live__cursor-click">
                                👆 <em>User clicks "Submit"</em>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Request — Show the HTTP packet with real data */}
                      {step.id === 'request' && (
                        <div className="cycle-live cycle-live--request">
                          <div className="cycle-live__title">Data traveling to server:</div>
                          <div className="cycle-live__http-packet">
                            <div className="cycle-live__http-method">POST /api/users</div>
                            <div className="cycle-live__http-header">Content-Type: application/json</div>
                            <div className="cycle-live__http-body">
                              <code>
                                {'{'}<br />
                                {'  '}<span className="json-key">"name"</span>: <span className="json-val">"{displayName}"</span>,<br />
                                {'  '}<span className="json-key">"email"</span>: <span className="json-val">"{displayEmail}"</span><br />
                                {'}'}
                              </code>
                            </div>
                          </div>
                          <div className="cycle-live__packet-animation">
                            <div className="cycle-live__packet-dot"></div>
                            <div className="cycle-live__packet-trail"></div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Backend — Live validation checks */}
                      {step.id === 'backend' && (
                        <div className="cycle-live cycle-live--backend">
                          <div className="cycle-live__title">Server processing your data:</div>
                          <div className="cycle-live__checks">
                            <div className={`cycle-live__check ${backendChecks.validate ? 'cycle-live__check--pass' : 'cycle-live__check--waiting'}`}>
                              <span className="cycle-live__check-icon">{backendChecks.validate ? '✅' : '⏳'}</span>
                              <span>Validating: Is "{displayName}" a valid name?</span>
                              {backendChecks.validate && <span className="cycle-live__check-result">PASS</span>}
                            </div>
                            <div className={`cycle-live__check ${backendChecks.auth ? 'cycle-live__check--pass' : 'cycle-live__check--waiting'}`}>
                              <span className="cycle-live__check-icon">{backendChecks.auth ? '✅' : '⏳'}</span>
                              <span>Email check: Is "{displayEmail}" valid?</span>
                              {backendChecks.auth && <span className="cycle-live__check-result">PASS</span>}
                            </div>
                            <div className={`cycle-live__check ${backendChecks.process ? 'cycle-live__check--pass' : 'cycle-live__check--waiting'}`}>
                              <span className="cycle-live__check-icon">{backendChecks.process ? '✅' : '⏳'}</span>
                              <span>Security: No harmful content detected</span>
                              {backendChecks.process && <span className="cycle-live__check-result">PASS</span>}
                            </div>
                          </div>
                          <div className="cycle-live__server-log">
                            <code>
                              <span className="log-time">[{new Date().toLocaleTimeString()}]</span> POST /api/users → Processing...
                            </code>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Database — Show the stored document */}
                      {step.id === 'database' && (
                        <div className="cycle-live cycle-live--database">
                          <div className="cycle-live__title">Saving to MongoDB:</div>
                          <div className="cycle-live__db-header">
                            <span className="cycle-live__db-badge">🍃 MongoDB</span>
                            <span className="cycle-live__db-collection">Collection: users</span>
                          </div>
                          <div className="cycle-live__document">
                            <code>
                              {'db.users.insertOne({'}<br />
                              {'  '}<span className="json-key">_id</span>: <span className="json-val">ObjectId("64f8a3b2...")</span>,<br />
                              {'  '}<span className="json-key">name</span>: <span className="json-val">"{displayName}"</span>,<br />
                              {'  '}<span className="json-key">email</span>: <span className="json-val">"{displayEmail}"</span>,<br />
                              {'  '}<span className="json-key">createdAt</span>: <span className="json-val">"{new Date().toISOString().slice(0, 19)}"</span>,<br />
                              {'  '}<span className="json-key">role</span>: <span className="json-val">"student"</span><br />
                              {'})'}
                            </code>
                          </div>
                          <div className="cycle-live__db-status">
                            💾 Document inserted successfully — 1 new record
                          </div>
                        </div>
                      )}

                      {/* Step 5: Response — Show the JSON response */}
                      {step.id === 'response' && (
                        <div className="cycle-live cycle-live--response">
                          <div className="cycle-live__title">Server sends back:</div>
                          <div className="cycle-live__response-block">
                            <div className="cycle-live__status-badge">
                              <span className="cycle-live__status-code">200</span>
                              <span className="cycle-live__status-text">OK</span>
                            </div>
                            <div className="cycle-live__response-json">
                              <code>
                                {'{'}<br />
                                {'  '}<span className="json-key">"success"</span>: <span className="json-bool">true</span>,<br />
                                {'  '}<span className="json-key">"message"</span>: <span className="json-val">"User created!"</span>,<br />
                                {'  '}<span className="json-key">"user"</span>: {'{'}<br />
                                {'    '}<span className="json-key">"name"</span>: <span className="json-val">"{displayName}"</span>,<br />
                                {'    '}<span className="json-key">"email"</span>: <span className="json-val">"{displayEmail}"</span><br />
                                {'  }'}<br />
                                {'}'}
                              </code>
                            </div>
                          </div>
                          <div className="cycle-live__response-arrow">
                            ← Traveling back to your browser...
                          </div>
                        </div>
                      )}

                      {/* Step 6: Result — Welcome message with their actual name */}
                      {step.id === 'result' && (
                        <div className="cycle-live cycle-live--result">
                          <div className="cycle-live__title">Your screen updates instantly:</div>
                          <div className="cycle-live__result-screen">
                            <div className="cycle-live__result-header">
                              <div className="cycle-live__result-avatar">
                                {displayName.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="cycle-live__result-welcome">
                                  Welcome, {displayName}! 🎉
                                </div>
                                <div className="cycle-live__result-email">{displayEmail}</div>
                              </div>
                            </div>
                            <div className="cycle-live__result-message">
                              Your account has been created successfully. You're all set to start building amazing things!
                            </div>
                            <div className="cycle-live__result-badge">
                              ✨ Registration Complete — No page reload needed!
                            </div>
                          </div>
                          {/* Confetti */}
                          {showConfetti && (
                            <div className="cycle-live__confetti">
                              {[...Array(20)].map((_, i) => (
                                <span
                                  key={i}
                                  className="cycle-live__confetti-piece"
                                  style={{
                                    '--x': `${Math.random() * 100}%`,
                                    '--delay': `${Math.random() * 0.8}s`,
                                    '--color': ['var(--accent-cyan)', 'var(--accent-purple)', 'var(--accent-pink)', 'var(--accent-green)', 'var(--accent-orange)'][i % 5],
                                    '--size': `${4 + Math.random() * 6}px`,
                                  }}
                                ></span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary after completion */}
        {simulationDone && (
          <ScrollReveal>
            <div className="cycle-summary">
              <h3 className="cycle-summary__title">🎯 What Just Happened?</h3>
              <div className="cycle-summary__flow">
                <div className="cycle-summary__item">
                  <span>🖥️</span>
                  <span>You typed <strong>"{displayName}"</strong></span>
                </div>
                <span className="cycle-summary__arrow">→</span>
                <div className="cycle-summary__item">
                  <span>📦</span>
                  <span>Sent via <strong>HTTP POST</strong></span>
                </div>
                <span className="cycle-summary__arrow">→</span>
                <div className="cycle-summary__item">
                  <span>⚙️</span>
                  <span><strong>Node.js</strong> validated it</span>
                </div>
                <span className="cycle-summary__arrow">→</span>
                <div className="cycle-summary__item">
                  <span>🗄️</span>
                  <span><strong>MongoDB</strong> saved it</span>
                </div>
                <span className="cycle-summary__arrow">→</span>
                <div className="cycle-summary__item">
                  <span>📨</span>
                  <span>Server said <strong>"200 OK"</strong></span>
                </div>
                <span className="cycle-summary__arrow">→</span>
                <div className="cycle-summary__item">
                  <span>🎉</span>
                  <span><strong>React</strong> updated the UI</span>
                </div>
              </div>
              <p className="cycle-summary__takeaway">
                This is the <strong>complete request-response cycle</strong> of every web application. 
                Whether it's Instagram, YouTube, or your banking app — this exact flow happens billions of times per day!
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
