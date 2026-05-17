import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QAForge from '@/components/QAForge'
import Projects from '@/components/Projects'
import Lab from '@/components/Lab'
import Skills from '@/components/Skills'
import Workflow from '@/components/Workflow'
import QAForAI from '@/components/QAForAI'
import Contact from '@/components/Contact'
import { fetchSvgs } from '@/lib/svgl'

export default async function Home() {
  const svgs = await fetchSvgs()

  return (
    <main>
      <Nav />
      <Hero />
      <QAForge />
      <Projects />
      <Lab />
      <Skills svgs={svgs} />
      <Workflow />
      <QAForAI svgs={svgs} />
      <Contact />
    </main>
  )
}
