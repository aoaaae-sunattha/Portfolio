'use client'

import { GitBranch, Layers, Mail, ArrowDown } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { HeroFade } from './Animate'

const SECTIONS = ['top', 'pipeline', 'toolbox', 'projects', 'lab', 'skills', 'workflow', 'qa-for-ai', 'contact']

export default function Hero() {
  const [hidden, setHidden] = useState(false)

  const getCurrentIndex = useCallback(() => {
    let current = 0
    for (let i = 0; i < SECTIONS.length; i++) {
      const el = document.getElementById(SECTIONS[i])
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        current = i
      }
    }
    return current
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setHidden(getCurrentIndex() >= SECTIONS.length - 1)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [getCurrentIndex])

  const scrollToNext = useCallback(() => {
    const next = SECTIONS[getCurrentIndex() + 1]
    if (next) document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' })
  }, [getCurrentIndex])

  return (
    <section id="top" className="hero-section" style={{
      padding: '9rem 2rem 5rem',
      maxWidth: 1180,
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Badge */}
      <HeroFade delay={0}>
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
      </HeroFade>

      {/* H1 */}
      <HeroFade delay={0.1}>
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
      </HeroFade>

      {/* Bio */}
      <HeroFade delay={0.2}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          lineHeight: 1.7,
          color: 'var(--grey)',
          marginBottom: '2.25rem',
          maxWidth: '58ch',
          letterSpacing: '-.1px',
        }}>
          I&apos;m a QA engineer who got curious about AI and started building things to understand how it actually works. Along the way I built Clotilde — a small AI travel assistant experiment that taught me how intent classification, policy enforcement, and approval workflows fit together in a real product. Seeing what Claire is building in the B2B travel space genuinely excited me — it&apos;s the kind of problem I&apos;ve been learning toward. I test everything I build, and I don&apos;t stop until I understand why something works.
        </p>
      </HeroFade>

      {/* CTAs */}
      <HeroFade delay={0.3}>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#pipeline" className="btn fill"><GitBranch size={16} /> See the pipeline</a>
          <a href="#projects" className="btn ghost"><Layers size={16} /> Project deep dives</a>
          <a href="#contact" className="btn ghost"><Mail size={16} /> Get in touch</a>
        </div>
      </HeroFade>

      {/* Scroll indicator — fixed bottom right */}
      {!hidden && (
        <HeroFade delay={0.7} className="hero-scroll" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}>
          <button onClick={scrollToNext} style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '.4rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform .2s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'}
          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '.65rem',
              letterSpacing: '.6px',
              textTransform: 'uppercase',
              color: 'var(--coral)',
              fontWeight: 700,
              textShadow: '0 1px 4px rgba(255,255,255,.9)',
            }}>Scroll</span>
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44, borderRadius: '50%',
              background: 'var(--coral)',
              boxShadow: '0 4px 16px rgba(217,119,87,.45), 0 1px 4px rgba(0,0,0,.12)',
              animation: 'scrollBounce 1.6s ease-in-out infinite',
              color: '#fff',
            }}>
              <ArrowDown size={18} strokeWidth={2.5} />
            </span>
          </button>
        </HeroFade>
      )}

      {/* Meta row */}
      <HeroFade delay={0.4}>
        <div className="hero-meta" style={{
          display: 'flex',
          gap: '0',
          marginTop: '3rem',
          flexWrap: 'wrap',
          borderTop: '1px solid var(--line)',
          paddingTop: '1.5rem',
        }}>
          {[
            { label: 'Currently', value: 'QA × AI tooling', flex: false },
            { label: 'Based in', value: 'Chiang Mai, TH · UTC+7', flex: false },
            { label: 'AI stack', value: 'Claude · Gemini · Codex · MCP\nCrewAI · OpenClaw · Hermes · Paperclip', flex: true },
            { label: 'Open to', value: 'QA / GenAI engineering roles', flex: false },
          ].map(({ label, value, flex }, i, arr) => (
            <div key={label} style={{
              paddingRight: i < arr.length - 1 ? '2.5rem' : 0,
              marginRight: i < arr.length - 1 ? '2.5rem' : 0,
              borderRight: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
              paddingTop: '.25rem',
              paddingBottom: '.25rem',
              ...(flex ? { flex: 1, minWidth: 0 } : {}),
            }}>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '.65rem',
                letterSpacing: '.4px',
                textTransform: 'uppercase' as const,
                color: 'var(--grey)',
                marginBottom: '.3rem',
                opacity: .7,
              }}>
                {label}
              </span>
              <span style={{ fontSize: flex ? '.78rem' : '.84rem', color: 'var(--ink-2)', fontWeight: 500, lineHeight: 1.6 }}>
                {value.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </HeroFade>
    </section>
  )
}
