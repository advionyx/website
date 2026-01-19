import Container from './Container'
import logoDark from '/logo-dark.svg'

export default function TopBar({ isPanelOpen, onTogglePanel, email }) {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-200/70 bg-white/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left: logo */}
          <a href="#home" className="inline-flex items-center gap-3">
            <img src={logoDark} alt="Advionyx" className="h-9 w-9 rounded-xl" />
            <span className="hidden font-display text-sm font-black tracking-[0.18em] text-neutral-900 sm:inline">
              ADVIONYX
            </span>
          </a>

          {/* Desktop nav (centered) */}
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 lg:flex">
            <a className="hover:text-neutral-900 transition" href="#home">Home</a>
            <a className="hover:text-neutral-900 transition" href="#services">Services</a>
            <a className="hover:text-neutral-900 transition" href="#advisor">Advisors</a>
            {/* <a className="hover:text-neutral-900 transition" href="#what-you-get">What you get</a> */}
            <a className="hover:text-neutral-900 transition" href="#about">About</a>
            <a className="hover:text-neutral-900 transition" href="#contact">Contact</a>
          </nav>

          {/* Right: CTA (desktop) + Menu (mobile) */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="hidden items-center justify-center rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-600 transition lg:inline-flex"
            >
              Talk to us
            </a>

            <button
              type="button"
              onClick={onTogglePanel}
              aria-haspopup="dialog"
              aria-expanded={isPanelOpen}
              className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition lg:hidden"
            >
              <span>{isPanelOpen ? 'Close' : 'Menu'}</span>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-600">☰</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
