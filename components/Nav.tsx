'use client'
import { useEffect, useState } from 'react'
import { Layers, Cpu, Mail, GitBranch, Package } from 'lucide-react'

const sections = ['pipeline', 'toolbox', 'projects', 'lab', 'skills', 'contact']

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const links = [
    { href: '#pipeline', label: 'Pipeline', id: 'pipeline' },
    { href: '#toolbox',  label: 'Toolbox',  id: 'toolbox'  },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#lab',      label: 'Lab',      id: 'lab'      },
    { href: '#skills',   label: 'Skills',   id: 'skills'   },
    { href: '#contact',  label: 'Contact',  id: 'contact'  },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
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

        <ul style={{ display: 'flex', gap: '.25rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links">
          {links.map(({ href, label, id }) => {
            const isActive = active === id
            return (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontSize: '.85rem',
                    fontWeight: isActive ? 600 : 450,
                    color: isActive ? 'var(--ink)' : 'var(--grey)',
                    transition: 'color .2s, background .2s',
                    padding: '.3rem .75rem',
                    borderRadius: 99,
                    position: 'relative',
                    textDecoration: 'none',
                    display: 'inline-block',
                    background: isActive ? 'var(--coral-soft)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--ink)'
                      e.currentTarget.style.background = 'var(--surface)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--grey)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <style>{`
          @media(max-width:920px){.nav-links{display:none!important}}
        `}</style>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        {[
          { href: '#pipeline', icon: <GitBranch size={18} />, label: 'Pipeline', id: 'pipeline' },
          { href: '#toolbox',  icon: <Package size={18} />,   label: 'Toolbox',  id: 'toolbox'  },
          { href: '#projects', icon: <Layers size={18} />,    label: 'Projects', id: 'projects' },
          { href: '#skills',   icon: <Cpu size={18} />,       label: 'Skills',   id: 'skills'   },
          { href: '#contact',  icon: <Mail size={18} />,      label: 'Contact',  id: 'contact'  },
        ].map(({ href, icon, label, id }) => (
          <a
            key={href}
            href={href}
            className="mobile-nav-tab"
            style={{ color: active === id ? 'var(--coral)' : undefined }}
          >
            {icon}
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
