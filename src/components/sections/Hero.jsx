import { motion } from 'framer-motion'
import { profile, stats } from '../../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 md:pt-24"
    >
      <div className="container-x grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* left: intro */}
        <div className="min-w-0">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="section-tag !text-lime"
          >
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="gradient-text">Sourabh</span>.
            <br />
            <span className="text-dim">I build for</span> the web.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
          >
            {profile.role} with {profile.years} years crafting robust, responsive
            interfaces with React &amp; Redux — currently shaping storefront
            experiences at <span className="text-text">Amazon Ads</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group relative overflow-hidden rounded-xl bg-accent px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">View my work</span>
              <span className="absolute inset-0 -translate-x-full bg-lime transition-transform duration-300 group-hover:translate-x-0" />
              <span className="absolute inset-0 z-10 flex translate-x-full items-center justify-center font-medium text-bg transition-transform duration-300 group-hover:translate-x-0">
                View my work
              </span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-line/20 px-6 py-3 font-medium text-text transition-colors hover:border-lime hover:text-lime"
            >
              Get in touch
            </a>
          </motion.div>

          {/* stats strip */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-line/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-lime">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-faint">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* right: terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-lime/20 opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-line/10 bg-surface/80 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line/10 bg-line/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-faint">
                developer.js
              </span>
            </div>
            <pre className="max-w-full overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:p-5 sm:text-[13px]">
              <code>
                <span className="text-faint">const</span>{' '}
                <span className="text-lime">engineer</span>{' '}
                <span className="text-faint">=</span> {'{'}
                {'\n'}
                {'  '}name<span className="text-faint">:</span>{' '}
                <span className="text-accent">'Sourabh Patil'</span>,{'\n'}
                {'  '}focus<span className="text-faint">:</span>{' '}
                <span className="text-accent">'Frontend Engineering'</span>,{'\n'}
                {'  '}stack<span className="text-faint">:</span> [
                <span className="text-accent">'React'</span>,{' '}
                <span className="text-accent">'TypeScript'</span>,{' '}
                <span className="text-accent">'Redux'</span>],{'\n'}
                {'  '}team<span className="text-faint">:</span>{' '}
                <span className="text-accent">'Amazon Ads'</span>,{'\n'}
                {'  '}shipping<span className="text-faint">:</span>{' '}
                <span className="text-lime">true</span>
                <span className="animate-blink">_</span>
                {'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
          scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-lime to-transparent" />
      </div>
    </section>
  )
}
