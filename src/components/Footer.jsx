import { navLinks, profile } from '../data/content'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-4 w-4',
  'aria-hidden': true,
}

const socials = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Resume',
    href: profile.resume,
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
    ),
  },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* gradient hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container-x pt-14">
        {/* top row: identity, quick links, socials */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 font-mono text-sm font-medium text-accent">
                SP
              </span>
              <div>
                <p className="font-semibold text-text">{profile.name}</p>
                <p className="text-sm text-dim">{profile.role}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dim">
              {profile.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-dim transition-colors hover:text-lime"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Connect
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  {...(s.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line/10 text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block text-sm text-dim transition-colors hover:text-text"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* oversized outlined wordmark: SVG so the outline can use the
            same purple-to-lime gradient as the hero name, with no fill */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 112"
          className="pointer-events-none mx-auto mt-14 block w-full max-w-[1000px] select-none"
        >
          <defs>
            <linearGradient id="footer-wordmark-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" style={{ stopColor: 'rgb(var(--accent))' }} />
              <stop offset="100%" style={{ stopColor: 'rgb(var(--lime))' }} />
            </linearGradient>
          </defs>
          <text
            x="500"
            y="103"
            textAnchor="middle"
            fill="none"
            stroke="url(#footer-wordmark-stroke)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="font-sans font-bold"
            style={{ fontSize: 132, letterSpacing: '0.02em' }}
          >
            SOURABH PATIL
          </text>
        </svg>

        {/* bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/10 py-6 text-xs text-faint sm:flex-row">
          <p className="font-mono">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <button
            onClick={() => scrollTo('home')}
            className="group inline-flex items-center gap-2 font-mono transition-colors hover:text-lime"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-line/10 transition-transform group-hover:-translate-y-0.5 group-hover:border-lime">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
