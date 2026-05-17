export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '7rem 1.5rem 5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Badge */}
      <div
        className="fade-up"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(124,58,237,0.12)',
          border: '1px solid rgba(124,58,237,0.35)',
          borderRadius: '100px',
          padding: '0.3rem 1rem',
          fontSize: '0.72rem',
          fontWeight: 600,
          color: '#c4b5fd',
          letterSpacing: '0.5px',
          marginBottom: '2rem',
        }}
      >
        <span
          className="blink"
          style={{ width: 6, height: 6, background: '#a78bfa', borderRadius: '50%', display: 'inline-block' }}
        />
        QA Engineer × AI Builder &nbsp;·&nbsp; Open to Work
      </div>

      {/* H1 */}
      <h1
        className="fade-up-2"
        style={{
          fontSize: 'clamp(2.8rem, 7vw, 5rem)',
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          color: '#fff',
          margin: '0 0 0.5rem',
        }}
      >
        Sunattha Saeheng
        <br />
        <span className="grad-text">QA who builds with AI</span>
      </h1>

      {/* Tagline */}
      <p
        className="fade-up-3"
        style={{
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.5)',
          margin: '1.5rem auto 2.5rem',
          maxWidth: '480px',
          lineHeight: 1.75,
        }}
      >
        I don&apos;t just test software — I use AI to design, build, and validate real products from the ground up.
      </p>

      {/* Pitch card */}
      <div
        className="glass fade-up-4"
        style={{
          maxWidth: '640px',
          width: '100%',
          textAlign: 'left',
          marginBottom: '2.5rem',
          overflow: 'hidden',
        }}
      >
        <div className="stripe-violet" />
        <div style={{ padding: '1.75rem 2.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: '#fbbf24',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
            }}
          >
            ⚡ 30-Second Pitch
          </div>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.82, margin: 0 }}>
            I&apos;m a QA engineer who got curious about AI and started building things to understand how it actually works.
            Along the way I built <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Clotilde</strong> — a small AI travel
            assistant experiment that taught me how intent classification, policy enforcement, and approval workflows fit
            together in a real product. Seeing what <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Claire</strong> is
            building in the B2B travel space genuinely excited me — it&apos;s the kind of problem I&apos;ve been learning toward.
            I test everything I build, and I don&apos;t stop until I understand <em>why</em> something works.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" className="btn-violet">View Projects</a>
        <a href="#contact" className="btn-glass">Contact Me</a>
      </div>

      {/* QA Forge pill */}
      <a
        href="#qa-forge"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1.25rem',
          fontSize: '0.82rem',
          color: '#34d399',
          textDecoration: 'none',
          border: '1px solid rgba(52,211,153,0.3)',
          background: 'rgba(52,211,153,0.07)',
          padding: '0.35rem 0.85rem',
          borderRadius: '99px',
          transition: 'background 200ms ease',
        }}
      >
        🔬 QA Forge — 59 tests · 20 Claude skills · v3.0 →
      </a>
    </section>
  )
}
