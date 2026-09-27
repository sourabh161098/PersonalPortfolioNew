import Reveal from '../Reveal'
import { skillGroups } from '../../data/content'

const marquee = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Angular',
  'SCSS',
  'Styled-Components',
  'Node.js',
  'Express',
  'D3.js',
  'Jest',
  'Webpack',
  'Figma',
  'AWS',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 md:py-20">
      {/* marquee band */}
      <div className="mb-14 flex select-none overflow-hidden border-y border-line/10 py-4 md:mb-20 md:py-5">
        <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6 md:gap-8 md:pr-8">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-6 font-mono text-base font-medium text-faint md:gap-8 md:text-xl"
            >
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x">
        <Reveal>
          <p className="section-tag">// skills</p>
          <h2 className="section-title max-w-3xl">
            My <span className="gradient-text">toolbox</span>.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-dim">
            The languages, frameworks, and tools I reach for to build fast,
            accessible, and maintainable interfaces.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line/10 bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-text">{group.title}</h3>
                  <span className="font-mono text-xs text-faint">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line/10 bg-line/[0.03] px-3 py-1.5 text-sm text-dim transition-colors group-hover:border-line/20 hover:!border-lime hover:!text-lime"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
