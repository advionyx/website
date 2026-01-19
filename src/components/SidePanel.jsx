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

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#advisor', label: 'Advisors' },
  // { href: '#what-you-get', label: 'What you get' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function SidePanel({ open, onClose, email }) {
  const titleId = useId()

  useEscapeKey(onClose, open)

  // Scroll lock
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
        className={`absolute inset-0 h-full w-full bg-neutral-900/30 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`absolute right-0 top-0 h-full w-[92vw] max-w-sm border-l border-primary-200 bg-white/90 shadow-glow backdrop-blur-xl transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-primary-200 px-6 py-5 pt-[calc(env(safe-area-inset-top)+1.25rem)]">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Navigation</p>
              <h2 id={titleId} className="mt-1 font-display text-lg font-black tracking-tight text-neutral-900">
                Menu
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
            >
              Close
            </button>
          </div>

          {/* Content */}
          <div
            className="flex-1 overflow-auto px-6 py-6 pb-[calc(env(safe-area-inset-bottom)+1.25rem)]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <nav className="space-y-3">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl border border-primary-200 bg-white px-4 py-4 text-base font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-400 group-hover:text-neutral-700 transition">→</span>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-8 rounded-2xl border border-primary-200 bg-white p-5">
              <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Contact</p>

              <a
                href={`mailto:${email}`}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition"
              >
                Talk to us
              </a>

              <a
                href={`mailto:${email}`}
                className="mt-3 block text-sm font-semibold text-primary-700 hover:underline"
              >
                {email}
              </a>

              <p className="mt-2 text-sm text-neutral-700">
                Tell us what you’re building. We’ll reply with a simple plan.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-primary-200 px-6 py-4 text-xs text-neutral-600">
            © {new Date().getFullYear()} Advionyx
          </div>
        </div>
      </aside>
    </div>
  )
}
