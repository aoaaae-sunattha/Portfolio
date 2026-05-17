import { Mail, FileText } from 'lucide-react'
import { FadeUp } from './Animate'

export default function Contact() {
  return (
    <section className="wrap tight" id="contact">
      <FadeUp>
        <div className="contact-card">
          <h3>Tell me about a problem your team would rather not have.</h3>
          <p>If your team ships AI-assisted code and worries about quality — that&apos;s the conversation I want to have.</p>
          <div className="contact-links">
            <a className="chip" href="mailto:sunattha@example.com"><Mail size={14} /> Email</a>
            <a className="chip" href="https://github.com/aoaaae-sunattha" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="GitHub" className="icon-mono" style={{ width: 14, height: 14 }} /> GitHub</a>
            <a className="chip" href="#"><img src="https://svgl.app/library/linkedin.svg" alt="LinkedIn" style={{ width: 14, height: 14 }} /> LinkedIn</a>
            <a className="chip" href="#"><FileText size={14} /> CV (PDF)</a>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
