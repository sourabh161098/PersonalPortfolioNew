import Reveal from '../Reveal'
import { profile } from '../../data/content'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'Sourabh Patil', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line/10 bg-surface/40 px-6 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]" />

          <Reveal>
            <p className="section-tag justify-center">// contact</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl">
              Let's build something{' '}
              <span className="gradient-text">great</span> together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-dim">
              I'm always open to interesting frontend problems, collaborations,
              or just a good conversation about the web.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime px-7 py-4 font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Say hello
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'LinkedIn' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="rounded-xl border border-line/10 bg-line/[0.02] p-4 text-left transition-colors hover:border-lime/50"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-faint">
                    {c.label}
                  </p>
                  <p className="mt-1 truncate text-sm text-text">{c.value}</p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
