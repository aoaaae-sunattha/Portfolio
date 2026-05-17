'use client'

import { useRef, useState } from 'react'
import { Map, LayoutGrid, Microscope, Hammer, ShieldCheck, Lock, BookOpen, Plug, Users, Boxes, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { FadeUp } from './Animate'

const steps = [
  {
    n: '01', icon: <Map size={16} />, title: 'Plan',
    desc: 'Read the brief. Decompose into business-goal IDs. Draft user stories. Write Given/When/Then acceptance criteria.',
    artifact: 'BG-ID register + GWT stories', gate: 'BA sign-off',
    tools: [
      { img: 'https://svgl.app/library/perplexity.svg', label: 'Perplexity' },
      { icon: <BookOpen size={11} />, label: 'NotebookLM' },
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
    ],
  },
  {
    n: '02', icon: <LayoutGrid size={16} />, title: 'Organize',
    desc: 'Set up the skill manifest. Map each phase to a Claude skill. Define the 5 human gates. Wire MCP to GitHub + Notion.',
    artifact: 'Skill manifest + gate spec', gate: 'Manifest review',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { icon: <Plug size={11} />, label: 'MCP · Notion' },
      { img: '/github.svg', label: 'GitHub' },
    ],
  },
  {
    n: '03', icon: <Microscope size={16} />, title: 'Analyze',
    desc: 'The 5-tab QA widget runs across the project — Architecture, Data Flow, Skills, QA Gaps, Test Plan. Every gap rated Critical → Low.',
    artifact: 'Gap report · Critical → Low', gate: 'Plan approval',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { img: '/codex.svg', label: 'Codex' },
      { img: 'https://svgl.app/library/gemini.svg', label: 'Gemini' },
    ],
  },
  {
    n: '04', icon: <Hammer size={16} />, title: 'Create skill',
    desc: 'When analyze flags a missing capability, the pipeline prompts Claude to build that skill on the spot. New skills join the manifest.',
    artifact: 'New Claude skill', gate: 'Skill accepted',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { img: '/crewai.svg', label: 'CrewAI' },
      { icon: <Boxes size={11} />, label: 'OpenCrew' },
      { img: '/hermes.svg', label: 'Hermes' },
    ],
  },
  {
    n: '05', icon: <ShieldCheck size={16} />, title: 'Cover gap',
    desc: 'Manual cases → Playwright .spec.ts → test healer classifies every failure. SHIP/HOLD verdict. Type-D failures preserved as the defect.',
    artifact: 'SHIP/HOLD verdict + PR', gate: 'Final call',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { img: 'https://svgl.app/library/playwright.svg', label: 'Playwright' },
      { icon: <Users size={11} />, label: 'qa-retest' },
    ],
  },
]

export default function Pipeline() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  function syncEdges(swiper: SwiperType) {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className="wrap" id="pipeline">
      {/* Section header */}
      <FadeUp>
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="m12 22-4-13"/><path d="m12 22 4-13"/><path d="M2 9h20"/></svg>
            Module 1 · The Agentic QA Pipeline
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-1.2px',
            color: 'var(--ink)',
            margin: '0 0 .75rem',
            maxWidth: '28ch',
          }}>
            Five verbs. Five artifacts.{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 400 }}>Zero inherited test plans.</span>
          </h2>

          <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--grey)', maxWidth: '58ch', marginBottom: '2rem' }}>
            QA enters at the brief — not at the test case. The same five steps run on every project in this portfolio.
          </p>

          {/* Visual flow strip */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', rowGap: '.5rem' }}>
            {[
              { n: '01', label: 'Plan' }, { n: '02', label: 'Organize' }, { n: '03', label: 'Analyze' },
              { n: '04', label: 'Create' }, { n: '05', label: 'Cover' },
            ].map(({ n, label }, i) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <span style={{ color: 'var(--coral)', opacity: .45, fontSize: '.75rem', margin: '0 .5rem' }}>→</span>}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '.5rem',
                  padding: '.4rem .85rem',
                  background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 99,
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 600, color: 'var(--coral)', letterSpacing: '.3px' }}>{n}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '.82rem', fontWeight: 500, color: 'var(--ink)', letterSpacing: '-.2px' }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Carousel with fade edges + side arrows */}
      <FadeUp delay={0.15}>
        <div style={{ position: 'relative' }}>
          {/* Left fade */}
          <div className="carousel-fade-left" style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
            background: 'linear-gradient(to right, var(--bg), transparent)',
            zIndex: 10, pointerEvents: 'none',
            opacity: isBeginning ? 0 : 1,
            transition: 'opacity .3s ease',
          }} />
          {/* Right fade */}
          <div className="carousel-fade-right" style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
            background: 'linear-gradient(to left, var(--bg), transparent)',
            zIndex: 10, pointerEvents: 'none',
            opacity: isEnd ? 0 : 1,
            transition: 'opacity .3s ease',
          }} />
          {/* Left arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            style={{
              position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
              zIndex: 20, width: 36, height: 36, borderRadius: '50%',
              background: 'var(--card)', border: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--ink)',
              boxShadow: '0 2px 8px rgba(0,0,0,.08)',
              transition: 'border-color .15s, box-shadow .15s',
            }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = 'var(--coral-line)'; b.style.boxShadow = '0 2px 12px rgba(217,119,87,.2)' }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'var(--line)'; b.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)' }}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          {/* Right arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
              zIndex: 20, width: 36, height: 36, borderRadius: '50%',
              background: 'var(--card)', border: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--ink)',
              boxShadow: '0 2px 8px rgba(0,0,0,.08)',
              transition: 'border-color .15s, box-shadow .15s',
            }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = 'var(--coral-line)'; b.style.boxShadow = '0 2px 12px rgba(217,119,87,.2)' }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'var(--line)'; b.style.boxShadow = '0 2px 12px rgba(217,119,87,.2)' }}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper; syncEdges(swiper) }}
            onSlideChange={(swiper) => syncEdges(swiper)}
            slidesPerView={1}
            spaceBetween={16}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            style={{ alignItems: 'stretch' }}
            breakpoints={{
              520:  { slidesPerView: 1,   centeredSlides: true  },
              768:  { slidesPerView: 2,   centeredSlides: false, spaceBetween: 20 },
              1100: { slidesPerView: 2,   centeredSlides: false, spaceBetween: 24 },
            }}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.n} style={{ height: 'auto' }}>
                <div className="pipe-step" style={{ height: '100%' }}>
                  <div className="step-n">Step <b>{step.n}</b></div>
                  <div className="icon-row">
                    <div className="ic">{step.icon}</div>
                    <h4>{step.title}</h4>
                  </div>
                  <p>{step.desc}</p>
                  <div className="artifact">
                    <span className="k">Artifact</span>
                    {step.artifact}
                  </div>
                  <div className="gate">
                    <Lock size={11} /> {step.gate}
                  </div>
                  <div className="step-tools">
                    {step.tools.map((t, i) => (
                      <span key={i}>
                        {t.img ? <img src={t.img} alt={t.label} style={{ width: 11, height: 11, filter: t.img.includes('github') ? 'brightness(0)' : undefined }} /> : t.icon}
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="pipe-stats">
          <div className="pipe-stat"><div className="stat-n">5</div><div className="stat-l">Pipeline steps</div></div>
          <div className="pipe-stat"><div className="stat-n">5</div><div className="stat-l">Human gates</div></div>
          <div className="pipe-stat"><div className="stat-n">20</div><div className="stat-l">Reusable Claude skills</div></div>
          <div className="pipe-stat"><div className="stat-n">5</div><div className="stat-l">Artifacts — one per step</div></div>
        </div>
      </FadeUp>

      <FadeUp delay={0.25}>
        <p className="quote-note">
          Every step ends in an artifact, not a buzzword. That&apos;s the proof I built a pipeline — not a deck about one.
        </p>
      </FadeUp>
    </section>
  )
}
