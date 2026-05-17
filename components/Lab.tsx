'use client'
import { useRef, useState, useEffect } from 'react'
import { FadeUp } from './Animate'

const items = [
  {
    title: 'AEON Lite — Crypto signal & self-learning forecast system',
    desc: 'Hermes-orchestrated agent that runs twice daily, fetching technical indicators (RSI, EMA, ATR via CCXT/Binance) and macro sentiment (Tavily + Fear & Greed Index) to produce LONG/SHORT/HOLD signals with confidence scores for BTC, ETH, and XRP. A Claude-powered Trader Agent generates the forecast; a QA Auditor evaluates outcomes against real prices and writes lessons back into Obsidian. Each new cycle reads prior lessons before deciding — a self-correcting feedback loop.',
    tags: ['Hermes', 'Node.js', 'Claude', 'Gemini 2.5 Flash', 'Binance API', 'Obsidian', 'Self-audit'],
  },
  {
    title: 'Flight Deal Finder — Autonomous Price Watch Agent',
    desc: 'OpenClaw agent that runs on a daily schedule, monitors user-configured flight watches (route, date, budget), and sends proactive Telegram alerts when prices match criteria — no user prompting required. The LLM acts as a travel advisor, reasoning over price trends and giving the user enough context to decide when to book. QA scope covers 20 test cases across scheduling, threshold detection, input validation, API error states, and advisory quality.',
    tags: ['OpenClaw', 'Claude AI', 'Duffel API', 'Telegram Bot', 'Agent scheduling', 'Node.js'],
  },
  {
    title: 'Prompt Compiler — Modular LLM prompt builder',
    desc: 'Takes structured input via a wizard or CLI flags, runs it through a validation and enrichment pipeline, and compiles a finished system prompt in the native format of the chosen LLM target. Supports Claude, Gemini, Codex, AI Agent, and QA-oriented Project CT — no API calls, compile-time only.',
    tags: ['Node.js ESM', 'Prompt eng', 'CLI', 'Multi-target'],
  },
]

// Pad to even count so 2-column pages are always full
const displayItems = items.length % 2 !== 0 ? [...items, items[0]] : items
const pageCount = displayItems.length / 2

export default function Lab() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activePage, setActivePage] = useState(0)

  function goTo(page: number) {
    const slider = sliderRef.current
    if (!slider) return
    const wrapped = ((page % pageCount) + pageCount) % pageCount
    slider.scrollTo({ left: wrapped * slider.offsetWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    const onScroll = () => {
      const page = Math.round(slider.scrollLeft / slider.offsetWidth)
      setActivePage(page)
    }
    slider.addEventListener('scroll', onScroll, { passive: true })
    return () => slider.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="wrap" id="lab">
      <FadeUp>
        <div className="eyebrow">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0-3 3m3-3 3 3m5-14v11m0 0-3 3m3-3 3 3M3 9h18"/></svg>
          Lab · Experiments
        </div>
        <h2 className="sec-h">Self-directed work</h2>
        <p className="sec-sub">
          Smaller projects exploring AI agent patterns, fintech logic, and automation. Not flagship work — but each one fed a skill into the manifest.
        </p>
      </FadeUp>

      <div className="lab-slider-wrap">
        <button className="lab-arrow lab-arrow--prev" onClick={() => goTo(activePage - 1)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div className="lab-slider" ref={sliderRef}>
          {displayItems.map((item, i) => (
            <div className="lab-slide" key={`${item.title}-${i}`}>
              <div className="lab-item">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="lab-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="lab-arrow lab-arrow--next" onClick={() => goTo(activePage + 1)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div className="lab-dots">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button key={i} className={`lab-dot${activePage === i ? ' active' : ''}`} onClick={() => goTo(i)} aria-label={`Go to page ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}
