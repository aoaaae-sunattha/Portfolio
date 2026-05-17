const steps = [
  { n: '01', title: 'Research', desc: "Perplexity for domain, regulation, prior art. Don't build in an empty room." },
  { n: '02', title: 'Synthesize', desc: 'NotebookLM eats the PRD, threads, and findings. Surfaces the gaps before dev.' },
  { n: '03', title: 'Decompose', desc: 'Claude turns the brief into BG-IDs, stories, and Given/When/Then ACs.' },
  { n: '04', title: 'Build', desc: 'Codex + Claude write the feature. MCP keeps the manifest and PRs in sync.' },
  { n: '05', title: 'Test', desc: 'Manual cases → Playwright via Claude. Healer classifies failures into 4 types.' },
  { n: '06', title: 'Verdict', desc: 'SHIP or HOLD, signed by a human. Type-D failures preserved as the report.' },
]

export default function Workflow() {
  return (
    <section className="wrap" id="workflow">
      <div className="eyebrow">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-7.5-2.1 2.1M6.5 17.5l2.1-2.1m0-8.9L6.5 6.5M17.5 17.5l-2.1-2.1"/></svg>
        Process
      </div>
      <h2 className="sec-h">How I build with AI</h2>
      <p className="sec-sub">Not a vibe-coder. AI is in every step — including the testing.</p>

      <div className="flow-grid">
        {steps.map((step) => (
          <div key={step.n} className="flow-step">
            <div className="flow-n">{step.n}</div>
            <h5>{step.title}</h5>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
