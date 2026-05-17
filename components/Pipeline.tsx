import { Map, LayoutGrid, Microscope, Hammer, ShieldCheck, Lock, Search, BookOpen, Plug, Terminal, Users, Boxes, Atom } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: <Map size={16} />,
    title: 'Plan',
    desc: 'Read the brief. Decompose into business-goal IDs. Draft user stories. Write Given/When/Then acceptance criteria.',
    artifact: 'BG-ID register + GWT stories',
    gate: 'BA sign-off',
    tools: [
      { icon: <Search size={11} />, label: 'Perplexity' },
      { icon: <BookOpen size={11} />, label: 'NotebookLM' },
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
    ],
  },
  {
    n: '02',
    icon: <LayoutGrid size={16} />,
    title: 'Organize',
    desc: 'Set up the skill manifest. Map each phase to a Claude skill. Define the 5 human gates. Wire MCP to GitHub + Notion.',
    artifact: 'Skill manifest + gate spec',
    gate: 'Manifest review',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { icon: <Plug size={11} />, label: 'MCP · Notion' },
      { img: 'https://cdn.simpleicons.org/github/6b6862', label: 'GitHub' },
    ],
  },
  {
    n: '03',
    icon: <Microscope size={16} />,
    title: 'Analyze',
    desc: 'The 5-tab QA widget runs across the project — Architecture, Data Flow, Skills, QA Gaps, Test Plan. Every gap rated Critical → Low.',
    artifact: 'Gap report · Critical → Low',
    gate: 'Plan approval',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { icon: <Terminal size={11} />, label: 'Codex' },
      { img: 'https://svgl.app/library/gemini.svg', label: 'Gemini' },
    ],
  },
  {
    n: '04',
    icon: <Hammer size={16} />,
    title: 'Create skill',
    desc: 'When analyze flags a missing capability, the pipeline prompts Claude to build that skill on the spot. New skills join the manifest.',
    artifact: 'New Claude skill',
    gate: 'Skill accepted',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { icon: <Users size={11} />, label: 'CrewAI' },
      { icon: <Boxes size={11} />, label: 'OpenCrew' },
      { icon: <Atom size={11} />, label: 'Hermes' },
    ],
  },
  {
    n: '05',
    icon: <ShieldCheck size={16} />,
    title: 'Cover gap',
    desc: 'Manual cases → Playwright .spec.ts → test healer classifies every failure. SHIP/HOLD verdict. Type-D failures preserved as the defect.',
    artifact: 'SHIP/HOLD verdict + PR',
    gate: 'Final call',
    tools: [
      { img: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
      { img: 'https://svgl.app/library/playwright.svg', label: 'Playwright' },
      { icon: <Users size={11} />, label: 'qa-retest' },
    ],
  },
]

export default function Pipeline() {
  return (
    <section className="wrap" id="pipeline">
      <div className="eyebrow">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="m12 22-4-13"/><path d="m12 22 4-13"/><path d="M2 9h20"/></svg>
        Module 1 · The Agentic QA Pipeline
      </div>
      <h2 className="sec-h">Plan → Organize → Analyze → Create → Cover</h2>
      <p className="sec-sub">
        Five verbs, five artifacts, five places AI does the heavy lifting and a human signs off. The same five steps
        run on every project in this portfolio. QA enters at the brief — not at the test case.
      </p>

      <div className="pipe">
        {steps.map((step) => (
          <div key={step.n} className="pipe-step">
            <div className="step-n">Step <b>{step.n}</b> · Verb</div>
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
              <Lock size={12} /> Gate · {step.gate}
            </div>
            <div className="step-tools">
              {step.tools.map((t, i) => (
                <span key={i}>
                  {t.img ? (
                    <img src={t.img} alt={t.label} style={{ width: 11, height: 11 }} />
                  ) : t.icon}
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pipe-stats">
        <div className="pipe-stat"><div className="stat-n">5</div><div className="stat-l">Pipeline steps</div></div>
        <div className="pipe-stat"><div className="stat-n">5</div><div className="stat-l">Human gates</div></div>
        <div className="pipe-stat"><div className="stat-n">20</div><div className="stat-l">Reusable Claude skills</div></div>
        <div className="pipe-stat"><div className="stat-n">5</div><div className="stat-l">Artifacts — one per step</div></div>
      </div>

      <p className="quote-note">
        Every step ends in an artifact, not a buzzword. That&apos;s the proof I built a pipeline — not a deck about one.
      </p>
    </section>
  )
}
