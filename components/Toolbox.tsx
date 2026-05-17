import { BookOpen, Plug } from 'lucide-react'
import { FadeUp } from './Animate'

const tools = [
  {
    phase: 'Step 01', img: 'https://svgl.app/library/perplexity.svg', name: 'Perplexity', role: 'Research',
    desc: 'First stop for any unfamiliar domain. Pulls docs, regulations, fintech edge cases, and recent CVEs into the brief before BG-IDs are written.',
    uses: 'domain research · regulation · prior art',
  },
  {
    phase: 'Step 01', icon: <BookOpen size={22} />, name: 'NotebookLM', role: 'Planning · Synthesis',
    desc: "Load PRD, chat threads, Perplexity findings — then ask the corpus what's missing. Surfaces orphan acceptance criteria before they reach dev.",
    uses: 'source synthesis · gap-finding · stakeholder Q&A',
  },
  {
    phase: 'Steps 02–05', img: 'https://svgl.app/library/claude-ai-icon.svg', name: 'Claude', role: 'Orchestrator · Primary',
    desc: 'My main tool for application planning and QA. Drives the full pipeline — writes test plans, generates Playwright specs, classifies test failures, and drafts the SHIP/HOLD report. The primary brain behind every project.',
    uses: 'app planning · QA pipeline · skill execution · code generation',
  },
  {
    phase: 'Runtime + Eval', img: 'https://svgl.app/library/gemini.svg', name: 'Gemini 2.5', role: 'Production Model',
    desc: "Used two ways: as a code generation partner to help Claude build faster, and as the LLM backend via Google API key for production inference inside shipped products.",
    uses: 'code generation · Google API · production inference · cross-model eval',
  },
  {
    phase: 'Step 03', img: '/codex.svg', name: 'Codex', role: 'Code Generator · LLM',
    desc: 'Code generation partner alongside Claude and Gemini. Also serves as the assigned LLM for specific agents inside Paperclip — each agent is configured to use whichever model fits: Claude, Gemini, or Codex.',
    uses: 'code generation · agent LLM · Paperclip integration · repo scaffolding',
  },
  {
    phase: 'Steps 04–05', img: '/crewai.svg', name: 'CrewAI', role: 'Agent Orchestration',
    desc: 'Powers the agentic QA flow — autonomous agents run the pipeline end-to-end with human-gate checkpoints at steps that need review before proceeding. Orchestrates multi-agent coordination so each agent knows its role and when to hand off.',
    uses: 'agent orchestration · agentic flow · human-in-the-loop · PR-diff retesting',
  },
  {
    phase: 'Experiment', img: '/openclaw.svg', name: 'OpenClaw', role: 'Local AI Assistant',
    desc: 'Local-first AI assistant, no cloud required. Built a Flight Tracker with it — checks the cheapest flights daily and sends a Telegram notification automatically. Also used for multi-model experimentation and building custom skills outside the main pipeline.',
    uses: 'local automation · flight tracker · Telegram notifications · custom skills',
  },
  {
    phase: 'Offline Eval', img: '/hermes.svg', name: 'Hermes', role: 'Self-Improving Agent',
    desc: 'Powers the E.ON Signal project — fetches global market data (Wall Street, Oil, Gold, USD) and forecasts a crypto buy/sell/hold signal with a confidence % and reasoning. Connected to Obsidian as a knowledge wiki; evaluates its own forecast accuracy daily and learns why it was right or wrong.',
    uses: 'crypto signal · market analysis · forecast eval · Obsidian · self-improvement',
  },
  {
    phase: 'Steps 02–05', icon: <Plug size={22} />, name: 'MCP', role: 'Tool Bridge',
    desc: 'How Claude reaches the outside world — Notion (PM/BA artifacts), GitHub (PRs and diffs), filesystem (skill manifest). The connective tissue.',
    uses: 'Notion · GitHub · FS connectors',
  },
]

export default function Toolbox() {
  return (
    <section className="wrap" id="toolbox">
      <FadeUp>
        <div className="eyebrow">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/></svg>
          Module 2 · AI Toolbox
        </div>
        <h2 className="sec-h">The toolkit · context-driven</h2>
        <p className="sec-sub">
          I pick what fits the project — each card shows <em>why this tool, and where it runs in my workflow.</em>
        </p>
      </FadeUp>

      <div className="tbox">
        {tools.map((tool, i) => (
          <FadeUp key={tool.name} delay={Math.min(i * 0.06, 0.3)}>
            <div className="tool" style={{ height: '100%' }}>

              <div className="tool-head">
                <div className="tool-logo">
                  {tool.img ? (
                    <img src={tool.img} alt={tool.name} style={{ width: 24, height: 24 }} />
                  ) : (
                    <span style={{ color: 'var(--ink-2)' }}>{tool.icon}</span>
                  )}
                </div>
                <div>
                  <div className="tool-nm">{tool.name}</div>
                  <div className="tool-role">{tool.role}</div>
                </div>
              </div>
              <p>{tool.desc}</p>
              <div className="tool-uses"><b>Used for ·</b> {tool.uses}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
