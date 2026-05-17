import { Signpost, ShieldCheck, RefreshCcw, BarChart3, SearchX, GitPullRequest } from 'lucide-react'
import { FadeUp } from './Animate'

const cards = [
  {
    icon: <Signpost size={18} />,
    title: 'Confidence Boundary Testing',
    desc: 'Verify the agent knows when to not answer — and routes to a fallback or human instead of guessing.',
    from: 'Clotilde · agent routing',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Policy Enforcement Testing',
    desc: 'Business rules must hold under adversarial inputs — paraphrasing, negation, role escalation attempts.',
    from: 'Clotilde · Policy.js',
  },
  {
    icon: <RefreshCcw size={18} />,
    title: 'Fallback & Escalation Testing',
    desc: (<>When the agent fails, does it escalate cleanly? <code style={{ fontFamily: 'var(--font-mono)', fontSize: '.85em' }}>escalate_to_human</code> exercised every release.</>),
    from: 'Clotilde · approval.js',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'QA Audit Loops',
    desc: 'An evaluator agent compares forecast outputs to real market outcomes. The system grades itself, in production.',
    from: 'AEON · self-evaluator',
  },
  {
    icon: <SearchX size={18} />,
    title: 'Negation & Anaphora Tests',
    desc: (<>&ldquo;I do <em>not</em> want business class.&rdquo; Pronoun resolution across multi-turn. 15 golden cases keep these honest.</>),
    from: 'Clotilde · golden dataset',
  },
  {
    icon: <GitPullRequest size={18} />,
    title: 'AI-Diff Regression',
    desc: "When AI writes code, regressions hide in the margins. The test healer's Type-D path catches what humans miss.",
    from: 'QA Forge · test healer',
  },
]

export default function QAForAI() {
  return (
    <section className="wrap" id="qa-for-ai">
      <FadeUp>
        <div className="eyebrow">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Specialisation
        </div>
        <h2 className="sec-h">QA thinking applied to AI</h2>
        <p className="sec-sub">Testing AI systems is different from testing regular software. Here&apos;s how I approach it.</p>
      </FadeUp>

      <div className="qa-grid">
        {cards.map((card, i) => (
          <FadeUp key={i} delay={Math.min(i * 0.07, 0.28)}>
            <div className="qa-card" style={{ height: '100%' }}>
              <div className="qa-icon">{card.icon}</div>
              <h5>{card.title}</h5>
              <p>{card.desc}</p>
              <div className="qa-from"><b>From:</b> {card.from}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
