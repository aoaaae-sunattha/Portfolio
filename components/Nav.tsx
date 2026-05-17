'use client'

export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        background: 'rgba(10, 10, 26, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="grad-text" style={{ fontSize: '0.88rem', fontWeight: 800, letterSpacing: '-0.3px' }}>
        Sunattha S.
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {([
          ['Projects', '#projects'],
          ['QA Forge', '#qa-forge'],
          ['Skills', '#skills'],
          ['Workflow', '#workflow'],
          ['Contact', '#contact'],
        ] as [string, string][]).map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
