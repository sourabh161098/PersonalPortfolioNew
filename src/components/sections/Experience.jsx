import Reveal from '../Reveal'
import { experience } from '../../data/content'

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 md:py-20">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">// experience</p>
          <h2 className="section-title max-w-3xl">
            Where I've <span className="gradient-text">shipped</span>.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <article className="relative grid gap-6 rounded-2xl border border-line/10 bg-surface/40 p-6 transition-colors hover:border-accent/40 md:grid-cols-[220px_1fr] md:p-8">
                {/* left rail */}
                <div className="md:border-r md:border-line/10 md:pr-6">
                  <span className="font-mono text-xs text-lime">
                    {job.period}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-text">
                    {job.role}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-dim">
                    {job.company}
                    {job.current && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-2 py-0.5 font-mono text-[10px] text-lime">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                        now
                      </span>
                    )}
                  </p>
                  <p className="mt-1 font-mono text-xs text-faint">
                    {job.location}
                  </p>
                </div>

                {/* right content */}
                <div>
                  <p className="text-dim">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-dim">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
