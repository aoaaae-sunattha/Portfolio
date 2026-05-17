'use client'

import { GitBranch, Layers, Mail, ArrowDown } from 'lucide-react'
import { HeroFade } from './Animate'

const tools = [
  { name: 'Claude', role: 'orchestrator' },
  { name: 'MCP', role: 'Notion · GitHub bridge' },
  { name: 'CrewAI', role: 'agent workers' },
  { name: 'Perplexity', role: 'upstream research' },
]

const artifacts = ['Plan', 'Skill manifest', 'Gap report', 'Generated skill', 'SHIP / HOLD']

export default function Hero() {
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

      {/* H2 */}
      <HeroFade delay={0.2}>
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          lineHeight: 1.5,
          color: 'var(--grey)',
          marginBottom: '2.25rem',
          maxWidth: '48ch',
          letterSpacing: '-.2px',
        }}>
          I test the things I build, and I build the things I want to test.{' '}
          The pipeline below is the spine.
        </h2>
      </HeroFade>

      {/* Pitch card */}
      <HeroFade delay={0.3}>
        <div className="hero-pitch" style={{
          background: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 16,
          padding: '1.5rem 1.75rem',
          maxWidth: 720,
          marginBottom: '2.25rem',
          boxShadow: '0 1px 3px rgba(0,0,0,.04)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem 2rem',
        }}>
          {/* Left — tool chain */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '.67rem',
              letterSpacing: '.5px',
              textTransform: 'uppercase' as const,
              color: 'var(--coral)',
              fontWeight: 500,
              margin: '0 0 .85rem',
            }}>
              Pipeline stack
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
              {tools.map(({ name, role }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)', minWidth: '7ch' }}>
                    {name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '.82rem', color: 'var(--grey)', lineHeight: 1.4 }}>
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — artifacts */}
          <div className="hero-pitch-right" style={{ borderLeft: '1px solid var(--line)', paddingLeft: '1.75rem' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '.67rem',
              letterSpacing: '.5px',
              textTransform: 'uppercase' as const,
              color: 'var(--coral)',
              fontWeight: 500,
              margin: '0 0 .85rem',
            }}>
              5 outputs, every run
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
              {artifacts.map((a, i) => (
                <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', color: 'var(--coral)', opacity: .6, minWidth: '1.4ch' }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: '.85rem', color: 'var(--ink-2)', lineHeight: 1.4 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroFade>

      {/* CTAs */}
      <HeroFade delay={0.4}>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#pipeline" className="btn fill"><GitBranch size={16} /> See the pipeline</a>
          <a href="#projects" className="btn ghost"><Layers size={16} /> Project deep dives</a>
          <a href="#contact" className="btn ghost"><Mail size={16} /> Get in touch</a>
        </div>
      </HeroFade>

      {/* Scroll indicator — absolute bottom right */}
      <HeroFade delay={0.7} className="hero-scroll" style={{ position: 'absolute', bottom: '4.5rem', right: '0rem' }}>
        <a href="#pipeline" style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.35rem',
          textDecoration: 'none',
          opacity: .45,
          transition: 'opacity .2s',
        }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8'}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.45'}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '.75rem',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
          }}>Scroll</span>
          <span style={{ animation: 'scrollBounce 1.6s ease-in-out infinite', color: 'var(--ink-2)', display: 'flex' }}>
            <ArrowDown size={15} strokeWidth={1.8} />
          </span>
        </a>
      </HeroFade>

      {/* Meta row */}
      <HeroFade delay={0.5}>
        <div className="hero-meta" style={{
          display: 'flex',
          gap: '0',
          marginTop: '3rem',
          flexWrap: 'wrap',
          borderTop: '1px solid var(--line)',
          paddingTop: '1.5rem',
        }}>
          {[
            { label: 'Currently', value: 'QA × AI tooling' },
            { label: 'Based in', value: 'Bangkok, TH · UTC+7' },
            { label: 'Stack', value: 'Claude · Playwright · TypeScript · Python' },
            { label: 'Open to', value: 'QA / GenAI engineering roles' },
          ].map(({ label, value }, i, arr) => (
            <div key={label} style={{
              paddingRight: i < arr.length - 1 ? '2.5rem' : 0,
              marginRight: i < arr.length - 1 ? '2.5rem' : 0,
              borderRight: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
              paddingTop: '.25rem',
              paddingBottom: '.25rem',
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
              <span style={{ fontSize: '.84rem', color: 'var(--ink-2)', fontWeight: 500 }}>{value}</span>
            </div>
          ))}
        </div>
      </HeroFade>
    </section>
  )
}
