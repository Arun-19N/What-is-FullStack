import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import { useInView } from '../../hooks/useInView';
import './WhyWebDev.css';

/* ---- Day-in-the-Life Activity Cards ---- */
const ACTIVITIES = [
  { emoji: '☕', title: 'Order Breakfast', desc: 'Swiggy/Zomato is a React app talking to Node.js servers', color: 'var(--accent-orange)' },
  { emoji: '🎵', title: 'Stream Music', desc: 'Spotify uses APIs to fetch your playlists in milliseconds', color: 'var(--accent-green)' },
  { emoji: '🏦', title: 'UPI Payment', desc: 'Secure REST APIs handle your money behind the scenes', color: 'var(--accent-blue)' },
  { emoji: '💬', title: 'Chat on WhatsApp', desc: 'WebSockets send messages instantly without page refresh', color: 'var(--accent-purple)' },
  { emoji: '🛒', title: 'Shop on Amazon', desc: 'Full-stack app: React frontend + Node backend + MongoDB database', color: 'var(--accent-pink)' },
  { emoji: '📺', title: 'Watch YouTube', desc: 'Billions of video streams powered by web technology daily', color: 'var(--accent-cyan)' },
];

/* ---- Code-to-Reality ---- */
const CODE_LINES = [
  { text: '<div class="dashboard">', color: 'var(--accent-orange)' },
  { text: '  <Header user={name} />', color: 'var(--accent-cyan)' },
  { text: '  <Chart data={sales} />', color: 'var(--accent-green)' },
  { text: '  <Button onClick={buy}>', color: 'var(--accent-purple)' },
  { text: '    Purchase Now', color: 'var(--text-primary)' },
  { text: '  </Button>', color: 'var(--accent-purple)' },
  { text: '  <Map location={geo} />', color: 'var(--accent-pink)' },
  { text: '</div>', color: 'var(--accent-orange)' },
];

/* ---- Stats ---- */
const STATS = [
  { value: 5.3, suffix: 'B+', label: 'Internet Users', icon: '🌍' },
  { value: 1.9, suffix: 'B+', label: 'Websites', icon: '🌐' },
  { value: 200, suffix: 'M+', label: 'Web Apps', icon: '📱' },
  { value: 30, suffix: 'T+', label: 'Daily API Calls', icon: '⚡' },
];

function AnimatedCounter({ value, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isVisible, value]);

  return <span>{count}{suffix}</span>;
}

export default function WhyWebDev() {
  const [statsRef, statsVisible] = useInView({ threshold: 0.3 });
  const scrollContainerRef = useRef(null);

  return (
    <section className="why-section" id="why-webdev">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="why-section__header">
            <span className="section-badge">🌆 Section 01</span>
            <h2 className="section-title">Why Should YOU Learn This?</h2>
            <p className="section-subtitle">
              Open your phone right now — every single app you use is built with web technology. 
              From ordering food to sending money, it's all code. Here's your daily life, decoded:
            </p>
          </div>
        </ScrollReveal>

        {/* ---- Sub-section 1: Day in the Life ---- */}
        <ScrollReveal delay={0.1}>
          <div className="why-day">
            <h3 className="why-day__title">
              <span className="why-day__icon">📱</span> Your Phone = Web Apps Everywhere
            </h3>
            <div className="why-day__scroll-wrapper">
              <div className="why-day__track" ref={scrollContainerRef}>
                {ACTIVITIES.map((act, i) => (
                  <div
                    className="why-day__card"
                    key={i}
                    style={{ '--card-accent': act.color, animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="why-day__card-emoji">{act.emoji}</div>
                    <h4 className="why-day__card-title">{act.title}</h4>
                    <p className="why-day__card-desc">{act.desc}</p>
                    <div className="why-day__card-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ---- Sub-section 2: Code-to-Reality ---- */}
        <ScrollReveal delay={0.1}>
          <div className="why-morph">
            <h3 className="why-morph__title">
              <span className="why-morph__icon">✨</span> Code → What You See On Screen
            </h3>
            <p className="why-morph__desc">On the left is the actual code developers write. On the right is what the user sees. Same thing — two perspectives!</p>
            <div className="why-morph__split">
              {/* Code side */}
              <div className="why-morph__code">
                <div className="why-morph__code-header">
                  <span className="dot dot--red"></span>
                  <span className="dot dot--yellow"></span>
                  <span className="dot dot--green"></span>
                  <span className="why-morph__filename">App.jsx</span>
                </div>
                <div className="why-morph__code-body">
                  {CODE_LINES.map((line, i) => (
                    <div
                      className="why-morph__line"
                      key={i}
                      style={{ animationDelay: `${i * 0.12}s` }}
                    >
                      <span className="why-morph__line-num">{i + 1}</span>
                      <code style={{ color: line.color }}>{line.text}</code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="why-morph__arrow">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                  <path d="M0 15h50M42 5l12 10-12 10" stroke="url(#arrowGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="arrowGrad" x1="0" y1="15" x2="60" y2="15">
                      <stop stopColor="var(--accent-cyan)" />
                      <stop offset="1" stopColor="var(--accent-purple)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Reality side — mock UI */}
              <div className="why-morph__ui">
                <div className="why-morph__ui-header">
                  <div className="why-morph__ui-avatar"></div>
                  <div className="why-morph__ui-name">Dashboard</div>
                  <div className="why-morph__ui-bell">🔔</div>
                </div>
                <div className="why-morph__ui-chart">
                  <div className="why-morph__bar" style={{ height: '40%' }}></div>
                  <div className="why-morph__bar" style={{ height: '65%' }}></div>
                  <div className="why-morph__bar" style={{ height: '50%' }}></div>
                  <div className="why-morph__bar" style={{ height: '80%' }}></div>
                  <div className="why-morph__bar" style={{ height: '55%' }}></div>
                  <div className="why-morph__bar" style={{ height: '70%' }}></div>
                </div>
                <button className="why-morph__ui-btn">Purchase Now →</button>
                <div className="why-morph__ui-map">
                  <div className="why-morph__ui-map-pin">📍</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ---- Sub-section 3: Global Stats with SVG Map ---- */}
        <ScrollReveal delay={0.1}>
          <div className="why-global" ref={statsRef}>
            <h3 className="why-global__title">
              <span className="why-global__icon">🌐</span> The Web is Everywhere
            </h3>
            <div className="why-global__content">
              {/* SVG World Map */}
              <div className="why-global__map-container">
                <svg className="why-global__map" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified world continents */}
                  <g opacity="0.3" stroke="var(--accent-cyan)" strokeWidth="1" fill="none">
                    {/* North America */}
                    <path d="M120,80 Q140,60 180,70 Q220,65 240,80 Q260,90 250,120 Q240,140 220,150 Q200,160 180,155 Q160,145 140,150 Q120,140 110,120 Q105,100 120,80Z" />
                    {/* South America */}
                    <path d="M200,180 Q220,170 240,185 Q250,200 245,230 Q240,260 230,280 Q220,300 210,295 Q195,280 190,260 Q185,240 190,220 Q195,200 200,180Z" />
                    {/* Europe */}
                    <path d="M370,70 Q390,60 410,65 Q430,70 440,85 Q445,100 435,110 Q420,115 400,110 Q380,105 370,90 Q365,80 370,70Z" />
                    {/* Africa */}
                    <path d="M380,130 Q400,120 420,130 Q440,145 445,170 Q448,200 440,230 Q430,260 420,270 Q405,275 390,260 Q378,240 375,210 Q372,180 375,160 Q377,140 380,130Z" />
                    {/* Asia */}
                    <path d="M460,60 Q500,50 540,55 Q580,60 620,70 Q660,80 680,100 Q690,120 680,140 Q660,155 630,150 Q600,145 570,140 Q540,135 510,130 Q480,125 460,110 Q450,95 455,75 Q457,65 460,60Z" />
                    {/* Australia */}
                    <path d="M620,240 Q650,230 680,240 Q700,250 700,270 Q695,290 670,295 Q645,292 630,280 Q618,265 620,240Z" />
                  </g>
                  {/* Data Nodes with pulse */}
                  {[
                    { cx: 180, cy: 110, label: 'NA' },
                    { cx: 220, cy: 240, label: 'SA' },
                    { cx: 400, cy: 90,  label: 'EU' },
                    { cx: 420, cy: 200, label: 'AF' },
                    { cx: 560, cy: 100, label: 'AS' },
                    { cx: 660, cy: 260, label: 'OC' },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.cx} cy={node.cy} r="4" fill="var(--accent-cyan)" opacity="0.9">
                        <animate attributeName="r" values="4;8;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;0.3;0.9" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={node.cx} cy={node.cy} r="2" fill="var(--accent-cyan)" />
                      {/* Connection lines between nodes */}
                      {i < 5 && (
                        <line
                          x1={node.cx}
                          y1={node.cy}
                          x2={[180, 220, 400, 420, 560, 660][i + 1]}
                          y2={[110, 240, 90, 200, 100, 260][i + 1]}
                          stroke="var(--accent-cyan)"
                          strokeWidth="0.5"
                          opacity="0.15"
                          strokeDasharray="4 4"
                        >
                          <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                        </line>
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* Stats Grid */}
              <div className="why-global__stats">
                {STATS.map((stat, i) => (
                  <div className="why-global__stat-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                    <span className="why-global__stat-icon">{stat.icon}</span>
                    <div className="why-global__stat-value">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
                    </div>
                    <div className="why-global__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
