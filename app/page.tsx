import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Pipeline from '@/components/Pipeline'
import Toolbox from '@/components/Toolbox'
import Projects from '@/components/Projects'
import Lab from '@/components/Lab'
import Skills from '@/components/Skills'
import Workflow from '@/components/Workflow'
import QAForAI from '@/components/QAForAI'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="divider" />
      <Pipeline />
      <div className="divider" />
      <Toolbox />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Lab />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Workflow />
      <div className="divider" />
      <QAForAI />
      <div className="divider" />
      <Contact />
      <footer className="site-footer">
        Sunattha Saeheng · QA × AI Builder · Bangkok · UTC+7 · <span className="accent">built with the pipeline above</span>
      </footer>
    </main>
  )
}
