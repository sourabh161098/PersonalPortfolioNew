import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/10 bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2 font-mono text-sm font-medium"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            SP
          </span>
          <span className="hidden text-dim transition-colors group-hover:text-text sm:inline">
            {profile.name.toLowerCase().replace(' ', '_')}
          </span>
        </button>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === link.id
                    ? 'text-text'
                    : 'text-dim hover:text-text'
                }`}
              >
                <span className="mr-1 font-mono text-xs text-accent">
                  0{i + 1}.
                </span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* right cluster: theme toggle + CTA (desktop) / hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-lg border border-accent/50 px-4 py-2 text-sm text-text transition-colors hover:bg-accent hover:text-white md:inline-block"
          >
            Let's talk
          </a>

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-text transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-line/10 bg-bg/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-transparent'
        }`}
      >
        <ul className="container-x flex flex-col py-4">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`flex w-full items-center gap-2 py-3 text-left text-lg ${
                  active === link.id ? 'text-text' : 'text-dim'
                }`}
              >
                <span className="font-mono text-xs text-accent">0{i + 1}.</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
