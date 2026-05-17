export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Portfolio</div>
      <h2 className="section-h">Projects</h2>
      <p className="section-sub">Built from scratch. Tested end-to-end. Each one is a full PM → Design → Dev → QA cycle driven by AI.</p>

      {/* ── Clotilde hero card ── */}
      <div className="glass hover-lift" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div className="stripe-violet" />
        <div style={{ padding: '2.25rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span className="star-badge">⭐ Star Project</span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Built with Claude</span>
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.35rem', color: '#fff' }}>✈️ Clotilde</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}>AI Corporate Travel Assistant · Telegram Bot · v3.0</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '1.5rem' }}>
              A natural-language corporate travel assistant that searches live flights, enforces role-based company policy, routes out-of-policy bookings through a real approval workflow, and keeps travelers notified across every step of their trip.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {([['4', 'Role Levels', '#60a5fa'], ['17', 'Notifications', '#a78bfa'], ['15', 'Golden Tests', '#34d399'], ['5', 'AI Tools', '#fbbf24']] as [string, string, string][]).map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {['Built with Claude', 'Gemini 2.5 Pro', 'Gemini 2.5 Flash', 'Node.js', 'Duffel API (live)', 'Telegram Bot API', 'Golden Dataset', 'Regression Tests'].map((t) => (
                <span key={t} className={t.includes('Claude') || t.includes('Gemini') ? 'tag-ai' : t.includes('Dataset') || t.includes('Regression') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <video controls style={{ width: '100%', borderRadius: '10px' }} preload="none">
              <source src="https://raw.githubusercontent.com/aoaaae-sunattha/Portfolio/main/Clotilde_presentation.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Key Features</div>
            {[
              { icon: '🛡️', title: 'Role-Based Policy Enforcement', desc: 'Cabin class and hotel budget caps enforced per employee level. Operations/Staff → Economy only. Directors and VP → up to Business Class.' },
              { icon: '📋', title: 'Full Out-of-Policy Approval Workflow', desc: 'Traveler submits a business justification → manager gets Telegram message with Approve/Reject buttons → approval issues a PNR.' },
              { icon: '🔔', title: '17 Real-Time Traveler Notifications', desc: 'Covers the full travel lifecycle — booking confirmed, flight delayed/rescheduled/cancelled, no seats, hotel overbooked, policy approved/rejected.' },
              { icon: '🖥️', title: 'Natural Language Admin Console', desc: 'Travel managers type plain English and Gemini 2.5 Flash resolves it to the right action and notification automatically.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.1rem', alignItems: 'flex-start' }}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.15rem', color: '#fff' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.notion.so/Clotilde-v3-0-360dee0fbb3e806b9fe0f677169a2e26" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap' }}>📋 QA Notion</a>
              <a href="https://docs.google.com/presentation/d/1ZlNVMXSrT9uLDg-hExS_xZXgZrdCuot8XqvaqCFgCEQ/edit" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap' }}>🎞️ Slides</a>
              <a href="https://github.com/aoaaae-sunattha/Clotilde_AI" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap' }}>🐙 GitHub</a>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Live Duffel API · Mock GDS fallback · PNR generation · 4 traveler profiles from YAML
          </div>
        </div>
      </div>

      {/* ── 2-col project grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {/* Flight Tracker */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-green" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🛫</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>Flight Tracker Bot</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>BKK → CDG · Built on OpenClaw · Python</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Two-agent pipeline that finds cheapest Bangkok→Paris flights within strict 81–89 day return windows. Agent 1 queries Travelpayouts API; Agent 2 filters, ranks, and formats output as a daily Telegram report.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {([['2', 'Agents', '#60a5fa'], ['14', 'QA Cases', '#34d399'], ['3', 'Phases', '#fbbf24']] as [string, string, string][]).map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['OpenClaw', 'Multi-Agent Pipeline', 'Python 3.13', 'Travelpayouts API', '14 QA Test Cases'].map((t) => (
                <span key={t} className={t === 'OpenClaw' || t.includes('Multi') ? 'tag-ai' : t.includes('QA') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QA: <strong style={{ color: '#34d399' }}>TC-01→TC-14 · API retry · date safety</strong></div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>

        {/* AEON */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-purple" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🧠</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>AEON — Multi-Agent AI System</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Hermes orchestration · Obsidian memory · Claude + Gemini</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              7 specialised AI agents orchestrated by Hermes. Uses Tavily API for real-time market context. Obsidian vault acts as a persistent AI brain. A QA Auditor agent evaluates each prediction against real Binance data 6 hours later.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {([['7', 'Agents', '#a78bfa'], ['4', 'Hermes Skills', '#60a5fa'], ['59', 'Tests Pass', '#34d399']] as [string, string, string][]).map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['Hermes (orchestrator)', 'Claude 3.5 Sonnet', 'Gemini 2.5 Flash', 'Tavily API', 'SQLite', 'Self-Auditing Agent'].map((t) => (
                <span key={t} className={t.includes('Hermes') || t.includes('Claude') || t.includes('Gemini') ? 'tag-ai' : t.includes('Audit') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QA: <strong style={{ color: '#34d399' }}>Built-in QA Auditor · WIN/LOSS eval · Root Cause Analysis</strong></div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>
      </div>

      {/* ── tp-exchanges ── */}
      <div className="glass hover-lift" style={{ overflow: 'hidden' }}>
        <div className="stripe-multi" />
        <div style={{ padding: '2.25rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem' }}>
          <div>
            <div style={{ marginBottom: '0.85rem' }}>
              <span className="star-badge" style={{ background: 'rgba(245,158,11,0.12)', borderColor: 'rgba(245,158,11,0.3)', color: '#fbbf24' }}>🏢 Professional · Current Employer</span>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.35rem', color: '#fff' }}>tp-exchanges — Multi-Exchange Integration Library</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1rem' }}>Unified API abstraction layer across CEX + DEX · Binance as canonical template</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '1.5rem' }}>
              A production monorepo library that normalises the APIs of 20–30 active crypto exchanges into a single unified interface. Binance is the canonical template; every exchange inherits the base class and implements the same public and private API contract.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              {([['20–30', 'Exchanges', '#fbbf24'], ['REST', 'Protocol', '#fbbf24'], ['CEX+DEX', 'Coverage', '#fbbf24'], ['v0.48', 'Production', '#fbbf24']] as [string, string, string][]).map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Node.js', 'REST API', 'Lerna Monorepo', 'Integration Tests', 'Schema Validation', 'GitHub Actions CI'].map((t) => (
                <span key={t} className={t.includes('Tests') || t.includes('Validation') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>What the API layer covers</div>
            {[
              { icon: '📊', title: 'Public Market Data (REST)', desc: 'Order Book, 24h Exchange Volume, Latest Trades, Last Rate, Trading Pairs list. Same method signature across every exchange.' },
              { icon: '🔐', title: 'Private Account API (Authenticated)', desc: 'Account Balances, Open Orders, Place/Cancel Order, Trade History, Deposits & Withdrawals. All authenticated via API key + secret.' },
              { icon: '🧪', title: 'QA Approach — Node Scripts → Postman', desc: 'Each exchange validated through Node.js integration scripts. Tests create-and-cancel-order flows, schema contract parity, and edge cases per trading pair.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.15rem', color: '#fff' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Production library · v0.48.0 · 20–30 active exchange integrations
          </div>
        </div>
      </div>
    </section>
  )
}
