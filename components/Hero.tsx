import { GitBranch, Layers, Mail, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" style={{
      padding: '9rem 2rem 5rem',
      maxWidth: 1180,
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.55rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        letterSpacing: '.5px',
        color: 'var(--green)',
        background: 'rgba(79,122,79,.08)',
        border: '1px solid rgba(79,122,79,.25)',
        padding: '.42rem 1rem',
        borderRadius: 99,
        fontWeight: 500,
        textTransform: 'uppercase',
      }}>
        <span style={{ position: 'relative', width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}>
          <span style={{
            position: 'absolute',
            inset: -3,
            borderRadius: '50%',
            background: 'var(--green)',
            opacity: .3,
            animation: 'pulse 2.4s ease-in-out infinite',
          }} />
        </span>
        Available · Open to roles · Jun 2026
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2.8rem, 6vw, 4.6rem)',
        fontWeight: 500,
        lineHeight: 1.02,
        letterSpacing: '-2.5px',
        color: 'var(--ink)',
        margin: '1.75rem 0 1rem',
        maxWidth: '18ch',
      }}>
        QA engineer who{' '}
        <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 400 }}>builds</span>
        {' '}with AI.
      </h1>

      {/* H2 */}
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 400,
        fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
        lineHeight: 1.45,
        color: 'var(--grey)',
        marginBottom: '2rem',
        maxWidth: '46ch',
        letterSpacing: '-.3px',
      }}>
        I test the things I build, and I build the things I want to test. The pipeline below is the spine.
      </h2>

      {/* Pitch card */}
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '1.5rem 1.75rem',
        maxWidth: 680,
        marginBottom: '2.25rem',
        boxShadow: '0 1px 2px rgba(0,0,0,.025)',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '.68rem',
          letterSpacing: '.5px',
          textTransform: 'uppercase' as const,
          color: 'var(--coral)',
          marginBottom: '.65rem',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '.45rem',
        }}>
          <Zap size={12} /> The three-sentence pitch
        </div>
        <p style={{ fontSize: '.97rem', lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
          I&apos;m a QA engineer who got tired of inheriting test plans, so I built a pipeline that writes its
          own — <strong style={{ color: 'var(--ink)' }}>Claude</strong> as the orchestrator,{' '}
          <strong style={{ color: 'var(--ink)' }}>MCP</strong> to reach Notion and GitHub,{' '}
          <strong style={{ color: 'var(--ink)' }}>CrewAI</strong> for the agents that do the work, and{' '}
          <strong style={{ color: 'var(--ink)' }}>Perplexity + NotebookLM</strong> upstream so the pipeline is asking
          the right questions before it writes the first test case.
        </p>
        <p style={{ fontSize: '.97rem', lineHeight: 1.65, color: 'var(--ink-2)', margin: '.7rem 0 0' }}>
          Each project below was built and tested with this toolchain. The pipeline produces the same five artifacts
          every time — a plan, a skill manifest, a gap report, a generated skill, and a SHIP/HOLD verdict.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="#pipeline" className="btn fill"><GitBranch size={16} /> See the pipeline</a>
        <a href="#projects" className="btn ghost"><Layers size={16} /> Project deep dives</a>
        <a href="#contact" className="btn ghost"><Mail size={16} /> Get in touch</a>
      </div>

      {/* Meta row */}
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        marginTop: '3rem',
        fontSize: '.82rem',
        color: 'var(--grey)',
        flexWrap: 'wrap',
      }}>
        {[
          { label: 'Currently', value: 'QA × AI tooling' },
          { label: 'Based in', value: 'Bangkok, TH · UTC+7' },
          { label: 'Stack', value: 'Claude · Playwright · TypeScript · Python' },
          { label: 'Open to', value: 'QA / GenAI engineering roles' },
        ].map(({ label, value }) => (
          <div key={label}>
            <b style={{ display: 'block', color: 'var(--ink)', fontWeight: 600, marginBottom: '.2rem', fontSize: '.78rem' }}>{label}</b>
            {value}
          </div>
        ))}
      </div>
    </section>
  )
}
