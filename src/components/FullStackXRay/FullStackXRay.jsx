import { useState } from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import './FullStackXRay.css';

const LAYERS = [
  {
    id: 'frontend',
    name: 'Front-End',
    icon: '🎨',
    color: 'var(--accent-cyan)',
    range: [0, 25],
    description: 'This is what users SEE and TOUCH — the buttons, images, text, and animations. It\'s built with HTML (structure), CSS (beauty), and React (interactivity).',
    details: ['HTML = skeleton of the page', 'CSS = clothes and makeup', 'React = makes it alive and clickable', 'Runs in YOUR browser'],
    analogy: '🏪 Think of it like the storefront of a restaurant — the menu, the decor, the counter where you place orders.',
    visual: 'storefront',
  },
  {
    id: 'api',
    name: 'API Layer',
    icon: '🔗',
    color: 'var(--accent-purple)',
    range: [25, 50],
    description: 'APIs are the MESSENGERS between front-end and back-end. When you click "Like", an API carries that action to the server.',
    details: ['GET = fetch data ("show me posts")', 'POST = send data ("create new post")', 'PUT = update data ("edit my profile")', 'DELETE = remove data ("delete comment")'],
    analogy: '📨 Think of it like a waiter in a restaurant — takes your order (request) to the kitchen (server) and brings back food (response).',
    visual: 'pathways',
  },
  {
    id: 'backend',
    name: 'Back-End',
    icon: '⚙️',
    color: 'var(--accent-orange)',
    range: [50, 75],
    description: 'The invisible engine room! Node.js + Express receives requests, checks if you\'re allowed (authentication), validates your data, and decides what to do.',
    details: ['Node.js = JavaScript on the server', 'Express = handles routes & logic', 'Auth = "Are you logged in?"', 'Validation = "Is this data valid?"'],
    analogy: '🏭 Think of it like the kitchen — you can\'t see it, but it\'s where all the real cooking (processing) happens!',
    visual: 'engine',
  },
  {
    id: 'database',
    name: 'Database',
    icon: '🗄️',
    color: 'var(--accent-green)',
    range: [75, 100],
    description: 'MongoDB stores ALL your data permanently — user profiles, posts, messages, orders. Unlike variables in code, database data survives even after the server restarts!',
    details: ['MongoDB = stores data as JSON documents', 'Collections = like folders of similar items', 'CRUD = Create, Read, Update, Delete', 'Queries = "find all users named Ravi"'],
    analogy: '📂 Think of it like a library\'s filing system — every book (data) has a shelf (collection) and a catalog number (_id).',
    visual: 'warehouse',
  },
];

export default function FullStackXRay() {
  const [sliderValue, setSliderValue] = useState(12);

  /* Determine active layer */
  const activeLayer = LAYERS.find(l => sliderValue >= l.range[0] && sliderValue < l.range[1]) || LAYERS[0];
  const layerIndex = LAYERS.indexOf(activeLayer);

  return (
    <section className="xray-section" id="fullstack">
      <div className="container">
        <ScrollReveal>
          <div className="xray-section__header">
            <span className="section-badge">🔍 Section 02</span>
            <h2 className="section-title">Peel Back the Layers</h2>
            <p className="section-subtitle">
              A web app is like a building — you only see the outside, but there are hidden floors underneath. 
              Drag the slider below to X-Ray through each layer and see what's really going on!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="xray-container">
            {/* Mock App Display */}
            <div className="xray-display">
              {/* Layer visuals */}
              <div className="xray-layers">
                {/* Frontend Layer */}
                <div className={`xray-layer xray-layer--frontend ${layerIndex === 0 ? 'xray-layer--active' : ''}`}>
                  <div className="xray-mock-app">
                    <div className="xray-mock-header">
                      <div className="xray-mock-logo">SocialApp</div>
                      <div className="xray-mock-nav">
                        <span>Home</span><span>Profile</span><span>Messages</span>
                      </div>
                    </div>
                    <div className="xray-mock-feed">
                      <div className="xray-mock-post">
                        <div className="xray-mock-post-avatar"></div>
                        <div className="xray-mock-post-content">
                          <div className="xray-mock-post-name"></div>
                          <div className="xray-mock-post-text"></div>
                          <div className="xray-mock-post-text short"></div>
                        </div>
                      </div>
                      <div className="xray-mock-post">
                        <div className="xray-mock-post-avatar"></div>
                        <div className="xray-mock-post-content">
                          <div className="xray-mock-post-name"></div>
                          <div className="xray-mock-post-text"></div>
                        </div>
                      </div>
                      <div className="xray-mock-actions">
                        <button className="xray-mock-like">❤️ Like</button>
                        <button className="xray-mock-comment">💬 Comment</button>
                        <button className="xray-mock-share">↗️ Share</button>
                      </div>
                    </div>
                  </div>
                  {layerIndex === 0 && (
                    <div className="xray-highlights">
                      <div className="xray-highlight" style={{ top: '8%', left: '5%', width: '90%', height: '12%' }}>
                        <span className="xray-highlight-label">{'<Header />'}</span>
                      </div>
                      <div className="xray-highlight" style={{ top: '25%', left: '5%', width: '90%', height: '55%' }}>
                        <span className="xray-highlight-label">{'<Feed />'}</span>
                      </div>
                      <div className="xray-highlight" style={{ top: '82%', left: '5%', width: '90%', height: '14%' }}>
                        <span className="xray-highlight-label">{'<Actions />'}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* API Layer */}
                <div className={`xray-layer xray-layer--api ${layerIndex === 1 ? 'xray-layer--active' : ''}`}>
                  <div className="xray-api-visual">
                    <div className="xray-api-endpoint">
                      <span className="xray-api-method get">GET</span>
                      <span className="xray-api-path">/api/posts</span>
                      <div className="xray-api-packet xray-api-packet--1"></div>
                    </div>
                    <div className="xray-api-endpoint">
                      <span className="xray-api-method post">POST</span>
                      <span className="xray-api-path">/api/likes</span>
                      <div className="xray-api-packet xray-api-packet--2"></div>
                    </div>
                    <div className="xray-api-endpoint">
                      <span className="xray-api-method put">PUT</span>
                      <span className="xray-api-path">/api/users/:id</span>
                      <div className="xray-api-packet xray-api-packet--3"></div>
                    </div>
                    <div className="xray-api-endpoint">
                      <span className="xray-api-method delete">DELETE</span>
                      <span className="xray-api-path">/api/comments/:id</span>
                    </div>
                    {/* Animated path lines */}
                    <svg className="xray-api-lines" viewBox="0 0 400 300" fill="none">
                      <path d="M200,20 C100,80 300,120 200,180 C100,240 300,280 200,300" stroke="var(--accent-purple)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="1s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                  </div>
                </div>

                {/* Backend Layer */}
                <div className={`xray-layer xray-layer--backend ${layerIndex === 2 ? 'xray-layer--active' : ''}`}>
                  <div className="xray-backend-visual">
                    <div className="xray-gear-container">
                      <div className="xray-gear xray-gear--large">⚙️</div>
                      <div className="xray-gear xray-gear--small">⚙️</div>
                    </div>
                    <div className="xray-process-steps">
                      <div className="xray-process-step">
                        <div className="xray-process-icon">📥</div>
                        <div className="xray-process-label">Receive</div>
                      </div>
                      <div className="xray-process-arrow">→</div>
                      <div className="xray-process-step">
                        <div className="xray-process-icon">🔐</div>
                        <div className="xray-process-label">Auth</div>
                      </div>
                      <div className="xray-process-arrow">→</div>
                      <div className="xray-process-step">
                        <div className="xray-process-icon">✅</div>
                        <div className="xray-process-label">Validate</div>
                      </div>
                      <div className="xray-process-arrow">→</div>
                      <div className="xray-process-step">
                        <div className="xray-process-icon">📤</div>
                        <div className="xray-process-label">Route</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Layer */}
                <div className={`xray-layer xray-layer--database ${layerIndex === 3 ? 'xray-layer--active' : ''}`}>
                  <div className="xray-db-visual">
                    <div className="xray-db-cylinder">
                      <div className="xray-db-top"></div>
                      <div className="xray-db-body">
                        <div className="xray-db-row">
                          <span className="xray-db-field">_id:</span> <span className="xray-db-val">"64f8..."</span>
                        </div>
                        <div className="xray-db-row">
                          <span className="xray-db-field">name:</span> <span className="xray-db-val">"Alice"</span>
                        </div>
                        <div className="xray-db-row">
                          <span className="xray-db-field">email:</span> <span className="xray-db-val">"alice@..."</span>
                        </div>
                        <div className="xray-db-row">
                          <span className="xray-db-field">posts:</span> <span className="xray-db-val">[...]</span>
                        </div>
                      </div>
                    </div>
                    <div className="xray-db-search">
                      <span className="xray-db-search-icon">🔍</span>
                      <span className="xray-db-search-text">db.users.findOne(&#123; email &#125;)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="xray-info" style={{ '--layer-color': activeLayer.color }}>
              <div className="xray-info__badge">
                <span className="xray-info__icon">{activeLayer.icon}</span>
                <span className="xray-info__name">{activeLayer.name}</span>
              </div>
              <p className="xray-info__desc">{activeLayer.description}</p>
              {activeLayer.analogy && (
                <div className="xray-info__analogy">{activeLayer.analogy}</div>
              )}
              <ul className="xray-info__details">
                {activeLayer.details.map((d, i) => (
                  <li key={i}>
                    <span className="xray-info__bullet">▸</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Slider */}
            <div className="xray-slider-container">
              <div className="xray-slider-labels">
                {LAYERS.map((l, i) => (
                  <button
                    key={l.id}
                    className={`xray-slider-label ${layerIndex === i ? 'xray-slider-label--active' : ''}`}
                    style={{ '--label-color': l.color }}
                    onClick={() => setSliderValue(l.range[0] + 12)}
                  >
                    {l.icon} {l.name}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max="99"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="xray-slider"
                id="xray-slider-input"
                aria-label="X-Ray depth slider"
                style={{
                  '--slider-progress': `${sliderValue}%`,
                  '--active-color': activeLayer.color,
                }}
              />
              <div className="xray-slider-hint">← Drag to explore layers →</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
