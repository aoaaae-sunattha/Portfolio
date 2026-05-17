import { resolveLogo } from '@/lib/svgl'
import type { Svg } from '@/lib/svgl'

function resolveUrl(name: string, svgs: Svg[]): string | null {
  const aliases: Record<string, string[]> = {
    'Anthropic': ['Anthropic', 'Claude'],
    'Gemini': ['Gemini', 'Google Gemini'],
    'TypeScript': ['TypeScript'],
    'OpenAI': ['OpenAI', 'ChatGPT'],
  }
  const candidates = aliases[name] ?? [name]
  for (const c of candidates) {
    const url = resolveLogo(svgs, c)
    if (url) return url
  }
  return null
}

function StackedLogos({ names, svgs, size = 32 }: { names: string[]; svgs: Svg[]; size?: number }) {
  const overlap = Math.round(size * 0.35)
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
      {names.map((name, i) => {
        const url = resolveUrl(name, svgs)
        return (
          <div
            key={name}
            title={name}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              border: '2px solid rgba(10,10,26,0.9)',
              background: 'rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: i === 0 ? 0 : -overlap,
              zIndex: names.length - i,
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt={name} width={size - 8} height={size - 8} style={{ objectFit: 'contain' }} />
            ) : (
              <span style={{ fontSize: size * 0.45 + 'px' }}>🤖</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

function AILogo({ name, svgs, size = 32 }: { name: string; svgs: Svg[]; size?: number }) {
  const logoUrl = resolveUrl(name, svgs)
  if (!logoUrl) return <span style={{ fontSize: size * 0.7 + 'px' }}>🤖</span>
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logoUrl} alt={name} width={size} height={size} style={{ objectFit: 'contain', borderRadius: 6 }} />
  )
}

type Props = { svgs: Svg[] }

export default function QAForge({ svgs }: Props) {
  return (
    <section id="qa-forge" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye section-eye-emerald">QA Forge</div>
      <h2 className="section-h">QA as a Discipline</h2>
      <p className="section-sub">
        Not just running tests — designing the system that runs them. A complete PM → BA → QA pipeline
        built from scratch with Claude, with templates, prompts, skills, and guardrails at every step.
      </p>

      {/* ── Flagship card ── */}
      <div className="glass hover-lift" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div className="stripe-emerald" />
        <div style={{ padding: '2.25rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
              <span className="star-badge" style={{ background: 'rgba(52,211,153,0.12)', borderColor: 'rgba(52,211,153,0.3)', color: '#34d399' }}>
                ⚙️ QA Forge · Flagship
              </span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Built with Claude · 20 Claude skills · v3.0</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.35rem', color: '#fff' }}>
              <AILogo name="Anthropic" svgs={svgs} size={28} />
              Agentic QA Pipeline
            </div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}>
              CEO brief → Business Goals → PM Stories → BA Review → QA Plan → Manual Tests → Playwright → SHIP/HOLD
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '1.5rem' }}>
              20 Claude skills run automatically across 4 phases — the QA engineer holds 5 human gates and owns every quality decision.
              Each step produces a named file that feeds the next. Nothing is skipped. Nothing is silently passed.
            </p>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {([['20', 'Claude Skills'], ['6', 'Phases'], ['5', 'Human Gates'], ['6', 'Test Types']] as [string, string][]).map(([num, label]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Pipeline table */}
            <div style={{ border: '1px solid rgba(52,211,153,0.15)', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
              <div style={{ padding: '0.35rem 0.85rem', background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#34d399', fontFamily: 'var(--font-mono)' }}>Phase 0</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>CEO-BA-Dev — Discovery & Requirements</span>
              </div>
              <div style={{ padding: '0.5rem 0.85rem' }}>
                {([['CEO brief', 'Raw business intent — the starting point'], ['BG-IDs', 'Goals decomposed into traceable IDs'], ['PM stories', 'User stories written from each goal'], ['BA review (GWT)', 'Acceptance criteria added as Given/When/Then']] as [string, string][]).map(([key, val]) => (
                  <div key={key} style={{ display: 'grid', gridTemplateColumns: '148px 1fr', gap: '0.5rem 0.75rem', alignItems: 'baseline', padding: '0.28rem 0', fontSize: '0.72rem' }}>
                    <span style={{ color: '#34d399', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{key}</span>
                    <span style={{ color: 'rgba(255,255,255,0.45)' }}>{val}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.85rem', background: 'rgba(245,158,11,0.06)', borderTop: '1px solid rgba(245,158,11,0.15)', borderBottom: '1px solid rgba(245,158,11,0.15)', fontSize: '0.68rem', color: '#f59e0b' }}>
                <span>⛔</span><span style={{ fontWeight: 600 }}>Human gate —</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>QA confirms stories are QA-ready before continuing</span>
              </div>
              <div style={{ padding: '0.35rem 0.85rem', background: 'rgba(139,92,246,0.08)', borderBottom: '1px solid rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>Phase 2</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>Execution — Test & Deliver</span>
              </div>
              <div style={{ padding: '0.5rem 0.85rem' }}>
                {([['Manual test cases', 'Human-authored cases per story and AC'], ['Playwright .spec.ts', 'Automated E2E scripts generated from manual cases'], ['SHIP / HOLD', 'Final verdict with evidence — never a guess']] as [string, string][]).map(([key, val]) => (
                  <div key={key} style={{ display: 'grid', gridTemplateColumns: '148px 1fr', gap: '0.5rem 0.75rem', alignItems: 'baseline', padding: '0.28rem 0', fontSize: '0.72rem' }}>
                    <span style={{ color: '#c4b5fd', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{key}</span>
                    <span style={{ color: 'rgba(255,255,255,0.45)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Claude (orchestrator)', '20 Claude Skills', 'Playwright E2E', 'Page Object Model', 'TypeScript', 'GitHub Actions', 'GitHub MCP'].map((tag) => (
                <span key={tag} className={tag.includes('Claude') || tag.includes('Skills') ? 'tag-ai' : tag.includes('Playwright') || tag.includes('Object') ? 'tag-qa' : 'tag-tech'}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              What makes this different
            </div>
            {[
              { icon: '📋', title: 'Covers PM → BA → QA — not just QA', desc: "Business goals decomposed into traceable BG-IDs. Every test case must map to a BG-ID — no orphan tests. QA doesn't start until the story is QA-ready.", highlight: false },
              { icon: '📊', title: 'Live Project Analysis Widget — Skill 06', desc: 'Before any test is written, the pipeline generates a live 5-tab widget. Maps every component to a skill, rates every QA gap (Critical → Low), flags missing skills.', highlight: true },
              { icon: '🛡️', title: '5 hard-stop human gates', desc: 'Business goals → stories → QA widget → QA plan → manifest. Each gate requires explicit QA sign-off. No gate = no next step, no exceptions.', highlight: false },
              { icon: '⚡', title: 'Smart test healer — 4 failure types', desc: 'Type A: selector drift → auto-fix. Type B/C: timing or data → reported to dev. Type D: real bug → failing test preserved as defect report.', highlight: false },
            ].map(({ icon, title, desc, highlight }) => (
              <div key={title} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.1rem', alignItems: 'flex-start', ...(highlight ? { background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '8px', padding: '0.75rem' } : {}) }}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.15rem', color: highlight ? '#22d3ee' : '#fff' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Applied on FinPay — 27 user stories · 100% pass rate on active QA · SHIP/HOLD verdict delivered
          </div>
        </div>
      </div>

      {/* ── Supporting 2-col grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {/* KODA */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-amber" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <StackedLogos names={['Gemini', 'Anthropic']} svgs={svgs} size={32} />
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>KODA — QA on a Fintech BNPL Product</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem' }}>Built the product. Then tested every edge case that matters in fintech.</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Built a full BNPL app from scratch, then applied a complete QA lifecycle on real fintech business logic. 8 test personas, atomic E2E tests, unit test suite, and 3-gate CI pipeline. Every test case maps to a real business risk.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {([['169', 'Automated Tests', '#fbbf24'], ['76', 'E2E Specs', '#fbbf24'], ['3', 'CI Gates', '#60a5fa']] as [string, string, string][]).map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['Playwright E2E', 'Vitest Unit', 'Page Object Model', 'React 19 + TypeScript', 'GitHub Actions'].map((t) => (
                <span key={t} className={t.includes('Playwright') || t.includes('Vitest') || t.includes('Object') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QA: <strong style={{ color: '#34d399' }}>Risk-based priority · 8 test personas · 3-gate CI</strong></div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>

        {/* CrewAI QA Agent */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-green" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ flexShrink: 0 }}><AILogo name="Gemini" svgs={svgs} size={32} /></div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>QA Agent — CrewAI System</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem' }}>2 pipelines · 6 agents · Feature testing + Bug verification</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Two independent CrewAI pipelines. <strong style={{ color: '#fff' }}>qa-challenger</strong> takes a vague feature ticket and produces a user story, test plan, manual cases, and Playwright scripts. <strong style={{ color: '#fff' }}>qa-retest</strong> reads a real GitHub PR diff and generates targeted retest cases for the exact code that changed.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {([['2', 'Pipelines', '#34d399'], ['6', 'Agents', '#34d399'], ['PR', 'Diff Reader', '#60a5fa']] as [string, string, string][]).map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['CrewAI', 'Gemini 2.5 Pro', 'Playwright (generated)', 'Python', 'GitHub PR diff'].map((t) => (
                <span key={t} className={t === 'CrewAI' || t === 'Gemini 2.5 Pro' ? 'tag-ai' : t.includes('Playwright') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>
              <strong style={{ color: '#34d399' }}>qa-challenger:</strong> ticket → story → plan → cases → .spec.ts
            </div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>
      </div>

      {/* ── Philosophy card ── */}
      <div className="glass hover-lift" style={{ overflow: 'hidden' }}>
        <div className="stripe-slate" />
        <div style={{ padding: '1.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem', alignItems: 'center' }}>
              <AILogo name="Anthropic" svgs={svgs} size={28} />
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>The QA Forge Approach</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Why I build the process, not just run it</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Most QA engineers inherit a process. I&apos;m designing one — a repeatable, AI-augmented system that any QA engineer can run. The pipeline writes the test plan. The healer fixes broken selectors. The report writes itself. The QA engineer owns the quality strategy, the edge cases, and the acceptance criteria. That part doesn&apos;t automate.
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
              {['Process design', 'Prompt engineering', 'Agentic orchestration', 'QA strategy'].map((t) => (
                <span key={t} className={t === 'Agentic orchestration' ? 'tag-ai' : 'tag-qa'}>{t}</span>
              ))}
            </div>
            <blockquote style={{ padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid rgba(255,255,255,0.12)', borderRadius: '0 8px 8px 0', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              &ldquo;You haven&apos;t been replaced — you&apos;ve been promoted to the architect seat. The AI runs the repetitive parts; you own the quality strategy.&rdquo;
              <div style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', fontStyle: 'normal' }}>— from the QA Forge pipeline docs</div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
