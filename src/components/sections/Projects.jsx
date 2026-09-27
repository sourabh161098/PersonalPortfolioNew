import { useState } from 'react'
import Reveal from '../Reveal'
import { projects } from '../../data/content'

function ProjectCard({ project, index }) {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }

  return (
    <article
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
      style={{
        backgroundImage: `radial-gradient(340px circle at ${pos.x}% ${pos.y}%, rgba(124,92,255,0.12), transparent 70%)`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-line/10 bg-line/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-lime">
          {project.tag}
        </span>
        <span className="font-mono text-xs text-faint">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-text transition-colors group-hover:text-lime">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-line/10 pt-4">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-faint">
            #{t.toLowerCase().replace(/[^a-z0-9]/g, '')}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">// projects</p>
          <h2 className="section-title max-w-3xl">
            Things I've <span className="gradient-text">built</span>.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-dim">
            A selection of widgets, dashboards, and platforms — mostly from my
            work on Amazon Stores and generative-AI tooling.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
