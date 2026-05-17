'use client'
import { Layers, Cpu, Mail, GitBranch, Package } from 'lucide-react'

export default function Nav() {
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 62,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        background: 'rgba(250,249,245,.85)',
        backdropFilter: 'blur(14px) saturate(120%)',
        WebkitBackdropFilter: 'blur(14px) saturate(120%)',
        borderBottom: '1px solid var(--line)',
      }}>
        <a href="#top" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.15rem',
          fontWeight: 500,
          letterSpacing: '-.3px',
          color: 'var(--ink)',
          display: 'flex',
          alignItems: 'baseline',
          gap: '.2rem',
          textDecoration: 'none',
        }}>
          Sunattha<span style={{ color: 'var(--coral)', fontSize: '1.3rem', lineHeight: 0 }}>.</span>
        </a>
        <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links">
          {[
            { href: '#pipeline', label: 'Pipeline' },
            { href: '#toolbox', label: 'Toolbox' },
            { href: '#projects', label: 'Projects' },
            { href: '#lab', label: 'Lab' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} style={{
                fontSize: '.85rem',
                fontWeight: 450,
                color: 'var(--grey)',
                transition: 'color .15s',
                padding: '.3rem 0',
                position: 'relative',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <style>{`
          @media(max-width:920px){.nav-links{display:none!important}}
        `}</style>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        {[
          { href: '#pipeline', icon: <GitBranch size={18} />, label: 'Pipeline' },
          { href: '#toolbox', icon: <Package size={18} />, label: 'Toolbox' },
          { href: '#projects', icon: <Layers size={18} />, label: 'Projects' },
          { href: '#skills', icon: <Cpu size={18} />, label: 'Skills' },
          { href: '#contact', icon: <Mail size={18} />, label: 'Contact' },
        ].map(({ href, icon, label }) => (
          <a key={href} href={href} className="mobile-nav-tab">
            {icon}
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
