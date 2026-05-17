import { Lightbulb, Microscope, ShieldCheck, Cpu, FileText, BookOpen, Plug } from 'lucide-react'
import { VideoModalTrigger } from '@/components/VideoModal'
import ImageLightbox from '@/components/ImageLightbox'
import { FadeUp } from './Animate'

function AiEntry({ img, icon, name, forText }: { img?: string; icon?: React.ReactNode; name: string; forText: string }) {
  return (
    <div className="ai">
      <div className="ai-ico">
        {img ? <img src={img} alt={name} /> : icon}
      </div>
      <div>
        <span className="ai-nm">{name}</span>
        <span className="ai-for">{forText}</span>
      </div>
    </div>
  )
}

function TpExchangesShots() {
  return (
    <div className="shot-row">
      <ImageLightbox src="/tp-exchanges-demo.png" alt="tp-exchanges screenshot 1" />
      <ImageLightbox src="/tp-exchanges-demo-2.png" alt="tp-exchanges screenshot 2" />
    </div>
  )
}

export default function Projects() {
  return (
    <section className="wrap" id="projects">
      <FadeUp>
        <div className="eyebrow">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          Module 3 · Per-project deep dives
        </div>
        <h2 className="sec-h">Project deep dives.<br />Case studies.</h2>
        <p className="sec-sub">
          Projects I built to experiment with ideas — each one taken through analysis, planning, development, and a full QA cycle.
        </p>
      </FadeUp>

      <div className="pdive">

        {/* 01 QA FORGE */}
        <FadeUp><article className="pcard">
          <div className="pcard-head">
            <div className="pcard-idx">01</div>
            <div>
              <div className="pcard-ttl">QA Forge — Agentic QA Pipeline</div>
              <div className="pcard-tag">flagship · v3.0 · 20 Claude skills · 5 human gates</div>
            </div>
          </div>
          <div className="pcard-lede">
            <b>Premise.</b> Most QA engineers inherit a process. I&apos;m designing one — a repeatable, AI-augmented system that any QA engineer can run.
            The pipeline writes the test plan, the healer fixes broken selectors, the report writes itself. The QA engineer owns the strategy, edge cases, and acceptance criteria. That part doesn&apos;t automate.
          </div>
          <div className="pcard-cols-2">
            <div className="pcol">
              <div className="pcol-lbl"><Lightbulb size={14} /> Proposed</div>
              <ul>
                <li>End-to-end pipeline: <b>CEO brief → BG-IDs → PM stories → BA review → QA plan → manual tests → Playwright → SHIP/HOLD → PR</b>.</li>
                <li>5 hard-stop human gates — QA enters at the brief, not the test case.</li>
                <li>Every test must trace to a BG-ID. Orphan ACs escalated, never silently passed.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Microscope size={14} /> Analyze</div>
              <ul>
                <li><b>5-tab live widget</b> — Architecture · Data Flow · Skills · QA Gaps (Critical → Low) · Test Plan.</li>
                <li>Maps every component to a Claude skill; flags missing skills.</li>
                <li>Quality gate: 5 yes/no questions, all must be YES before any test is written.</li>
              </ul>
            </div>
          </div>
          <div className="pcard-cols-2">
            <div className="pcol">
              <div className="pcol-lbl"><ShieldCheck size={14} /> QA Process</div>
              <ul>
                <li><b>Phase 0</b> CEO-BA-Dev — discovery, BG-IDs, GWT acceptance criteria.</li>
                <li><b>Phase 1</b> BA-QA — 5-tab analysis + Master Plan.</li>
                <li><b>Phase 2</b> Execution — manual cases → Playwright → <b>test healer</b> (4 failure types) → SHIP/HOLD verdict.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Cpu size={14} /> AI Stack</div>
              <div className="ai-list">
                <AiEntry img="https://svgl.app/library/claude-ai-icon.svg" name="Claude" forText="orchestrates 20 skills · plans · classifies" />
                <AiEntry img="https://svgl.app/library/gemini.svg" name="Gemini" forText="code generation · cross-model eval" />
                <AiEntry img="https://svgl.app/library/perplexity.svg" name="Perplexity" forText="research before brief decomposition" />
                <AiEntry icon={<BookOpen size={14} />} name="NotebookLM" forText="PRD synthesis · Q&A" />
              </div>
            </div>
          </div>
          <div className="pcard-foot">
            <div className="pcard-note">This pipeline runs across all projects in this portfolio · Phase docs on Notion</div>
            <div className="pcard-links">
              <a className="chip" href="https://www.notion.so/Phase-0-CEO-BA-Dev-Discovery-Requirements-362dee0fbb3e8046a3a4c22962b7fc39" target="_blank" rel="noopener noreferrer"><FileText size={14} /> Phase 0</a>
              <a className="chip" href="https://www.notion.so/Phase-1-BA-QA-Analysis-Planning-362dee0fbb3e807f8a41f706cdff6c02" target="_blank" rel="noopener noreferrer"><FileText size={14} /> Phase 1</a>
              <a className="chip" href="https://www.notion.so/Phase-2-Execution-Test-Deliver-362dee0fbb3e80ce9b00c5790d040a22" target="_blank" rel="noopener noreferrer"><FileText size={14} /> Phase 2</a>
            </div>
          </div>
        </article></FadeUp>

        {/* 02 CLOTILDE */}
        <FadeUp delay={0.05}><article className="pcard">
          <div className="pcard-head">
            <div className="pcard-idx">02</div>
            <div>
              <div className="pcard-ttl">Clotilde — AI Corporate Travel Assistant</div>
              <div className="pcard-tag">v3.0 · Telegram bot · live flights via Duffel</div>
            </div>
          </div>
          <div className="pcard-lede">
            <b>Premise.</b> A natural-language corporate travel assistant that searches live flights, enforces role-based company policy,
            routes out-of-policy bookings through a real approval workflow, and notifies travelers at every step.
          </div>
          <div className="pcard-cols">
            <div className="pcol">
              <div className="pcol-lbl"><Lightbulb size={14} /> Proposed</div>
              <ul>
                <li><b>4 employee role tiers</b> (Ops/Staff · Manager · Director · VP/C-Suite) → cabin class by role (Economy vs Business) + hotel budget caps by city.</li>
                <li>Full out-of-policy approval workflow with live Approve/Reject buttons on Telegram.</li>
                <li>17 traveler notifications across the entire travel lifecycle.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Microscope size={14} /> Analyze</div>
              <ul>
                <li>Policy file as single source of truth — shared by agent, inventory, and compliance gate.</li>
                <li>Agentic tool dispatch = highest regression risk → built a <b>15-case golden dataset</b>.</li>
                <li>Surface area: bot UI ↔ Duffel API ↔ policy engine ↔ approval workflow.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><ShieldCheck size={14} /> QA Process</div>
              <ul>
                <li>Golden-dataset regression on agentic tool dispatch — 15 cases, all pass.</li>
                <li>End-to-end: search → policy check → OOP justification → manager approval → PNR.</li>
                <li>Natural-language admin console tested on real instructions.</li>
                <li>5 AI tools · 4 role levels · 17 notifications — every path covered.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Cpu size={14} /> AI Stack</div>
              <div className="ai-list">
                <AiEntry img="https://svgl.app/library/gemini.svg" name="Gemini 2.5 Pro" forText="agentic decision-making · function calling · production" />
                <AiEntry img="https://svgl.app/library/gemini.svg" name="Gemini 2.5 Flash" forText="admin NL → action resolver" />
                <AiEntry img="https://svgl.app/library/claude-ai-icon.svg" name="Claude" forText="build · test plan · golden dataset" />
                <AiEntry img="https://svgl.app/library/telegram.svg" name="Telegram + Duffel" forText="runtime · live flight inventory" />
              </div>
            </div>
          </div>
          <div className="pcard-foot">
            <div className="pcard-note">30-sec demo · QA Notion · slide presentation available</div>
            <div className="pcard-links">
              <a className="chip" href="https://www.notion.so/Clotilde-v3-0-360dee0fbb3e806b9fe0f677169a2e26" target="_blank" rel="noopener noreferrer"><FileText size={14} /> QA Notion</a>
              <a className="chip" href="https://docs.google.com/presentation/d/1ZlNVMXSrT9uLDg-hExS_xZXgZrdCuot8XqvaqCFgCEQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><FileText size={14} /> Slides</a>
              <VideoModalTrigger src="/clotilde-demo.mp4" label="Demo" />
            </div>
          </div>
        </article></FadeUp>

        {/* 03 KODA */}
        <FadeUp delay={0.05}><article className="pcard">
          <div className="pcard-head">
            <div className="pcard-idx">03</div>
            <div>
              <div className="pcard-ttl">KODA — BNPL Fintech Build &amp; QA</div>
              <div className="pcard-tag">169 tests · 76 E2E specs · 3-gate CI</div>
            </div>
          </div>
          <div className="pcard-lede">
            <b>Premise.</b> A Buy Now Pay Later app, built from scratch, then put through a full QA lifecycle on real fintech business logic.
            Fees 0%–23.38% across 4–24 month terms. 2.5% merchant commission. Bugs here aren&apos;t UX issues — they&apos;re financial and compliance risks.
          </div>
          <div className="pcard-cols">
            <div className="pcol">
              <div className="pcol-lbl"><Lightbulb size={14} /> Proposed</div>
              <ul>
                <li>Build working BNPL: cards, KYC, credit limit, fee formula, refund engine, merchant payout.</li>
                <li>Design QA around <b>real business risk</b>, not feature coverage.</li>
                <li>Atomic test design — 1 test per file — for fast failure isolation.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Microscope size={14} /> Analyze</div>
              <ul>
                <li><b>8 personas</b>: active · pre-KYC · overdue-locked · declined card · credit-maxed · power user · merchant.</li>
                <li>P0 surfaces: auth · checkout · KYC gate · credit limit · refund engine.</li>
                <li>Fee formula verified across all 7 term configurations.</li>
                <li>Backward refund allocation rule (last installment first).</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><ShieldCheck size={14} /> QA Process</div>
              <ul>
                <li><b>76 Playwright E2E specs</b> across Auth · Checkout · Risk · Refund · Payments · Credit.</li>
                <li><b>93 unit tests</b> for store, fee formula, guards, refund, merchant payout.</li>
                <li>Page Object Model · tagged @smoke @regression @auth @checkout @risk @credit.</li>
                <li><b>3-gate CI</b>: ESLint+TS → Vitest → Playwright → PR comment + report.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Cpu size={14} /> AI Stack</div>
              <div className="ai-list">
                <AiEntry img="https://svgl.app/library/perplexity.svg" name="Perplexity" forText="BNPL regulation · fee disclosure" />
                <AiEntry img="https://svgl.app/library/claude-ai-icon.svg" name="Claude" forText="test design · personas · healer" />
                <AiEntry img="/codex.svg" name="Codex" forText="component scan · unit scaffolding" />
                <AiEntry icon={<Plug size={14} />} name="MCP · GitHub" forText="Actions wiring · PR posts" />
              </div>
            </div>
          </div>
          <div className="pcard-foot">
            <div className="pcard-note">Latest CI run: 172 parallel executions · 453s duration</div>
            <div className="pcard-links">
              <a className="chip" href="https://github.com/aoaaae-sunattha" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="GitHub" className="icon-mono" style={{ width: 14, height: 14 }} /> GitHub</a>
            </div>
          </div>
        </article></FadeUp>

        {/* 04 CREWAI QA AGENT */}
        <FadeUp delay={0.05}><article className="pcard">
          <div className="pcard-head">
            <div className="pcard-idx">04</div>
            <div>
              <div className="pcard-ttl">CrewAI QA Agent — Two Pipelines, Six Agents</div>
              <div className="pcard-tag">OSS · qa-challenger + qa-retest · project-agnostic</div>
            </div>
          </div>
          <div className="pcard-lede">
            <b>Premise.</b> Two completely independent CrewAI pipelines. <code style={{ fontFamily: 'var(--font-mono)', fontSize: '.9em' }}>qa-challenger</code> turns a vague feature ticket
            into a user story, test plan, manual cases, and Playwright scripts. <code style={{ fontFamily: 'var(--font-mono)', fontSize: '.9em' }}>qa-retest</code> reads a real GitHub PR diff
            and generates targeted retest cases. Runs on any codebase via shell alias.
          </div>
          <div className="pcard-cols">
            <div className="pcol">
              <div className="pcol-lbl"><Lightbulb size={14} /> Proposed</div>
              <ul>
                <li>Two flows, two agent topologies — don&apos;t try to make one pipeline do both.</li>
                <li>Pipeline 1 (challenger): ticket → story → plan → cases → <code style={{ fontFamily: 'var(--font-mono)', fontSize: '.85em' }}>.spec.ts</code>.</li>
                <li>Pipeline 2 (retest): bug + PR diff → targeted retest cases.</li>
                <li>Human review gates between every agent handoff.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Microscope size={14} /> Analyze</div>
              <ul>
                <li>PR-diff reading: file context + change classification + risk scoring.</li>
                <li>Ticket-to-spec: requirements analysis + GWT generation + scenario coverage.</li>
                <li>Project-agnostic: agents must not assume a specific codebase shape.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><ShieldCheck size={14} /> QA Process</div>
              <ul>
                <li><b>6 agents</b> total · 3 per pipeline.</li>
                <li>Outputs: user stories · test plans · manual cases · Playwright specs.</li>
                <li>Self-auditing: each agent&apos;s output is reviewed by the next.</li>
                <li>Drop-in via shell alias on any repo.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Cpu size={14} /> AI Stack</div>
              <div className="ai-list">
                <AiEntry img="/crewai.svg" name="CrewAI" forText="multi-agent · both pipelines" />
                <AiEntry img="https://svgl.app/library/gemini.svg" name="Gemini 2.5 Pro" forText="primary model · all 6 agents" />
                <AiEntry icon={<Plug size={14} />} name="MCP · GitHub" forText="PR diff · file context" />
                <AiEntry img="https://svgl.app/library/python.svg" name="Python + Playwright" forText="generated spec runtime" />
              </div>
            </div>
          </div>
          <div className="pcard-foot">
            <div className="pcard-note">Open source · drop-in on any codebase</div>
            <div className="pcard-links">
              <a className="chip" href="https://github.com/aoaaae-sunattha" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="GitHub" className="icon-mono" style={{ width: 14, height: 14 }} /> GitHub</a>
            </div>
          </div>
        </article></FadeUp>

        {/* 05 TP-EXCHANGES */}
        <FadeUp delay={0.05}><article className="pcard">
          <div className="pcard-head">
            <div className="pcard-idx">05</div>
            <div>
              <div className="pcard-ttl">tp-exchanges — Schema-Contract API QA</div>
              <div className="pcard-tag">API · 20–30 exchange backends · production</div>
            </div>
          </div>
          <div className="pcard-lede">
            <b>Premise.</b> An exchange-aggregator API that fans out to 20–30 backends. The product breaks when one of them silently changes its response shape.
            The QA challenge is detecting subtle schema drift — not testing features.
          </div>
          <div className="pcard-cols">
            <div className="pcol">
              <div className="pcol-lbl"><Lightbulb size={14} /> Proposed</div>
              <ul>
                <li>Schema-contract validation across every exchange backend, on every push.</li>
                <li>Treat upstream APIs as untrusted — fields disappear, types flip.</li>
                <li>Production-environment exposure on every CI run.</li>
              </ul>
              <TpExchangesShots />
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Microscope size={14} /> Analyze</div>
              <ul>
                <li>Identified schema parity as the highest-risk failure mode.</li>
                <li>Catalogued response structures; flagged inconsistencies.</li>
                <li>Risk surfaces: timestamp formats · currency precision · optional vs required fields.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><ShieldCheck size={14} /> QA Process</div>
              <ul>
                <li>REST contract tests across all 20–30 exchanges in parallel.</li>
                <li>Schema validators check structure + data types — not just presence.</li>
                <li>Drift detector compares to last known-good baseline.</li>
                <li>Real production environment exercised on every push.</li>
              </ul>
            </div>
            <div className="pcol">
              <div className="pcol-lbl"><Cpu size={14} /> AI Stack</div>
              <div className="ai-list">
                <AiEntry img="/codex.svg" name="Codex" forText="REST client scaffolding · schema gen" />
                <AiEntry img="https://svgl.app/library/perplexity.svg" name="Perplexity" forText="API docs · undocumented quirks" />
                <AiEntry img="https://svgl.app/library/claude-ai-icon.svg" name="Claude" forText="test design · drift detector" />
                <AiEntry icon={<Plug size={14} />} name="MCP" forText="CI access · reporting" />
              </div>
            </div>
          </div>
          <div className="pcard-foot">
            <div className="pcard-note">Production system · 20–30 backends validated on every push</div>
          </div>
        </article></FadeUp>

      </div>
    </section>
  )
}
