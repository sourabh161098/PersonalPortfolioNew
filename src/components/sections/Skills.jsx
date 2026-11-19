import Reveal from '../Reveal'
import SkillExplorer from '../SkillExplorer'

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 md:py-20">
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

        <Reveal delay={0.1} className="mt-10">
          <SkillExplorer />
        </Reveal>
      </div>
    </section>
  )
}
