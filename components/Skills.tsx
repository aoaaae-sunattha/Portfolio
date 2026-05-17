import { resolveLogo } from '@/lib/svgl'
import type { Svg } from '@/lib/svgl'

function SkillItem({ name, svgs }: { name: string; svgs: Svg[] }) {
  const logoUrl = resolveLogo(svgs, name)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={name}
          width={16}
          height={16}
          style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.65, flexShrink: 0 }}
        />
      ) : (
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, display: 'inline-block' }} />
      )}
      {name}
    </div>
  )
}

type Props = { svgs: Svg[] }

export default function Skills({ svgs }: Props) {
  return (
    <section id="skills" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Stack</div>
      <h2 className="section-h">Skills & Tools</h2>
      <p className="section-sub">
        Every tool here starts the same way — use AI to digest the docs, understand the architecture, plan the approach, then build with intention.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* ── Zone 1: AI & LLMs ── */}
        <div className="glass" style={{ padding: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>AI & LLMs</div>

          {/* Row A: 4-col */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
            {([
              { color: '#60a5fa', bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.18)', title: 'Claude · Anthropic', items: ['Chat — reasoning & planning', 'Code — CLI coding agent', 'Cowork — file automation', 'API — LLM for AkiClaw + AEON'] },
              { color: '#a78bfa', bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.18)', title: 'Gemini · Google', items: ['2.5 Pro — Clotilde + CrewAI', '2.5 Flash — admin tasks', '3 Preview — latest model', 'API — LLM for Clotilde + AEON'] },
              { color: '#fb923c', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.18)', title: 'Codex · OpenAI', items: ['GPT-5.4 — daily builds & POC', 'GPT-5.5 — agentic, long-context', 'Prompt Compiler adapter'] },
              { color: '#22d3ee', bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.18)', title: 'Research Tools', items: ['NotebookLM — doc analysis', 'Perplexity — live research'] },
            ] as { color: string; bg: string; border: string; title: string; items: string[] }[]).map(({ color, bg, border, title, items }) => (
              <div key={title} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '9px', padding: '0.8rem' }}>
                <div style={{ fontSize: '0.67rem', fontWeight: 700, color, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.55rem', fontFamily: 'var(--font-mono)' }}>{title}</div>
                {items.map((item) => (
                  <div key={item} style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Row B: 3-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginTop: '0.6rem' }}>
            {([
              { color: '#fbbf24', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.18)', title: 'AI Frameworks', items: ['CrewAI — multi-agent (QA Agent)', 'OpenClaw — agent platform', 'Hermes — skill orchestration', 'Paperclip — self-built trading bot'] },
              { color: '#34d399', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.18)', title: 'Prompt Engineering', items: ['Claude Code Skills — built with Claude + Gemini', 'System prompts — structured with Claude + Gemini 2.5 Pro'] },
              { color: '#f87171', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.18)', title: 'AI for Planning', items: ['PRD', 'Business plan, goals & rules', 'User stories', 'Acceptance criteria', 'QA test plan'] },
            ] as { color: string; bg: string; border: string; title: string; items: string[] }[]).map(({ color, bg, border, title, items }) => (
              <div key={title} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '9px', padding: '0.8rem' }}>
                <div style={{ fontSize: '0.67rem', fontWeight: 700, color, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.55rem', fontFamily: 'var(--font-mono)' }}>{title}</div>
                {items.map((item, i) => (
                  <div key={item} style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>
                    {title === 'AI for Planning'
                      ? <><span style={{ color, fontSize: '0.62rem', fontWeight: 700, marginRight: '0.4rem', fontFamily: 'var(--font-mono)' }}>{String(i + 1).padStart(2, '0')}</span>{item}</>
                      : item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Cross-check */}
          <div style={{ marginTop: '0.65rem', padding: '0.6rem 0.9rem', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.76rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>How I use them together —</span> Cross-check across Claude and Gemini before committing to any decision. Use NotebookLM and Perplexity to verify. If all sources agree, it&apos;s solid. If they diverge, dig deeper.
          </div>
        </div>

        {/* ── Zone 2: 4-col skill cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '0.85rem' }}>
          {([
            { title: 'QA & Testing', accent: '#10b981', items: ['Playwright (E2E)', 'Vitest / Jest (Unit)', 'Page Object Model', 'Test plan & strategy', 'Risk-based prioritisation', 'CI/CD (GitHub Actions)'] },
            { title: 'Development', accent: '#3b82f6', items: ['JavaScript / TypeScript', 'Node.js', 'Python 3.13', 'React 19', 'Next.js', 'REST APIs / Docker'] },
            { title: 'APIs & Integrations', accent: '#8b5cf6', items: ['Telegram Bot API', 'Duffel (live flights)', 'Travelpayouts / Aviationstack', 'Tavily API (real-time research)', 'Google Sheets API', 'Binance (CCXT)'] },
            { title: 'MCP', accent: '#06b6d4', items: ['GitHub MCP', 'Notion MCP', 'Playwright MCP'] },
          ] as { title: string; accent: string; items: string[] }[]).map(({ title, accent, items }) => (
            <div key={title} className="glass-sm" style={{ padding: '1.25rem', borderLeft: `3px solid ${accent}` }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', color: accent, textTransform: 'uppercase', marginBottom: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                {title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {items.map((item) => (
                  <SkillItem key={item} name={item} svgs={svgs} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
