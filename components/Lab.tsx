const experiments = [
  {
    title: 'AgentViz — Agentic Economy Dashboard',
    badge: 'Visualisation Layer',
    badgeColor: 'rgba(245,158,11,0.3)',
    badgeText: '#fbbf24',
    desc: 'Three autonomous agents (Alpha, Beta, Gamma) transact in real-time through a live visual dashboard — SVG curved arcs trace every fund flow. Simulates micropayments, bidirectional transfers, and conditional transactions. Built as a pure Vanilla JS prototype with 55 manual test cases documented.',
    tags: ['Micropayments', 'Bidirectional Transfers', 'Conditional Transactions', 'Real-time Ledger', 'SVG Arcs', '55 Test Cases', 'Vanilla JS'],
  },
  {
    title: 'AgentSim — Agent-vs-Agent Economy',
    badge: 'Decision Layer',
    badgeColor: 'rgba(99,102,246,0.3)',
    badgeText: '#a78bfa',
    desc: 'Two autonomous Gemini 2.0 agents operate as economic actors. Each evaluates counterpart offers using persona logic and decides autonomously to ACCEPT / REJECT / COUNTER. Covers 5 real-world scenarios: direct asset purchase, micropayment, price haggling, atomic swap, competitive auction.',
    tags: ['Gemini 2.0 Flash', 'React 18 + TypeScript', 'Atomic Swap', 'Micropayments', 'Bid / Ask / Counter-offer', 'Agentic QA Pipeline'],
  },
  {
    title: 'TrustlessSim — Cryptographic Settlement Layer',
    badge: 'Settlement Layer',
    badgeColor: 'rgba(6,182,212,0.3)',
    badgeText: '#22d3ee',
    desc: 'Proves AI agents can negotiate safely in a trustless environment. Implements a Commit-Reveal Protocol using SHA-256 cryptography. Simulates 5 attack vectors: honest deal, cheating agent, data corruption, ghost agent, replay attack.',
    tags: ['Commit-Reveal Protocol', 'SHA-256 Cryptography', 'Front-running Prevention', 'Off-chain Settlement', 'Web Crypto API', 'React 18 + TypeScript'],
  },
  {
    title: 'Paperclip Trading Bot',
    badge: null,
    badgeColor: '',
    badgeText: '',
    desc: "A deterministic BTC/USDT paper-trading bot built on rule-based signal logic — no AI, no ML, no black box. Uses EMA crossover, RSI, and configurable stop-loss. Built primarily as a QA exercise: 131/131 tests passing, 96% coverage.",
    tags: ['Node.js', 'EMA Crossover', 'RSI', 'Stop-Loss', 'Paper Trading', '131 Tests', '96% Coverage'],
  },
  {
    title: 'Prompt Compiler CLI',
    badge: null,
    badgeColor: '',
    badgeText: '',
    desc: 'A Node.js ESM CLI that assembles, validates, and outputs system prompts for multiple LLM targets from a single source. Reads modular prompt blocks and assembles them per target. Validates required fields, flags missing sections, warns on token budget overruns.',
    tags: ['Node.js ESM', 'CLI', 'Prompt Engineering', 'Multi-LLM', 'Token Validation', 'Claude', 'Gemini', 'OpenRouter'],
  },
  {
    title: 'AkiClaw Agent Framework',
    badge: null,
    badgeColor: '',
    badgeText: '',
    desc: 'A fork and personal extension of SubZeroClaw — a persistent background agent. Identity, personality, skills, and behavioral rules defined in plain .md files. Runs in Docker with a credential proxy. Telegram interface is the primary interaction layer.',
    tags: ['SubZeroClaw', 'Python', 'Docker', 'Claude API', 'OpenRouter', 'Telegram', 'Markdown Memory'],
  },
]

export default function Lab() {
  return (
    <section className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Lab</div>
      <h2 className="section-h">Experiments</h2>
      <p className="section-sub">Self-directed projects exploring AI agent patterns, fintech logic, and automation.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {experiments.map((exp) => (
          <div key={exp.title} className="lab-card hover-lift">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{exp.title}</div>
              {exp.badge && (
                <span style={{ fontSize: '0.6rem', padding: '0.15rem 0.45rem', background: exp.badgeColor.replace('0.3', '0.12'), border: `1px solid ${exp.badgeColor}`, borderRadius: '4px', color: exp.badgeText, letterSpacing: '0.4px', whiteSpace: 'nowrap' }}>
                  {exp.badge.toUpperCase()}
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, flex: 1 }}>{exp.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.75rem' }}>
              {exp.tags.map((tag) => (
                <span key={tag} className="lab-tag">{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '0.65rem' }}>
              <a href="#" className="chip">Explore more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
