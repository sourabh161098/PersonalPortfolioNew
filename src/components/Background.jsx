import { useEffect, useRef } from 'react'

/**
 * Animated background: soft drifting gradient blobs + a subtle dot grid,
 * plus a spotlight that follows the pointer. Purely decorative.
 */
export default function Background() {
  const spotRef = useRef(null)

  useEffect(() => {
    const spot = spotRef.current
    if (!spot) return
    const onMove = (e) => {
      spot.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(124,92,255,0.08), transparent 60%)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* drifting blobs */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] animate-float" />
      <div
        className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-lime/10 blur-[120px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[120px] animate-float"
        style={{ animationDelay: '4s' }}
      />
      {/* pointer spotlight */}
      <div ref={spotRef} className="absolute inset-0" />
    </div>
  )
}
