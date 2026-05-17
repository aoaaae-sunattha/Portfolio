export default function Contact() {
  return (
    <>
      <section id="contact" style={{ textAlign: 'center', padding: '5rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="glass" style={{ maxWidth: '560px', margin: '0 auto', overflow: 'hidden' }}>
          <div className="stripe-violet" />
          <div style={{ padding: '3.5rem 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-1px', color: '#fff' }}>
              Let&apos;s Talk
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
              Looking for a QA engineer who builds AI products and tests them rigorously. Open to AI product teams, travel tech, and B2B SaaS.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="mailto:sunattha.saeh@gmail.com" className="clink">✉️ sunattha.saeh@gmail.com</a>
              <a href="https://github.com/aoaaae-sunattha" className="clink" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
              <a href="#" className="clink">💼 LinkedIn</a>
              <a href="#" className="clink">📄 Notion</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '1.75rem', color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)', position: 'relative', zIndex: 1 }}>
        Built with Claude · Tested end-to-end · © 2026 Sunattha Saeheng
      </footer>
    </>
  )
}
