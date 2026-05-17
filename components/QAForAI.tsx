import { resolveLogo } from '@/lib/svgl'
import type { Svg } from '@/lib/svgl'

const cards = [
  {
    ai: 'Anthropic',
    title: 'Intent Regression Testing',
    desc: "From Clotilde's golden_dataset.js — 15 regression cases mapping real traveller inputs to expected agent actions. Run after every prompt or model change to catch regressions before they reach users.",
  },
  {
    ai: 'Gemini',
    title: 'Confidence Boundary Testing',
    desc: "From Clotilde's agent routing logic — verify the agent knows when to act, when to ask for clarification, and when to escalate. Ambiguous input must never silently produce a wrong booking.",
  },
  {
    ai: 'OpenAI',
    title: 'Policy Enforcement Testing',
    desc: "From Clotilde's Policy.js — verify business rules hold under adversarial inputs. Hotel budget caps per city, cabin class per role level, advance booking minimums, and out-of-policy approval triggers.",
  },
  {
    ai: 'Mistral AI',
    title: 'Fallback & Escalation Testing',
    desc: "From Clotilde's escalate_to_human tool and approval.js — every failure mode must have a graceful path: clarification request, manager approval flow, or safe hold. No raw errors reach the traveller.",
  },
  {
    ai: 'Google',
    title: 'QA Audit Loops',
    desc: "From AEON's self-evaluator agent — compares forecast outputs to real Binance market data 6 hours later, runs Root Cause Analysis on wrong predictions, and writes lessons back into the Obsidian vault.",
  },
  {
    ai: 'Perplexity',
    title: 'Negation & Anaphora Tests',
    desc: 'From Clotilde\'s golden dataset. "I do NOT want to fly to London" — London must not become a destination. "Book it for Friday" — "it" must resolve to the flight discussed earlier. The hard cases that standard QA misses.',
  },
]

function AILogo({ name, svgs }: { name: string; svgs: Svg[] }) {
  // Try exact name first, then common aliases
  const aliases: Record<string, string[]> = {
    'Gemini': ['Gemini', 'Google Gemini'],
    'Mistral AI': ['Mistral AI', 'Mistral'],
    'Perplexity': ['Perplexity', 'Perplexity AI'],
    'Anthropic': ['Anthropic', 'Claude'],
    'OpenAI': ['OpenAI', 'ChatGPT'],
    'Google': ['Google', 'Google Gemini'],
  }
  const candidates = aliases[name] ?? [name]
  let logoUrl: string | null = null
  for (const candidate of candidates) {
    logoUrl = resolveLogo(svgs, candidate)
    if (logoUrl) break
  }

  if (!logoUrl) {
    return (
      <div style={{
        width: 40, height: 40, borderRadius: '10px',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', marginBottom: '0.75rem',
      }}>
        🤖
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoUrl}
      alt={name}
      width={40}
      height={40}
      style={{
        objectFit: 'contain',
        marginBottom: '0.75rem',
        borderRadius: '8px',
      }}
    />
  )
}

type Props = { svgs: Svg[] }

export default function QAForAI({ svgs }: Props) {
  return (
    <section className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Specialisation</div>
      <h2 className="section-h">QA Thinking Applied to AI</h2>
      <p className="section-sub">Testing AI systems is different from testing regular software. Here&apos;s how I approach it.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
        {cards.map(({ ai, title, desc }) => (
          <div key={title} className="glass qa-card hover-lift" style={{ padding: '1.35rem' }}>
            <AILogo name={ai} svgs={svgs} />
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{ai}</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.3rem', color: '#fff' }}>{title}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
