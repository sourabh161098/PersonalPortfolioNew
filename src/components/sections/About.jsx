import Reveal from '../Reveal'
import { profile, education } from '../../data/content'

const values = [
  {
    k: 'Clean code',
    v: 'Readable, reusable architecture and best practices aligned with large-scale systems.',
  },
  {
    k: 'Reusable UI',
    v: 'Configurable, brand-adoptable widgets that scale across many storefronts.',
  },
  {
    k: 'Performance',
    v: 'Optimizations that have driven measurable gains — up to 70% in past work.',
  },
  {
    k: 'Collaboration',
    v: 'Close work with PMs, designers, and stakeholders to ship the right thing.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">// about</p>
          <h2 className="section-title max-w-3xl">
            A frontend engineer who cares about{' '}
            <span className="gradient-text">the details</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.1} className="min-w-0">
            <p className="text-lg leading-relaxed text-dim">
              {profile.summary}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-dim">
              I'm enthusiastic about leveraging technology to create intuitive
              user experiences, and committed to continuous learning. Whether
              it's a swipe-to-shop widget or a performance dashboard, I like
              building interfaces that feel effortless.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((item, i) => (
                <Reveal key={item.k} delay={0.15 + i * 0.08}>
                  <div className="group h-full rounded-xl border border-line/10 bg-surface/50 p-5 transition-colors hover:border-accent/50">
                    <h3 className="font-mono text-sm text-lime">{item.k}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-dim">
                      {item.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* side card: education + quick facts */}
          <Reveal delay={0.2}>
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-line/10 bg-surface/60 p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
                  Education
                </h3>
                <p className="mt-3 font-medium text-text">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-dim">{education.school}</p>
                <p className="mt-1 font-mono text-xs text-lime">
                  {education.year}
                </p>
              </div>

              <div className="rounded-2xl border border-line/10 bg-surface/60 p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
                  Currently
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">
                  Building storefront widgets & performance tooling at{' '}
                  <span className="text-text">Amazon Ads</span>, Bangalore.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1 font-mono text-xs text-lime">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
                  open to collaborate
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
