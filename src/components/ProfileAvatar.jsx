import { profile } from '../data/content'

/**
 * Circular profile photo with a slowly rotating gradient ring and a soft glow.
 * The crop is anchored toward the top so the face stays centered in the circle.
 */
export default function ProfileAvatar({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* soft glow behind the photo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-lime/30 blur-2xl" />

      {/* rotating gradient ring */}
      <div className="relative h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgb(var(--accent)),rgb(var(--lime)),rgb(var(--accent)))] motion-reduce:animate-none" />

        {/* gap between ring and photo, then the photo itself */}
        <div className="absolute inset-[3px] rounded-full bg-bg p-1">
          <div className="h-full w-full overflow-hidden rounded-full">
            <img
              src="/profile.jpg"
              alt={`${profile.name}, ${profile.role}`}
              width="400"
              height="400"
              className="h-full w-full origin-top scale-[1.45] object-cover"
            />
          </div>
        </div>

        {/* status badge */}
        <span className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line/10 bg-surface px-3 py-1 font-mono text-[10px] text-lime shadow-lg">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          open to collaborate
        </span>
      </div>
    </div>
  )
}
