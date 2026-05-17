import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export default function TpLibReadme() {
  const filePath = path.join(process.cwd(), 'public', 'tp-lib', 'README.md')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const html = marked(raw) as string

  return (
    <div className="readme-page">
      <header className="readme-header">
        <a href="/" className="readme-back">← portfolio</a>
        <div className="readme-title-block">
          <span className="readme-label">docs</span>
          <h1 className="readme-project">tp-exchanges</h1>
          <p className="readme-desc">Exchange gateway library — public &amp; private API reference</p>
        </div>
      </header>

      <main className="readme-main">
        <article
          className="md-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <footer className="readme-footer">
        <a href="/" className="readme-back">← back to portfolio</a>
      </footer>
    </div>
  )
}
