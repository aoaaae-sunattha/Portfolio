import { Mail, FileText } from 'lucide-react'
import { FadeUp } from './Animate'

export default function Contact() {
  return (
    <section className="wrap tight" id="contact">
      <FadeUp>
        <div className="contact-card">
          <h3>Get in touch or take a look around.</h3>
          <p>Open to QA and testing roles on teams building with AI. Email is the best way to reach me.</p>
          <div className="contact-links">
            <a className="chip" href="mailto:sunattha.saeh@gmail.com"><Mail size={14} /> Email</a>
            <a className="chip" href="https://github.com/aoaaae-sunattha" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="GitHub" className="icon-mono" style={{ width: 14, height: 14 }} /> GitHub</a>
            <a className="chip" href="https://www.linkedin.com/in/sunattha-s-08a85615b/" target="_blank" rel="noopener noreferrer"><img src="https://svgl.app/library/linkedin.svg" alt="LinkedIn" style={{ width: 14, height: 14 }} /> LinkedIn</a>
            <a className="chip" href="/QA Eng. - Sunattha's CV.pdf" target="_blank" rel="noopener noreferrer"><FileText size={14} /> CV (PDF)</a>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
