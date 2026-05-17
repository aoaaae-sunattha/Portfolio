import { Search, BookOpen, Terminal, Users, Boxes, Atom, Plug } from 'lucide-react'
import { FadeUp } from './Animate'

const tools = [
  {
    phase: 'Step 01', icon: <Search size={22} />, name: 'Perplexity', role: 'Research',
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
    desc: 'Runs the 20-skill pipeline. Writes test plans, generates Playwright specs, classifies test failures, drafts the SHIP/HOLD report. Owns the manifest.',
    uses: 'orchestration · skill execution · code generation',
  },
  {
    phase: 'Runtime + Eval', img: 'https://svgl.app/library/gemini.svg', name: 'Gemini 2.5', role: 'Production Model',
    desc: "Powers AI features inside products I ship (Clotilde intent + admin). Also dual-checks Claude's test plans — two models, one verdict.",
    uses: 'production inference · cross-model eval',
  },
  {
    phase: 'Step 03', icon: <Terminal size={22} />, name: 'Codex', role: 'Code Reader',
    desc: 'Walks the repo during analyze. Maps components → skills, flags untested files, drafts initial unit tests from function signatures.',
    uses: 'repo walk · coverage map · scaffolding',
  },
  {
    phase: 'Steps 04–05', icon: <Users size={22} />, name: 'CrewAI', role: 'Multi-Agent Runner',
    desc: 'Two pipelines: qa-challenger writes specs from a ticket; qa-retest reads a PR diff and targets the exact code that changed.',
    uses: 'agent orchestration · PR-diff retesting',
  },
  {
    phase: 'Step 04', icon: <Boxes size={22} />, name: 'OpenCrew', role: 'Lightweight Agents',
    desc: 'Used when CrewAI is overkill — quick one-shot agent runs for ad-hoc skill experiments before they earn a place in the manifest.',
    uses: 'rapid agent prototyping · throwaway skills',
  },
  {
    phase: 'Step 04 · Eval', icon: <Atom size={22} />, name: 'Hermes', role: 'Open-Weight Model',
    desc: 'Local / open-weight model used to evaluate prompts offline and stress-test new skills without burning Claude quota. Cheap iteration.',
    uses: 'prompt eval · offline regression · cost control',
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
        <h2 className="sec-h">9 tools · one job each</h2>
        <p className="sec-sub">
          Each card answers one question: <em>why this tool, and where in my workflow does it actually run?</em> Don&apos;t list a tool you don&apos;t use.
        </p>
      </FadeUp>

      <div className="tbox">
        {tools.map((tool, i) => (
          <FadeUp key={tool.name} delay={Math.min(i * 0.06, 0.3)}>
            <div className="tool" style={{ height: '100%' }}>
              <span className="tool-phase">{tool.phase}</span>
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
