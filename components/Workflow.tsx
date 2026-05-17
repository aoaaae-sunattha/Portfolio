const steps = [
  { num: '01', title: 'Define & Plan', desc: 'Map user stories, identify intents, draft the test plan before any code. Quality starts at requirements.' },
  { num: '02', title: 'Golden Dataset First', desc: 'Write expected inputs/outputs as a dataset. This becomes the contract the system must satisfy.' },
  { num: '03', title: 'Build with Claude', desc: 'Claude as co-pilot for architecture, code generation, prompt design, and agent role definition.' },
  { num: '04', title: 'Test Everything', desc: 'Manual cases → automate P1 flows → CI gates. For AI systems: regression on golden dataset, edge case validation.' },
  { num: '05', title: 'Self-Audit Loop', desc: "Evaluate outputs, run Root Cause Analysis on failures, feed lessons back. Inspired by AEON's built-in QA Auditor agent." },
]

export default function Workflow() {
  return (
    <section id="workflow" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Process</div>
      <h2 className="section-h">How I Build with AI</h2>
      <p className="section-sub">Not a vibe-coder. AI is in every step — including the testing.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '1rem' }}>
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="glass hover-lift" style={{ padding: '1.4rem' }}>
            <div className="flow-num">{num}</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.3rem', color: '#fff' }}>{title}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
