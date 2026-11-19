import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillGroups } from '../data/content'
import { skillIcons } from '../data/skillIcons'

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const tile = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

/**
 * Category tabs on top, a grid of logo tiles below. Each tile glows in its
 * brand color on hover; the grid re-animates when the tab changes.
 */
export default function SkillExplorer() {
  const [active, setActive] = useState(0)
  const group = skillGroups[active]

  return (
    <div>
      {/* tabs */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {skillGroups.map((g, i) => {
          const selected = i === active
          return (
            <button
              key={g.title}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selected ? 'text-white' : 'text-dim hover:text-text'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="skill-tab-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {!selected && (
                <span className="absolute inset-0 rounded-full border border-line/10" />
              )}
              <span className="relative flex items-center gap-2">
                {g.title}
                <span
                  className={`font-mono text-[11px] ${
                    selected ? 'text-white/70' : 'text-faint'
                  }`}
                >
                  {g.items.length}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* tiles */}
      <div className="-mx-5 mt-6 overflow-x-auto px-5 pb-3 pt-2 sm:mx-0 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.ul
            key={group.title}
            role="tabpanel"
            variants={grid}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            className="grid w-max grid-flow-col grid-rows-2 auto-cols-[132px] gap-3 md:auto-cols-[148px] md:gap-4"
          >
            {group.items.map((name) => {
              const { Icon, color } = skillIcons[name] ?? {}
              return (
                <motion.li
                  key={name}
                  variants={tile}
                  style={{ '--c': color ?? 'rgb(var(--accent))' }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-line/10 bg-surface/50 px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--c)] hover:shadow-[0_12px_32px_-12px_var(--c)]"
                >
                  <span
                    className="grid h-14 w-14 place-items-center rounded-xl bg-line/[0.04] transition-transform duration-300 group-hover:scale-110"
                    style={{ color: color ?? 'rgb(var(--accent))' }}
                  >
                    {Icon && <Icon className="h-8 w-8" aria-hidden="true" />}
                  </span>
                  <span className="text-sm font-medium text-text">{name}</span>
                </motion.li>
              )
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  )
}
