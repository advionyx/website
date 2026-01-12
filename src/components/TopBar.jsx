import Container from './Container'

export default function TopBar({ isPanelOpen, onTogglePanel }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black/20 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#about" className="group inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-[0.22em] uppercase">
              ADVIONYX
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_32px_rgba(45,212,191,0.65)]" />
            <span className="sr-only">Go to about section</span>
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a className="hover:text-white transition" href="#about">
                About
              </a>
              <a className="hover:text-white transition" href="#what-you-get">
                What you get
              </a>
              <a className="hover:text-white transition" href="#services">
                Services
              </a>
              <a className="hover:text-white transition" href="#contact">
                Contact
              </a>
            </nav>

            <button
              type="button"
              onClick={onTogglePanel}
              aria-haspopup="dialog"
              aria-expanded={isPanelOpen}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-white hover:bg-white/10 transition"
            >
              <span>{isPanelOpen ? 'Close' : 'Menu'}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/70">☰</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
