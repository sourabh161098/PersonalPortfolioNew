import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">
          Built with <span className="text-accent">React</span> +{' '}
          <span className="text-accent">Vite</span> +{' '}
          <span className="text-lime">Tailwind</span>
        </p>
        <div className="flex gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-text"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
