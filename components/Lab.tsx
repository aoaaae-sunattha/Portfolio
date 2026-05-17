const items = [
  {
    title: 'AEON — Multi-agent forecast system',
    desc: '7-agent CrewAI system that fetches Binance market data, generates 24-hour forecasts, and runs a built-in QA Auditor that compares predictions against real outcomes. Self-evaluating loop.',
    tags: ['CrewAI', 'Gemini 2.5', 'Python', 'Binance API', 'Self-audit'],
  },
  {
    title: 'Flight Tracker — API resilience QA',
    desc: 'Self-directed QA exercise: 14 test cases covering API retry behavior, date-safety edge cases, and error reporting. Documented as TC-01 → TC-14 with reproducible test data.',
    tags: ['API testing', 'Retry logic', 'Error states', 'Test cases'],
  },
  {
    title: 'Prompt Compiler — Modular LLM prompt builder',
    desc: 'Node.js ESM CLI that assembles, validates, and outputs system prompts for multiple LLM targets from a single source of truth. Modular blocks compiled per target.',
    tags: ['Node.js ESM', 'Prompt eng', 'CLI', 'Multi-target'],
  },
  {
    title: 'Golden Dataset Toolkit',
    desc: "Small framework I use to manage golden test datasets for LLM features. Pulls from Clotilde's intent regression suite. Negation + anaphora cases included as policy.",
    tags: ['Regression', 'Eval', 'Negation tests', 'Anaphora'],
  },
]

export default function Lab() {
  return (
    <section className="wrap" id="lab">
      <div className="eyebrow">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0-3 3m3-3 3 3m5-14v11m0 0-3 3m3-3 3 3M3 9h18"/></svg>
        Lab · Experiments
      </div>
      <h2 className="sec-h">Self-directed work</h2>
      <p className="sec-sub">
        Smaller projects exploring AI agent patterns, fintech logic, and automation. Not flagship work — but each one fed a skill into the manifest.
      </p>

      <div className="lab-grid">
        {items.map((item) => (
          <div key={item.title} className="lab-item">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <div className="lab-tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
