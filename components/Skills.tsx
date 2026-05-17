import { FadeUp } from './Animate'

const columns = [
  {
    title: 'QA · Testing',
    items: [
      { text: 'Playwright', bold: true, suffix: '— E2E + atomic' },
      { text: 'Vitest', bold: true, suffix: '— unit tests' },
      { text: 'Page Object Model' },
      { text: 'Manual test design' },
      { text: 'Risk-based prioritization' },
      { text: 'Golden datasets · regression' },
      { text: 'Schema-contract testing' },
    ],
  },
  {
    title: 'AI · Models',
    items: [
      { text: 'Claude', bold: true, suffix: '— orchestrator' },
      { text: 'Gemini 2.5', bold: true, suffix: '— Pro & Flash' },
      { text: 'Codex — code reading' },
      { text: 'Hermes — open-weight eval' },
      { text: 'Prompt engineering' },
      { text: 'Intent classification' },
      { text: 'Cross-model evaluation' },
    ],
  },
  {
    title: 'Agentic · Orchestration',
    items: [
      { text: 'CrewAI', bold: true, suffix: '— multi-agent' },
      { text: 'OpenCrew — light agents' },
      { text: 'MCP', bold: true, suffix: '— tool bridge' },
      { text: 'Skill manifests · Claude' },
      { text: 'Self-auditing loops' },
      { text: 'Human-in-the-loop gates' },
    ],
  },
  {
    title: 'Stack · Backend',
    items: [
      { text: 'Node.js · ESM' },
      { text: 'Python' },
      { text: 'TypeScript' },
      { text: 'REST API design' },
      { text: 'Duffel · Binance · Telegram' },
      { text: 'SQLite · Postgres' },
    ],
  },
  {
    title: 'Stack · Frontend',
    items: [
      { text: 'React 19' },
      { text: 'Zustand' },
      { text: 'Tailwind' },
      { text: 'HTML · CSS · vanilla JS' },
    ],
  },
  {
    title: 'Process · Ops',
    items: [
      { text: 'GitHub Actions', bold: true, suffix: '— CI/CD' },
      { text: 'BG-ID traceability' },
      { text: 'Given/When/Then ACs' },
      { text: 'SHIP/HOLD verdict format' },
      { text: 'Notion · PM/BA artifacts' },
      { text: 'Sprint grooming · AC analysis' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <FadeUp>
        <div className="eyebrow">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          Skills &amp; tools
        </div>
        <h2 className="sec-h">What I reach for</h2>
        <p className="sec-sub">
          Every tool here starts the same way — use AI to digest the docs, understand the architecture, plan the approach, then build with intention.
        </p>
      </FadeUp>

      <div className="skills-grid">
        {columns.map((col, i) => (
          <FadeUp key={col.title} delay={Math.min(i * 0.07, 0.28)}>
            <div className="skill-col">
              <h5>{col.title}</h5>
              <ul>
                {col.items.map((item, j) => (
                  <li key={j}>
                    {item.bold ? (
                      <><b>{item.text}</b>{item.suffix ? ` ${item.suffix}` : ''}</>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
