import { useEffect, useId } from 'react'

function useEscapeKey(onEscape, enabled) {
  useEffect(() => {
    if (!enabled) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onEscape()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onEscape, enabled])
}

export default function SidePanel({ open, onClose, email }) {
  const titleId = useId()

  useEscapeKey(onClose, open)

  // Simple scroll lock for a clean feel.
  useEffect(() => {
    if (!open) {
      document.body.classList.remove('lock-scroll')
      return
    }
    document.body.classList.add('lock-scroll')
    return () => document.body.classList.remove('lock-scroll')
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className={`absolute inset-0 h-full w-full bg-black/55 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`absolute right-0 top-0 h-full w-[92vw] max-w-md border-l border-white/15 bg-black/55 shadow-glow backdrop-blur-xl transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Navigation</p>
              <h2 id={titleId} className="mt-1 text-lg font-semibold tracking-wide">
                Menu
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Close
            </button>
          </div>

          <div className="flex-1 overflow-auto px-6 py-6">
            <nav className="space-y-3">
              {[
                { href: '#about', label: 'About' },
                { href: '#what-you-get', label: 'What you get' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl border border-white/15 bg-black/25 px-4 py-4 text-base font-semibold text-white hover:bg-black/30 transition"
                >
                  <span className="tracking-wide">{link.label}</span>
                  <span className="text-white/40 group-hover:text-white/70 transition">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/25 p-4">
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Get in touch</p>
              <a
                href={`mailto:${email}`}
                className="mt-2 block text-sm font-medium text-teal-300 hover:text-teal-200 transition"
              >
                {email}
              </a>
              <p className="mt-2 text-sm text-white/70">
                Tell us what you’re building. We’ll reply with a simple plan.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-5 text-xs text-white/50">
            © {new Date().getFullYear()} Advionyx
          </div>
        </div>
      </aside>
    </div>
  )
}
